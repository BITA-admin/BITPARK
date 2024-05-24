import UiUxBanner from "./UiUxBanner";
import { Whychoosebitpark_uiux } from "./Whychoosebitpark_uiux";
import Approach_uiux from "./Approach_uiux";
import CollaborateBitPark_uiux from "./CollaborateBitPark_uiux";
import UiUxService from "./UiUxService";

const UIUX = () => {
  return (
    <div>
      <UiUxBanner />
      <UiUxService />
      <Approach_uiux />
      <Whychoosebitpark_uiux />
      <CollaborateBitPark_uiux />
    </div>
  );
};

export default UIUX;
