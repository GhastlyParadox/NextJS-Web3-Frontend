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
      <div className='flex flex-col'>
        <div className="p-1 self-center">
          <h2>
            Welcome!
          </h2>
        </div>
        <div className="p-1 self-center">
          <p>I'm Adam, and this is my lil web3 playground.</p>
        </div>
        <div className="p-1 self-center">
          <p>Under construction 🙂</p>
        </div>
      </div>
    </Main>
  );
};

export default Index;