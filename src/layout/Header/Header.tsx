import { AppConfig } from '@/lib/utils/AppConfig';
import { Account } from '../../lib/components/Web3ReactManager/Account';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 export function Header() {
 
    return (
      <>
      <header className="p-2.5 w-screen">
        <div className='flex flex-1 flex-wrap'>
            <div className='items-start grow'>
                <h2 className="text-3xl m-2">
                    {AppConfig.description}
                </h2>
            </div>
            <nav className="text-lg breadcrumbs items-end">  
                <ul>
                    <li className="list-item">
                        <a href="/">
                            <button aria-label='Home'>
                                Home         
                            </button>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="https://github.com/GhastlyParadox">
                            <button aria-label='Github' > Github</button>
                        </a>   
                    </li>
                    <li className="list-item">
                        <a href="/portal/">
                        <button aria-label='Message'>
                            Messenger
                        </button> 
                        </a>
                    </li>
                    <li className="list-item">
                        <Account />      
                    </li>
                </ul>
                
                </nav>
           
            </div>
        </header>
    </>
    );
  }