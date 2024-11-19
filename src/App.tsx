import './App.css'
import Routing from './Components/Routes/routes'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from 'react-helmet-async';

function App() {

  return (
    <>
      <Helmet> 
        <title>{'Store'}</title> 
        <meta name="description" content={'A simple store description content '} /> 
        <link rel="canonical" href={'www.simplestore.com/'} /> 
        <meta name="robots" content="index, follow" /> 
        <meta property="og:title" content={'simple store title for social media'} /> 
        <meta property="og:description" content={'simple store description for social media'} /> 
        <meta property="og:image" content={'image displayed in social media'} /> 
        <meta property="og:url" content={'the url displayed for social media'} /> 
        {/* <meta name="twitter:card" content="summary_large_image" /> 
        <meta name="twitter:title" content={title} /> 
        <meta name="twitter:description" content={description} /> 
        <meta name="twitter:image" content={imageUrl} />  */}
      </Helmet>
      <Routing />
    </>
  )
}

export default App
