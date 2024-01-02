'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
// import styles from '../styles/Blog.module.css'

// Step: 1  Collect all files from blogdata directory.
// Step: 2  Iterate through and display them.

const page = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    console.log("useEffect is running...")
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000/api/blog')
      const data = await res.json()
      setBlogs(data.data)
      console.log(data);
    }
    fetchData();
  }, [])


  return (

    // old-base-code
    <div className="min-h-lvh flex flex-col p-5  " style={{ "marginLeft": "300px", "marginRight": "300px" }} >
      <h2 className='text-4xl text-center m-5 font-bold hover:text-blue-800'><u>  Latest Blogs </u></h2>

      {blogs.map((blogs) => {
        return <Link href={`/blogpost/${blogs.slug}`}
          className="mb-2 group rounded-lg border border-transparent px-5 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer" key={blogs.slug}>

          <h2 className={`mb-1 text-2xl font-semibold`}>
            {blogs.title}
            <span className="inline-block">-&gt;</span>
            <hr />
          </h2>
          <p className={`max-w-[190ch] text-sm opacity-50`}>
            {blogs.content.substr(0, 160)}... </p>
        </Link>

      })
      }

    </div>

  )
}

export default page
