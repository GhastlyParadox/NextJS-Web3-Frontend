// import { useRouter } from 'next/router';
import React from "react";
import { Meta } from '@/Meta';
import { Main } from '@/Main';


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
                <p className="py-3">I'm Adam, and this is my lil web3 playground.</p>
                <p className="py-1 text-xs">Under construction 🙂</p>
          
          </div>

  
    </Main>
  );
};

export default Index;