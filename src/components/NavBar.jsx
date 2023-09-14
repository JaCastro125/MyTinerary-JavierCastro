import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { user_logout } from "../store/actions/userActions";


export default function NavBar() {

  const navigate = useNavigate();

  const links = [
    { title: "Home", to: "/" },
    { title: "Cities", to: "/cities" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const user = useSelector(store => store.userReducer.user)
  const defaultPhoto = 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(user_logout());
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between items-center p-2">
      <div className="flex items-center">
        <img src="../public/logo/logo1_1.png" alt="Logo" className="w-30 h-20" />
        <span className="text-lg font-semibold">My Tinerary</span>
      </div>
      <div className="flex items-center md:hidden">
        <button className="text-sky-100 hover:text-indigo-600 focus:outline-none" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`ml-4 ${menuOpen ? "block" : "hidden"}`}>
          {links.map((link) => (
            <Link className="text-sky-100 hover:text-indigo-600 block mt-2" key={link.title} to={link.to}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden md:flex space-x-4">
        {links.map((link) => (
          <Link className="text-sky-100 hover:text-indigo-600" key={link.title} to={link.to}>
            {link.title}
          </Link>
        ))}
      </div>

      <div className="avatar flex flex-col items-center gap-1">
        {user ? (
          <>
            <div className="w-12 h-12 rounded-full">
              <img src={user.image || defaultPhoto} alt="avatar_photo" />
            </div>

            <button className="text-sm text-sky-100 hover:text-indigo-600" onClick={handleLogout} >
              Log Out
            </button>

          </>
        ) : (
          <div className="w-10 h-10 rounded-full">
            <a href="/signin">
              <img src={user ? user.image : defaultPhoto} alt="avatar_photo" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
