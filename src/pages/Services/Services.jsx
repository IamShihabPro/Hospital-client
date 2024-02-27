import doctorsList from '../../assets/data/doctors.js'
import DoctorsCard from '../../components/DoctorsCard/DoctorsCard.jsx';
const Services = () => {
    return (
        <div className="mt-20">
            <div className='bg-slate-200'>
                <div className="container mx-auto bg-slate-200 py-6 px-4">
                    <h1 className="text-center text-3xl my-4 font-bold text-blue-500">Find a Doctor</h1>
                    <div className="max-w-xl text-center mx-auto bg-blue-500 py-4 rounded-lg flex items-center justify-between px-4 gap-0">
                        <input type="search" className="py-3 px-4 w-full focus:outline-none bg-gray-200 placeholder:text-gray-500" placeholder="Search Doctor" />
                        <button className="btn px-4 py-3 bg-white text-blue-500 font-bold">Search</button>
                    </div>
                </div>
                
            </div>

            <div>
            <div className='container mx-auto mt-10 bg-white px-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        {
                            doctorsList?.map((doctor, i) => (
                                <DoctorsCard key={i} doctor={doctor} ></DoctorsCard>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;