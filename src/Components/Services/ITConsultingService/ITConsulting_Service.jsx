import React from "react";
import { ITConsultingbanner } from "./ITConsultingbanner";
import It_approch from "./It_approch";
import { Whychoosebitpark_it } from "./Whychoosebitpark_it";
import CollaborateBitPark_it from "./CollaborateBitPark_it";
import ItConsultingservice from "./ItConsultingservice";

// import ItConsultingservice from "./ItConsultingservice.jsx";

const ITConsultingService = () => {
  return (
    <div>
      <ITConsultingbanner />
      <ItConsultingservice />
      <It_approch />
      <Whychoosebitpark_it />
      <CollaborateBitPark_it />
    </div>
  );
};

export default ITConsultingService;
