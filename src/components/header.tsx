import { ScrambleText } from "@/components/scramble"
import { MapPin, Mail } from "lucide-react"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="mb-4 animate-fade-in text-white">
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
          kartiktyagi1201@outlook.com
        </div>
      </div>

      <p className="leading-relaxed animate-fade-in-up text-sm">
        I am Kartik, an engineer with a love for <span className="text-purple-300">minimalism</span> and <span className="text-purple-300">clean code.</span> I engineer modern and efficient software. <br /><br />
        I'm driven by curiosity, constantly exploring new technologies and diving deep into challenging problems that push my technical boundaries.
        <br />
        <br />
         When not shipping, you'll find me reading, watching films, or exploring new interests.
         <br />I'm always open to <span className="text-purple-300">collaborations</span> and <span className="text-purple-300">opportunities</span> to work on meaningful projects. <br /> Let's connect and build something great.
      </p>

      <p className="text-sm text-gray-500">
        Open to freelance projects and full-time opportunities - {" "}
        <a href="mailto:kartiktyagi1201@outlook.com" className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
          <span className="underline underline-offset-4 decoration-purple-500"> let's talk </span>
        </a>
      </p>
    </header>
  )
}
