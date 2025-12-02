"use client"

import { VideoType } from "@/constants/videos"
import { useEffect } from "react"

export default function VideoModal({
  video,
  onClose,
}: {
  video: VideoType
  onClose: () => void
}) {
  const isReel = video.type === "reel"

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      {/* Modal content */}
      <div
        className={`relative ${
          isReel
            ? "w-full max-w-[500px] aspect-[9/16]"
            : "w-full max-w-4xl aspect-video"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking video
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* YouTube iframe */}
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}
