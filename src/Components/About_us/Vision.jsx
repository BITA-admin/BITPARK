import React from "react";

import v2 from "../../assets/all-images/vision_5.jpg";
import v3 from "../../assets/all-images/vission_7.jpg";
import { TbEye } from "react-icons/tb";
import { TbRadar } from "react-icons/tb";

const Vision = () => {
  return (
    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-10 gap-x-6 items-start lg:p-14 p-5  mt-0">
      <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div className="order-1 sm:ml-6 xl:ml-0">
          <div className="flex">
            <div className=" rounded-full border-2 border-gray-500 bg-blueColor">
              <TbEye className="w-auto h-12 text-white p-1" />
            </div>

            <h3 className=" font-bold text-xl p-3 text-blueColor">VISION</h3>
          </div>

          <div className="text-slate-600 py-3 font-bold">
            <p>
              Envisions a future in which technology breaks down barriers,
              enabling creativity and empowerment. Our aim is to be a catalyst
              for positive change, employing cutting-edge technologies to shape
              a digitally inclusive world and reinvent tomorrow's possibilities.
            </p>
          </div>
        </div>

        <img
          src={v2}
          alt="image"
          className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full "
        />
      </li>
      <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div className="order-1 sm:ml-6 xl:ml-0">
          <div className="flex">
            <div className=" rounded-full border-2 border-gray-500 bg-blueColor">
              <TbRadar className="w-auto h-12 text-white p-2" />
            </div>

            <h3 className=" font-bold text-xl p-3 text-blueColor">MISSION</h3>
          </div>
          <div className=" text-slate-600 ">
            <ul className="p-2 space-y-2 font-bold">
              <li className="list-disc">
                Pushing the boundaries of technology to create innovative,
                dependable, and scalable products that satisfy our clients'
                evolving needs.
              </li>
              <li className="list-disc">
                create a collaborative ecosystem to help our team thrive in a
                changing world. To meet and surpass client expectations, we use
                diverse abilities, viewpoints, and ideas.
              </li>
              <li className="list-disc">
                to change the digital landscape, empower businesses, boost
                economic growth, and help technology improve lives and advance
                sectors.
              </li>
            </ul>
          </div>
        </div>

        <img
          src={v3}
          alt="image"
          className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full "
        />
      </li>
    </ul>
  );
};

export default Vision;
