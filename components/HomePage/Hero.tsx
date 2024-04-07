import React from 'react'

const Hero = () => {
    return (
        <>
            <div className=" relative w-screen flex justify-center">
                <div className='absolute bg-black w-screen h-screen '>

                    <img className='absolute z-0 w-full h-screen object-cover object-top opacity-70 ' src="/image1.jpg" alt="photo" />
                </div>

                {/* Text section */}
                <div className=' relative flex flex-col text-white pt-80 lg:pt-96 w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 h-screen items-center text-center lg:text-left lg:items-start'>
                    <h1 className='text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold mb-5'>Welcome to <br /> Stauden Peters</h1>
                    <h5 className='text-xl mb-8'>Your perennial and grass producer from the Lower Rhine</h5>

                    <div className='relative'>


                        <button className=" mt-4 w-48 bg-white text-blue-900 px-6 py-3  rounded-xl text-xl font-medium
                      hover:text-white hover:bg-slate-900 ease-in duration-300" >Read More</button>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Hero