import Image from "next/image"

export default function Testimonials() {
  const tmls = [
    {
      name: "John Doe",
      image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt, nunc nisl aliquam nisl.",
    },
    {
      name: "Jane Doe",
      image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt.",
    },
    {
      name: "John Doe",
      image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl. Sed euismod.",
    },
    {
      name: "Jane Doe",
      image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies.",
    },
  ]

  return (
    <div className="w-full h-80 grid grid-cols-5 grid-rows-4 gap-3">
      <div className="col-span-2 border border-transparent" />
      <div className="col-span-3 row-span-2 rounded-xl border border-zinc-700 p-2.5 bg-zinc-900">
        <div className="w-fit float-left mr-3 flex gap-2 items-center p-1.5 rounded-lg bg-gray-800">
          <div className="border border-gray-700 rounded-full overflow-hidden">
            <Image
              src="/man-with-coffee.jpg"
              alt="avatar"
              width={500}
              height={500}
              className="object-cover w-13 h-13 scale-110 object-[top_50%]"
            />
          </div>
          <div>
            <h1 className="text-md font-semibold">Jamal Khan</h1>
            <p className="text-gray-300 text-sm ">CEO, Big Company</p>
          </div>
        </div>
        <p className="tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum
          natus obcaecati consequatur fugit soluta placeat distinctio odio.
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
              className="object-cover w-13 h-13 scale-110 object-[top_50%]"
            />
          </div>
          <div>
            <h1 className="text-md font-semibold">Mofiz Khan</h1>
            <p className="text-gray-300 text-sm ">CEO, Lazy Company</p>
          </div>
        </div>
        <p className="tracking-wide line-clamp-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
          exercitationem temporibus aperiam, quam corporis qui amet. Ipsa,
          dolorem provident? dolor temporibus quam.
        </p>
      </div>

      <div className="col-span-3 row-span-2 rounded-xl border border-zinc-700 p-2.5 bg-zinc-900">
        <div className="w-fit float-left mr-3 flex gap-2 items-center p-1.5 rounded-lg bg-gray-800 overflow-hidden">
          <div className="border border-gray-700 rounded-full overflow-hidden">
            <Image
              src="/man-with-coffee.jpg"
              alt="avatar"
              width={500}
              height={500}
              className="object-cover w-13 h-13 scale-110 object-[top_50%]"
            />
          </div>
          <div>
            <h1 className="text-md font-semibold">Kamal Khan</h1>
            <p className="text-gray-300 text-sm ">CEO, Faltu Company</p>
          </div>
        </div>
        <p className="tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum
          natus obcaecati consequatur fugit soluta placeat distinctio odio.
        </p>
      </div>
    </div>
  )
  // return (
  //   <div className="w-5/6 flex flex-col gap-4 items-end">
  //     {tmls.map((tml, i) => (
  //       <div
  //         key={i}
  //         className="w-full grid grid-cols-[auto_1fr] gap-2 items-start"
  //       >
  //         <div className="rounded-full overflow-hidden border-2">
  //           <Image
  //             src="/man-with-coffee.jpg"
  //             alt="avatar"
  //             width={500}
  //             height={500}
  //             className="object-cover w-14 h-14 scale-110 object-[top_50%]"
  //           />
  //         </div>
  //         <div className="relative bg-white text-sm text-zinc-600 px-5 py-2 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl rounded-tl-xl rounded- ml-6.5">
  //           <p>{tml.text}</p>
  //           <div className="absolute left-0 top-0 -translate-x-1/2 w-0 h-0 border-t-13 border-t-transparent border-b-13 border-b-transparent border-r-26 border-r-white" />
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // )
}

// <div key={i} className="mb-4">
//   <div className="flex-1">
//     <p className="text-sm">{tml.text}</p>
//   </div>
// </div>
