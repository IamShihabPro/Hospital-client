import bg from '../../assets/images/bg.png'
import d1 from '../../assets/doctor/fd-1.png'
import d3 from '../../assets/doctor/md-1.png'
import d4 from '../../assets/doctor/md-2.png'

const Header = () => {
    return (
        <div className="pt-20 mt-16 sm:pt-10 md:pt-16 lg:pt-20 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bg})` }}>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-4'>

                    <div className="mt-4 sm:mt-20 sm:w-full md:w-3/4 lg:w-3/4 mx-auto p-2">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-sky-800">We Help Patients Live a Healthy, Longer Life</h1>
                        <p className="mb-4 text-sky-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, omnis provident deleniti molestias ipsum sit.</p>
                        <button className="px-4 py-2 mb-6 rounded-md bg-blue-500 text-white">Book Appointment</button>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-4'>
                        <img src={d4} className='w-full sm:w-72' alt="" loading="lazy" />
                        <div className='flex flex-col gap-4 hidden lg:block'>
                            <img src={d1} className='w-full sm:w-52' alt="" loading="lazy" />
                            <img src={d3} className='w-full sm:w-52' alt="" loading="lazy" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;
