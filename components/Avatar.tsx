import Image from "next/image"
import React from "react"

export default function Avatar() {
  return (
    <div className="rounded-full overflow-hidden border-2">
      <Image
        src="/adeel.jpeg"
        alt="avatar"
        width={500}
        height={500}
        className="object-cover w-16 h-16 lg:w-24 lg:h-24 scale-240 object-[top_50%]"
      />
    </div>
  )
}
