import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className='w-full max-w-screen-xl mx-auto flex justify-between items-center'>
        <img src="./src/assets/logo.png" alt="Logo" />
        <ul className='m-0 flex items-center gap-[50px] mt-7'>
          <li className='hover:text-orange-500 hover:text-lg transition-all duration-200'>Home</li>
          <li className='hover:text-orange-500 hover:text-lg transition-all duration-200'>Product</li>
          <li className='hover:text-orange-500 hover:text-lg transition-all duration-200'>Faq</li>
          <li className='hover:text-orange-500 hover:text-lg transition-all duration-200'>Contact</li>
        </ul>
      </nav>

      <div className="relative bg-cover bg-center text-white py-10 px-4 w-[1500px] mx-auto auto h-150"
        style={{
          backgroundImage: `url('./src/assets/background.png')`,
        }}
      >
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg font-medium mb-2">Food app</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
            Why stay hungry when <br />
            you can order from Bella Onojie
          </h1>
          <p className="text-lg mb-8">
            Download the Bella Onojie’s food app now on
          </p>

          <div className="flex justify-center gap-4 mb-16">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full">
              Playstore
            </button>
            <button className="border border-white hover:bg-white hover:text-black text-white font-semibold py-2 px-6 rounded-full">
              App store
            </button>
          </div>
        </div>


      </div>
      <div className="flex justify-center items-start mt-[-150px]">
        <img
          src="./src/assets/phone.png"
          alt="Phone"
          className="w-[450px] drop-shadow-xl mt-[-90px]"
        />
        <img
          src="./src/assets/phome.png"
          alt="Phone 2"
          className="w-[200px] drop-shadow-xl mt-[20px]"
        />
      </div>

      <hr className="mt-[-30px] border-gray-400 my-6 w-100 mx-auto" />

    </div>

  )
}

export default Header
