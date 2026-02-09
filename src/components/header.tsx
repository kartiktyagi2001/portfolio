import { ScrambleText } from "@/components/scramble"
import { MapPin, Mail } from "lucide-react"

export function Header() {
  return (
    <header className="mb-16 space-y-">
      <h1 className=" mb-4 animate-fade-in text-white">
        <img src="" alt="" />
        <span className="inline-block text-[2.6rem]">
          hi, i am <span className="text-purple-400 text-[3rem]"><ScrambleText fromText="Arcbit" toText="Kartik" delay={700} />!</span>
        </span>
      </h1>

      <div className="flex flex-col gap-2 text-gray-400 text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Noida, India
        </div>
        <div className="flex items-center gap-2 mb-3">
          <Mail className="w-4 h-4" />
          arcbit.kartik@proton.me
        </div>
      </div>

      <p className="leading-relaxed animate-fade-in-up text-sm">
        I am Kartik, a developer with a love for <span className="text-purple-300">minimalism</span> and <span className="text-purple-300">clean code.</span> I engineer sleek and efficient software. <br /><br />
        I’m always chasing new things to learn or obsessing over some problem that makes me scratch my head.
        <br />
        <br />
         When not shipping, you’re likely to find me reading a compelling book, watching films, browsing accessories, or zoning out (fr).
         <br />I’m always open to exciting <span className="text-purple-300">collaborations</span> and <span className="text-purple-300">opportunities</span>. <br /> Let’s build something functional.
      </p>

      <div>

      </div>
    </header>
  )
}
