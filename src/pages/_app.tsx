import { AppProps } from 'next/app';
// import { useRouter } from 'next/router';
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from '@ethersproject/providers';
import type {
  ExternalProvider,
  JsonRpcFetchFunc,
} from "@ethersproject/providers";
import Web3ReactManager from '../lib/components/Web3ReactManager';

import '@/styles/global.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

/*
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
*/

function getLibrary(provider: ExternalProvider | JsonRpcFetchFunc): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

const App = ({ Component, pageProps }: AppProps) => (
   <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ReactManager>
        <Component {...pageProps} /> 
      </Web3ReactManager>
    </Web3ReactProvider>
);

export default App;
