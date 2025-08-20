import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export type Item = {
  title: string
  href: string
  role?: string
  period?: string
  description?: string
}

type ListProps = {
  title: string
  items: Item[]
  type?: string
}

export function List({
  title,
  items,
  type,
}: ListProps) {
  return (
    <section className="mb-16 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-accent mr-2"><span className="text-purple-500">*</span></span> {title}
      </h2>
      <div className="space-y-8">
        {items.map((item) => (
          <div key={item.title} className="group p-1 rounded-md">
            <Link href={item.href} target="_blank">
              <h3 className="text-xl font-semibold mb-1 text-white group-hover:text-purple-500 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 mb-2">
                {item.role} {item.period && `(${item.period})`}
              </p>
              <p className="text-gray-300">{item.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

// {type === "blog" ? (
//     <span className="inline-flex items-center gap-2">
//     {item.title} <ArrowUpRight size={16} />
//     </span>
// ) : (
//     item.title
// )}
