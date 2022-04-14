import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { formatEther } from '@ethersproject/units';


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
      
    <><footer className='p-2.5 w-screen fixed bottom-0'>
       
          <div className='flex flex-1 flex-wrap'>
            <div className="items-start grow">
                <FontAwesomeIcon icon={faMusic}/>
                <a className="link" href="https://soundcloud.com/sightsofsounds" target="_blank">
                    <p className='text-md'>My other muse.</p>
                </a>   
            </div>
            <div className="items-end text-2xl font-medium">
            {active && account ?
                
                    <div> {balance === null ? 'Error' : balance ? `Ξ${formatEther(balance).substring(0, 7)}` : ''}</div>     
              
                :null}
            </div> 
          </div>
      </footer>
    </>
    );
} 
