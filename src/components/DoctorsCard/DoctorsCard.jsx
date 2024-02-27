import { FaEye } from "react-icons/fa";

const DoctorsCard = ({doctor}) => {
    const {experience_years, hosptal, name, specialty, location, rating, photo, reviews} = doctor
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
             
              <p className="text-white bg-blue-400 inline-block px-4 py-1 rounded-sm">{specialty}</p>
              <p className="">Experience: {experience_years} years</p>
            </div>
          </div>
            <button className="bg-orange-500 px-4 py-2 w-full mt-2 rounded-md text-white font-serif">
              Add to cart
            </button>
        </div>
      </div>
    );
};

export default DoctorsCard;