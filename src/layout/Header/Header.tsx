import { AppConfig } from '@/lib/utils/AppConfig';
import { Account } from './Account';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


 export function Header() {
 
    return (
      <>
      <div>
        <div>
            <h2>
                {AppConfig.description}
            </h2>
        </div>
        <nav className="text-sm breadcrumbs">  
            <ul>
                <li>
                    <a href="/">
                        <button aria-label='Home'>
                            Home         
                        </button>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/GhastlyParadox">
                        <button aria-label='Github' > Github</button>
                    </a>   
                </li>
                <li>
                    <a href="/portal/">
                    <button aria-label='Message'>
                        Messenger
                    </button> 
                    </a>
                </li>
                <li>
                    <Account />      
                </li>
            </ul>
        
        </nav>
    </div>
    </>
    );
  }