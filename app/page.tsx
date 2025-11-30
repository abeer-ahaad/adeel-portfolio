import AboutDescription from "@/components/AboutDescription"
import ContactMe from "@/components/ContactMe"
import Profile from "@/components/Profile"
import Testimonials from "@/components/Testimonials"
import Videos from "@/components/Videos"
import VideoTrailer from "@/components/VideoTrailer"

export default function Home() {
  return (
    <div>
      {/* Front Part */}
      <section className="min-h-screen flex gap-10 items-start max-w-350 mx-auto pt-20">
        <div className="flex-1">
          <Profile />
          <AboutDescription />
          <ContactMe />
        </div>
        <div className="flex-1 flex flex-col items-end">
          <VideoTrailer />
          <div className="w-full border-t dark:border-zinc-400 border-zinc-600 my-4" />
          <Testimonials />
        </div>
      </section>

      {/* Videos */}
      <section id="my_work" className="videos py-10 bg-zinc-900">
        <h1 className="max-w-350 mx-auto text-3xl font-semibold text-center pb-5 mb-10 border-b">
          My Works
        </h1>
        <Videos />
      </section>
    </div>
  )
}
