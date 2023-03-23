import Navbar from "@/components/Navbar";
import Image from 'next/image'
import Row from "@/components/Row";
import { tvShowsTrendingNow } from "@/components/Data";

export default function Tv() {

  return(
    <>
      <Navbar />
      <main className="main">
        <div className='featured-media'>
          

          <div className='featured-info'>

            <div className='netflix-tag'>

              <Image className="item"
                src={require('../media/netflix-logo-sm.png')}
                alt="logo"
                id="logo-sm"
                width={20}
                height={30}
              />
              <p>Series</p>

            </div>

            <h2 className='title'>The Good Place</h2>

            <p className='description'>
            When Eleanor Shellstrop finds herself in the afterlife, she&apos;s both relieved and surprised that she&apos;s made it into the Good Place. 
            But it doesn&apos;t take long for Eleanor to realize she&apos;s there by mistake. 
            </p>

            <div className="flex">
              <button id="play-button">
                <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6.906 4.537A.6.6 0 006 5.053v13.894a.6.6 0 00.906.516l11.723-6.947a.6.6 0 000-1.032L6.906 4.537z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                Play
              </button>
              <button id="info-button">
                <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M12 11.5v5M12 7.51l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                More Info
              </button>
            </div>

          </div>
            
          <div>
          <div className="fade"></div>
            <Image className="item" 
              src={require("../public/the-good-place-banner.jpeg")}
              alt="The Good Place"
              id="featured-Image"
              width={1280}
              height={720}
            />
          </div>

        </div>
        <Row titles={tvShowsTrendingNow} rowTitle={"Trending Now"}/>
      </main>
    </>
  );
}
