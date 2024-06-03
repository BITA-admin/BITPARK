// import Nav from "./Components/Navbar/Nav";
import Navbar from "./Components/NewNavbar/Navbar";
import Home from "./Components/Home/Home";
import WhyBitPark from "./Components/WhyBitPark/WhyBitPark";
import Our_Serivces from "./Components/OurServices/Our_Serivces";
import ClientSays from "./Components/ClientSays/ClientSays";
import { useEffect, useLayoutEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import Footer from "./Components/Footer/Footer";
import Empower_clients from "./Components/About_us/Empower_clients";
import { Route, Routes } from "react-router-dom";
import Contact_us from "./Components/Contact_Us/ContactUs";
import Contact_Banner from "./Components/Contact_Us/Contact_Banner";
import MobileApp from "./Components/Services/MobileApplication/MobileApp";
import Webdevelopment from "./Components/Services/WebDevelopment/Webdevelopment";
import UIUX from "./Components/Services/UI/UIUX.JSX";
import Application from "./Components/Services/ApplicationModernization/Application";
import Testing from "./Components/Services/TestingQA/Testing";
import ITConsultingService from "./Components/Services/ITConsultingService/ITConsulting_Service";
import ITOutsourcing from "./Components/Services/ITOutsourcing/ITOutsourcing";
import Soluction from "./Components/Solution/Soluction";
import Newcontact from "./Components/Contact/Newcontact";
import Technologies from "./Components/Technologies/Technologies";
import ScrollUpReact from "./Components/ScrollUp/ScrollUpReact";
import ScrollUp from "./Components/ScrollUp/ScrollUp";
import AboutUs from "./Components/About_us/AboutUs";

const App = () => {
  const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    // setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className=" h-[100vh] w-full flex justify-center items-center bg-slate-900">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#3A7BA5"
            ariaLabel="ball-triangle-loading"
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
                  {/* <Contact /> */}
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
                  <AboutUs />
                </>
              }
            />
            <Route
              path="/contactus"
              element={
                <>
                  <Contact_Banner />
                  <Contact_us />
                </>
              }
            />

            <Route
              path="/technologies"
              element={
                <>
                  <Technologies />
                </>
              }
            />
            <Route
              path="/solution"
              element={
                <>
                  <Soluction />
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
