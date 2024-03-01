import ServicesList from '../../assets/data/services'
import { FaCircleArrowRight } from "react-icons/fa6";

const Services = () => {
    return (
        <div className='container mx-auto my-20'>
            <h1 className='text-4xl font-bold text-center mb-10'>Our Medical Services</h1>
            <div className='max-w-7xl mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
                {
                    ServicesList.map((service, i) =>(
                        <div key={i} className="bg-white text-black p-4 group rounded shadow mb-4">
                       
                        <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                        <div className="flex flex-col justify-between items-start">
                            <div>
                            <p className='text-gray-500'>{service.description}</p>
                            </div>
                            <button className='rounded-full text-white bg-blue-600 mt-3'> < FaCircleArrowRight className='w-6 h-6' /> </button>
                        </div>
                        </div>
                    ))
                }
            </div>
            </div>
        </div>
    );
};

export default Services;