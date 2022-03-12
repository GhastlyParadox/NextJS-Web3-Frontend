import {
    Link,
    Flex, 
    VStack,
    HStack,
    Stat,
    StatNumber,
    IconButton,
    Image,
    Center
   } from '@chakra-ui/react'
import { Balance } from './Balance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';


export function Footer() {

    return (
        <><Flex width="100%" justifyContent="space-between">
            <HStack ml="2">
                <Link href="https://soundcloud.com/sightsofsounds" isExternal>
                    <IconButton 
                        variant="ghost" 
                        aria-label='Music' 
                        size='lg' 
                        icon={<FontAwesomeIcon icon={faMusic}/>}></IconButton>
                </Link>
            </HStack>
            <Center marginLeft="5">
                <Link href="https://metamask.io/" isExternal>
                    <IconButton 
                            size='md' 
                            aria-label='MetaMask' 
                            variant="ghost"
                            icon={<Image maxWidth="20px" 
                            src="/images/logo-metamask.png" alt="MetaMask" />}></IconButton>
                </Link>
            </Center>
            <VStack>
                <Stat>
                    <StatNumber mr="1"> <Balance /> </StatNumber>     
                </Stat>
            </VStack> 
        </Flex>
    </>
    );
} 
