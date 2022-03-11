import { Flex, 
    VStack,
    Stat,
    StatLabel,
    StatNumber,
   } from '@chakra-ui/react'
import { Balance } from './Balance';


export function Footer() {

    return (
        <>
        <Flex justifyContent="end" width="100%">
        <VStack>
        <Stat>
            <StatLabel>Balance</StatLabel>
            <StatNumber> <Balance /> </StatNumber>     
        </Stat>
        </VStack>
    </Flex>
    </>
    );
} 
