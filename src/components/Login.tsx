import React from 'react'

const Login = () => {
    return (
        <div className='w-full flex justify-center h-4/6 mt-10'>
            <div className='w-4/12 h-96  bg-black opacity-80'>
                <div>
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
                            <button className="bg-[#B00710] hover:bg-[#8a060c] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                                Submit
                            </button>                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login