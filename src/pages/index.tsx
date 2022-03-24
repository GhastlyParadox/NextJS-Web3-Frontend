// import { useRouter } from 'next/router';
import React from "react";
import { Meta } from '@/layout/Meta';
import { Main } from '@/layout/Main';


const Index = () => {

  return (
    <Main
      meta={
        <Meta
          title="A web3 playground"
          description="holla!"
        />
      }>
      <div>
        <h2>
          Welcome!
        </h2>
      
        <p>I'm Adam, and this is my lil web3 playground.</p>
        <p>Under construction 🙂</p>
      </div>
    </Main>
  );
};

export default Index;