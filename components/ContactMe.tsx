import {
  CONTACT_DESC,
  DISCORD,
  EMAIL_ADDRESS,
  INSTAGRAM,
  X,
} from "@/constants/contact"
import Image from "next/image"
import Link from "next/link"

export default function ContactMe() {
  return (
    <div className="lg:w-4/5 mb-10 lg:mb-0">
      <h1 className="text-3xl font-bold mb-1.5 lg:mb-2">Contact Me</h1>
      <div className="">
        <div className="mb-2 lg:mb-4 pb-1 lg:pb-0 border-b lg:border-b-0">
          <p className="text-base lg:text-lg">{CONTACT_DESC}</p>
        </div>

        <div className="flex flex-col gap-1.5 lg:gap-4 font-roboto">
          <div className="w-fit relative text-lg lg:text-xl font-medium lg:font-semibold tracking-wide lg:border-b lg:border-transparent lg:hover:border-zinc-100">
            <Image
              src={"/socials/open-email.png"}
              width={60}
              height={60}
              alt="email"
              className="inline-block w-5 lg:w-5 h-auto relative bottom-0.5 lg:bottom-1"
            />{" "}
            <span className="inline-block">{EMAIL_ADDRESS}</span>
          </div>
          <Link
            href={X.link}
            target="_blank"
            className="w-fit relative text-lg lg:text-xl font-medium lg:font-semibold tracking-wide lg:border-b lg:border-transparent lg:hover:border-zinc-100"
          >
            <Image
              src={"/socials/x.png"}
              width={60}
              height={60}
              alt="X"
              className="inline-block w-6 relative border -ml-0.5"
            />{" "}
            <span className="inline-block -ml-0.5">
              <span className="inline-block mr-0.5">@</span>
              {X.username}
            </span>
          </Link>
          <Link
            href={INSTAGRAM.link}
            target="_blank"
            className="w-fit relative text-lg lg:text-xl font-medium lg:font-semibold tracking-wide lg:border-b lg:border-transparent lg:hover:border-zinc-100"
          >
            <Image
              src={"/socials/instagram.png"}
              width={60}
              height={60}
              alt="instagram"
              className="inline-block w-5.5 relative border -ml-0.5"
            />{" "}
            <span className="inline-block -ml-0.5">
              <span className="inline-block mr-0.5">@</span>
              {INSTAGRAM.username}
            </span>
          </Link>
          <Link
            href={DISCORD.link}
            className="w-fit relative text-lg lg:text-xl font-medium lg:font-semibold tracking-wide lg:border-b lg:border-transparent lg:hover:border-zinc-100"
          >
            <Image
              src={"/socials/white-discord.png"}
              width={60}
              height={60}
              alt="discord"
              className="inline-block w-5.5 relative bottom-0.3 border -ml-0.5"
            />{" "}
            <span className="inline-block -ml-0.5">
              <span className="inline-block mr-0.5">@</span>
              {DISCORD.username}
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
