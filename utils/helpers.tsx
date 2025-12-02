import { Fragment } from "react"

export function lineBreakAddedText(text: string) {
  return (
    <>
      {text.split("\n").map((line, index) => (
        <Fragment key={index}>
          {line}
          <br />
        </Fragment>
      ))}
    </>
  )
}
