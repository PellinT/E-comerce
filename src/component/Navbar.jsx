import { CiSearch } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";



function Navbar() {
  return (
    <div className="bg-slate-100 flex justify-between  text-1xl py-2 px-30 items-center cursor-pointer">
      <h1 className="text-2xl font-semibold">Flone.</h1>
      <ul className="flex justify-between gap-4.5 font-semibold">
        <li>Home</li>
        <li>Shop</li>
        <li>Collection</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex justify-between gap-5 text-2xl">
        <CiSearch />
       <MdOutlineMailOutline />
        <CiHeart />
        <CiGlobe />
      </div>
    </div>
  );
}

export default Navbar;
