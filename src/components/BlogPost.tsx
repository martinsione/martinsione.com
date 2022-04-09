import type { Post as IPost } from "contentlayer/generated";

import Link from "next/link";

export default function BlogPost({
  title,
  summary,
  slug,
}: Pick<IPost, "title" | "summary" | "slug">) {
  return (
    <Link href={`/${slug}`}>
      <a className="block w-full">
        <h4 className="mb-2 w-full text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-400">{summary}</p>
      </a>
    </Link>
  );
}
