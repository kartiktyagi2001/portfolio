import { Header } from "@/components/header";
import { blogItems, ideas, projectItems } from "@/components/items";
import { Links } from "@/components/links";
import { List } from "@/components/list";
import { TechStack } from "@/components/stack";


export default function Home(){
  return (
    <main className="">
      <section id="home">
        <Header />
        <Links />
        <TechStack />
      </section>

      <section id="projects" className="mt-16">
        <List title="Projects" items={projectItems} />
      </section>

      <section id="blogs">
        <List
          title="Blogs"
          type="blogs"
          items={blogItems}
        />
      </section>

      <section id="ideas">
        <List
          title="Ideas"
          type="idea"
          about="This section highlights concepts I’m currently thinking through or prototyping."
          items={ideas}
        />
      </section>

      <footer className="flex justify-center text-sm items-center p-0.5 bg-[#0c0c0c] rounded-md">
        &copy; {new Date().getFullYear()} | Crafted by Kartik Tyagi
      </footer>
    </main>
  )

}