import { Parallax } from 'react-parallax';
import Bg from '../../assets/doctor/slider1.jpg';
import Doctor from '../../assets/doctor/md-1.png';

const ParallaxSection = () => {
    return (
        <div className='my-20'>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={Bg}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className="max-w-7xl mx-auto hero min-h-[600px] relative">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center px-4 sm:px-6 lg:px-0 gap-6 lg:gap-0">
                            {/* Left side: Content */}
                            <div className="w-full lg:w-1/2 bg-black/60 text-white flex flex-col justify-center items-center py-6 m-4">
                                <h2 className="text-4xl font-bold mb-4 p-4">Proud To Be One Of The <br /> <span className='text-blue-500'> Nation's Best</span></h2>
                                <p className="px-6 lg:px-12 text-center text-white">
                                    <span className="inline-block sm:block text-justify">
                                        A hospital is a medical facility that provides comprehensive healthcare services to patients in need of medical attention. It is typically staffed with medical professionals, including doctors, nurses, and support staff, who work together to diagnose, treat, and care for patients.
                                    </span>
                                </p>
                                <button className='bg-blue-600 text-white rounded-md px-4 py-2 mt-4 lg:mt-6'>Learn More</button>
                            </div>
                            {/* Right side: Image */}
                            <div className="w-full lg:w-1/2 flex justify-center">
                                <img src={Doctor} alt="Doctor" className="w-full h-auto lg:max-h-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default ParallaxSection;
