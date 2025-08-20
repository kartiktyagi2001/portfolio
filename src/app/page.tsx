import { Header } from "@/components/header";
import { Links } from "@/components/links";
import { List } from "@/components/list";
import { TechStack } from "@/components/stack";

const projectItems = [
  {
    title: "Podium",
    role: "creator and maintainer",
    description:
      "An open-source, secure modern publishing platform for effortless content creation and exploration.",
    href: "https://podium-sand.vercel.app/",
  },
  {
    title: "CSV 2 JSON",
    role: "creator and maintainer",
    description: "A fast, intuitive client-side data converter for smooth format transformations on the fly",
    href: "https://csv2json-sooty.vercel.app/",
  },
  {
    title: "Thinky AI",
    role: "creator",
    description: "A responsive AI companion app delivering versatile assistance with ultra-fast, scalable backend support.",
    href: "https://thinkyai.vercel.app/",
  },
  {
    title: "LoopKart",
    role: "contributor",
    description: "An online grocery shopping platform focused on intuitive browsing, secure checkout, and smooth user experience.",
    href: "",
  },
]

const blogItems = [
  {
    title: "Embracing Minimalism in Web Development",
    href: "",
    type: "blog",
  },
  {
    title: "How Philosophy Shapes My Approach to Code",
    href: "",
    type: "blog",
  },
  {
    title: "Favorite Critically Acclaimed Films & Their Lessons for Developers",
    href: "",
    type: "blog",
  },
];

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
          items={blogItems}
        />
      </section>

      <footer className="flex justify-center text-sm items-center p-0.5 bg-[#0c0c0c] rounded-md">
        &copy; {new Date().getFullYear()} | Crafted by Arcbit
      </footer>
    </main>
  )

}