"use client"

import { useState } from "react"
import { RxCross2 } from "react-icons/rx"

export default function MaintenanceTxt() {
  const [exists, setExists] = useState(true)

  if (!exists) return null

  return (
    <div className="absolute top-2 w-350 left-1/2 -translate-x-1/2 bg-rose-500/40 px-2 py-1 rounded-lg">
      <h1 className="text-center text-md tracking-wide font-semibold">
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
