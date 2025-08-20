import Image from "next/image"

const techStack = [
  { title: "JavaScript", logo: "/logos/javascript.svg" },
  { title: "TypeScript", logo: "/logos/typescript.svg" },
  { title: "C++", logo: "/logos/cpp.svg" },
  { title: "React", logo: "/logos/react.svg" },
  { title: "Next.js", logo: "/logos/nextjs.svg" },
  { title: "Tailwind CSS", logo: "/logos/tailwind.svg" },
  { title: "Node.js", logo: "/logos/nodejs.svg" },
  { title: "Express", logo: "/logos/express.svg" },
  { title: "Hono", logo: "/logos/hono.svg" },
  { title: "PostgreSQL", logo: "/logos/pgsql.svg" },
  { title: "Prisma", logo: "/logos/prisma.svg" },
  { title: "MongoDB", logo: "/logos/mongodb.svg" },
  { title: "Mongoose", logo: "/logos/mongoose.svg" },
  { title: "Cloudflare", logo: "/logos/cloudflare.svg" },
  { title: "Git", logo: "/logos/git.svg" },
  { title: "GitHub", logo: "/logos/github.svg" },
  { title: "Postman", logo: "/logos/postman.svg" },
  { title: "Recoil", logo: "/logos/recoil.svg" },
  { title: "Vite", logo: "/logos/vite.svg" },
  { title: "JWT", logo: "/logos/jwt.svg" },
  { title: "Vercel", logo: "/logos/vercel.svg" },
]

export function TechStack() {
  return (
    <section className="animate-fade-in-up mt-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-accent mr-2">
          <span className="text-purple-500">*</span>
        </span>{" "}
        Tech Stack
      </h2>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-700 text-gray-300 hover:border-purple-400 hover:text-purple-500 duration-200 hover:cursor-pointer"
          >
            <Image
              src={tech.logo}
              alt={tech.title}
              width={18}
              height={18}
              className="object-contain"
            />
            <span className="text-sm">{tech.title}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
