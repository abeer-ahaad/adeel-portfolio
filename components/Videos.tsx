"use client"

import { useState } from "react"
import VideoModal from "./VideoModal"
import VideoThumbnail from "./VideoThumbnail"
import { VideoType } from "./VideoTrailer"

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<VideoType | null>(null)

  const videos: VideoType[] = [
    { id: "D-NgGKzmTt0", type: "normal", title: "Normal Video 1" },
    { id: "3hapwk_ad-Y", type: "reel", title: "Shorts Video" },
    { id: "fIrDOU02BbY", type: "reel", title: "Normal Video 2" },
    { id: "9bZkp7q19f0", type: "normal", title: "Normal Video 2" },
    { id: "FQp4xxZmDnk", type: "reel", title: "Normal Video 2" },
    { id: "RA523rwBcr0", type: "reel", title: "Normal Video 2" },
    { id: "FlsCjmMhFmw", type: "normal", title: "Normal Video 2" },
    { id: "SwZp0g48i90", type: "reel", title: "Normal Video 2" },
  ]

  return (
    <div className="max-w-350 mx-auto">
      <div className="grid grid-flow-col grid-cols-5 grid-rows-8 gap-4 items-start">
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
