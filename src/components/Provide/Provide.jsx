import Location from '../../assets/images/location.jpg'
import Doctor from '../../assets/images/doctor.jpg'
import Appoinment from '../../assets/images/appoinment.jpg'

const Provide = () => {
    return (
        <div className="container mx-auto my-20 md:mt-24">
        <h1 className='text-3xl md:text-4xl font-bold text-center mb-8 text-blue-800 p-4'>Providing The Best Medical Services</h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-8">
            {/* Location */}
            <div className="mb-8 md:mb-0 flex flex-col justify-between items-center md:items-start">
                <img src={Location} className='w-64 h-56 rounded-lg shadow-md' alt="Location" />
                <div className="mt-4 text-center md:text-left">
                    <h2 className="text-lg md:text-xl font-semibold text-blue-800">Location</h2>
                    <p className="text-sm md:text-base text-gray-600">Conveniently located in the heart of the city.</p>
                </div>
            </div>

            {/* Doctor */}
            <div className="mb-8 md:mb-0 flex flex-col justify-between items-center md:items-start">
                <img src={Doctor} className='w-64 h-56 rounded-lg shadow-md' alt="Doctor" />
                <div className="mt-4 text-center md:text-left">
                    <h2 className="text-lg md:text-xl font-semibold text-blue-800">Expert Doctors</h2>
                    <p className="text-sm md:text-base text-gray-600">Highly skilled and experienced medical professionals.</p>
                </div>
            </div>

            {/* Appointment */}
            <div className="flex flex-col justify-between items-center md:items-start">
                <img src={Appoinment} className='w-64 h-56 rounded-lg shadow-md' alt="Appointment" />
                <div className="mt-4 text-center md:text-left">
                    <h2 className="text-lg md:text-xl font-semibold text-blue-800">Easy Appointments</h2>
                    <p className="text-sm md:text-base text-gray-600">Seamless appointment booking process.</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Provide;
