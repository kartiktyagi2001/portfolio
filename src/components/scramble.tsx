"use client"
import { useEffect, useState } from "react"

const letters = "AIKTabcdefghijklmonpqrstuvwxyz"

export function ScrambleText({
  fromText,
  toText,
  delay = 500, //pause at Arcbit ;) before scrambling starts
}: {
  fromText: string
  toText: string
  delay?: number
}) {
  const [displayText, setDisplayText] = useState(fromText)

  //i did not write this logic, chatgpt did :)
  useEffect(() => {
    const timeout = setTimeout(() => {
      let iteration = 0
      const interval = setInterval(() => {
        setDisplayText(() =>
          toText
            .split("")
            .map((char, i) => {
              if (i < iteration) return toText[i] // lock correct char
              return letters[Math.floor(Math.random() * letters.length)]
            })
            .join("")
        )

        iteration += 1/3 //speed control
        if (iteration >= toText.length) clearInterval(interval)
      }, 50)
    }, delay)

    return () => clearTimeout(timeout)
  }, [fromText, toText, delay])

  return <span>{displayText}</span>
}
