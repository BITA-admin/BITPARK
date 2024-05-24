import {
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import logo from "../../assets/all-images/bita-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const clickTop = () => {
    window.scroll({
      top: 0,
    });
  };
  return (
    <footer className="bg-slate-900 text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-4 md:mb-0">
          <span className="py-2">
            <img src={logo} className="w-44 h-22" />
          </span>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-blueColor py-2 uppercase">
            Service
          </h2>
          <ul className="text-[16px] my-4">
            <li className="my-2">
              <Link
                to="/"
                onClick={clickTop}
                className=" hover:text-blueColor transition-all duration-150 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/aboutus"
                onClick={clickTop}
                className=" hover:text-blueColor transition-all duration-150 ease-in-out"
              >
                About Us
              </Link>
            </li>
            {/* <li className="my-2">
              <Link
                to="/Our_Serivces"
                onClick={clickTop}
                className=" hover:text-blueColor transition-all duration-150 ease-in-out"
              >
                Services
              </Link>
            </li> */}
            <li className="my-2">
              <Link
                to="/technologies"
                onClick={clickTop}
                className=" hover:text-blueColor transition-all duration-150 ease-in-out"
              >
                Technologies
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/solution"
                onClick={clickTop}
                className=" hover:text-blueColor transition-all duration-150 ease-in-out"
              >
                Solution
              </Link>
            </li>
            {/* <li className="my-2">
              <Link
                to="/contactus"
                onClick={clickTop}
                className=" hover:text-blueColor transition-all duration-150 ease-in-out"
              >
                Blog
              </Link>
            </li> */}
            <li className="my-2">
              <Link
                to="/contactus"
                onClick={clickTop}
                className=" hover:text-blueColor transition-all duration-150 ease-in-out"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-blueColor py-2 uppercase">
            Contact
          </h2>
          <p className="text-[16px] my-4">
            Ramapuram <br />
            5/48,Valluvar Salai, <br />
            Ramapuram, Chennai 600089. <br />
            <a href="tel: Phone: +91 9566004616"> Phone: +91 9566004616</a>
          </p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-blueColor py-2 uppercase">
            Follow Me
          </h2>
          <div className="flex space-x-4 mt-4 text-[20px]">
            <a
              title="Youtube"
              className="text-white hover:text-blueColor transition-all duration-150 ease-in-out"
              href="https://www.youtube.com/channel/UC01fbEKhsxSRx-Sycvc4HWw"
            >
              <FaYoutube />
            </a>
            <a
              title="Linkedin"
              className="text-white hover:text-blueColor transition-all duration-150 ease-in-out"
              href="https://www.linkedin.com/company/11236773/admin/feed/posts/"
            >
              <FaLinkedinIn />
            </a>
            <a
              title="twitter"
              className="text-white hover:text-blueColor transition-all duration-150 ease-in-out"
              href="https://twitter.com/Bitaaacademy"
            >
              <FaTwitter />
            </a>
            <a
              title="Instagram"
              className="text-white hover:text-blueColor transition-all duration-150 ease-in-out"
              href="https://www.instagram.com/bitahelpdesk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <FaInstagram />
            </a>
            <a
              title="Facebook"
              className="text-white hover:text-blueColor transition-all duration-150 ease-in-out"
              href="https://www.facebook.com/BitaAcademy/"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
