import { WebBanner } from "./WebBanner";
import WebServices from "./WebServices";
import { Whychoosebitpark_web } from "./Whychoosebitpark_web";
import Slider from "./Web_approch";
import CollaborateBitPark from "./CollaborateBitPark";
import { Helmet } from "react-helmet";
const Webdevelopment = () => {
  return (
    <>
      <Helmet>
        <title>Web Development Services </title>

        <meta name="title" content="Web Development Services" />
        <meta
          name="description"
          content="We are specializes in website design and development services. Our web experiences are highly effective, loaded with features, and digitally transformative."
        />
        <meta
          name="keywords"
          content="website design and development services"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="bitpark" />

        <link rel="canonical" href="https://bitpark.co.in/webdevelopment" />

        <meta property="og:title" content="Web Development Services" />
        <meta
          property="og:description"
          content="We are specializes in website design and development services. Our web experiences are highly effective, loaded with features, and digitally transformative."
        />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="225" />
        <meta property="og:image:height" content="225" />
        <meta
          property="og:url"
          content="https://bitpark.co.in/webdevelopment"
        />
        <meta property="og:site_name" content="https://bitpark.co.in/" />
      </Helmet>
      <div>
        <WebBanner />
        <WebServices />
        <Slider />
        <Whychoosebitpark_web />
        <CollaborateBitPark />
      </div>
    </>
  );
};

export default Webdevelopment;
