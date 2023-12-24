import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const page = () => {
  return (

    // Step: 1  Collect all files from blogdata directory.
    // Step: 2  Iterate through and display them.

    // old-base-code
    <div className="min-h-lvh flex flex-col justify-center">

      <h2 className='text-4xl text-center p-5 font-bold hover:text-cyan-800'>Latest Blogs</h2>
      <Link  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        // className="group rounded-lg border m-2  max-w-md border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer">

        <h2 className={`mb-3 text-2xl font-semibold`}>
          Docs{" "}
          <span className="inline-block">
            -&gt;
          </span>
            <hr/>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Find in-depth information about Next.js features and API.
        </p>
      </Link>

      <Link  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        // className="group rounded-lg border m-2  max-w-md border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer">

        <h2 className={`mb-3 text-2xl font-semibold`}>
          Docs{" "}
          <span className="inline-block  transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
            <hr/>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Find in-depth information about Next.js features and API.
        </p>
      </Link>

      <Link  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        // className="group rounded-lg border m-2  max-w-md border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer">

        <h2 className={`mb-3 text-2xl font-semibold`}>
          Docs{" "}
          <span className="inline-block  transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
            <hr/>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Find in-depth information about Next.js features and API.
        </p>
      </Link>

      <Link  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        // className="group rounded-lg border m-2  max-w-md border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer">

        <h2 className={`mb-3 text-2xl font-semibold`}>
          Docs{" "}
          <span className="inline-block  transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
            <hr/>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Find in-depth information about Next.js features and API.
        </p>
      </Link>

    </div>

    // <div className='min-h-lvh mb-10 grid lg:max-w-7xl lg:w-full lg:mb-0 lg:text-left'>

    //   <main className={styles.main}>

    //     <h2 className='text-3xl font-bold hover:text-cyan-800'>Latest Blogs</h2>

    //     <div className="blogItem">
    //       <Link href='/'>
    //       <h3>How to learn Javascript -2024</h3>
    //       <p>Javascript is a language to design logic for the web.</p>
    //       </Link>
    //     </div>

    //     <div className="blogItem">
    //       <h3>How to learn Javascript -2024</h3>
    //       <p>Javascript is a language to design logic for the web.</p>
    //     </div>

    //     <div className="blogItem">
    //       <h3>How to learn Javascript -2024</h3>
    //       <p>Javascript is a language to design logic for the web.</p>
    //     </div>

    //     <div className="blogItem">
    //       <h3>How to learn Javascript -2024</h3>
    //       <p>Javascript is a language to design logic for the web.</p>
    //     </div>

    //   </main>
    // </div>
  )
}

export default page
