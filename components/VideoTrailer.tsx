"use client"

import { useState } from "react"
import VideoThumbnail from "./VideoThumbnail"
import VideoModal from "./VideoModal"
import { CgChevronDoubleDown } from "react-icons/cg"
import Link from "next/link"

export interface VideoType {
  id: string
  type: "reel" | "normal"
  title: string
}

export default function VideoTrailer() {
  const [selectedVideo, setSelectedVideo] = useState<VideoType | null>(null)

  const videos: VideoType[] = [
    { id: "3hapwk_ad-Y", type: "reel", title: "Shorts Video" },
    { id: "D-NgGKzmTt0", type: "normal", title: "Normal Video 1" },
    { id: "9bZkp7q19f0", type: "normal", title: "Normal Video 2" },
    { id: "jjGuWOlXJhA", type: "reel", title: "Normal Video 2" },
  ]

  return (
    <div className="w-full h-auto">
      <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-4">
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
        className="block text-center scroll-smooth mt-4 px-4 py-2 w-full rounded-lg text-white font-semibold cursor-pointer transition-all shadow-xl bg-linear-to-r from-amber-600 to-amber-500 hover:bg-linear-to-b dark:shadow-amber-900 shadow-amber-200 hover:shadow-2xl hover:shadow-amber-400 hover:-tranneutral-y-px"
      >
        Discover More{" "}
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
