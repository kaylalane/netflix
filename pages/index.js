/* eslint-disable no-unused-vars */
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google'
import { useState} from 'react';
import feature from '../media/disenchantment.jpeg'
import { myList, popularOnNetflix } from '../components/Data';
import Row from '@/components/Row';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [visiblity, setVisibility] = useState(false);
  const [search, setSearch] = useState('');
  const itemWidth = 250;
  const itemHeight = 150;
  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className='featured-media'>
          

            <div className='featured-info'>

              <div className='netflix-tag'>

                <img
                  src={require('../media/netflix-logo-sm.png')}
                  alt="logo"
                  id="logo-sm"
                  width={20}
                  height={30}
                />
                <p>Series</p>

              </div>

              <h2 className='title'>Disenchantment</h2>

              <p className='description'>
                Princess duties call, but shed rather be drinking. 
                Free-spirited Bean exasperates the king as she wreaks havoc 
                with her demon and elf pals.
              </p>

              <div className='flex'>
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
              
            <div className='fade'></div>
            <Image
              src={feature}
              alt="Disenchantment"
              id="featured-image"
              width={1280}
              height={720}
            />

          </div>
        <Row titles={myList} rowTitle={"My List"}/>
        <Row titles={popularOnNetflix} rowTitle={"Popular on Netflix"}/>
      </main>
      
    </>
  )
}
