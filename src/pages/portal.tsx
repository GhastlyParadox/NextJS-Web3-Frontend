import { Meta } from '@/layout/Meta';
import { Main } from '@/layout/Main';
import WaveMessenger from  '@/lib/components/WaveMessenger';
import { Text, Center, Flex, Heading, Link, IconButton, Image } from '@chakra-ui/react';

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
        <WaveMessenger /> 
      </Center>
    </Flex>
  </Main>
);

export default Portal;
