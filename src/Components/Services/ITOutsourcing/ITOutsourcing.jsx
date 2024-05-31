import ITOutsourcing_banner from "./ITOutsourcing_banner";
import ITOutsourcing_Approch from "./ITOutsourcing_Approch";
import { Whychoosebitpark_ITOutsourcing } from "./WhyChooseBitPark_ITOutsourcing";
import ITOutsourcing_bitpark from "./ITOutsourcing_bitpark";

import ItoutSourcing_service from "./ItoutSourcing_service";
import { Helmet } from "react-helmet";

const ITOutsourcing = () => {
  return (
    <>
      <Helmet>
        <title>It outsourcing</title>

        <meta name="title" content="It outsourcing" />
        <meta
          name="description"
          content="Our group of experts provides top-tier outsourced IT services, aiding small to medium-sized businesses in streamlining their IT operations."
        />
        <meta
          name="keywords"
          content="outsourced it services for small business"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="bitpark" />

        <link rel="canonical" href="" />

        <meta property="og:title" content="It outsourcing" />
        <meta
          property="og:description"
          content="Our group of experts provides top-tier outsourced IT services, aiding small to medium-sized businesses in streamlining their IT operations."
        />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="225" />
        <meta property="og:image:height" content="225" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="" />
      </Helmet>
      <div>
        <ITOutsourcing_banner />
        <ItoutSourcing_service />
        <ITOutsourcing_Approch />
        <Whychoosebitpark_ITOutsourcing />
        <ITOutsourcing_bitpark />
      </div>
    </>
  );
};

export default ITOutsourcing;
