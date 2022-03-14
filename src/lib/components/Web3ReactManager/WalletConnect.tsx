import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import React, { useEffect, useState } from 'react';
import { useEagerConnect, useInactiveListener } from '../../hooks/web3hooks';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector';
import { injected } from '../../connectors/connectors';
import {
  Center,
  SimpleGrid,
  VStack,
  Image,
  IconButton,
  Button,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';


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
  
  return ( // Grid for adding wallets later
  <> 
    <SimpleGrid columns={1} spacingX='10rem' spacingY='10rem' gridGap="1rem" margin="auto">
        {Object.keys(connectorsByName).map(name => {
        const currentConnector = connectorsByName[name]
        const activating = currentConnector === activatingConnector
        const connected = currentConnector === connector
        const disabled = !triedEager || !!activatingConnector || connected || !!error

        return (
        <Center height="10vh">
            <VStack>
                <IconButton 
                    aria-label='Connect Wallet'
                    _hover={{ bg: 'orange' }}
                    _focus={{
                        boxShadow:
                        '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                    }}
                    borderColor={ activating ? 'orange' : connected ? 'green' : 'unset' }
                    cursor={disabled ? 'unset' : 'pointer'}
                    disabled={disabled}
                    key={name}
                    icon={<Image maxWidth="3em" src="/images/logo-metamask.png" alt="MetaMask" />}
                    onClick={() => {
                        setActivatingConnector(currentConnector)
                        activate(connectorsByName[name])
                    }}> 
                    {activating && <Spinner color={'black'} height="25%" />}
            
                </IconButton>
                
                {connected && (
                    <CheckCircleIcon color="green.200" />
                )}
                
                {!!error && (<Text mt="1" bottom="0">{getErrorMessage(error)}</Text>)}
                
                {(active || error) && (
                    <Button className='disconnectButton' cursor="pointer" onClick={() => {deactivate()}}> Disconnect </Button>
                )}
            </VStack>
        </Center>
        )})}           
    </SimpleGrid>
    </>
  )
}