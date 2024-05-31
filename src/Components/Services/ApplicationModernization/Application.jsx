import { Helmet } from "react-helmet";
import Application_approch from "./Application_approch";
import { Application_banner } from "./Application_banner";
import Application_service from "./Application_service";
import Modernizing_Application from "./Modernizing_Application";
import { Whychoosebitpark_Application } from "./Whychoosebitpark_Application";

const Application = () => {
  return (
    <>
      <Helmet>
        <title>
          Application Modernization - custom mobile app, custom web app
        </title>

        <meta
          name="title"
          content="Application Modernization - custom mobile app, custom web app"
        />
        <meta
          name="description"
          content="Our company provides custom web development services that encompass the front and back-end development, e-commerce solutions to help our clients grow their business."
        />
        <meta name="keywords" content="custom web development services" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="bitpark" />

        <link rel="canonical" href="" />

        <meta
          property="og:title"
          content="Application Modernization - custom mobile app, custom web app"
        />
        <meta
          property="og:description"
          content="Our company provides custom web development services that encompass the front and back-end development, e-commerce solutions to help our clients grow their business."
        />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="225" />
        <meta property="og:image:height" content="225" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="" />
      </Helmet>
      <div>
        <Application_banner />
        <Application_service />
        <Application_approch />
        <Whychoosebitpark_Application />
        <Modernizing_Application />
      </div>
    </>
  );
};

export default Application;
