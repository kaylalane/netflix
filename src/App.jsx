import logo from './media/netflix-logo.png';
import logoSm from './media/netflix-logo-sm.png';
import feature from './media/disenchantment.jpeg';
import './App.scss';
import { useState} from 'react';

const pic = [
  {
    title: "The Glory",
    src: "./media/the-glory.jpeg"
  }
]
function App() {
  const [visiblity, setVisibility] = useState(false);
  const [search, setSearch] = useState('');
  return (
    <div className="App">
    
      
        <div className='featured-media'>
        <nav>
          <ul>
            <li>
              <img src={logo}
                className="logo"
                alt="logo"
              /> 
            </li>
            <li><a href='#' className='active'>Home</a></li>
            <li><a href=''>TV Shows</a> </li>
            <li><a href=''>Movies</a> </li>
            <li><a href=''>Recently Added</a> </li>
            <li><a href=''>My List</a> </li>
            <li>
              {visiblity && (
                <input
                  id="search"
                  type="search"
                  placeholder='Search'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              )}
            </li>

            <li>
              <button onClick={() => setVisibility(!visiblity)}>
                <span className="fa-solid fa-magnifying-glass"></span>
              </button>
            </li>
          </ul>
        
        </nav>

          <div className='featured-info'>

            <div className='netflix-tag'>

              <img 
                src={logoSm}
                alt="logo"
                id="logo-sm"
              />
              <p>Series</p>

            </div>

            <h2 className='title'>Disenchantment</h2>

            <p className='description'>
              Princess duties call, but she'd rather be drinking. 
              Free-spirited Bean exasperates the king as she wreaks havoc 
              with her demon and elf pals.
            </p>

            <button id="play-button">
              <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M6.906 4.537A.6.6 0 006 5.053v13.894a.6.6 0 00.906.516l11.723-6.947a.6.6 0 000-1.032L6.906 4.537z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              Play
            </button>
            <button id="info-button">
              <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M12 11.5v5M12 7.51l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              Info
            </button>

          </div>
            
          <img 
            src={feature}
            alt="Disenchantment"
            id="featured-image"
          />

        </div>


      
        <div className='container'>
          <h2>My List</h2>
            <div className='media-group'>
            
              <div className='item'>
                <img 
                  src={require("./media/the-glory.jpeg")}
                  alt="The Glory"
                />
              </div>

              <div className='item'>
                <img
                  src={require("./media/wednesday.jpeg")}
                  alt="Wednesday"
                />
              </div>

              <div className='item'>
                <img 
                  src={require("./media/saiki.jpeg")}
                  alt="The Disasterous Life of Saiki K"
                />
              </div>

              <div className='item'>
                <img 
                  src={require("./media/my-liberation-notes.jpeg")}
                  alt="My Liberation Notes"
                />
              </div>

              <div className='item'>
                <img
                  src={require("./media/inside-job.jpeg")}
                  alt="Inside Job"
                />
              </div>

              <div className='item'>
                <img
                  src={require("./media/alice-in-borderland.jpeg")}
                  alt="Alice in Borderland"
                />
              </div>

              <div className='item'>
                <img
                  src={require("./media/warrior-nun.jpeg")}
                  alt="Warrior Nun"
                />
              </div>

            </div>
        </div>
        
        <div className='container'>
          <h2>Popular on Netflix</h2>
            <div className='media-group'>
              <div className='item'>
                <img 
                  src={require("./media/stranger-things.jpeg")}
                  alt="The Glory"
                />
              </div>

              <div className='item'>
                <img
                  src={require("./media/wednesday.jpeg")}
                  alt="Wednesday"
                />
              </div>

              <div className='item'>
                <img 
                  src={require("./media/good-girls.jpeg")}
                  alt="The Disasterous Life of Saiki K"
                />
              </div>

              <div className='item'>
                <img 
                  src={require("./media/money-heist.jpeg")}
                  alt="My Liberation Notes"
                />
              </div>

              <div className='item'>
                <img
                  src={require("./media/inside-job.jpeg")}
                  alt="Inside Job"
                />
              </div>

              <div className='item'>
                <img
                  src={require("./media/alice-in-borderland.jpeg")}
                  alt="Alice in Borderland"
                />
              </div>

              <div className='item'>
                <img
                  src={require("./media/warrior-nun.jpeg")}
                  alt="Warrior Nun"
                />
              </div>
              
            </div>
        </div>

        <div className='container'>
          <h2>My List</h2>
            <div className='media-group'>
              <div className='item'>
                <img 
                  src={require("./media/the-glory.jpeg")}
                  alt="The Glory"
                />
              </div>

              <div className='item'>
                <img
                  src={require("./media/old-enough.jpeg")}
                  alt="Wednesday"
                />
              </div>

              <div className='item'>
                <img 
                  src={require("./media/saiki.jpeg")}
                  alt="The Disasterous Life of Saiki K"
                />
              </div>

              <div className='item'>
                <img 
                  src={require("./media/my-liberation-notes.jpeg")}
                  alt="My Liberation Notes"
                />
              </div>

              <div className='item'>
                <img
                  src={require("./media/inside-job.jpeg")}
                  alt="Inside Job"
                />
              </div>

              <div className='item'>
                <img
                  src={require("./media/alice-in-borderland.jpeg")}
                  alt="Alice in Borderland"
                />
              </div>

              <div className='item'>
                <img
                  src={require("./media/warrior-nun.jpeg")}
                  alt="Warrior Nun"
                />
              </div>
              
            </div>
        </div>

      <footer>
      </footer>
    </div>
  );
}

export default App;
