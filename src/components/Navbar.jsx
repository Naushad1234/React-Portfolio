import logo from "../assets/logo.png";
import {
  FaLinkedin,
  FaGithub,
  FaTwitterSquare,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
      <img src={logo} alt="" className="w-10 filter-white mx-2" />

      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/md-naushad-ali-665792255/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <FaTwitterSquare />
        <FaInstagram />
        <FaGithub />
      </div>
    </nav>
  );
};

export default Navbar;
