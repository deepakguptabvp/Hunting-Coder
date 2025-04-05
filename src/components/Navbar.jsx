import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "#d3d9d1",
      }}
    >
      <nav className="border-gray-200  dark:bg-neutral-800 shadow-xl">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Hunting Coder
            </span>
          </Link>

          <div className="justify-center items-center">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
              <div className="flex items-center justify-center">
                <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse md:text-lg text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-900 dark:text-white hover:underline"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-gray-900 dark:text-white hover:underline"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-900 dark:text-white hover:underline"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-900 dark:text-white hover:underline"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
