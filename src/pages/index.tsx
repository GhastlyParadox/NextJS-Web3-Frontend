// import { useRouter } from 'next/router';
import React from "react";
<<<<<<< HEAD
import { Meta } from '@/layout/Meta';
import { Main } from '@/layout/Main';
import { Text, Heading, VStack, Divider } from '@chakra-ui/react'
=======
import { Meta } from '@/Meta';
import { Main } from '@/Main';
>>>>>>> tailwind


const Index = () => {

  return (
    <Main
      meta={
        <Meta
          title="A web3 playground"
          description="holla!"
        />
      }>

          <div className="hero-content flex-col">
          
                <h1 className="text-3xl"> Welcome! </h1>
                <p className="py-3">I'm Adam, and this is my lil web(3) playground.</p>
                <p className="py-1 text-xs">Under construction 🙂</p>
          
          </div>

  
    </Main>
  );
};

export default Index;