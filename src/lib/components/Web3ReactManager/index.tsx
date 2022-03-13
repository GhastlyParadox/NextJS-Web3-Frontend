
import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

import { useEagerConnect, useInactiveListener } from '@/lib/hooks/web3hooks';

export default function Web3ReactManager({ children }: { children: JSX.Element }) {
    const context = useWeb3React<Web3Provider>()
    const { connector } = context
  
    // try to eagerly connect to an injected provider, if it exists and has granted access already
    const triedEager = useEagerConnect()
    
    const [activatingConnector, setActivatingConnector] = React.useState<any>()
    // after eagerly trying injected, if the network connect ever isn't active or in an error state, activate it
    useEffect(() => {
      if (activatingConnector && activatingConnector === connector) {
        setActivatingConnector(undefined)
      }
    }, [activatingConnector, connector])
  
    // when there's no account connected, react to logins (broadly speaking) on the injected provider, if it exists
    useInactiveListener(!triedEager || !!activatingConnector)
  
    // handle delayed loader state
    const [showLoader, setShowLoader] = useState(false)
    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowLoader(true)
      }, 600)
  
      return () => {
        clearTimeout(timeout)
        showLoader ? setShowLoader(false) : null;
      }
    }, [])
  
    // on page load, do nothing until we've tried to connect to the injected connector
    if (!triedEager) {
      return null
    }
  
    return children
  }