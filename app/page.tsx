import ContactMe from "@/components/ContactMe"
import Profile from "@/components/Profile"
import Testimonials from "@/components/Testimonials"
import Videos from "@/components/Videos"
import VideoTrailer from "@/components/VideoTrailer"
import { BIO_TEXT } from "@/constants/profile"
import { lineBreakAddedText } from "@/utils/helpers"

export default function Home() {
  return (
    <div>
      {/* Front Part */}
      <section className="min-h-screen lg:flex lg:gap-10 lg:items-start lg:max-w-350 mx-4 lg:mx-auto pt-14 lg:pt-20 pb-10 lg:pb-0">
        <div className="lg:flex-1">
          <Profile />
          <div className="lg:w-4/5 mb-10 lg:mb-15">
            <p className="text-lg lg:text-lg leading-snug tracking-tight font-poppins">
              {lineBreakAddedText(BIO_TEXT)}
            </p>
          </div>
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
        <h1 className="w-fit uppercase text-3xl font-bold mx-auto mb-8 lg:mb-10 relative before:absolute before:-bottom-2 before:-left-[4.3%] before:w-[14%] before:h-1 before:bg-[#D30942] after:absolute after:-bottom-2 after:-right-[4.3%] after:w-[93%] after:h-1 after:bg-zinc-200">
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
