import { Meta } from '@/layout/Meta';
import { Main } from '@/layout/Main';
import WaveMessenger from  '@/lib/components/WaveMessenger'
import { Text, Box, Center, Flex
 } from '@chakra-ui/react'

const About = () =>  (
  <Main meta={<Meta title="About me" description="bio" />}>
    <Flex direction="column">
      <Center>
        <Text>
          Greetings!
        </Text>
      </Center> 
      <Center>
        <WaveMessenger /> 
      </Center>
    </Flex>
  </Main>
);

export default About;
