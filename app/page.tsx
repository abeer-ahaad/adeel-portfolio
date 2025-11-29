import AboutDescription from "@/components/AboutDescription"
import ContactMe from "@/components/ContactMe"
import Profile from "@/components/Profile"
import Testimonials from "@/components/Testimonials"
import VideoTrailer from "@/components/VideoTrailer"

export default function Home() {
  return (
    <div>
      {/* Front Part */}
      <section className="min-h-screen flex gap-10 items-start max-w-350 mx-auto pt-22">
        <div className="flex-1">
          <Profile />
          <AboutDescription />
          <ContactMe />
        </div>
        <div className="flex-1 flex flex-col items-end">
          <VideoTrailer />
          <div className="w-4/6 border-t dark:border-zinc-400 border-zinc-600 my-4" />
          <Testimonials />
        </div>
      </section>

      {/* Videos */}
      <section className="videos py-10">
        <h1 className="text-3xl font-semibold text-center">My Works</h1>
      </section>
    </div>
  )
}
