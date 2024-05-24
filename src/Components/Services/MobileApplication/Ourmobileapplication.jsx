import mdimg4 from "../../../assets/all-images/md_img4.png";

import andriod from "../../../assets/all-images/andriod.png";
import ios from "../../../assets/all-images/ios2.png";

const Ourmobileapplication = () => {
  return (
    <div>
      <div
        className="service_md"
        style={{
          background:
            "radial-gradient(circle, rgba(49,67,156,1) 0%, rgba(15,23,42,1) 100%)",
        }}
      >
        <div className="text-white px-4 pb-4">
          <h1 className="text-3xl font-bold text-center pt-5 pb-16">
            Our Mobile Application Development Services{" "}
          </h1>
          <div className="flex flex-col lg:flex-row  justify-around items-center">
            <div className=" w-[90%] md:w-[70%] lg:w-[32%]">
              <h3 className="text-xl font-[700] py-4">iOS App Development: </h3>
              <h5 className="text-[17px] font-[600] pb-2">
                SwiftUI and Objective-C
              </h5>
              <p className="text-[15px] text-justify">
                Our committed team at BIT PARK possesses exceptional knowledge
                and skill in the development of iOS applications. They adeptly
                employ SwiftUI and Objective-C to create state-of-the-art
                solutions. By leveraging our expertise in SwiftUI's contemporary
                user interface framework and comprehensive understanding of
                Objective-C's legacy functionalities, we guarantee flawless
                operation and peak performance on every iOS device. Place your
                trust in our highly skilled professionals to implement your app
                concepts with accuracy and cleverness.
              </p>
            </div>
            <img
              src={ios}
              alt="image"
              className="object-contain w-[100%] md:w-[80%] lg:w-[40%] rounded-[10%] pt-8 lg:pt-0"
            />
          </div>
          <div className="flex flex-col-reverse lg:flex-row   justify-around items-center pt-8 lg:pt-0">
            <img
              src={andriod}
              alt="image"
              className="object-contain pt-8 lg:pt-0"
            />
            <div className="w-[90%] md:w-[70%] lg:w-[32%]">
              <h3 className="text-xl font-[700] py-4">
                Android App Development:{" "}
              </h3>
              <h5 className="text-[17px] font-[600] pb-2">Java and Kotlin</h5>
              <p className="text-[15px] text-justify">
                BIT PARK's Android app developers are experts in Java and
                Kotlin. With expert knowledge of Java's solid capabilities and
                Kotlin's current features, we provide remarkable and efficient
                customer solutions. Our talented developers optimize efficiency,
                user experience, and feature implementation to make your Android
                app project a success. Entrust BIT PARK for exceptional mobile
                application development services.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row  justify-around items-center">
            <div className="w-[90%] md:w-[70%] lg:w-[32%]">
              <h3 className="text-xl font-[700] py-4">
                Cross-Platform App Development:
              </h3>
              <h5 className="text-[17px] font-[600] pb-2">
                {" "}
                React Native, Flutter{" "}
              </h5>
              <p className="text-[15px] text-justify">
                Cross-platform app development is our speciality at BIT PARK,
                using React Native and Flutter. We provide smooth and efficient
                solutions for our clients using React Native's flexibility and
                Flutter's high-performance UI. Our talented developers make
                cross-platform projects successful by building dynamic user
                interfaces, optimizing app performance, and assuring platform
                compatibility. Trust BIT PARK for exceptional mobile application
                development services.
              </p>
            </div>
            <img
              src={mdimg4}
              alt="image"
              className="w-[100%]  sm:w-[90%] md:w-[60%] lg:w-[37%] h-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourmobileapplication;
