import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4  top-0 sticky mt-5">
      <ul className="flex space-x-6 bg-gradient-to-r from-sblack to-sblu h-11 items-center rounded-full px-8 py-2 shadow-lg mx-auto">
        <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
          <Link href="/about">About Me</Link>
        </li>
        <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
          <Link href="/skill">Skill</Link>
        </li>
        <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
          <Link href="/project">Project</Link>
        </li>
      </ul>

      <button className="flex items-center text-black px-4 py-2 bg-white rounded-full hover:bg-blue-600">
        Contact <MdArrowOutward className="ml-2" />
      </button>
    </nav>
  );
};

export default Navbar;
