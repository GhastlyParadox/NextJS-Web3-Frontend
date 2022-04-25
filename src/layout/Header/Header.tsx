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
            <nav className="navbar-end text-sm md:text-lg md:breadcrumbs">  
                <ul className='text-center'>
                    <li className="list-item">
                        <a href="/">
                            <button className="link" aria-label='Home'>
                                Home         
                            </button>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="https://github.com/GhastlyParadox" target="_blank">
                            <button aria-label='Github' className="link"> 
                                Github
                            </button>
                        </a>   
                    </li>
                    <li className="list-item">
                        <a href="/portal/">
                        <button aria-label='Message' className="link">
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