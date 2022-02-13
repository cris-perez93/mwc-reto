import '../styles/globals.css'
import { DataContextProvider } from '../Context/DataContext' 
import { ExperienceContextProvider } from '../Context/ExperienceContext'
import 'react-responsive-modal/styles.css';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
  <DataContextProvider>
    <ExperienceContextProvider>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
    <Component {...pageProps} />
    </ExperienceContextProvider>
  </DataContextProvider>)
}

export default MyApp
