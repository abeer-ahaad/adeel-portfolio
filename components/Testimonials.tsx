import {
  TESTI_HEADING,
  TESTIMONIAL1,
  TESTIMONIAL2,
  TESTIMONIAL3,
} from "@/constants/testimonials"
import Image from "next/image"

export default function Testimonials() {
  return (
    <div className="w-full max-h-none lg:max-h-80">
      <h1 className="text-xl font-semibold mb-1.5 lg:mb-3 rounded-lg px-3 py-1.5 text-center">
        {TESTI_HEADING}
      </h1>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-2">
        {[TESTIMONIAL1, TESTIMONIAL2, TESTIMONIAL3].map((t, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-zinc-700 p-2.5 bg-zinc-900"
          >
            <div className="w-fit lg:w-full flex gap-2 items-center p-2.5 lg:p-1.5 mb-2 rounded-lg bg-gray-800">
              <div className="border border-gray-700 rounded-full overflow-hidden">
                <Image
                  src={t.image}
                  alt="avatar"
                  width={500}
                  height={500}
                  className="object-cover w-10 h-11 scale-160 object-[top_50%]"
                />
              </div>
              <div>
                <h1 className="text-sm font-semibold">{t.user_name}</h1>
                <p className="text-gray-300 text-xs">
                  {t.prof}, {t.company}
                </p>
              </div>
            </div>
            <p className="tracking-wide line-clamp-7">{t.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
