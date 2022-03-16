// import { useRouter } from 'next/router';
import React from "react";
import { Meta } from '@/layout/Meta';
import { Main } from '@/layout/Main';
import { Text, Center, Flex, Heading, Image, VStack, Divider } from '@chakra-ui/react'


const Index = () => {

  return (
    <Main
      meta={
        <Meta
          title="A web3 playground"
          description="holla!"
        />
      }>
      <Flex direction="column" mt="8" maxWidth="50vw">
        <Center>
          <VStack>
            <Heading m="1">
              Welcome!
            </Heading>
            <Text m="1">I'm Adam, and this is my lil web3 playground.</Text>
            <Divider width="89%" shadow="dark-lg" orientation='horizontal' />
            <Divider width="55%" orientation='horizontal' />
            <Divider width="34%" orientation='horizontal' />
            <Text fontSize="x-small" m="1">Under construction 🙂</Text>
          </VStack>
        </Center>
      </Flex>
    </Main>
  );
};

export default Index;