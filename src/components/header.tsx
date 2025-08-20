import { ScrambleText } from "@/components/scramble"
import { MapPin, Mail } from "lucide-react"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-5xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          hi, i am <span className="text-purple-400"><ScrambleText fromText="Arcbit" toText="Kartik" delay={700} />!</span>
        </span>
      </h1>

      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Noida, India
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          arcbit.kartik@proton.me
        </div>
      </div>

      <p className="leading-relaxed animate-fade-in-up">
        A developer with a love for <span className="text-purple-300">minimalism</span> and <span className="text-purple-300">clean code</span>. I build sleek, efficient web apps; because great things happen when you do more with less. When I’m not taming bugs or learning something new, you’re likely to find me immersed in a compelling book or unwinding with critically acclaimed films. Currently, I’m open to exciting <span className="text-purple-300">collaborations</span> and <span className="text-purple-300">new opportunities</span> to contribute my skills and grow professionally.
      </p>

      <div>

      </div>
    </header>
  )
}
