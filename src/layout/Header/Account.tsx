import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { ConnectionList } from '../../lib/components/ConnectionList'

import {
    Box,
    Button,
    Image,
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
  const { active, error } = useWeb3React()
  // const [isShown, setIsShown] = useState(false)
  const { onOpen, isOpen, onClose } = useDisclosure()

  return (
    <>
    <Box
      mt="4"
      mr="1"
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
        <ModalHeader>Connect a wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ConnectionList />
        </ModalBody>
      </ModalContent>
    </Modal>
    </>
  );
} 