import Image from "next/image"

export default function Testimonials() {
  return (
    <div className="w-full max-h-80">
      <h1 className="text-xl font-semibold mb-3 rounded-lg px-3 py-1.5 text-center">
        What do people say about me?
      </h1>
      <div className="flex gap-3">
        <div className="col-span-2 row-span-3 rounded-xl border border-zinc-700 p-2.5 bg-zinc-900">
          <div className="flex gap-2 items-center p-1.5 mb-2 rounded-lg bg-gray-800">
            <div className="border border-gray-700 rounded-full overflow-hidden">
              <Image
                src="/man-with-coffee.jpg"
                alt="avatar"
                width={500}
                height={500}
                className="object-cover w-10 h-11 scale-110 object-[top_50%]"
              />
            </div>
            <div>
              <h1 className="text-md font-semibold">Mofiz Khan</h1>
              <p className="text-gray-300 text-xs">CEO, Lazy Company</p>
            </div>
          </div>
          <p className="tracking-wide">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            exercitationem temporibus aperiam, quam corporis qui amet. Ipsa,
            dolorem provident? dolor temporibus quam.
          </p>
        </div>
        <div className="col-span-2 row-span-3 rounded-xl border border-zinc-700 p-2.5 bg-zinc-900">
          <div className="flex gap-2 items-center p-1.5 mb-2 rounded-lg bg-gray-800">
            <div className="border border-gray-700 rounded-full overflow-hidden">
              <Image
                src="/man-with-coffee.jpg"
                alt="avatar"
                width={500}
                height={500}
                className="object-cover w-10 h-11 scale-110 object-[top_50%]"
              />
            </div>
            <div>
              <h1 className="text-md font-semibold">Karim Khan</h1>
              <p className="text-gray-300 text-xs">CEO, Lazy Company</p>
            </div>
          </div>
          <p className="tracking-wide">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            exercitationem temporibus aperiam, quam corporis qui amet. Ipsa,
            dolorem provident? dolor temporibus quam.
          </p>
        </div>
        <div className="col-span-2 row-span-3 rounded-xl border border-zinc-700 p-2.5 bg-zinc-900">
          <div className="flex gap-2 items-center p-1.5 mb-2 rounded-lg bg-gray-800">
            <div className="border border-gray-700 rounded-full overflow-hidden">
              <Image
                src="/man-with-coffee.jpg"
                alt="avatar"
                width={500}
                height={500}
                className="object-cover w-10 h-11 scale-110 object-[top_50%]"
              />
            </div>
            <div>
              <h1 className="text-md font-semibold">Jamal Khan</h1>
              <p className="text-gray-300 text-xs">CEO, Lazy Company</p>
            </div>
          </div>
          <p className="tracking-wide">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            exercitationem temporibus aperiam, quam corporis qui amet. Ipsa,
            dolorem provident? dolor temporibus quam.
          </p>
        </div>
      </div>
    </div>
  )
}
