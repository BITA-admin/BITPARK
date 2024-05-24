import Application_approch from "./Application_approch";
import { Application_banner } from "./Application_banner";
import Application_service from "./Application_service";
import Modernizing_Application from "./Modernizing_Application";
import { Whychoosebitpark_Application } from "./Whychoosebitpark_Application";

const Application = () => {
  return (
    <div>
      <Application_banner />
      <Application_service />
      <Application_approch />
      <Whychoosebitpark_Application />
      <Modernizing_Application />
    </div>
  );
};

export default Application;
