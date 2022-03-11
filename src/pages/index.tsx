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
    </Main>
  );
};

export default Index;