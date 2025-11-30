"use client"

import Image from "next/image"
import { VideoType } from "./VideoTrailer"
import { cn } from "@/lib/utils"

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
      className={cn(
        className,
        "relative w-full h-full cursor-pointer group overflow-hidden rounded-lg border-2 border-gray-700/40",
        isReel ? "aspect-9/16" : "aspect-video"
      )}
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
}
