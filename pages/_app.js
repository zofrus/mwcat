import '../styles/globals.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  useEffect(async () => {
    const { default: ReactPixel } = await import('react-facebook-pixel');
    ReactPixel.init('434554711745336', null, {
        autoConfig: true,
        debug: true,
      });
    ReactPixel.pageView();
    ReactPixel.track("ViewContent")
  });

  return <Component {...pageProps} />
}


export default MyApp