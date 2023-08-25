import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavBar() {

  const links = [
    { title: "Home", to: "/" },
    { title: "Cities", to: "/cities" },
  ];
  
  const [menuOpen, setMenuOpen] = useState(false);
  const photo = useSelector(store => store.userReducer.photo)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between items-center p-2">
      <div className="flex items-center">
        <img
          src="../public/logo/logo1_1.png"
          alt="Logo"
          className="w-30 h-20"
        />
        <span className="text-lg font-semibold">My Tinerary</span>
      </div>
      <div className="flex items-center md:hidden">
        <button
          className="text-sky-100 hover:text-indigo-600 focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <div className={`ml-4 ${menuOpen ? "block" : "hidden"}`}>
          {links.map((link) => (
            <Link
              className="text-sky-100 hover:text-indigo-600 block mt-2"
              key={link.title}
              to={link.to}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden md:flex space-x-4">
        {links.map((link) => (
          <Link
            className="text-sky-100 hover:text-indigo-600"
            key={link.title}
            to={link.to}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="avatar items-center">
        <div className="w-10 h-10 rounded-full">
          <a href="/signin">
            <img src={photo} alt="avatar_photo" />
          </a>
        </div>
      </div>
    </header>
  );
}
