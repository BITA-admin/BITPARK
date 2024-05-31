import React from "react";
import Testing_banner from "./Testing_banner";
import Test_approch from "./Test_approch";
import { Whychoosebitpark_Testing } from "./Whychoosebitpark_Testing";
import Choosingbitpark_test from "./Choosingbitpark_test";
import Test_service from "./Test_service";
import { Helmet } from "react-helmet";

const Testing = () => {
  return (
    <>
      <Helmet>
        <title>Testing and QA - API testing service</title>

        <meta name="title" content="Testing and QA - API testing service" />
        <meta
          name="description"
          content="Our API testing services company offers professional services for performance, integration, and security API testing."
        />
        <meta name="keywords" content="API testing service" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="bitpark" />

        <link rel="canonical" href="" />

        <meta
          property="og:title"
          content="Testing and QA - API testing service"
        />
        <meta
          property="og:description"
          content="Our API testing services company offers professional services for performance, integration, and security API testing."
        />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="225" />
        <meta property="og:image:height" content="225" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="" />
      </Helmet>
      <div>
        <Testing_banner />
        <Test_service />
        <Test_approch />
        <Whychoosebitpark_Testing />
        <Choosingbitpark_test />
      </div>
    </>
  );
};

export default Testing;
