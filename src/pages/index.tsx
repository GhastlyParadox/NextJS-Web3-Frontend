// import { useRouter } from 'next/router';
import React from "react";
import { Meta } from '@/layout/Meta';
import { Main } from '@/layout/Main';
import { Text, Heading, VStack, Divider } from '@chakra-ui/react'


const Index = () => {

  return (
    <Main
      meta={
        <Meta
          title="A web3 playground"
          description="holla!"
        />
      }>
      <VStack>
        <Heading>
          Welcome!
        </Heading>
        <Divider width="89%" shadow="dark-lg" orientation='horizontal' />
        <Text>I'm Adam, and this is my lil web3 playground.</Text>
        <Divider width="55%" orientation='horizontal' />
        <Text fontSize="x-small">Under construction 🙂</Text>
      </VStack>
    </Main>
  );
};

export default Index;