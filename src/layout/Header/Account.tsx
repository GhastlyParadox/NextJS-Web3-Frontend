import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { WalletConnect } from '@/lib/components/Web3ReactManager/WalletConnect';

export function Account() {
  const { account } = useWeb3React()
  const { active } = useWeb3React()

  return (
    <>
    <div>
      <button>
        {active && account ? 
            <>{account.substring(0, 6)}...{account.substring(account.length - 4)}</>
        : 'Connect Wallet' }
      </button>
    </div>
    <div>
      <WalletConnect />
    </div>
    </>
  );
} 