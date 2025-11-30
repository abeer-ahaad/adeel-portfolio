import { MdMail } from "react-icons/md"
import Avatar from "./Avatar"

export default function Profile() {
  return (
    <div className="profile flex gap-3 lg:gap-6 items-center font-sans mb-7 lg:mb-15">
      <Avatar />
      <div className="flex-1 flex flex-col gap-1 lg:gap-2">
        <h1 className="text-3xl lg:text-5xl font-bold uppercase tracking-wide">
          Adeel Arafat
        </h1>
        <p className="text-sm lg:text-xl">
          Video Editor |{" "}
          <span className="inline-block">
            <MdMail className="inline" /> arafatadeel18@gmail.com
          </span>
        </p>
      </div>
    </div>
  )
}
