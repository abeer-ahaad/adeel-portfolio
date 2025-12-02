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
        <div className="rounded-xl border border-zinc-700 p-2.5 bg-zinc-900">
          <div className="w-fit lg:w-full flex gap-2 items-center p-2.5 lg:p-1.5 mb-2 rounded-lg bg-gray-800">
            <div className="border border-gray-700 rounded-full overflow-hidden">
              <Image
                src={TESTIMONIAL1.image}
                alt="avatar"
                width={500}
                height={500}
                className="object-cover w-10 h-11 scale-110 object-[top_50%]"
              />
            </div>
            <div>
              <h1 className="text-md font-semibold">
                {TESTIMONIAL1.user_name}
              </h1>
              <p className="text-gray-300 text-xs">
                {TESTIMONIAL1.prof}, {TESTIMONIAL1.company}
              </p>
            </div>
          </div>
          <p className="tracking-wide line-clamp-6">
            {TESTIMONIAL1.testimonial}
          </p>
        </div>
        <div className="col-span-2 row-span-3 rounded-xl border border-zinc-700 p-2.5 bg-zinc-900">
          <div className="w-fit lg:w-full flex gap-2 items-center p-2.5 lg:p-1.5 mb-2 rounded-lg bg-gray-800">
            <div className="border border-gray-700 rounded-full overflow-hidden">
              <Image
                src={TESTIMONIAL2.image}
                alt="avatar"
                width={500}
                height={500}
                className="object-cover w-10 h-11 scale-110 object-[top_50%]"
              />
            </div>
            <div>
              <h1 className="text-md font-semibold">
                {TESTIMONIAL2.user_name}
              </h1>
              <p className="text-gray-300 text-xs">
                {TESTIMONIAL2.prof}, {TESTIMONIAL2.company}
              </p>
            </div>
          </div>
          <p className="tracking-wide line-clamp-6">
            {TESTIMONIAL2.testimonial}
          </p>
        </div>
        <div className="col-span-2 row-span-3 rounded-xl border border-zinc-700 p-2.5 bg-zinc-900">
          <div className="w-fit lg:w-full flex gap-2 items-center p-2.5 lg:p-1.5 mb-2 rounded-lg bg-gray-800">
            <div className="border border-gray-700 rounded-full overflow-hidden">
              <Image
                src={TESTIMONIAL3.image}
                alt="avatar"
                width={500}
                height={500}
                className="object-cover w-10 h-11 scale-110 object-[top_50%]"
              />
            </div>
            <div>
              <h1 className="text-md font-semibold">
                {TESTIMONIAL3.user_name}
              </h1>
              <p className="text-gray-300 text-xs">
                {TESTIMONIAL3.prof}, {TESTIMONIAL3.company}
              </p>
            </div>
          </div>
          <p className="tracking-wide line-clamp-6">
            {TESTIMONIAL3.testimonial}
          </p>
        </div>
      </div>
    </div>
  )
}
