import Link from "next/link"

export type Item = {
  title: string
  href: string
  role?: string
  period?: string
  description?: string
  tech?: string[]
}

type ListProps = {
  title: string
  items: Item[]
  about?: string
}

function ItemContent({ item }: { item: Item }) {
  return (
    <>
      <h3 className="text-xl font-semibold mb-1 text-white group-hover:text-purple-500 transition-colors duration-200">
        {item.title}
      </h3>
      {(item.role || item.period) && (
        <p className="text-sm text-gray-400 mb-2">
          {item.role} {item.period && `(${item.period})`}
        </p>
      )}
      {item.description && <p className="text-gray-300">{item.description}</p>}
      {item.tech && item.tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {item.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded border border-gray-700 text-gray-400">
              {t}
            </span>
          ))}
        </div>
      )}
    </>
  )
}

export function List({ title, items, about }: ListProps) {
  return (
    <section className="mb-16 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-purple-500 mr-2">*</span> {title}
      </h2>
      {about && <span className="text-gray-500">{about}</span>}
      <div className="space-y-8 mt-8">
        {items.map((item) => (
          <div key={item.title} className="group p-1 rounded-md">
            {item.href ? (
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                <ItemContent item={item} />
              </Link>
            ) : (
              <ItemContent item={item} />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
