import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faNavicon } from '@fortawesome/free-solid-svg-icons';
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
      
    <><footer>
          <div className='flex justify-between'>
          
            <div className="self-end text-center p-1">
              <form action="https://soundcloud.com/sightsofsounds" target="_blank">
                <button className='btn md:btn-lg btn-circle btn-ghost transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100'><FontAwesomeIcon icon={faMusic}/></button>
              </form>
            </div>
            <div className="drawer-content p-1">
              <div className='drawer place-content-end'>
                <input id="footer-drawer" type="checkbox" className="drawer-toggle" />
                <label htmlFor="footer-drawer" className="drawer-button btn btn-sm"><FontAwesomeIcon icon={faNavicon}/></label>
                <div className="drawer-side">
                  <label htmlFor="footer-drawer" className="drawer-overlay rounded-lg"></label>
                  <ul className="menu p-4 overflow-y-auto w-80">
                    <li className="list-item">
                      <a href="/">
                        <button className="link" aria-label='Home'>
                            Home         
                        </button>
                      </a>
                    </li>
                    <li className="list-item">
                        <a href="https://github.com/GhastlyParadox" target="_blank">
                            <button aria-label='Github' className="link"> 
                                Github
                            </button>
                        </a>   
                    </li>
                    <li className="list-item">
                        <a href="/portal/">
                        <button aria-label='Message' className="link">
                            Messenger
                        </button> 
                        </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> 

            <div className="self-end text-xl md:text-2xl font-medium p-1">
              { active && account ? <div> {balance === null ? 'Error' : balance ? `Ξ${formatEther(balance).substring(0, 7)}` : ''}</div>     
              : null }
            </div>
          </div>
        
      </footer>
    </>
    );
} 
