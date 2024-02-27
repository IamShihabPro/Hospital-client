import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { IoLocationOutline } from "react-icons/io5";
import { FaCircleArrowRight } from 'react-icons/fa6';

const DoctorsCard = ({doctor}) => {
    const {experience_years, hospital, name, specialty, location, rating, photo, reviews} = doctor
    return (
        <div className="container">
        <div className="bg-white text-black p-4 group rounded shadow mb-4">
          <img
            src={photo}
            className="w-full h-40 object-cover mb-4 group-hover:scale-110 transition duration-300"
            alt={name}
          />
           <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <div className="flex justify-between items-center mt-2">
            <div>
             <div>
                <p className="text-white bg-blue-400 inline-block px-4 py-1 rounded-sm">{specialty}</p>
                <div className='flex items-center'>
                    <Rating style={{ maxWidth: 70 }} value={rating} readOnly />
                    <div className='flex items-center my-2'>
                        <span className='mr-2 my-1'>{rating}</span> (<span>{reviews}</span>)
                    </div>
                </div>
             </div>
              <p className="text-gray-500">Experience {experience_years} years</p>
            </div>
          </div>
          <h1 className='text-gray-600 font-medium'>{hospital}</h1>
          <div className='flex justify-between items-center'>
            <h1 className='flex items-center gap-2 justify-start'> <span> <IoLocationOutline/> </span> {location}</h1>
            <button className='rounded-full text-white bg-blue-600 mt-3'> < FaCircleArrowRight className='w-6 h-6' /> </button>
          </div>

        </div>
      </div>
    );
};

export default DoctorsCard;