import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = (e: any) => {
        console.log(e)
        navigate('/home');
        console.log('form submitted');
    }
    return (
        <div className='w-full flex justify-center h-4/6 mt-10 '>
            <div className='h-96 sm:w-8/12 md:w-6/12 lg:w-4/12 bg-black opacity-80'>
                <div className='w-full'>
                    <h1 className='text-3xl text-white text-center pt-10'>Login</h1>
                    <form className='w-4/5 mx-auto gap-5 flex flex-col justify-center'>
                        <div>
                            <label className='text-white text-lg'>Email:</label>
                            <input type="email" className='w-full h-10 bg-gray-200 text-lg' />
                        </div>
                        <div>
                            <label className='text-white text-lg'>Password:</label>
                            <input type="password" className='w-full h-10 bg-gray-200 text-lg' />
                        </div>
                        <div className='flex justify-center'>
                            <button className="bg-[#B00710] hover:bg-[#8a060c] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                                type="button" onClick={(e) => handleSubmit(e)}>
                                Submit
                            </button>                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login