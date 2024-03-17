import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaUserDoctor } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 w-full">
      <div className="container mx-auto px-4 py-2 text-center text-gray-900 drop-shadow-lg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">

          <div className="flex flex-col justify-between items-start gap-4">
            <h1 className="text-3xl font-bold flex justify-center gap-2 items-center text-blue-600"> <FaUserDoctor/> Medicare</h1>
            <div className="text-start">
              <p>Chittagong, Bangladesh</p>
              {/* <p>Bangladesh</p> */}
            </div>
            <div className="text-start">
              <h1>Phone: +8801850411622</h1>
              <h1>Email: mshihab.pro@gmail.com</h1>
            </div>

            <div className="flex space-x-4">
              <FaTwitter className="text-blue-500 hover:text-blue-700 cursor-pointer" size={24} />
              <FaFacebook className="text-blue-500 hover:text-blue-700 cursor-pointer" size={24} />
              <FaInstagram className="text-pink-500 hover:text-pink-700 cursor-pointer" size={24} />
              <FaLinkedin className="text-blue-500 hover:text-blue-700 cursor-pointer" size={24} />
            </div>
          </div>

          <div className="flex flex-col justify-between items-start gap-2">
            <h1 className="text-lg font-bold">Useful Links</h1>
            <p className="flex justify-center items-center"> <MdKeyboardArrowRight/> <span>Home</span> </p>
            <p className="flex justify-center items-center"> <MdKeyboardArrowRight/> <span>Services</span> </p>
            <p className="flex justify-center items-center"> <MdKeyboardArrowRight/> <span>About</span> </p>
            <p className="flex justify-center items-center"> <MdKeyboardArrowRight/> <span>Terms of service</span> </p>
            <p className="flex justify-center items-center"> <MdKeyboardArrowRight/> <span>Privacy and policy</span> </p>
          </div>

          <div className="flex flex-col justify-between items-start gap-2">
            <h1 className="text-lg font-bold">Our Services</h1>
            <p className="flex justify-center items-center"> <MdKeyboardArrowRight/> <span>Web Development</span> </p>
            <p className="flex justify-center items-center"> <MdKeyboardArrowRight/> <span>Web Design</span> </p>
            <p className="flex justify-center items-center"> <MdKeyboardArrowRight/> <span>Graphic Design</span> </p>
            <p className="flex justify-center items-center"> <MdKeyboardArrowRight/> <span>Product Management</span> </p>
            <p className="flex justify-center items-center"> <MdKeyboardArrowRight/> <span>Marketing</span> </p>
          </div>

          <div className="flex flex-col justify-between items-start">
            <h1 className="text-lg font-bold">Our Newsletter</h1>
            <p className="text-start">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>

            <div className="bg-black/30 rounded-sm w-full py-2 px-1 flex items-center my-3">
              {/* Input Field */}
              <input
                type="text"
                className="border-none p-2 bg-black/30 text-white hover:bg-black/30 w-full px-2 focus:outline-none"
                placeholder="Your email"
              />

              {/* Subscribe Button */}
              <button className="text-white bg-blue-600 px-4 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className='w-full h-1 mt-4' />
      <div className="mt-4 bg-gray-100">
        <div className="container mx-auto px-4 py-2 text-center drop-shadow-lg">
          <p className='text-blue-800 font-medium text-md'>&copy; {new Date().getFullYear()} Shihab. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;