import { ReactNode } from 'react';
// import { useRouter } from 'next/router';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  
  // const router = useRouter();

  return (
  <div className='main-container'>
    {props.meta}
    <Header />
    <div className='main-content'>
    

          { props.children }
    
   
    </div>
    <div>
      <Footer />
    </div>
  </div>
)};

export { Main };
