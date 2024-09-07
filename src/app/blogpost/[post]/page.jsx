"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";
// import Link from "next/link";

// Step:1 find the file corresponding to slug.
// Step:2 populate them inside the page.

export default function blogpost({ params }) {
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(true);

  const skeletonBlog = [1, 2, 3, 4];
  const router = useRouter();

  useEffect(() => {
    console.log(params);
    if (params.post) {
      setLoading(true);
      fetch(`/api/blogList?param=${params.post}`)
        .then((a) => {
          setLoading(false);
          return a.json();
        })
        .then((parsed) => {
          console.log(parsed);
          setBlog(parsed.data);
        });
    }
  }, []);

  return (
    <div className="min-h-lvh container mx-auto pr-10 pl-10 mb-10 mt-10">
      <div className="group w-[70%] m-auto rounded-lg border border-transparent p-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h3 className="font-bold text-center text-2xl">{blog?.title}</h3>
        <hr className="my-1 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-1" />
        <div className="mb-3 mt-3">
          {" "}
          <b>
            <u>Description</u>
          </b>{" "}
          : <p className="text-wrap"> {blog?.content}</p>{" "}
        </div>
        <div className="mb-3">
          {" "}
          <b>
            <u>Author</u>
          </b>{" "}
          : {blog?.author}{" "}
        </div>
        <div className="mb-3">
          {" "}
          <b>
            <u>Website Link</u>
          </b>{" "} 
          :
            <a className="hover:underline" href= {blog?.url}> {blog?.url}</a> (Click to open URL) {" "} 
        </div>
      </div>
    </div>
  );
}
