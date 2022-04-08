import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

interface Props {
  deploy: string;
  description: string;
  github: string;
  src: string;
  technologies: string[];
  title: string;
}

export default function Card({
  description,
  deploy,
  github,
  src,
  title,
  technologies,
}: Props) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border dark:border-zinc-800">
      <Image alt={title} height={324} src={src} width={576} />
      <div className="flex flex-grow flex-col justify-between gap-4 p-4">
        <div>
          <h3 className="text-lg font-medium text-black dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((technology) => (
              <p
                key={technology}
                className="select-none rounded-full bg-purple-900/80 px-2 py-1 text-xs font-medium leading-none text-purple-200"
              >
                {technology}
              </p>
            ))}
          </div>

          <div className="flex gap-2">
            <a
              className="focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
              href={github}
            >
              <div className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-tl from-purple-500/80 to-rose-400/80 py-1 px-2 text-rose-100 transition-all duration-300 ease-out hover:scale-110 hover:shadow-md hover:shadow-purple-500/50 active:scale-100">
                <FaGithub className="h-4 w-4" />
                <div className="text-sm">Code</div>
              </div>
            </a>

            <a
              className="focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
              href={deploy}
            >
              <div className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-tl from-purple-500/80 to-rose-400/80 py-1 px-2 text-rose-100 transition-all duration-300 ease-out hover:scale-110 hover:shadow-md hover:shadow-purple-500/50 active:scale-100">
                <FaExternalLinkAlt className="h-4 w-4" />
                <div className="text-sm">Deploy</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
