import React from 'react'

const Section = () => {
    return (
        <div className="mt-10">
            <h1 className="text-center text-4xl font-Poppins font-semibold">
                How the app works
            </h1>

            <div className="flex justify-center items-center">
                <div>
                    <img src="./src/assets/rec.png" alt="Step 1" className="w-[500px]" />
                </div>

                <div>
                    <p className="text-xl font-medium text-orange-500 font-bold">Create an account</p>
                    <h2 style={{ color: '#252B42' }} className="w-[561px] h-[114px] mt-3 text-4xl font-semibold font-Montserrat">
                        Create/login to an existing account to get started
                    </h2>
                    <p className="w-[467px] h-[76px] text-gray-500 text-2xl">
                        An account is created with your email and a desired password.
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center ml-30 mt-[-100px]">


                <div>
                    <p className="text-xl font-medium text-orange-500 font-bold">Explore varieties</p>
                    <h2 style={{ color: '#252B42' }} className="w-[561px] h-[114px] mt-3 text-4xl font-semibold font-Montserrat">
                        Shop for your favorites
                        meal as e dey hot.
                    </h2>
                    <p className="w-[467px] h-[76px] text-gray-500 text-2xl">
                        Shop for your favorite meals or drinks
                        and enjoy while doing it.
                    </p>
                </div>

                <div>
                    <img src="./src/assets/reck.png" alt="Step 1" className="w-[500px]" />
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div>
                    <img src="./src/assets/res.png" alt="Step 1" className="w-[500px]" />
                </div>

                <div>
                    <p className="text-xl font-medium text-orange-500 font-bold">Checkout</p>
                    <h2 style={{ color: '#252B42' }} className="w-[561px] h-[114px] mt-3 text-4xl font-semibold font-Montserrat">
                        When you done check out
                        and get it delivered.
                    </h2>
                    <p className="w-[467px] h-[76px] text-gray-500 text-2xl">
                        When you done check out and get it
                        delivered with ease.
                    </p>
                </div>
            </div>


            <div className="relative bg-cover bg-center text-white py-10 px-4 w-[1500px] mx-auto auto h-150"
                style={{
                    backgroundImage: `url('./src/assets/bg.png')`,
                }}
            >
                <div className="text-center max-w-2xl mx-auto">

                    <h1 className='mt-50 text-4xl font-bold font-Montserrat'>Download the app now.</h1>
                    <p className='mt-7 text-xl font-medium'>Available on your favorite store. Start your premium experience now</p>

                    <div className="flex justify-center gap-4 mt-15">
                        <button className="bg-orange-500 w-[142px] h-[64px] rounded-lg hover:bg-orange-600 text-white font-semibold py-2 px-6">
                            Playstore
                        </button>
                        <button className="border border-white w-[173px] h-[64px] rounded-lg hover:bg-white hover:text-black text-white font-semibold py-2 px-6">
                            App store
                        </button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Section
