import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  let [show, setShow] = useState(false);

  const links = [
    { title: "Home", to: "/" },
    { title: "Cities", to: "/cities" },
  ];

  const handleShowMenu = () => {
    setShow(!show);
  };

  return (
    <header className="flex justify-between content-center p-2">
      <div className="flex items-center">
        <img
          src="../public/logo/logo1.png"
          alt="Logo"
          className="w-20 h-15 mr-2 rounded-full"
        />
        <span className="text-x1 font-semibold">My Tinerary</span>
      </div>
      <div className="w-full h-auto text-center">
        <button
          className="p-1 border-sky-800 border-[1px] rounded-md"
          onClick={handleShowMenu}
        >
          Show menu
        </button>
        {show && (
          <div className="flex justify-center mt-2">
            {links.map((link) => (
              <Link
                className="text-sky-100 hover:text-indigo-600 mx-4"
                key={link.title}
                to={link.to}
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
      {/* <div className="w-full h-auto text-center py-4">
        <button
          className="p-2 border-sky-800 border-[1px] rounded-md"
          onClick={handleShowMenu}
        >
          Show menu
        </button>
        {show
          ? links.map((link) => (
              <Link
                className="text-sky-100 hover:text-indigo-600 mx-4"
                key={link.title}
                to={link.to}
              >
                {link.title}
              </Link>
            ))
          : null}
      </div> */}
      <div className="avatar items-center">
        <div className="w-10 h-10 rounded-full">
          <a href="/signin">
            <img src="../public/logo/login.png" alt="logo" />
          </a>
        </div>
      </div>
      {/* <div className="py-4 pr-2">
        <a href="/signin">
          <img
            src="../public/logo/login.png"
            alt="Logo"
            className="w-9 h-8 rounded-full"
          />
        </a>
      </div> */}
    </header>
  );
}
