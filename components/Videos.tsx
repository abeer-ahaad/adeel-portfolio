"use client"

import { useState } from "react"
import VideoModal from "./VideoModal"
import VideoThumbnail from "./VideoThumbnail"
import { videos, VideoType } from "@/constants/videos"

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<VideoType | null>(null)

  return (
    <div className="lg:max-w-350 lg:mx-auto mx-4">
      <div className="hidden lg:grid grid-flow-col grid-cols-5 grid-rows-8 gap-4 items-start">
        {/* Reel video - span 2 rows */}
        <VideoThumbnail
          video={videos[0]}
          onClick={() => setSelectedVideo(videos[0])}
          className={"row-span-2"}
        />
        <VideoThumbnail
          video={videos[1]}
          onClick={() => setSelectedVideo(videos[1])}
          className={"row-span-6"}
        />
        <VideoThumbnail
          video={videos[2]}
          onClick={() => setSelectedVideo(videos[2])}
          className={"row-span-6"}
        />
        <div />
        <VideoThumbnail
          video={videos[3]}
          onClick={() => setSelectedVideo(videos[3])}
          className={"row-span-2"}
        />
        <VideoThumbnail
          video={videos[4]}
          onClick={() => setSelectedVideo(videos[4])}
          className={"row-span-6"}
        />
        <VideoThumbnail
          video={videos[5]}
          onClick={() => setSelectedVideo(videos[5])}
          className={"row-span-6"}
        />
        <div />
        <VideoThumbnail
          video={videos[6]}
          onClick={() => setSelectedVideo(videos[6])}
          className={"row-span-2"}
        />
        <VideoThumbnail
          video={videos[7]}
          onClick={() => setSelectedVideo(videos[7])}
          className={"row-span-6"}
        />
      </div>

      <div className="lg:hidden grid grid-flow-col grid-cols-2 grid-rows-18 gap-2 items-start">
        {/* Reel video - span 2 rows */}
        <VideoThumbnail
          video={videos[0]}
          onClick={() => setSelectedVideo(videos[0])}
          className={"row-span-2 order-1"}
        />
        <VideoThumbnail
          video={videos[1]}
          onClick={() => setSelectedVideo(videos[1])}
          className={"row-span-6 order-2"}
        />
        <VideoThumbnail
          video={videos[3]}
          onClick={() => setSelectedVideo(videos[3])}
          className={"row-span-2 order-3"}
        />
        <VideoThumbnail
          video={videos[2]}
          onClick={() => setSelectedVideo(videos[2])}
          className={"row-span-6 order-4"}
        />
        <VideoThumbnail
          video={videos[6]}
          onClick={() => setSelectedVideo(videos[6])}
          className={"row-span-2 order-5"}
        />
        <VideoThumbnail
          video={videos[4]}
          onClick={() => setSelectedVideo(videos[4])}
          className={"row-span-6 order-6"}
        />
        <VideoThumbnail
          video={videos[5]}
          onClick={() => setSelectedVideo(videos[5])}
          className={"row-span-6 order-7"}
        />
        <VideoThumbnail
          video={videos[7]}
          onClick={() => setSelectedVideo(videos[7])}
          className={"row-span-6 order-8"}
        />
      </div>

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
