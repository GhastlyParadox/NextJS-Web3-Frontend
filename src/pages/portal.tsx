import { Meta } from '@/layout/Meta';
import { Main } from '@/layout/Main';
import WaveMessenger from  '@/lib/components/WaveMessenger/WaveMessenger';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChain } from '@fortawesome/free-solid-svg-icons';


const Portal = () =>  (
  <Main meta={<Meta title="Web3 Wave Portal" description="title" />}>
    <div>
      <div>
        <h2>
          A lil web3 portal <FontAwesomeIcon size="sm" icon={faChain}></FontAwesomeIcon>
        </h2>
      </div>
      <div>
        <p>Inspired by <a href="https://buildspace.so/">Buildspace</a></p>
      </div>
      <div>
        <WaveMessenger /> 
      </div>
    </div>
  </Main>
);

export default Portal;
