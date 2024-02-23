import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaUserDoctor } from "react-icons/im";

import { Link } from 'react-router-dom';


const Nabvbar = () => {
 
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, link: '/', title: 'Home' },
    { id: 2, link: '/services', title: 'Services' },
    { id: 3, link: '/contact', title: 'Contact' },
    { id: 4, link: '/login', title: 'Login' },
  ];

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed top-0 inset-x-0 z-50 shadow-sm">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className=''>
                   <Link to='/'> <h1 className='font-bold text-3xl font-serif flex justify-center items-center gap-2 text-orange-600'><span><FaUserDoctor /></span> Medicare</h1> </Link>
                </div>

                <div className='hidden md:block lg:block'>
                    <div className="ml-10 flex items-baseline space-x-4">
                        {
                            navItems.map(({id, link, title})=> (
                                <Link  key={id} to={link} className="text-gray-800 hover:text-orange-500 hover:scale-105 px-3 py-2 rounded-md text-lg font-serif font-bold">
                                {title}
                                </Link>
                            ))
                        }

                    </div>
                </div>

                <div className='-mr-2 flex md:hidden shadow-md'>
                    <button onClick={toggleNavbar} type='button' className='inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out' aria-label="Toggle navigation">
                    {
                        isOpen ? (
                        <FaTimes className="h-6 w-6" />) : 
                        (<FaBars className="h-6 w-6" /> )
                    }
                    </button>

                </div>
            </div>


            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-50 py-2 px-2 shadow-sm`}>
                <div>
                    {
                        navItems.map(({id, link, title})=>(
                            <Link key={id} to={link} className="block text-gray-900 px-3 py-2 rounded-md text-base font-bold font-serif">
                            {title}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Nabvbar;