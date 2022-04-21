import { AppConfig } from '@/lib/utils/AppConfig';
import { Account } from '../../lib/components/Web3ReactManager/Account';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 export function Header() {
 
    return (
      <>
      <header className="w-screen p-2.5">
        <div className='flex flex-1 flex-wrap'>
            <div className='items-start grow'>
                <h2 className="text-3xl">
                    {AppConfig.description}
                </h2>
            </div>
            <nav className="items-end text-lg breadcrumbs p-2.5">  
                <ul className='flex flex-wrap-reverse'>
                    <li className="list-item">
                        <a href="/">
                            <button aria-label='Home'>
                                Home         
                            </button>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="https://github.com/GhastlyParadox" target="_blank">
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