"use client"

import Image from "next/image"
import { VideoType } from "./VideoTrailer"

// components/VideoThumbnail.jsx
export default function VideoThumbnail({
  video,
  onClick,
  className,
}: {
  video: VideoType
  onClick: () => void
  className?: string
}) {
  const isReel = video.type === "reel"

  // YouTube provides free thumbnails at these URLs
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`

  return (
    <div
      onClick={onClick}
      className={`relative w-full h-full cursor-pointer group overflow-hidden rounded-lg ${className} ${
        isReel ? "aspect-9/16" : "aspect-video"
      }`}
    >
      <Image
        src={thumbnailUrl}
        alt={video.title}
        fill
        sizes="100vw"
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
          {/* Triangle play icon */}
          <div className="w-0 h-0 border-l-20 border-l-white border-y-12 border-y-transparent ml-1" />
        </div>
      </div>
    </div>
  )
  // return (
  //   <div
  //     onClick={onClick}
  //     className={`relative w-full h-full cursor-pointer group overflow-hidden rounded-lg ${
  //       isReel ? "aspect-9/16" : "aspect-video"
  //     }`}
  //   >
  //     {/* Thumbnail Image */}
  //     <img
  //       src={thumbnailUrl}
  //       alt={video.title}
  //       className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
  //     />

  //     {/* Dark overlay on hover */}
  //     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

  //     {/* Play button */}
  //     <div className="absolute inset-0 flex items-center justify-center">
  //       <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
  //         {/* Triangle play icon */}
  //         <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1" />
  //       </div>
  //     </div>

  //     {/* Video title (optional) */}
  //     <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
  //       <h3 className="text-white font-semibold">{video.title}</h3>
  //     </div>
  //   </div>
  // )
}
