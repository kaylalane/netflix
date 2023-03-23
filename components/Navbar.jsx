
import Link from 'next/link';
import { useState, useEffect, useRef} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faBell } from '@fortawesome/free-solid-svg-icons'
import { BsFillCaretDownFill } from "react-icons/bs";
import { Turret_Road } from 'next/font/google';


export default function Navbar() {
  const [visiblity, setVisibility] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef();
  const ham = useRef();

  function handleClick() {
    setHamburger(!hamburger);
  }
  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (visiblity && ref.current && !ref.current.contains(e.target)) {
        setVisibility(false);
      }
     
    }
 
    const handlePageShow = () => {
      setHamburgerVisibility(true);
      setMenuVisibility(false);
      console.log("page change");
    }
    window.addEventListener('unload', handlePageShow);
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);

    }
    
  }, [visiblity])
  
  return (
    <nav>
      <Link href="/" aria-label='Netflix' className='logo'>
        Netflix 
      </Link>
      <div className="primary-navigation">
         <ul >
            <li><Link href='/' className='active'>Home</Link></li>
            <li><Link href='/tv-shows'>TV Shows</Link></li>
            <li><Link href='/'>Movies</Link> </li>
            <li><Link href='/'>Recently Added</Link> </li>
            <li><Link href='/'>My List</Link> </li>
    
          </ul>
      </div>
          <ul className='secondary-navigation'>
            <li>
              {visiblity ? (
                  <input
                    ref={ref}
                    id="search"
                    type="search"
                    placeholder="Search"
                    autoComplete='off'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
              ):(
                  <button onClick={() => (
                    setVisibility(!visiblity)
                    )}>

                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
            )}
                
            </li>
           
            <li>
              <button>
                <FontAwesomeIcon icon={faBell} />
              </button>
            </li>
          </ul>
        
        </nav>
  )
}