import { FiMonitor } from "react-icons/fi";
import { FaLaptopCode, FaHandshake } from "react-icons/fa";
// import { FaMobileAlt } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { BsClipboardCheckFill } from "react-icons/bs";
import { PiUserListBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { IconType } from "react-icons";

export const ShiftingDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 text-white transition-colors rounded-md"
        >
          <span className="font-medium text-md">Services</span>
          {/* <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span> */}
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className=" z-50 flex flex-col gap-3 p-2 rounded-lg bg-white shadow-xl absolute top-[160%] left-[50%] w-60 overflow-hidden"
        >
          <Link to="/webDevelopment">
            <Option
              setOpen={setOpen}
              Icon={FaLaptopCode}
              text="Web Development"
            />
          </Link>
          <Link to="/services">
            <Option
              setOpen={setOpen}
              Icon={FiMonitor}
              text="Mobile APP Development"
            />
          </Link>
          <Option setOpen={setOpen} Icon={MdWeb} text="UI/UX Design" />
          <Option
            setOpen={setOpen}
            Icon={IoSettingsSharp}
            text="Application Modernization"
          />
          <Option
            setOpen={setOpen}
            Icon={BsClipboardCheckFill}
            text="Testing and QA"
          />
          <Option
            setOpen={setOpen}
            Icon={PiUserListBold}
            text="IT Consultancy"
          />
          <Option setOpen={setOpen} Icon={FaHandshake} text="IT Outsourcing" />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-3 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-blue-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

// export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
