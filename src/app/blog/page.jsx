'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Skeleton from "react-loading-skeleton";
// import styles from '../styles/Blog.module.css'

// Step: 1  Collect all files from blogdata directory.
// Step: 2  Iterate through and display them.

const page = () => {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true)
  
  const skeletonBlog = [1, 2, 3, 4]

  useEffect(() => {
    console.log("Blog Post ----- useEffect is running...")

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
    <div className="min-h-lvh flex flex-col p-5  " style={{ "marginLeft": "300px", "marginRight": "300px" }} >
      <h2 className='text-4xl text-center m-5 font-bold hover:text-blue-800'><u>  Latest Blogs </u></h2>

      {loading ? (skeletonBlog?.map((item, index) => {
            return <div
              className="group rounded-lg border border-transparent px-5 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <Skeleton className={`mb-2`} height={"1.25rem"} />
              <hr />
              <Skeleton className={`text-sm opacity-50 mt-1`} />
              <Skeleton className={`text-sm opacity-50`} />
              <Skeleton className={`text-sm opacity-50`} />
              <Skeleton className={`text-sm opacity-50`} />
            </div>
          })

        ) : (
          blogs?.map((blogs) => {
            return (
              <Link
                href={`/blogpost/${blogs.slug}`}
                className="group rounded-lg border border-transparent px-5 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
                key={blogs.slug}
              >
                <h2 className={`mb-1 text-xl font-semibold`}>
                  {blogs.title}
                  {/* <span className="inline-block">-&gt;</span> */}
                  <hr />
                </h2>
                <p className={`max-w-[190ch] text-sm opacity-50`}>
                  {blogs.content.substr(0, 320)}...{" "}
                </p>
              </Link>
            );
          })
        )}

    </div>

  )
}

export default page
