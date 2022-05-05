import { Meta } from '@/Meta';
import { Main } from '@/Main';
import WaveMessenger from  '@/lib/components/WaveMessenger/WaveMessenger';

const Portal = () =>  (
  <Main meta={<Meta title="Web3 Wave Portal" description="title" />}>
    <div className='flex flex-col items-center'>
        <WaveMessenger /> 
    </div>
  </Main>
);

export default Portal;
