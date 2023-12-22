import React from 'react'
import { useRouter } from 'next/navigation'

const slug = () => {
    const router = useRouter()
    const { slug } = router.query.slug;
    return <div>{slug}</div>
}

export default slug;
