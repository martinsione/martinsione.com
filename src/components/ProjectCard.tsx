import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

interface Props {
  deploy: string;
  github: string;
  src: string;
  technologies: string[];
  title: string;
}

export default function Card({
  deploy,
  github,
  src,
  title,
  technologies,
}: Props) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="group relative flex select-none flex-col overflow-hidden rounded-xl shadow-md">
      <Image
        alt={title}
        className={`transition-all duration-700 ease-in-out sm:group-hover:blur-sm ${
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-[2px] grayscale-0 sm:blur-none "
        }`}
        draggable="false"
        height={333}
        loading="lazy"
        src={src}
        width={592}
        onLoadingComplete={() => setLoading(false)}
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-black/70 px-3 transition-all duration-300 ease-in-out sm:opacity-0 sm:hover:opacity-100">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="flex flex-wrap justify-center gap-1">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-purple-900/50 px-2 py-1 text-xs font-medium leading-none text-purple-200"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <a
            className="flex items-center gap-2 rounded-lg bg-gradient-to-tl from-purple-500/80 to-rose-400/80 px-2 py-1 font-medium text-white transition-all duration-300 ease-out hover:scale-105 hover:shadow-md hover:shadow-purple-500/50 active:scale-100"
            href={deploy}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaExternalLinkAlt className="h-4 w-4" />
            <div className="text-sm">Deploy</div>
          </a>
          <a
            className="flex items-center gap-2 rounded-lg bg-gradient-to-tl from-purple-500/80 to-rose-400/80 px-2 py-1 font-medium text-white transition-all duration-300 ease-out hover:scale-105 hover:shadow-md hover:shadow-purple-500/50 active:scale-100"
            href={github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub className="h-4 w-4" />
            <div className="text-sm">Code</div>
          </a>
        </div>
      </div>
    </div>
  );
}
