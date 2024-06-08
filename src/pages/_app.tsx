import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


import { SessionProvider, useSession } from "next-auth/react";


import '../globals.css';


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VLibras from '@djpfs/react-vlibras';
import FontSizeAdjusterContainer from '../components/FontSizeAdjuster'; 
import FontSizeDecreaserContainer from "../components/FontSizeDecreaserContainer"; 




function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  
  const [isFontUpEnabled, setIsFontUpEnabled] = useState(false);

  useEffect(() => {
    const storedValue = localStorage.getItem('isFontUpEnabled');
    console.log('Stored value:', storedValue);
    setIsFontUpEnabled(storedValue === 'true');
  }, []);


  const [isFontDownEnabled, setIsFontDownEnabled] = useState(false);

  useEffect(() => {
    const storedValue = localStorage.getItem('isFontDownEnabled');
    console.log('Stored value:', storedValue);
    setIsFontDownEnabled(storedValue === 'true');
  }, []);


  const [isSpeaking, setIsSpeaking] = useState(true);

  return (

    <SessionProvider session={session}>


      {isFontUpEnabled && <FontSizeAdjusterContainer />}

      {isFontDownEnabled && <FontSizeDecreaserContainer />}

      <Navbar />

      {isClient && <VLibras forceOnload={true} />}


      <Component {...pageProps} />
      <Footer />
    </SessionProvider>

  );
}

export default MyApp;
