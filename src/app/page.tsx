import { Header } from "@/components/header";
import { blogItems, ideas, projectItems } from "@/components/items";
import { Links } from "@/components/links";
import { List } from "@/components/list";
import { TechStack } from "@/components/stack";

export default function Home() {
  return (
    <>
      <main>
        <section id="home">
          <Header />
          <Links />
          <TechStack />
        </section>

        <section id="projects" className="mt-16">
          <List title="Projects" items={projectItems} />
        </section>

        <section id="blogs" className="mt-16">
          <List title="Blogs" items={blogItems} />
        </section>

        <section id="ideas" className="mt-16">
          <List
            title="Ideas"
            about="This section highlights concepts I'm currently thinking through or prototyping."
            items={ideas}
          />
        </section>
      </main>

      <footer className="flex justify-center text-sm items-center p-0.5 bg-[#0c0c0c] rounded-md mt-8">
        &copy; {new Date().getFullYear()} | Crafted by Kartik Tyagi
      </footer>
    </>
  )
}
