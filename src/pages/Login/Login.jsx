import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
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
        <div className="mt-36 mx-4">
            <div className="w-full max-w-xl mx-auto shadow-lg md:p-10">
                <h3 className="text-xl font-bold text-center mb-10">Hello <span className="text-blue-500">Welcome</span> </h3>

                <form onSubmit={handleSubmit} className="py-4 md:py-0 px-3">
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

                    <p className="text-gray-500 text-center mt-4">Don't have an account? <Link className="ml-1 text-blue-500 font-bold" to='/signup'> Sign Up </Link> </p> 
                </form>
            </div>
        </div>
    );
};

export default Login;