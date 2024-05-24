import MobileApp_banner from "../MobileApplication/Services_banner";
import MobileApp_About from "../MobileApplication/Mpagecontent";
import MobileApp_Development from "../MobileApplication/Ourmobileapplication";
import MobileApp_Approach from "../MobileApplication/Approach";
// import Whychoosebitpark from "./Components/Services/MobileApplication/Whychoosebitpark";
import { Whychoosebitpark } from "./Whychoosebitpark";
// import MobileApp_Whychoose from "../MobileApplication/Whychoosebitpark";
import MobileApp_Letstogethor from "../MobileApplication/Letstogethor";

const MobileApp = () => {
  return (
    <div>
      <MobileApp_banner />
      <MobileApp_About />
      <MobileApp_Development />
      <MobileApp_Approach />
      <Whychoosebitpark />
      <MobileApp_Letstogethor />
    </div>
  );
};

export default MobileApp;
