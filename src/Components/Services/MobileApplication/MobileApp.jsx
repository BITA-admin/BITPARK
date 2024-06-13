import MobileApp_banner from "../MobileApplication/Services_banner";
import MobileApp_About from "../MobileApplication/Mpagecontent";
import MobileApp_Development from "../MobileApplication/Ourmobileapplication";
import MobileApp_Approach from "../MobileApplication/Approach";
import { Whychoosebitpark } from "./Whychoosebitpark";
import MobileApp_Letstogethor from "../MobileApplication/Letstogethor";
import { Helmet } from "react-helmet";

const MobileApp = () => {
  return (
    <>
      <Helmet>
        <title>Mobile Application Development Services </title>

        <meta name="title" content="Mobile Application Development Services " />
        <meta
          name="description"
          content="We provide comprehensive mobile application development services, custom to your specific business needs. We develop innovative mobile apps for iOS & Android."
        />
        <meta
          name="keywords"
          content="Mobile Application Development Services "
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="bitpark" />

        <link
          rel="canonical"
          href="https://bitpark.co.in/mobileappdevelopment"
        />

        <meta
          property="og:title"
          content="Mobile Application Development Services "
        />
        <meta
          property="og:description"
          content="We provide comprehensive mobile application development services, custom to your specific business needs. We develop innovative mobile apps for iOS & Android."
        />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="225" />
        <meta property="og:image:height" content="225" />
        <meta
          property="og:url"
          content="https://bitpark.co.in/mobileappdevelopment"
        />
        <meta property="og:site_name" content="https://bitpark.co.in/" />
      </Helmet>
      <div>
        <MobileApp_banner />
        <MobileApp_About />
        <MobileApp_Development />
        <MobileApp_Approach />
        <Whychoosebitpark />
        <MobileApp_Letstogethor />
      </div>
    </>
  );
};

export default MobileApp;
