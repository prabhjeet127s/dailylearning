"use client"

import React from 'react'

import { useParams } from 'next/navigation'

const page = () => {
    const param =useParams()
  return (
    <div>

        <h2>
            this is param <span>
                
            </span>
            {param.slugs}
        </h2>

    </div>

  )
}

export default page