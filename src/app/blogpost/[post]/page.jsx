'use client';
import { useRouter } from 'next/navigation'
import React from 'react'
import { useEffect, useState } from 'react';


// Step:1 find the file corresponding to slug.
// Step:1 populate them inside the page. 

export default function blogpost({ params }) {

  const [blog, setBlog] = useState();
  const router = useRouter();

  useEffect(() => {

    console.log(params);
    if (params.post) {
      fetch(`http://localhost:3000/api/blog?param=${params.post}`).then((a) => {
        return a.json()
      }).then((parsed) => {
        console.log(parsed)
        setBlog(parsed.data)
      })
    }
  }, [])


  //   console.log("useEffect is running...")
  //   if(params.post){
  //   const fetchData1 = async () => {
  //     const res = await fetch('http://localhost:3000/api/blog?param=${params.post}')
  //     const data = await res.json()
  //     console.log(data);
  //     setBlog(data?.parsed?.data)
  //   }
  //   fetchData1();
  // }
  // }, [])


  return <div className='min-h-lvh  mt-10' style={{ "marginLeft": "300px", "marginRight": "300px" }}>
    <h3 className='font-bold text-center text-2xl'>{blog?.title}</h3>
    <hr />
    <div className='mb-3 mt-3'> <b><u>Content</u></b> : {blog?.content} </div>
    <div className='mb-3'> <b><u>Author</u></b> : {blog?.author} </div>
    <div className='mb-3'> <b><u>URL</u></b> : {blog?.url}</div>
  </div>
  
}

