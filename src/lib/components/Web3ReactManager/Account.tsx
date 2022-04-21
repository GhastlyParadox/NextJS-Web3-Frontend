import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { WalletConnect } from '@/lib/components/Web3ReactManager/WalletConnect';

export function Account() {
  const { account } = useWeb3React()
  const { active } = useWeb3React()

  return (
    <>
    
    <label htmlFor="wallet-modal" className='btn btn-xs sm:btn-sm bg-slate-500 modal-button'>
      {active && account ? 
          <>{account.substring(0, 6)}...{account.substring(account.length - 4)}</>
      : 'Connect Wallet' }
    </label>
  
    <input type="checkbox" id="wallet-modal" className="modal-toggle" />
    <div className='modal modal-bottom sm:modal-middle cursor-pointer'>
      <div className='modal-box'>
      <label htmlFor="wallet-modal" className="absolute right-2 top-2">✕</label>
        <label className='modal-action' htmlFor="wallet-modal">
          <WalletConnect />
        </label>
      </div>
    </div>
    </>
  );
} 