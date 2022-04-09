import type { Post as IPost } from "contentlayer/generated";

import Link from "next/link";
import { parseISO, format } from "date-fns";

export default function BlogPost({
  title,
  summary,
  slug,
  date,
}: Pick<IPost, "title" | "summary" | "slug" | "date">) {
  return (
    <div className="flex flex-col items-start  space-y-2 sm:flex-row sm:space-y-0">
      <div className="relative sm:mr-52">
        <p className="whitespace-nowrap text-zinc-400 sm:absolute">
          {format(parseISO(date), "MMMM dd, yyyy")}
        </p>
      </div>

      <Link href={`/${slug}`}>
        <a className="hover:opacity-80">
          <h4 className="w-full text-xl font-medium text-gray-900 dark:text-gray-100 md:text-xl">
            {title}
          </h4>
          <p className="text-lg text-gray-600 dark:text-gray-400">{summary}</p>
        </a>
      </Link>
    </div>
  );
}
