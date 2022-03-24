import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import React, { useEffect, useState } from 'react';
import { useEagerConnect, useInactiveListener } from '../../hooks/web3hooks';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector';
import { injected } from '../../connectors/connectors';


enum ConnectorNames {
  Injected = 'Metamask',
  // WalletConnect = 'WalletConnect',
  // WalletLink = 'WalletLink',
  // Fortmatic = 'Fortmatic',
};

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  // [ConnectorNames.WalletConnect]: walletconnect,
  // [ConnectorNames.WalletLink]: walletlink,
  // [ConnectorNames.Fortmatic]: fortmatic,
};

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
};

export function WalletConnect() {
  const context = useWeb3React<Web3Provider>()
  const { connector, activate, deactivate, active, error } = context;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState<any>()
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector)
  
  return ( 
  <> 
    <div>
        {Object.keys(connectorsByName).map(name => {
        const currentConnector = connectorsByName[name]
        const activating = currentConnector === activatingConnector
        const connected = currentConnector === connector
        const disabled = !triedEager || !!activatingConnector || connected || !!error

        return (

            <div>
                <button 
                    aria-label='Connect Wallet'
                    border-color={ activating ? 'orange' : connected ? 'green' : 'unset' }
                    disabled={disabled}
                    key={name}
                    onClick={() => {
                        setActivatingConnector(currentConnector)
                        activate(connectorsByName[name])
                    }}> 
                    {activating}  
            
                </button>
                
                {connected && (
                  console.log("connected")
                )}
                
                {!!error && (<p>{getErrorMessage(error)}</p>)}
                
                {(active || error) && (
                    <button className='disconnectButton' onClick={() => {deactivate()}}> Disconnect </button>
                )}
            </div>

        )})}           
    </div>
    </>
  )
}