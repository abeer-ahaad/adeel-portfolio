import {
  CONTACT_DESC,
  DISCORD,
  EMAIL_ADDRESS,
  INSTAGRAM,
  X,
} from "@/constants/contact"
import Link from "next/link"
import { BsDiscord, BsInstagram, BsTwitterX } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

export default function ContactMe() {
  return (
    <div className="lg:w-4/5 mb-10 lg:mb-0 font-montserrat">
      <h1 className="w-fit uppercase text-3xl font-bold mb-3 lg:mb-4 relative before:absolute before:-bottom-1 before:left-0 before:w-[10%] before:h-1 before:bg-[#D30942] before:rounded-full after:absolute after:-bottom-1 after:right-0 after:w-[89%] after:h-1 after:bg-zinc-200 after:rounded-full">
        Contact Me
      </h1>
      <div className="">
        <div className="mb-2 lg:mb-3 pb-1 lg:pb-0">
          <p className="text-base lg:text-lg font-semibold">{CONTACT_DESC}</p>
        </div>

        <div className="flex flex-col gap-1.5 lg:gap-2 italic">
          <div className="relative w-full lg:w-5/7 text-lg lg:text-xl font-medium lg:font-semibold tracking-wide border-2 border-rose-500 py-1.5 rounded-lg hover:border-sky-600 hover:bg-linear-to-r hover:from-sky-600 hover:to-sky-500">
            <div className="absolute bg-sky-500 h-full aspect-square flex items-center justify-center rounded-lg top-0 left-0">
              <MdEmail className="text-2xl" />
            </div>
            <span className="inline-block ml-12">{EMAIL_ADDRESS}</span>
          </div>
          <Link
            href={X.link}
            target="_blank"
            className="relative w-full lg:w-5/7 text-lg lg:text-xl font-medium lg:font-semibold tracking-wide border-2 border-rose-500 py-1.5 rounded-lg group hover:border-zinc-700 hover:bg-linear-to-r hover:from-zinc-800 hover:to-zinc-700"
          >
            <div className="absolute bg-zinc-700 group-hover:bg-zinc-600 h-full aspect-square flex items-center justify-center rounded-lg top-0 left-0">
              <BsTwitterX className="text-xl" />
            </div>
            <span className="inline-block -ml-0.5">
              <span className="inline-block ml-12 mr-0.5">@</span>
              {X.username}
            </span>
          </Link>
          <Link
            href={INSTAGRAM.link}
            target="_blank"
            className="relative w-full lg:w-5/7 text-lg lg:text-xl font-medium lg:font-semibold tracking-wide border-2 border-rose-500 hover:border-rose-600 py-1.5 rounded-lg group hover:bg-linear-to-r hover:from-rose-600 hover:to-rose-500"
          >
            <div className="absolute bg-rose-500 group-hover:bg-rose-400 h-full aspect-square flex items-center justify-center rounded-lg top-0 left-0">
              <BsInstagram className="text-xl" />
            </div>
            <span className="inline-block -ml-0.5">
              <span className="inline-block ml-12 mr-0.5">@</span>
              {INSTAGRAM.username}
            </span>
          </Link>
          <Link
            href={DISCORD.link}
            className="relative w-full lg:w-5/7 text-lg lg:text-xl font-medium lg:font-semibold tracking-wide border-2 border-rose-500 hover:border-indigo-700 py-1.5 rounded-lg group hover:bg-linear-to-r hover:from-indigo-700 hover:to-indigo-600"
          >
            <div className="absolute bg-indigo-600 group-hover:bg-indigo-500 h-full aspect-square flex items-center justify-center rounded-lg top-0 left-0">
              <BsDiscord className="text-xl" />
            </div>
            <span className="inline-block -ml-0.5">
              <span className="inline-block ml-12 mr-0.5">@</span>
              {DISCORD.username}
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
