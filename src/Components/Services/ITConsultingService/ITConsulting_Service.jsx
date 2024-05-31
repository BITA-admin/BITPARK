import React from "react";
import { ITConsultingbanner } from "./ITConsultingbanner";
import It_approch from "./It_approch";
import { Whychoosebitpark_it } from "./Whychoosebitpark_it";
import CollaborateBitPark_it from "./CollaborateBitPark_it";
import ItConsultingservice from "./ItConsultingservices";
import { Helmet } from "react-helmet";

// import ItConsultingservice from "./ItConsultingservice.jsx";

const ITConsultingService = () => {
  return (
    <>
      <Helmet>
        <title>It consultancy</title>

        <meta name="title" content="It consultancy" />
        <meta
          name="description"
          content="are you looking for it consulting services for small business? Our goal is to assist you with our IT services and increase the client's revenue."
        />
        <meta
          name="keywords"
          content="it consulting services for small business"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="bitpark" />

        <link rel="canonical" href="" />

        <meta property="og:title" content="It consultancy" />
        <meta
          property="og:description"
          content="are you looking for it consulting services for small business? Our goal is to assist you with our IT services and increase the client's revenue."
        />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="225" />
        <meta property="og:image:height" content="225" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="" />
      </Helmet>
      <div>
        <ITConsultingbanner />
        <ItConsultingservice />
        <It_approch />
        <Whychoosebitpark_it />
        <CollaborateBitPark_it />
      </div>
    </>
  );
};

export default ITConsultingService;
