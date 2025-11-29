import Image from "next/image"
import React from "react"

export default function Avatar() {
  return (
    <div className="rounded-full overflow-hidden border-2">
      <Image
        src="/man-with-coffee.jpg"
        alt="avatar"
        width={500}
        height={500}
        className="object-cover w-24 h-24 scale-110 object-[top_50%]"
      />
    </div>
  )
}
