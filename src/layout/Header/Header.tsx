import { AppConfig } from '@/lib/utils/AppConfig';
import { Account } from '../../lib/components/Web3ReactManager/Account';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 export function Header() {
 
    return (
      <>
    <header>
        <div className='navbar'>
            <div className='navbar-start'>
                <h2 className="text-xl md:text-3xl">
                    {AppConfig.description}
                </h2>
            </div>
            <nav className="navbar-end text-center p-1 text-sm md:text-lg md:breadcrumbs">  
                <ul>
                    <li className="list-item">
                        <a className='hidden' href="/">
                            <button className="link hover:font-semibold md:display" aria-label='Home'>
                                Home         
                            </button>
                        </a>
                    </li>
                    <li className="list-item">
                        <a className='hidden' href="https://github.com/GhastlyParadox" target="_blank">
                            <button className="link hover:font-semibold md:display" aria-label='Github'> 
                                Github
                            </button>
                        </a>   
                    </li>
                    <li className="list-item">
                        <a className='hidden' href="/portal/">
                            <button className="link hover:font-semibold md:display" aria-label='Message'>
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