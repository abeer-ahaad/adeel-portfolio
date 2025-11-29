import { MdMail } from "react-icons/md"
import Avatar from "./Avatar"

export default function Profile() {
  return (
    <div className="profile flex gap-6 items-center font-sans mb-15">
      <Avatar />
      <div className="flex-1 flex flex-col gap-2">
        <h1 className="text-5xl font-bold uppercase tracking-wide">
          Adeel Arafat
        </h1>
        <p className="text-xl">
          Video Editor |{" "}
          <span className="inline-block">
            <MdMail className="inline" /> arafatadeel18@gmail.com
          </span>
        </p>
      </div>
    </div>
  )
}
