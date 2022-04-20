import { ReactNode } from 'react';
// import { useRouter } from 'next/router';
import { Header } from './layout/Header/Header';
import { Footer } from './layout/Footer/Footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  
  // const router = useRouter();

  return (
  <div className='min-h-screen'>
    {props.meta}
    <Header />
    <div className='hero min-h-screen'>

        { props.children }
 
    </div>
    <Footer />
  </div>
)};

export { Main };
