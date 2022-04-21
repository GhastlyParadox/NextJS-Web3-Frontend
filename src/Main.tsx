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
  <div className='flex flex-wrap bg-hero-main bg-cover min-h-screen subpixel-antialiased'>
    {props.meta}
    <Header />
    <div className='flex flex-1 items-start justify-center'>
        { props.children } 
    </div>
    <Footer />
  </div>
)};

export { Main };
