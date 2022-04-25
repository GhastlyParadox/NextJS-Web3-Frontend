import { Meta } from '@/Meta';
import { Main } from '@/Main';
import WaveMessenger from  '@/lib/components/WaveMessenger/WaveMessenger';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChain } from '@fortawesome/free-solid-svg-icons';


const Portal = () =>  (
  <Main meta={<Meta title="Web3 Wave Portal" description="title" />}>
    <div className='flex flex-col items-center'>
      <div>
        <h2>
          Web3 message portal <FontAwesomeIcon size="sm" icon={faChain}></FontAwesomeIcon>
        </h2>
      </div>
      <div>
        <p>Inspired by <a className="link" href="https://buildspace.so/" target="_blank">Buildspace</a></p>
      </div>
      <div>
        <WaveMessenger /> 
      </div>
    </div>
  </Main>
);

export default Portal;
