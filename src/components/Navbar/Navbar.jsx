import { useContext, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaUserDoctor } from "react-icons/fa6";
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const {user, logOut} = useContext(AuthContext)

  const handleLogout = () =>{
    logOut().then(()=>{}).catch(err => console.log(err))
  }

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 1, link: '/', title: 'Home' },
    { id: 2, link: '/services', title: 'Services' },
    { id: 3, link: '/contact', title: 'Contact' },
    // { id: 4, link: '/login', title: 'Login' },
  ];

  return (
    <nav className="bg-white fixed top-0 inset-x-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <NavLink to="/" className="flex items-center gap-2 text-blue-500">
              <FaUserDoctor className="h-8 w-8" />
              <h1 className="font-bold text-3xl">Medicare</h1>
            </NavLink>
          </div>

          <div className="hidden md:block lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(({ id, link, title }) => (
                <NavLink
                  key={id}
                  to={link}
                  activeClassName="text-red-500" // Color for active page
                  className={` hover:scale-105 px-3 py-2 rounded-md text-lg font-bold  ${
                    location.pathname === link ? 'text-sky-500' : 'text-gray-800'}`} >
                  {title}
                </NavLink>
              ))}

              {
                user ? <NavLink onClick={handleLogout} className={` hover:scale-105 px-3 py-2 rounded-md text-lg font-bold text-gray-800`} >Logout</NavLink>
                    : <NavLink to='/login' activeClassName="text-red-500" className={` hover:scale-105 px-3 py-2 rounded-md text-lg font-bold  ${
                      location.pathname === '/login' ? 'text-sky-500' : 'text-gray-800'}`} >Login</NavLink>
              }

              {/* <NavLink to='/login' activeClassName="text-red-500" className={` hover:scale-105 px-3 py-2 rounded-md text-lg font-bold  ${
                    location.pathname === '/login' ? 'text-sky-500' : 'text-gray-800'}`} >Login</NavLink> */}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden shadow-md">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-500 hover:text-white  focus:bg-blue-500 focus:text-white transition duration-300 ease-in-out"
              aria-label="Toggle navigation"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div className={`md:hidden lg:hidden py-2 px-2 shadow-sm fixed left-0 top-0 h-full w-1/2 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-blue-400`}>
          <div className="flex flex-col justify-start items-start h-full mt-20">
            {navItems.map(({ id, link, title }) => (
              <NavLink
                key={id}
                to={link}
                activeClassName="text-red-500" // Color for active page
                className={`block px-3 py-2 rounded-md text-base font-bold mb-2 ${
                  location.pathname === link ? 'text-gray-700' : 'text-white'
                }`}
              >
                {title}
              </NavLink>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
