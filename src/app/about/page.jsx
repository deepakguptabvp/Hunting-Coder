import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCode, FaGithub, FaTerminal, FaLaptopCode } from "react-icons/fa";

const page = () => {
  return (
    <div className="min-h-lvh bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <section className="relative overflow-hidden p-7">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left column with images */}
            <div className="lg:w-2/4 text-center">
              <div className="min-w-48">
                <div className="w-full text-center">
                  <div className="py-3 sm:py-4 text-center relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <Image
                      src="/image-1.jpg"
                      alt="Coding illustration"
                      height={600}
                      width={400}
                      className="rounded-full m-auto sm:px-6 xl:w-3/4 relative z-10 border-4 border-gray-700 shadow-2xl transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <div className="py-3 sm:py-4 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <Image
                      src="/image-2.jpg"
                      alt="Developer illustration"
                      height={200}
                      width={200}
                      className="rounded-full m-auto sm:px-6 xl:w-3/4 relative z-10 border-4 border-gray-700 shadow-2xl transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right column with content */}
            <div className="w-full lg:w-3/4 xl:w-3/4">
              <div className="mt-10 lg:mt-0">
                <div className="flex items-center mb-6">
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></div>
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-mono">
                    About us
                  </h2>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 shadow-xl mb-8">
                  <p className="text-base text-gray-300 leading-relaxed">
                    At{" "}
                    <span className="text-blue-400 font-semibold">
                      Hunting Coders
                    </span>
                    , we believe in the power of coding to transform ideas into
                    reality. Our blog is a digital hub where passionate coders,
                    developers, and tech enthusiasts converge to explore, learn,
                    and share their knowledge about the ever-evolving world of
                    programming.
                  </p>
                </div>

                <h2 className="mb-6 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 font-mono">
                  Making coders community happy by giving services.
                </h2>

                <div className="flex items-center mb-6">
                  <FaCode className="text-blue-400 mr-2 text-xl" />
                  <span className="text-blue-400 font-mono">
                    Crafting Code, Building Dreams
                  </span>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                        <FaGithub className="text-blue-400 text-xl" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-400 font-mono">
                        Community Building
                      </h3>
                    </div>
                    <p className="text-gray-300 pl-12">
                      Join a thriving community of like-minded individuals who
                      share a passion for coding. Connect with fellow
                      developers, ask questions, and engage in discussions that
                      foster learning and collaboration.
                    </p>
                  </div>

                  <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-lg border border-gray-700 hover:border-green-500 transition-colors duration-300">
                    <div className="flex items-center mb-2">
                      <div className="bg-green-500/20 p-2 rounded-full mr-3">
                        <FaTerminal className="text-green-400 text-xl" />
                      </div>
                      <h3 className="text-lg font-semibold text-green-400 font-mono">
                        Problem Solving
                      </h3>
                    </div>
                    <p className="text-gray-300 pl-12">
                      Encounter coding challenges? Our blog provides practical
                      solutions and troubleshooting guides to help you overcome
                      obstacles in your coding journey.
                    </p>
                  </div>

                  <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors duration-300">
                    <div className="flex items-center mb-2">
                      <div className="bg-purple-500/20 p-2 rounded-full mr-3">
                        <FaLaptopCode className="text-purple-400 text-xl" />
                      </div>
                      <h3 className="text-lg font-semibold text-purple-400 font-mono">
                        Learning Paths
                      </h3>
                    </div>
                    <p className="text-gray-300 pl-12">
                      Structured learning resources to help you master
                      programming concepts, from beginner to advanced. Follow
                      our curated paths to build your skills systematically.
                    </p>
                  </div>

                  <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors duration-300">
                    <div className="flex items-center mb-2">
                      <div className="bg-yellow-500/20 p-2 rounded-full mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-yellow-400 font-mono">
                        Tech Trends and Insights
                      </h3>
                    </div>
                    <p className="text-gray-300 pl-12">
                      Stay ahead of the curve with our coverage of the latest
                      trends, tools, and frameworks in the tech industry. Our
                      team of experts keeps you informed about the rapidly
                      changing landscape of programming.
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-gray-800/50 backdrop-blur-sm p-5 rounded-lg border border-gray-700">
                  <p className="text-gray-300 italic">
                    Thank you for being part of the CodeCrafters community.
                    Together, let's code the future!
                  </p>
                  <p className="text-gray-300 mt-2">
                    Happy coding! <br />
                    <span className="text-blue-400 font-mono">
                      The CodeCrafters Team
                    </span>
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center py-3 px-7 mt-6 text-base font-medium text-center text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
