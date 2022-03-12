// import { useRouter } from 'next/router';
import React from "react";
import { Meta } from '@/layout/Meta';
import { Main } from '@/layout/Main';
import { Text, Center, Flex, Heading, Link } from '@chakra-ui/react'


const Index = () => {

  return (
    <Main
      meta={
        <Meta
          title="A web3 playground"
          description="holla!"
        />
      }>
      <Flex direction="column" mt="8">
        <Center m="3">
          <Heading>
            Welcome!
          </Heading>
        </Center>
        <Center m="3">
          <Text>This is a web3 playground, inspired by <Link fontWeight="semibold" fontFamily="sans-serif" href="https://buildspace.so/">Buildspace</Link>.</Text>
        </Center>       
      </Flex>
    </Main>
  );
};

export default Index;