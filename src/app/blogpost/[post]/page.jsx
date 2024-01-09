'use client';
import { useRouter } from 'next/navigation'
import React from 'react'
import { useEffect, useState } from 'react';
import Skeleton from "react-loading-skeleton"

// Step:1 find the file corresponding to slug.
// Step:1 populate them inside the page. 

export default function blogpost({ params }) {

  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(true)

  const skeletonBlog = [1, 2, 3, 4]
  const router = useRouter();

  useEffect(() => {

    console.log(params);
    if (params.post) {
      setLoading(true)
      fetch(`/api/blogList?param=${params.post}`).then((a) => {
        setLoading(false)
        return a.json()
      }).then((parsed) => {
        console.log(parsed)
        setBlog(parsed.data)
      })
    }
  }, [])


  return (
    <div className='min-h-lvh container mx-auto pr-10 pl-10 mb-10 mt-10' >
      <div className="group rounded-lg border border-transparent px-5 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h3 className='font-bold text-center text-2xl'>{blog?.title}</h3>
        <hr />
        <div className='mb-3 mt-3'> <b><u>Content</u></b> : {blog?.content} </div>
        <div className='mb-3'> <b><u>Author</u></b> : {blog?.author} </div>
        <div className='mb-3'> <b><u>URL</u></b> : {blog?.url}</div>
      </div>
    </div>
  )
}

