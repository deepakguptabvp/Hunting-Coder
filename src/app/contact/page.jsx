"use client";
import { React, useState } from "react";
import { toast } from "react-toastify";
import {
  FaCode,
  FaGithub,
  FaTerminal,
  FaLaptopCode,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const page = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [company_institution, setCompany_institution] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(
      first_name,
      last_name,
      company_institution,
      email,
      phone_number,
      message
    );

    const data = {
      first_name,
      last_name,
      company_institution,
      email,
      phone_number,
      message,
    };
    async function postJSON(data) {
      try {
        const response = await fetch(`/api/contactList`, {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        setLoading(false);
        if (result?.success) {
          // toast.dark("Thank you for reaching out to us.")
          toast.success("👥 Thank you for reaching out to us.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          setFirst_name("");
          setLast_name("");
          setCompany_institution("");
          setPhone_number("");
          setEmail("");
          setMessage("");
        } else {
          console.log("Error", result);
        }
      } catch (error) {
        setLoading(false);
        console.error("Error:", error);
      }
    }

    postJSON(data);
  };

  const handleChange = (e) => {
    if (e.target.name == "first-name") {
      setFirst_name(e.target.value);
    } else if (e.target.name == "last-name") {
      setLast_name(e.target.value);
    } else if (e.target.name == "company") {
      setCompany_institution(e.target.value);
    } else if (e.target.name == "phone-number") {
      setPhone_number(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "message") {
      setMessage(e.target.value);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - Contact Info */}
          <div className="w-full lg:w-1/2 xl:w-6/12">
            <div className="mb-12 lg:mb-0">
              <div className="flex items-center mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-mono">
                  GET IN TOUCH WITH US
                </h2>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 shadow-xl mb-8">
                <p className="text-base text-gray-300 leading-relaxed">
                  Welcome to our{" "}
                  <span className="text-blue-400 font-semibold">
                    Hunting Coder
                  </span>{" "}
                  community! We value your input and encourage you to reach out
                  if you have any questions, suggestions, or just want to
                  connect with fellow coding enthusiasts. Our "Contact Us"
                  section serves as a direct line between you and our team.
                  Whether you're seeking assistance with a coding challenge,
                  have feedback on our content, or want to contribute your own
                  insights, we're here to listen. <br />
                  <br />
                  Feel free to drop us a message, and we'll do our best to
                  respond promptly. Your engagement is what makes our coding
                  journey richer, and we look forward to hearing from you. Happy
                  coding!
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                      <FaMapMarkerAlt className="text-blue-400 text-xl" />
                    </div>
                    <h4 className="text-lg font-semibold text-blue-400 font-mono">
                      Our Location
                    </h4>
                  </div>
                  <p className="text-gray-300 pl-12">
                    Plot No. 44 D, Phase IV, Udyog Vihar, Sector 18, Gurugram,
                    Haryana 122001
                  </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-lg border border-gray-700 hover:border-green-500 transition-colors duration-300">
                  <div className="flex items-center mb-2">
                    <div className="bg-green-500/20 p-2 rounded-full mr-3">
                      <FaPhone className="text-green-400 text-xl" />
                    </div>
                    <h4 className="text-lg font-semibold text-green-400 font-mono">
                      Phone Number
                    </h4>
                  </div>
                  <p className="text-gray-300 pl-12">(+91)9876543285</p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors duration-300">
                  <div className="flex items-center mb-2">
                    <div className="bg-purple-500/20 p-2 rounded-full mr-3">
                      <FaEnvelope className="text-purple-400 text-xl" />
                    </div>
                    <h4 className="text-lg font-semibold text-purple-400 font-mono">
                      Email Address
                    </h4>
                  </div>
                  <p className="text-gray-300 pl-12">huntingcoders@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Contact Form */}
          <div className="w-full lg:w-1/2 xl:w-5/12">
            <div className="relative rounded-lg bg-gray-800/50 backdrop-blur-sm p-8 shadow-lg border border-gray-700 sm:p-12">
              <div className="absolute -top-4 -right-4 h-24 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 h-24 w-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur opacity-20"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-mono">
                    Send Message
                  </h3>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-semibold leading-6 text-gray-300"
                      >
                        First name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          value={first_name}
                          onChange={handleChange}
                          name="first-name"
                          required
                          id="first_name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 bg-gray-700/50 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-semibold leading-6 text-gray-300"
                      >
                        Last name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          value={last_name}
                          onChange={handleChange}
                          name="last-name"
                          required
                          id="last_name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 bg-gray-700/50 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold leading-6 text-gray-300"
                      >
                        Company/Institution
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          value={company_institution}
                          onChange={handleChange}
                          name="company"
                          required
                          id="company_institution"
                          autoComplete="organization"
                          className="block w-full rounded-md border-0 px-3.5 py-2 bg-gray-700/50 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-gray-300"
                      >
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="email"
                          value={email}
                          onChange={handleChange}
                          name="email"
                          id="email"
                          required
                          autoComplete="email"
                          className="block w-full rounded-md border-0 px-3.5 py-2 bg-gray-700/50 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-semibold leading-6 text-gray-300"
                      >
                        Phone number
                      </label>
                      <div className="relative mt-2.5">
                        <input
                          type="number"
                          value={phone_number}
                          onChange={handleChange}
                          name="phone-number"
                          placeholder="+91"
                          id="phone_number"
                          required
                          autoComplete="tel"
                          className="block w-full rounded-md border-0 px-3.5 py-2 bg-gray-700/50 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold leading-6 text-gray-300"
                      >
                        Message
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          name="message"
                          value={message}
                          onChange={handleChange}
                          id="message"
                          required
                          placeholder="Write your concern here !"
                          rows={4}
                          className="block w-full rounded-md border-0 px-3.5 py-2 bg-gray-700/50 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <button
                      type="submit"
                      disabled={loading}
                      className="block w-full rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-all duration-300"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        "Let's talk"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
