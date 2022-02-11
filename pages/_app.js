import '../styles/globals.css'
import { DataContextProvider } from '../Context/DataContext' 
import { ExperienceContextProvider } from '../Context/ExperienceContext'
import 'react-responsive-modal/styles.css';


function MyApp({ Component, pageProps }) {
  return (
  <DataContextProvider>
    <ExperienceContextProvider>
    <Component {...pageProps} />
    </ExperienceContextProvider>
  </DataContextProvider>)
}

export default MyApp
