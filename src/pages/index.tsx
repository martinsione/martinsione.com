import type { IconType } from "react-icons";

import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { InferGetStaticPropsType } from "next";
import { pick } from "contentlayer/client";

import { allPosts } from "contentlayer/generated";
import seo from "@/lib/seo";
import ThemeButton from "@/components/ThemeButton";
import ProjectCard from "@/components/ProjectCard";
import BlogPost from "@/components/BlogPost";
import Avatar from "@/components/Avatar";

function LinkIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: IconType;
  label: string;
}) {
  const Icon = icon;
  return (
    <a
      className="group flex flex-col items-center gap-1 sm:flex-row sm:gap-2"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="rounded-lg bg-gradient-to-tl from-purple-500/80 to-rose-400/80 p-1 text-white transition-all duration-300 ease-out group-hover:shadow-lg group-hover:shadow-purple-500/50 sm:hover:scale-110 sm:active:scale-100">
        <Icon className="h-6 w-6 sm:h-5 sm:w-5" />
      </div>
      <p className="sm:text-md text-sm group-hover:underline group-hover:underline-offset-1">
        {label}
      </p>
    </a>
  );
}

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="mt-8 w-full space-y-12 sm:mt-28 md:space-y-20">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4 md:flex-row-reverse md:items-center md:gap-x-8">
            <div className="relative">
              <div className="absolute right-0 z-10">
                <ThemeButton />
              </div>

              <Avatar alt="Martin Sione" src="/img/avatar.jpg" />
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                Martin Sione
              </h1>
              <p className="font-medium md:text-lg">Frontend developer</p>

              <p className="prose hidden text-sm dark:text-neutral-300 sm:block md:text-base">
                {seo.description}
              </p>
            </div>
          </div>
        </div>
        <p className="prose dark:text-neutral-300 sm:hidden">
          {seo.description}
        </p>

        <div className="flex items-center space-x-10 leading-none">
          <LinkIcon
            href="https://github.com/martinsione"
            icon={FaGithub}
            label="Github"
          />

          <LinkIcon
            href="https://www.linkedin.com/in/martinsione"
            icon={FaLinkedin}
            label="Linkedin"
          />

          <LinkIcon href="/resume" icon={FaFilePdf} label="Resume" />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight md:text-4xl">Blog</h2>
        <div className="space-y-8">
          {posts.map((post) => (
            <BlogPost key={post.title} {...post} />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
          Projects
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <ProjectCard
            deploy="https://meli-fake.vercel.app/"
            github="https://github.com/martinsione/meli-clone"
            src="/img/project/mercadolibre.png"
            technologies={["React", "NextJS", "Typescript", "Chakra-ui"]}
            title="MercadoLibre Clone"
          />
          <ProjectCard
            deploy="https://videogames.martinsione.com"
            github="https://github.com/martinsione/videogames"
            src="/img/project/videogames.png"
            technologies={[
              "React",
              "Redux",
              "TypeScript",
              "Express",
              "NodeJS",
              "PostgreSQL",
            ]}
            title="Videogames App"
          />

          <ProjectCard
            deploy="https://coffeestore.vercel.app/"
            github="https://github.com/martinsione/coffeestore"
            src="/img/project/coffeestore.png"
            technologies={["React", "TailwindCSS", "Firebase", "Context API"]}
            title="Coffee ecommerce"
          />

          <ProjectCard
            deploy="https://martinsione-amazon.vercel.app/"
            github="https://github.com/martinsione/amazon-clone"
            src="/img/project/amazon.png"
            technologies={[
              "React",
              "Firebase",
              "Context API",
              "OAuth",
              "NodeJS",
            ]}
            title="Amazon Clone"
          />
        </div>
      </div>
    </div>
  );
}

export function getStaticProps() {
  const posts = allPosts
    .map((post) => pick(post, ["slug", "title", "summary", "date"]))
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return { props: { posts } };
}
