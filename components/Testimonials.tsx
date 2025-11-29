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
    <div className="w-5/6 flex flex-col gap-4 items-end">
      {tmls.map((tml, i) => (
        <div key={i}>
          <div className="bg-white text-sm text-zinc-600 px-5 py-2 rounded-3xl">
            <p>{tml.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// <div key={i} className="mb-4">
//   <div className="flex-1">
//     <p className="text-sm">{tml.text}</p>
//   </div>
// </div>
