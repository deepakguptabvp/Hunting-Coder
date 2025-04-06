"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
// import styles from '../styles/Blog.module.css'

// Step: 1  Collect all files from blogdata directory.
// Step: 2  Iterate through and display them.

const page = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const skeletonBlog = [1, 2, 3, 4];

  useEffect(() => {
    console.log("Blog Post ----- useEffect is running...");

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/blogList`);
        const data = await res.json();
        setLoading(false);
        setBlogs(data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl text-center mb-10 font-bold font-mono relative">
          <span className="text-purple-600 dark:text-purple-400">&lt;</span>
          <span className="mx-2 dark:text-white">Latest Blogs</span>
          <span className="text-purple-600 dark:text-purple-400">/&gt;</span>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {loading
            ? skeletonBlog?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="group rounded-xl border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-700 bg-white dark:bg-gray-800"
                  >
                    <Skeleton className="mb-3" height="1.5rem" width="80%" />
                    <div className="h-px bg-gray-200 dark:bg-gray-700 my-3"></div>
                    <Skeleton
                      className="text-sm opacity-50 mt-1"
                      height="1rem"
                    />
                    <Skeleton className="text-sm opacity-50" height="1rem" />
                    <Skeleton className="text-sm opacity-50" height="1rem" />
                    <Skeleton className="text-sm opacity-50" height="1rem" />
                  </div>
                );
              })
            : blogs?.map((blog, index) => {
                return (
                  <Link
                    href={`/blogpost/${blog.slug}`}
                    className="group rounded-xl border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-700 bg-white dark:bg-gray-800 transform hover:-translate-y-3"
                    rel="noopener noreferrer"
                    key={index}
                  >
                    <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                      {blog.title}
                      <span className="inline-block ml-1 text-purple-500 dark:text-purple-400 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </h2>
                    <div className="h-px bg-gray-200 dark:bg-gray-700 my-3"></div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-4">
                      {blog.content.substr(0, 320)}...
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                        {new Date().toLocaleDateString()}
                      </span>
                      <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium rounded-lg text-sm transition-colors duration-200 flex items-center gap-2">
                        <span>Read More</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </Link>
                );
              })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 font-mono">
            <span className="text-purple-600 dark:text-purple-400">//</span> End
            of blog posts
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
