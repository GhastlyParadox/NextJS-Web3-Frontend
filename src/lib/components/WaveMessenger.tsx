import React, { useState, useRef } from 'react';
import { useWeb3React, Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
// import { ethers } from 'ethers';
// import { waveContractAddress } from "@/lib/utils/constants";
// import { WavePortalAbi__factory } from '@/lib/types';
// import useSWR from 'swr';


import { Spinner } from '@/lib/components/Spinner'
import { debounce } from "lodash";

import {
  Input,
  Text,
  Flex,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'


const Messenger = () => {

  const { account, library } = useWeb3React<Web3Provider>();
  const { active, error } = useWeb3React();


  // const provider = ethers.getDefaultProvider('rinkeby')
  // const defaultSigner = ethers.Wallet.createRandom().connect(provider)
  // const wavePortalContract = WavePortalAbi__factory.connect(waveContractAddress, library.getSigner<ethers.providers.JsonRpcSigner>());   // TypeError: Cannot read properties of undefined (reading 'getSigner')
  // const [allWaves, setAllWaves] = useState([]);

  const [ message, setMessage ] = useState<string>("");
  const [ currentTxn, setCurrentTxn ] = useState(false);
  
  const debouncedInput = useRef(
    debounce(async (input) => {
      setMessage(await input);
    }, 300)
  ).current;

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await debouncedInput(e.target.value);
  }

  const wave = async () => {

    
    try {

      console.log("Work in progess");
    
      // let count = await wavePortalContract.getTotalWaves();
  
      // console.log("Retrieved total wave count...", count.toNumber());

      /*
      * Execute the actual wave from your smart contract
      */
      
      /*
      *
      const waveTxn = await wavePortalContract.wave(message);
      console.log("Mining...", waveTxn.hash);
      setCurrentTxn(true);
      

      await waveTxn.wait();
      console.log("Mined -- ", waveTxn.hash);
      setCurrentTxn(false);
      

      count = await wavePortalContract.getTotalWaves();
      console.log("Retrieved total wave count...", count.toNumber());
      */
      
      }
      catch (error) {
        console.log(error);
      } 
  }
  return (
    <>{ account && active ?
      <Flex className="waveportal">
        {!currentTxn ? (
        <FormControl className="messenger">
          <FormLabel htmlFor='message'></FormLabel>
          <Input bg="gray.100" defaultValue={message} size="lg" variant="outline" className="rounded" type="text" placeholder="holla here!" onBlur={(e => handleChange(e))}/>
          <button className="waveButton" onClick={() => wave()}>👋</button>
        </FormControl>) : (<Spinner />) }
      </Flex>
      : <Text>Connect and holla!</Text>}
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