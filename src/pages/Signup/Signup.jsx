import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })

    /* 
    */

    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setFormData((prev) =>({
            ...prev, [name]: value
        }))
    }
    const handleSubmit = e =>{
        e.preventDefault()
    }
    return (
        <div className="mt-28">
            <div className="px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="hidden lg:block bg-blue-500 rounded-l-lg">
                            <img className="" src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?t=st=1709125652~exp=1709129252~hmac=d1cc252bd48a47a5d7fc630111ea2506a7e346605510ab49a3ed2475db19ac95&w=740" alt="" />

                        </div>

                        <div className="w-full max-w-xl mx-auto shadow-lg md:p-10">
                            <h3 className="text-xl font-bold text-center mb-6">Create An <span className="text-blue-500">Account</span> </h3>

                            <form onSubmit={handleSubmit} className="py-4 md:py-0 px-3">
                                <div className="mb-5">
                                    <input type="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter Your Name"
                                    className="w-full px-4 py-3 border-b border-solid border-gray-600 focus:outline-none focus:border-b-blue-500 text-md leading-7 text-blue-500"
                                    />
                                </div>

                                <div className="mb-5">
                                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter Your Email"
                                    className="w-full px-4 py-3 border-b border-solid border-gray-600 focus:outline-none focus:border-b-blue-500 text-md leading-7 text-blue-500"
                                    />
                                </div>
                                <div className="mb-5">
                                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter Your Password"
                                    className="w-full px-4 py-3 border-b border-solid border-gray-600 focus:outline-none focus:border-b-blue-500 text-md leading-7 text-blue-500"
                                    />
                                </div>
                                <div>
                                    <button className="w-full bg-blue-500 px-4 py-2 text-white rounded-sm">Login</button>
                                </div>

                                <p className="text-gray-500 text-center mt-4">Already have an account? <Link className="ml-1 text-blue-500 font-bold" to='/login'> Login </Link> </p> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;