import UiUxBanner from "./UiUxBanner";
import { Whychoosebitpark_uiux } from "./Whychoosebitpark_uiux";
import Approach_uiux from "./Approach_uiux";
import CollaborateBitPark_uiux from "./CollaborateBitPark_uiux";
import UiUxService from "./UiUxService";
import { Helmet } from "react-helmet";

const UIUX = () => {
  return (
    <>
      <Helmet>
        <title>UX UI Services</title>

        <meta name="title" content="UX UI  Services" />
        <meta
          name="description"
          content="We provide UI/UX design services that delight your end-users by developing web and mobile apps that align with your business goals."
        />
        <meta name="keywords" content="ui ux design services company" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="bitpark" />

        <link rel="canonical" href="https://bitpark.co.in/uiux" />

        <meta property="og:title" content="UX UI  Services" />
        <meta
          property="og:description"
          content="We provide UI/UX design services that delight your end-users by developing web and mobile apps that align with your business goals."
        />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="225" />
        <meta property="og:image:height" content="225" />
        <meta property="og:url" content="https://bitpark.co.in/uiux" />
        <meta property="og:site_name" content="https://bitpark.co.in/" />
      </Helmet>
      <div>
        <UiUxBanner />
        <UiUxService />
        <Approach_uiux />
        <Whychoosebitpark_uiux />
        <CollaborateBitPark_uiux />
      </div>
    </>
  );
};

export default UIUX;
