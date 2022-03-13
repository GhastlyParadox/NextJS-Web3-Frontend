import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { WalletConnect } from '@/lib/components/Web3ReactManager/WalletConnect';

import {
    Box,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
  } from '@chakra-ui/react'

export function Account() {
  const { account } = useWeb3React()
  const { active } = useWeb3React()
  const { onOpen, isOpen, onClose } = useDisclosure()

  return (
    <>
    <Box
      mt="4"
      mr="2"
      ml=""
      order={[-1, null, null, 2]}
      textAlign={['left', null, null, 'right']}
    >
      <Button colorScheme="gray" variant="outline" onClick={onOpen}>
        {active && account ? 
            <>{account.substring(0, 6)}...{account.substring(account.length - 4)}</>
        : 'Connect Wallet' }
      </Button>
    </Box>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent title="Connect Wallet"> 
        <ModalHeader>MetaMask</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <WalletConnect />
        </ModalBody>
      </ModalContent>
    </Modal>
    </>
  );
} 