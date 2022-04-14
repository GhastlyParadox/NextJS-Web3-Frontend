import React, { useState, useRef, useEffect } from 'react';
import { Web3Provider } from '@ethersproject/providers';
import { BigNumber } from 'ethers';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';
import { serializeError } from 'eth-rpc-errors';
import { waveContractAddress } from "@/lib/utils/constants";
import { WavePortalAbi__factory } from '@/lib/types';
import { debounce } from "lodash";


const initialState = {
  message: "",
  txnAttempt: false,
  successState: null,
  errState: null,
  errMsg: "",
  inputKey: 0
}


const Messenger = () => {

  const { account, library } = useWeb3React<Web3Provider>();
  const { active, error } = useWeb3React();

  const [ allWaves, setAllWaves] = useState([{}]);

  const [ message, setMessage ] = useState<string>(initialState.message);
  const [ txnAttempt, setTxnAttempt ] = useState<boolean>(initialState.txnAttempt);
  const [ timer, setTimer ] = useState<number | null>(null);

  const [ successState, setSuccessState ] = useState<null | true>(initialState.successState);
  const [ errState, setErrState ] = useState<null | true>(initialState.errState);
  const [ errMsg, setErrMsg ] = useState<string>(initialState.errMsg);
  const [ inputKey, setKey ] = useState(initialState.inputKey);


  function getErrorMessage(error: Error) {
  
    if (error instanceof NoEthereumProviderError) {
      setErrMsg("No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.");
      console.error(errMsg);
      return errMsg;

    } else if (error instanceof UnsupportedChainIdError) {

      setErrMsg("You're connected to an unsupported network.");
      console.error(errMsg);
      return errMsg;

    } else if ( error instanceof UserRejectedRequestErrorInjected ) {

      setErrMsg("Please authorize this website to access your Ethereum account.")
      console.error(errMsg);
      return errMsg;

    } else {
      setErrMsg(serializeError(error).message);
      console.error(serializeError(error));
      return errMsg;
    }
    
  }
  
  const Wave = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setTxnAttempt(true);

    const wavePortalContract = WavePortalAbi__factory.connect(waveContractAddress, library!.getSigner()); 
  
    try {
      const waveTxn = await wavePortalContract.wave(message, { gasLimit: 300000 });
      console.log("Mining...", waveTxn.hash);
      
      await waveTxn.wait();
      console.log("Mined -- ", waveTxn.hash);
      setKey(inputKey + 1);
      getallWaves();
      setTxnAttempt(false);
      handleAlert(true);
      Timer();

      } catch (Error) {
        console.log(getErrorMessage(error!));
        getErrorMessage(error!)
        setKey(inputKey + 1);
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
      getErrorMessage(error!);
      console.log(getErrorMessage(error!));

    }
  }
  

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await debouncedInput(e.target.value);
  }
  const debouncedInput = useRef(
    debounce(async (input) => {
      !txnAttempt ? setMessage(await input) : setMessage("");
    }, 300)
  ).current;

  const handleAlert = async (bool: Boolean) => {
    bool ? setSuccessState(true) : setErrState(true);
    await debouncedAlert();
  }
  const debouncedAlert = useRef(
    debounce(async() => {
      setSuccessState(null);
      setErrState(null);
    }, 5000)
  ).current;


  // Cooldown Timer
  const Timer = () => { 

    let interval = 300000;
    reset();

    function reset() {
        localStorage.endTime = + new Date + interval;
    }
    setInterval(function() {
        var remaining = localStorage.endTime - +new Date;
  
        if ( remaining >= 0 ) {
            setTimer(Math.floor( remaining / 1000 ));
        } else
        {
          setTimer(0);
        }
    }, 100);
  }

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
        getErrorMessage(error!);
        console.log(getErrorMessage(error!));
      }
    }
    return;
  }, []);
  return (
    <><div>
        <div> { account && active ? ( 
          <form className="form-control"  onSubmit={Wave}>
              <input className='input input-sm mt-2' key={inputKey} disabled={txnAttempt} type="text" placeholder="holla here!" onBlur={(e => handleInputChange(e))} />
              {!txnAttempt ? ( <button className="btn btn-sm mt-2" disabled={!!timer} type="submit">👋</button> ) 
                : (<div className="mining" />) }
          </form>) :( <p>Connect via <a className='link' href="https://metamask.io/" target="_blank">MetaMask</a> (rinkeby) and holla!</p>) }
          {successState ? (<div>Message sent! 👍</div> ) : (null)}
          {errState ? (<div>☹️ {errMsg} Check the console for details.</div>) : (null)}   
        </div>
        <div>{timer! ? `Cooldown: ${timer!/60|0}:${timer!%60}` : ""}</div>
      </div>
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