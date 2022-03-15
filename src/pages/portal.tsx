import { Meta } from '@/layout/Meta';
import { Main } from '@/layout/Main';
import WaveMessenger from  '@/lib/components/WaveMessenger';
import { Center, Flex, Heading, Text, Link } from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChain } from '@fortawesome/free-solid-svg-icons';


const Portal = () =>  (
  <Main meta={<Meta title="Web3 Wave Portal" description="title" />}>
    <Flex direction="column">
      <Center m="2">
        <Heading>
          A lil web3 portal <FontAwesomeIcon size="sm" icon={faChain}></FontAwesomeIcon>
        </Heading>
      </Center>
      <Center>
        <Text fontSize="smaller">Inspired by <Link fontWeight="semibold" fontFamily="sans-serif" href="https://buildspace.so/">Buildspace</Link></Text>
      </Center>
      <Center>
        <WaveMessenger /> 
      </Center>
    </Flex>
  </Main>
);

export default Portal;
