import { ReactNode } from 'react';
// import { useRouter } from 'next/router';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

import { Flex, 
  Box,
  Center,
 } from '@chakra-ui/react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  
  // const router = useRouter();

  return (
  <Box w="full" height="100vh">
    {props.meta}
    <Header />
    <Center>
      <Flex mt="18vh">

          {props.children}
    
      </Flex>
    </Center>
    <Flex bottom="0" position="absolute" width="full">
      <Footer />
    </Flex>
  </Box>
)};

export { Main };
