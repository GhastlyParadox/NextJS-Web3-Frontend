import React, { useState, useRef, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { BigNumber } from 'ethers';
import { waveContractAddress } from "@/lib/utils/constants";
import { WavePortalAbi__factory } from '@/lib/types';
import { debounce } from "lodash";

import {
  Input,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Center,
  Link,
  IconButton,
  Image,
} from '@chakra-ui/react'


const Messenger = () => {

  const { account, library } = useWeb3React<Web3Provider>();
  const { active, error } = useWeb3React();

  const [ allWaves, setAllWaves] = useState([{}]);
  const [ message, setMessage ] = useState<string>("");
  const [ txnAttempt, setTxnAttempt ] = useState(false);
  
  const debouncedInput = useRef(
    debounce(async (input) => {
      setMessage(await input);
    }, 300)
  ).current;

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await debouncedInput(e.target.value);
  }

  const wave = async () => {
    
    const wavePortalContract = WavePortalAbi__factory.connect(waveContractAddress, library!.getSigner()); 
  
    try {
      const waveTxn = await wavePortalContract.wave(message, { gasLimit: 300000 });
      console.log("Mining...", waveTxn.hash);
      setTxnAttempt(true);
      
      await waveTxn.wait();
      console.log("Mined -- ", waveTxn.hash);
      setTxnAttempt(false);
      getallWaves();

      }
      catch (error) {
        console.log("Provider missing!", error);
        setTxnAttempt(false);
      } 
  }

  const getallWaves = async () => {

    const wavePortalContract = WavePortalAbi__factory.connect(waveContractAddress, library!.getSigner()); 

    try {

      const waves = await wavePortalContract.getAllWaves();
      const wavesCleaned = waves.map(wave => {
        return {
          address: wave.waver,
          timestamp: new Date(Number(wave.timestamp) * 1000),
          message: wave.message,
        };
      });

      setAllWaves(wavesCleaned);
      console.log("All waves: ", allWaves);

    } catch(error) {

    }
  }
  useEffect(() => {
    
    const wavePortalContract = WavePortalAbi__factory.connect(waveContractAddress, library!.getSigner()); 

    const onNewWave = (from: string, timestamp: BigNumber, message: string) => {
      console.log("NewWave", from, timestamp, message);
      setAllWaves(prevState => [
        ...prevState,
        {
          address: from,
          timestamp: new Date(Number(timestamp) * 1000),
          message: message,
        },
      ]);
    };
  
    if (wavePortalContract) {
      wavePortalContract.on("NewWave", onNewWave);
    }
  
    return () => {
      if (wavePortalContract) {
        wavePortalContract.off("NewWave", onNewWave);
      }
    };
  }, []);
  return (
    <>{ account && active ?
        <Flex className="waveportal">
          {!txnAttempt ? (
            <FormControl className="messenger">
              <FormLabel htmlFor='message'></FormLabel>
              <Input bg="gray.100" defaultValue={message} size="lg" variant="outline" className="rounded" type="text" placeholder="holla here!" onBlur={(e => handleChange(e))}/>
              <button className="waveButton" onClick={() => wave()}>👋</button>
            </FormControl>) 
          : ( <div className="mining"></div>) }
        </Flex>
      : <Text fontSize="md">Connect via MetaMask (rinkeby) and holla!</Text>}
    </>
  );
};

export default Messenger;


/**
 * Prop Types
 */
/*
 type StateType = {
  greeting: string
  inputValue: string
  isLoading: boolean
}
type ActionType =
  | {
      type: 'SET_GREETING'
      greeting: StateType['greeting']
    }
  | {
      type: 'SET_INPUT_VALUE'
      inputValue: StateType['inputValue']
    }
  | {
      type: 'SET_LOADING'
      isLoading: StateType['isLoading']
    }


const initialState: StateType = {
  greeting: '',
  inputValue: '',
  isLoading: false,
}

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    // Track the greeting from the blockchain
    case 'SET_GREETING':
      return {
        ...state,
        greeting: action.greeting,
      }
    case 'SET_INPUT_VALUE':
      return {
        ...state,
        inputValue: action.inputValue,
      }
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.isLoading,
      }
    default:
      throw new Error()
  }
}
*/