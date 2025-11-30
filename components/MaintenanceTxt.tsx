"use client"

import { useState } from "react"
import { RxCross2 } from "react-icons/rx"

export default function MaintenanceTxt() {
  const [exists, setExists] = useState(true)

  if (!exists) return null

  return (
    <div className="absolute top-3 lg:top-2 w-auto lg:w-350 lg:left-1/2 left-2 lg:right-auto right-2 translate-x-0 lg:-translate-x-1/2 bg-rose-500/40 px-1.5 lg:px-2 py-0.5 lg:py-1 rounded-lg">
      <h1 className="text-center text-md tracking-normal lg:tracking-wide font-medium lg:font-semibold">
        This website is currently under construction.
      </h1>
      <button
        onClick={() => setExists(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        <RxCross2 />
      </button>
    </div>
  )
}
