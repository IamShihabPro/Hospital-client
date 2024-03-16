import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SignUp from '../../assets/images/signup.jpg'
import UserIcon from '../../assets/images/User-Icon.png'
import { AuthContext } from "../../Provider/AuthProvider";
const Signup = () => {
    const {createUser, loading, setLoading } = useContext(AuthContext)

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        role:'patient', // Default role
        gender:'male'   // Default gender
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
        console.log(formData)

        createUser(formData.email, formData.password)
        .then(res =>{
            const user = res.user
        })
        .catch(err =>{
            console.log(err)
        })
    }
    return (
        <div className="mt-28">
            <div className="px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="hidden lg:block rounded-l-lg">
                            <img className="" src={SignUp} alt="" />

                        </div>

                        <div className="w-full max-w-xl mx-auto shadow-lg md:p-10">
                            <h3 className="text-xl font-bold text-center mt-2 mb-6">Create An <span className="text-blue-500">Account</span> </h3>

                            <form onSubmit={handleSubmit} className="py-4 md:py-0 px-3">
                                <div className="mb-5">
                                    <input type="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name"
                                    className="w-full px-4 py-3 border-b border-solid border-gray-600 focus:outline-none focus:border-b-blue-500 text-md leading-7 text-blue-500"
                                    />
                                </div>

                                <div className="mb-5">
                                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email"
                                    className="w-full px-4 py-3 border-b border-solid border-gray-600 focus:outline-none focus:border-b-blue-500 text-md leading-7 text-blue-500"
                                    />
                                </div>
                                <div className="mb-5">
                                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password"
                                    className="w-full px-4 py-3 border-b border-solid border-gray-600 focus:outline-none focus:border-b-blue-500 text-md leading-7 text-blue-500"
                                    />
                                </div>

                               <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center mb-6">
                                    <label className="font-semibold text-gray-700 leading-7">
                                        Are you:
                                        <select 
                                        name="role" value={formData.role} onChange={handleInputChange}
                                        className="ml-2 focus:outline-none font-semibold text-gray-600 leading-7 px-2 py-2"
                                        >
                                        <option value="patient">Patient</option>
                                        <option value="doctor">Doctor</option>
                                        </select>
                                    </label>

                                    <label className="font-semibold text-gray-700 leading-7">
                                        Gender:
                                        <select 
                                        name="gender" value={formData.gender} onChange={handleInputChange}
                                        className="ml-2 focus:outline-none font-semibold text-gray-600 leading-7 px-2 py-2"
                                        >
                                        <option value="patient">Male</option>
                                        <option value="doctor">Female</option>
                                        </select>
                                    </label>
                                </div>

                                <div className="my-2 flex items-center gap-3">
                                    <div className="">
                                        <figure className="w-10 h-10 rounded-full border-2 border-solid border-blue-600">
                                                <img src={UserIcon} alt="" />
                                        </figure>
                                    </div>
                                    <div className="relative w-32 h-12">
                                        <input type="file" id="customFile" name="photo" accept=".jpg, .png" 
                                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                                        />
                                        <label htmlFor="customFile" className="absolute top-0 left-0 w-full h-full flex items-center px-2  leading-6 overflow-hidden bg-blue-400 text-white font-semibold rounded-lg cursor-pointer truncate">Upload Image</label>
                                    </div>
                                </div>


                                <div>
                                    <button className="w-full bg-blue-500 px-4 py-2 text-white rounded-sm mt-2">Sign Up</button>
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