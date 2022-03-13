import { ReactNode } from 'react';
// import { useRouter } from 'next/router';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

import { Flex, 
  Box,
 } from '@chakra-ui/react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  
  // const router = useRouter();

  return (
  <Box w="100%" height="100vh">
    {props.meta}
    <Header />
    <Flex align="center" justify="center" mt="18vh">

        {props.children}
  
    </Flex>
    <Box bottom="0" position="absolute" width="100%">
      <Footer />
    </Box>
  </Box>
)};

export { Main };
