import { MdMail } from "react-icons/md"
import Avatar from "./Avatar"
import { NAME, PROFESSION } from "@/constants/profile"
import { EMAIL_ADDRESS } from "@/constants/contact"

export default function Profile() {
  return (
    <div className="profile flex gap-3 lg:gap-6 items-center font-sans mb-7 lg:mb-12">
      <Avatar />
      <div className="flex-1 flex flex-col gap-1 lg:gap-2">
        <h1 className="text-3xl lg:text-5xl tracking-tight uppercase font-montserrat font-black">
          {NAME}
        </h1>
        <p className="text-sm lg:text-xl font-poppins">
          {PROFESSION} |{" "}
          <span className="inline-block">
            <MdMail className="inline" /> {EMAIL_ADDRESS}
          </span>
        </p>
      </div>
    </div>
  )
}
