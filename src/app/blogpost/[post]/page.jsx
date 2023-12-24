'use client';
import { useRouter } from 'next/navigation'
import React from 'react'

// Step:1 find the file corresponding to slug.
// Step:1 populate them inside the page. 

export default function blogpost({ params }) {
  console.log(params);
  const router = useRouter()
  return <div className='min-h-lvh'>
    <h3>Name: {params.post}</h3>
    <hr />
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequuntur hic vero cum nobis tenetur qui dolore similique iure provident velit veritatis, aliquam corporis deserunt fuga incidunt facere reiciendis! Iusto.
    </div>
  </div>
}




// <div className='min-h-lvh'>
// {/* <h1>Post: {router.query}</h1> */}

// <h3>Name: {params.slug}</h3>
// </div> 

