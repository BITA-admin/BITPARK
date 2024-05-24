// import Nav from "./Components/Navbar/Nav";
import Navbar from "./Components/NewNavbar/Navbar";
import Home from "./Components/Home/Home";
import WhyBitPark from "./Components/WhyBitPark/WhyBitPark";
import Our_Serivces from "./Components/OurServices/Our_Serivces";
import ClientSays from "./Components/ClientSays/ClientSays";
import Contact from "./Components/Contact/Contact";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import Footer from "./Components/Footer/Footer";
import Services_b from "./Components/About_us/About_1";
import Services_a from "./Components/About_us/About_bit";
import Services_v from "./Components/About_us/Vision";
import Services_s from "./Components/About_us/WhatWeServe";
import Service_whome from "./Components/About_us/Whome";
import Empower_clients from "./Components/About_us/Empower_clients";
import Serve from "./Components/About_us/Serve";
import Our_Sister from "./Components/About_us/Our_Sister";
import { Route, Routes } from "react-router-dom";
import Contact_us from "./Components/Contact_Us/ContactUs";
import Sample from "./Components/Contact_Us/Contact_Banner";
import Service_banner from "./Components/Services/MobileApplication/Services_banner";
// import { Servicenav } from "./Components/Services/Servicenav";
import Letstogethor from "./Components/Services/MobileApplication/Letstogethor";
// import Approach from "./Components/Services/MobileApplication/Approach";
import Approach from "./Components/Services/MobileApplication/Approach";
import Mpagecontent from "./Components/Services/MobileApplication/Mpagecontent";
import Ourmobileapplication from "./Components/Services/MobileApplication/Ourmobileapplication";
import { Whychoosebitpark } from "./Components/Services/MobileApplication/Whychoosebitpark";
// import { ShiftingDropDown } from "./Components/Services/ShiftingDropDown";
// import { ShiftingDrop } from "./Components/Services/ShiftingDrop";
<Webdevelopment />;
import { Whychoosebitpark_web } from "./Components/Services/WebDevelopment/Whychoosebitpark_web";
import Slider from "./Components/Services/WebDevelopment/Web_approch";
import CollaborateBitPark from "./Components/Services/WebDevelopment/CollaborateBitPark";
import WebServices from "./Components/Services/WebDevelopment/WebServices";
import UiUxBanner from "./Components/Services/UI/UiUxBanner";
import { Whychoosebitpark_uiux } from "./Components/Services/UI/Whychoosebitpark_uiux";
import CollaborateBitPark_uiux from "./Components/Services/UI/CollaborateBitPark_uiux";
import Approach_uiux from "./Components/Services/UI/Approach_uiux";
import MobileApp from "./Components/Services/MobileApplication/MobileApp";
import Webdevelopment from "./Components/Services/WebDevelopment/Webdevelopment";
import UIUX from "./Components/Services/UI/UIUX.JSX";
import Application from "./Components/Services/ApplicationModernization/Application";
import Testing from "./Components/Services/TestingQA/Testing";
import ITConsultingService from "./Components/Services/ITConsultingService/ITConsulting_Service";
import ITOutsourcing from "./Components/Services/ITOutsourcing/ITOutsourcing";
import Solution_banner from "./Components/Solution/Solution_banner";
import Soluction from "./Components/Solution/Soluction";
import { About_banner } from "./Components/About_us/About_banner";
import Newcontact from "./Components/Contact/Newcontact";
import Technologies from "./Components/Technologies/Technologies";
import ScrollUpReact from "./Components/ScrollUp/ScrollUpReact";
import ScrollUp from "./Components/ScrollUp/ScrollUp";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  //  bg - gradient - to - b;
  //  from - blue - 500;
  //  via - blue - 400;
  //  to - white;
  return (
    <>
      {loading ? (
        <div className=" h-[100vh] w-full flex justify-center items-center bg-slate-900">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            // color="white"
            color="#3A7BA5"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <WhyBitPark />
                  <Empower_clients />
                  <Our_Serivces />
                  <Contact />
                  <Newcontact />
                  <ClientSays />
                  <ScrollUpReact />
                  <ScrollUp />
                </>
              }
            />
            <Route
              path="/aboutus"
              element={
                <>
                  <About_banner />
                  {/* <Services_b /> */}
                  <Services_a />
                  <Services_v />
                  <Serve />
                  <Services_s />
                  <Service_whome />
                  <Our_Sister />
                </>
              }
            />
            <Route
              path="/contactus"
              element={
                <>
                  <Sample />
                  <Contact_us />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  {/* <Service_banner />
                  <Mpagecontent />
                  <Ourmobileapplication />
                  <Approach />

                  <Whychoosebitpark />
                  <Letstogethor /> */}
                  {/* <ShiftingDrop /> */}
                </>
              }
            />

            <Route
              path="/technologies"
              element={
                <>
                  <Technologies />
                  {/* <WebBanner />
                  <WebServices />
                  <Whychoosebitpark_web />
                  <Slider />
                  <CollaborateBitPark /> */}
                </>
              }
            />
            <Route
              path="/solution"
              element={
                <>
                  <Soluction />
                  {/* <Solution_banner /> */}
                  {/* <UiUxBanner />
                  <Whychoosebitpark_uiux />
                  <Approach_uiux />
                  <CollaborateBitPark_uiux /> */}
                </>
              }
            />

            {/* Services */}
            <Route
              path="/webdevelopment"
              element={
                <>
                  <Webdevelopment />
                </>
              }
            />

            <Route
              path="/mobileappdevelopment"
              element={
                <>
                  <MobileApp />
                </>
              }
            />

            <Route
              path="/uiux"
              element={
                <>
                  <UIUX />
                </>
              }
            />

            <Route
              path="/applicationmodernization"
              element={
                <>
                  <Application />
                </>
              }
            />

            <Route
              path="/testingqa"
              element={
                <>
                  <Testing />
                </>
              }
            />

            <Route
              path="/itconsultingservice"
              element={
                <>
                  <ITConsultingService />
                </>
              }
            />

            <Route
              path="/itoutsourcing"
              element={
                <>
                  <ITOutsourcing />
                </>
              }
            />
          </Routes>
          <ScrollUpReact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
