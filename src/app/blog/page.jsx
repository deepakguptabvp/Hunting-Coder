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
    // old-base-code
    <div className="min-h-lvh flex flex-col p-5 pr-10 pl-10 container mx-auto">
      <h2 className="text-3xl text-center mb-5 font-bold font-sans">
        <u> Latest Blogs </u>
      </h2>

      {loading
        ? skeletonBlog?.map((item, index) => {
            return (
              <div key={index} className="group rounded-lg border border-transparent p-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                <Skeleton className={`mb-2`} height={"1rem"} width={200} />
                <hr />
                <Skeleton className={`text-sm opacity-50 mt-1`} height={"1rem"}/>
                <Skeleton className={`text-sm opacity-50`} height={"1rem"} />
                <Skeleton className={`text-sm opacity-50`} height={"1rem"} />
                <Skeleton className={`text-sm opacity-50`} height={"1rem"} />
              </div>
            );
          })
        : blogs?.map((blogs, index) => {
            return (
              <Link
                href={`/blogpost/${blogs.slug}`}

                // http://localhost:3000/blog ----content part 
                className="group w-[70%] m-auto mb-8 p-5 gap-y-4 rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                // target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <h2 className={`mb-1 text-xl font-semibold`}>
                  {blogs.title}
                  <span className="inline-block">-&gt;</span>
                  <hr />
                </h2>
                <p className={`max-w-[190ch] text-sm opacity-50`}>
                  {blogs.content.substr(0, 320)}...{" "}
                </p>
              </Link>
            );
          })}

      <p style={{ textAlign: "center", margin: "5px" }}>
        <b>Yay! You have seen it all ...</b>
      </p>
    </div>
  );
};

export default page;
