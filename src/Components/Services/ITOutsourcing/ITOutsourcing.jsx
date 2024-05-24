import ITOutsourcing_banner from "./ITOutsourcing_banner";
import ITOutsourcing_Approch from "./ITOutsourcing_Approch";
import { Whychoosebitpark_ITOutsourcing } from "./WhyChooseBitPark_ITOutsourcing";
import ITOutsourcing_bitpark from "./ITOutsourcing_bitpark";
// import ITConsultingService from "../ITConsultingService/ITConsulting_Service";
import ItoutSourcing_service from "./ItoutSourcing_service";

const ITOutsourcing = () => {
  return (
    <div>
      <ITOutsourcing_banner />
      <ItoutSourcing_service />
      <ITOutsourcing_Approch />
      <Whychoosebitpark_ITOutsourcing />
      <ITOutsourcing_bitpark />
    </div>
  );
};

export default ITOutsourcing;
