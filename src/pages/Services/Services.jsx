const Services = () => {
    return (
        <div className="mt-20">
            <div className="container mx-auto bg-slate-200 py-4">
                <h1 className="text-center text-3xl my-4 font-bold text-blue-500">Find a Doctor</h1>
                <div className="max-w-xl text-center mx-auto bg-blue-500 py-4 rounded-lg flex items-center justify-between px-4 gap-0">
                    <input type="search" className="py-3 px-4 w-full focus:outline-none bg-gray-200 placeholder:text-gray-500" placeholder="Search Doctor" />
                    <button className="btn px-4 py-3 bg-white text-blue-500 font-bold">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Services;