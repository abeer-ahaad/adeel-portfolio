"use client"

import { useState } from "react"
import VideoThumbnail from "./VideoThumbnail"
import VideoModal from "./VideoModal"
import { CgChevronDoubleDown } from "react-icons/cg"
import Link from "next/link"
import { VideoType, trailerVideos as videos } from "@/constants/videos"

export default function VideoTrailer() {
  const [selectedVideo, setSelectedVideo] = useState<VideoType | null>(null)

  return (
    <div className="w-full h-auto mb-5 lg:mb-0">
      <div className="hidden lg:grid grid-flow-col grid-cols-3 grid-rows-2 gap-4">
        {/* Reel video - span 2 rows */}
        <VideoThumbnail
          video={videos[0]}
          onClick={() => setSelectedVideo(videos[0])}
          className="row-span-2"
        />
        <VideoThumbnail
          video={videos[1]}
          onClick={() => setSelectedVideo(videos[1])}
        />
        <VideoThumbnail
          video={videos[2]}
          onClick={() => setSelectedVideo(videos[2])}
        />
        <VideoThumbnail
          video={videos[3]}
          onClick={() => setSelectedVideo(videos[3])}
          className="row-span-2"
        />
      </div>
      <Link
        href={"#my_work"}
        className="block text-center mt-0 lg:mt-4 px-4 py-2 w-full rounded-lg text-white font-semibold lg:cursor-pointer transition-all shadow-lg lg:shadow-xl bg-linear-to-r from-amber-600 to-amber-500 lg:hover:bg-linear-to-b dark:shadow-amber-900 shadow-amber-200 lg:hover:shadow-2xl lg:hover:shadow-amber-400 lg:hover:-tranneutral-y-px"
      >
        <span className="lg:hidden">See My Works</span>
        <span className="hidden lg:inline">Discover More</span>{" "}
        <CgChevronDoubleDown className="inline-block font-semibold" />
      </Link>

      {/* Modal */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  )
}
