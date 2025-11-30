import Image from "next/image"
import Link from "next/link"

export default function ContactMe() {
  return (
    <div className="w-4/5">
      <h1 className="text-3xl font-bold mb-2">Contact Me</h1>
      <div className="">
        <div className="mb-4">
          <p className=" text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit,
            eligendi?
          </p>
        </div>

        <div className="flex flex-col gap-4 font-roboto">
          <div className="w-fit relative text-xl font-semibold tracking-wide border-b border-transparent hover:border-zinc-100">
            <Image
              src={"/socials/open-email.png"}
              width={60}
              height={60}
              alt="email"
              className="inline-block w-5 h-auto relative bottom-1"
            />{" "}
            <span className="inline-block">arafatadeel18@gmail.com</span>
          </div>
          <Link
            href={"https://x.com/Adeel_arafat18"}
            className="w-fit relative text-xl font-semibold tracking-wide border-b border-transparent hover:border-zinc-100"
          >
            <Image
              src={"/socials/x.png"}
              width={60}
              height={60}
              alt="email"
              className="inline-block w-6 relative border -ml-0.5"
            />{" "}
            <span className="inline-block -ml-0.5">
              <span className="inline-block mr-0.5">@</span>Adeel_arafat18
            </span>
          </Link>
          <Link
            href={"https://x.com/adeelcuts"}
            className="w-fit relative text-xl font-semibold tracking-wide border-b border-transparent hover:border-zinc-100"
          >
            <Image
              src={"/socials/instagram.png"}
              width={60}
              height={60}
              alt="instagram"
              className="inline-block w-5.5 relative border -ml-0.5"
            />{" "}
            <span className="inline-block -ml-0.5">
              <span className="inline-block mr-0.5">@</span>adeelcuts
            </span>
          </Link>
          <Link
            href={"https://discord.com/adeel1496"}
            className="w-fit relative text-xl font-semibold tracking-wide border-b border-transparent hover:border-zinc-100"
          >
            <Image
              src={"/socials/white-discord.png"}
              width={60}
              height={60}
              alt="email"
              className="inline-block w-6 relative bottom-0.3 border -ml-0.5"
            />{" "}
            <span className="inline-block -ml-0.5">
              <span className="inline-block mr-0.5">@</span>adeel1496
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
