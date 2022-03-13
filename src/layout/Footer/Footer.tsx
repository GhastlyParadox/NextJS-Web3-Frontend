import {
    Link,
    Flex, 
    VStack,
    Stat,
    StatNumber,
    Text,
   } from '@chakra-ui/react'
import { Balance } from './Balance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';


export function Footer() {

    return (
        <><Flex width="100%" justifyContent="space-between">
            <VStack ml="2" mb="2">
                <FontAwesomeIcon icon={faMusic}/>
                <Link href="https://soundcloud.com/sightsofsounds" isExternal>
                    <Text fontSize="small">My other muse.</Text>
                </Link>   
            </VStack>
            <VStack mr="2">
                <Stat>
                    <StatNumber> <Balance /> </StatNumber>     
                </Stat>
            </VStack> 
        </Flex>
    </>
    );
} 
