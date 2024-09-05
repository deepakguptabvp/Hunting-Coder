import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div style={{position:'sticky', top:0, zIndex:100}}>
            <nav className="bg-white border-gray-200 dark:bg-neutral-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hunting Coder</span>
                    </Link>

                    {/* <div className="bg-gray-50 dark:bg-gray-700"> */}
                    <div>
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <Link href="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-900 dark:text-white hover:underline">Blog</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-900 dark:text-white hover:underline">About</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-900 dark:text-white hover:underline">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <a href="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline"></a>
                        <a href="#" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Login</a>
                    </div>

                </div>
            </nav>

            {/* <div className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Company</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Team</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Features</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}

        </div>   
    )
    
}

export default Navbar

