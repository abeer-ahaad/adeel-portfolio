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
      <section className="min-h-screen lg:flex lg:gap-10 lg:items-start lg:max-w-350 mx-4 lg:mx-auto pt-14 lg:pt-20 pb-10 lg:pb-0">
        <div className="lg:flex-1">
          <Profile />
          <AboutDescription />
          <ContactMe />
        </div>
        <div className="lg:flex-1 flex flex-col items-end">
          <VideoTrailer />
          <div className="hidden lg:block w-full border-t dark:border-zinc-400 border-zinc-600 my-4" />
          <Testimonials />
        </div>
      </section>

      {/* Videos */}
      <section id="my_work" className="videos py-8 lg:py-20 bg-zinc-900">
        <h1 className="lg:max-w-350 lg:mx-auto mx-4 text-2xl lg:text-3xl font-semibold text-center pb-2 lg:pb-5 mb-6 lg:mb-10 border-b">
          My Works
        </h1>
        <Videos />
      </section>

      {/* Footer */}
      <section className="py-10">
        <h1 className="text-center">Copyright @ 2025-26 • Adeel Arafat</h1>
      </section>
    </div>
  )
}
