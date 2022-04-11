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
    <div className="flex flex-col space-y-1">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {format(parseISO(date), "MMMM dd, yyyy")}
      </p>
      <Link href={`/${slug}`}>
        <a>
          <h4 className="w-full font-medium text-gray-900 dark:text-gray-100 md:text-lg">
            {title}
          </h4>
          <p className="text-gray-600 dark:text-gray-300">{summary}</p>
        </a>
      </Link>
    </div>
  );
}
