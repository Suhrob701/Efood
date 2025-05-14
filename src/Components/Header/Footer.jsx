import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-white py-8 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">


                    <div>
                        <img src="./src/assets/logo.png" alt="Bella Onojie" className="h-20" />
                    </div>

                    <div className="flex gap-4 items-center mt-8">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="./src/assets/twitter.png" alt="Twitter" className="h-6 w-6" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="./src/assets/facebook.png" alt="Facebook" className="h-6 w-6" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="./src/assets/instagram.png" alt="Instagram" className="h-6 w-6" />
                        </a>
                    </div>

                    <div>
                        <p className="text-sm text-gray-600 mt-8">
                            Copyright 2020 Bella Onojie.com
                        </p>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
