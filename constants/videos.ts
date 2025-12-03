export interface VideoType {
  id: string
  type: "reel" | "normal"
}

export const videos: VideoType[] = [
  { id: "UkpWzbvzOPU", type: "normal" },
  { id: "vdyJP1YyPO0", type: "reel" },
  { id: "Xu1MdH1jp_Q", type: "reel" },
  { id: "D-NgGKzmTt0", type: "normal" },
  { id: "bwGDFui8akI", type: "reel" },
  { id: "UNmWgdXokVw", type: "reel" },
  { id: "KKA60en_HwY", type: "normal" },
  { id: "92k6N1boAgI", type: "reel" },
]

export const trailerVideos: VideoType[] = [
  { id: "vdyJP1YyPO0", type: "reel" },
  { id: "UkpWzbvzOPU", type: "normal" },
  { id: "D-NgGKzmTt0", type: "normal" },
  { id: "Xu1MdH1jp_Q", type: "reel" },
]
