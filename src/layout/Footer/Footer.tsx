import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { formatEther } from '@ethersproject/units';
import {
    Link,
    Flex, 
    VStack,
    Stat,
    StatNumber,
    Text,
   } from '@chakra-ui/react';


export function Footer() {
    const { account, library, chainId } = useWeb3React();
    const { active } = useWeb3React();
    const [balance, setBalance] = useState<string | null>(null);

    useEffect((): any => {
        if (!!account && !!library) {
          let stale = false
    
          library
            .getBalance(account)
            .then((balance: any) => {
              if (!stale) {
                setBalance(balance)
              }
            })
            .catch(() => {
              if (!stale) {
                setBalance(null)
              }
            })
    
          return () => {
            stale = true
            setBalance(null)
          }
        }
      }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

    return (
    <>  <Flex width="100%" justifyContent="space-between">
            <VStack ml="2" mb="2">
                <FontAwesomeIcon icon={faMusic}/>
                <Link href="https://soundcloud.com/sightsofsounds" isExternal>
                    <Text fontSize="small">My other muse.</Text>
                </Link>   
            </VStack>
            <VStack mr="2">
            {active && account ?
                <Stat>
                    <StatNumber> {balance === null ? 'Error' : balance ? `Ξ${formatEther(balance).substring(0, 7)}` : ''}</StatNumber>     
                </Stat>
                :null}
            </VStack> 
        </Flex>
    </>
    );
} 
