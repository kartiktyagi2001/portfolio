import Link from "next/link"

const links = [
  { title: "email", href: "mailto:arcbit.kartik@proton.me" },
  { title: "linkedin", href: "https://www.linkedin.com/in/arcbit" },
  { title: "github", href: "https://github.com/kartiktyagi2001" },
  { title: "x.com", href: "https://x.com/" },
  { title: "resume", href: "/resume.pdf" },
  { title: "a must read", href: "https://grugbrain.dev/"},
]

export function Links() {
  return (
    <section className="animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-accent mr-2">
          <span className="text-purple-500">*</span>
        </span>{" "}
        Links
      </h2>
      <div className="flex flex-wrap gap-4 text-sm">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`duration-200 hover:text-purple-500 ${
              link.title === "resume"
                ? "text-gray-400 underline underline-offset-4 decoration-purple-500"
                : "text-gray-400"
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </section>
  )
}
