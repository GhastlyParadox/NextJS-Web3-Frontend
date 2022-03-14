import React, { useState, useRef, useEffect } from 'react';
import { Web3Provider } from '@ethersproject/providers';
import { BigNumber } from 'ethers';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector';
import { waveContractAddress } from "@/lib/utils/constants";
import { WavePortalAbi__factory } from '@/lib/types';
import { debounce } from "lodash";
import {
  Input,
  Text,
  Link,
  Flex,
  FormControl,
  FormLabel,
  VStack,
  Alert,
  AlertIcon,
  Center,
} from '@chakra-ui/react';

function getErrorMessage(error: Error) {
  if (error instanceof NoEthereumProviderError) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network."
  } else if (
    error instanceof UserRejectedRequestErrorInjected // ||
    // error instanceof UserRejectedRequestErrorWalletConnect
  ) {
    return 'Please authorize this website to access your Ethereum account.'
  } else {
    console.error(error)
    return 'An unknown error occurred. Check the console for more details.'
  }
}

const Messenger = () => {

  const { account, library } = useWeb3React<Web3Provider>();
  const { active, error } = useWeb3React();

  const [ allWaves, setAllWaves] = useState([{}]);

  const [ message, setMessage ] = useState<string>("");
  const [ txnAttempt, setTxnAttempt ] = useState(false);

  const [ success, setSuccess ] = useState(false);
  const [ err, setErr ] = useState(false);
  
  // const form = useRef(null);


  const Wave = async () => {
    
    const wavePortalContract = WavePortalAbi__factory.connect(waveContractAddress, library!.getSigner()); 
  
    try {
      const waveTxn = await wavePortalContract.wave(message, { gasLimit: 300000 });
      console.log("Mining...", waveTxn.hash);
      setTxnAttempt(true);
      
      await waveTxn.wait();
      console.log("Mined -- ", waveTxn.hash);
      // form.current.reset();
      getallWaves();
      setTxnAttempt(false);
      handleAlert(true);


      } catch (Error) {
        console.log(getErrorMessage(error!));
        // form.current.reset();
        handleAlert(false); 
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

    } catch(Error) {
      console.log(getErrorMessage(error!));

    }
  }

  const handleInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await debouncedInput(e.target.value);
  }

  const debouncedInput = useRef(
    debounce(async (input) => {
      setMessage(await input);
    }, 300)
  ).current;


  const handleAlert = async (bool: Boolean) => {
    bool ? setSuccess(true) : setErr(true);
    await debouncedAlert();
  }

  const debouncedAlert = useRef(
    debounce(async() => {
      setSuccess(false);
      setErr(false);
    }, 3000)
  ).current;
  
  useEffect(() => {

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
    if (account) {
      try {
        const wavePortalContract = WavePortalAbi__factory.connect(waveContractAddress, library!.getSigner()); 
        if (wavePortalContract) {
          wavePortalContract.on("NewWave", onNewWave);
        }
      
        return () => {
          if (wavePortalContract) {
            wavePortalContract.off("NewWave", onNewWave);
          }
        };
        
      } catch (Error) {
        console.log(getErrorMessage(error!));
      }
    }
    return;
  }, []);
  return (
    <><Flex className="waveportal">
        <VStack> { account && active ? ( 
          <FormControl className="messenger">
            <FormLabel htmlFor='message'></FormLabel>
            <Input bg="gray.100" defaultValue={message} size="lg" variant="outline" className="rounded" type="text" placeholder="holla here!" onBlur={(e => handleInput(e))}/>
            {!txnAttempt ? ( <button className="waveButton" onClick={() => Wave()}>👋</button> ) : (<div className="mining"></div>) }
          </FormControl> ) 
          : ( <Text fontSize="md" mt="3">Connect via <Link fontWeight="black" href="https://metamask.io/">MetaMask</Link> (rinkeby) and holla!</Text>) }
          {success ? (<Center><Alert status="success"> <AlertIcon /> Message sent! 👍 </Alert></Center> ) : (null)}
          {err ? (<Center><Alert status="error"> ☹️ An error occured ☹️ </Alert></Center>) : (null)}   
        </VStack>
        <Center><Text fontSize="smaller">testing...</Text></Center>
      </Flex>
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