import type { Post as IPost } from "contentlayer/generated";

import { IoArrowBack } from "react-icons/io5";
import { FaGithub, FaRegClock } from "react-icons/fa";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { useMDXComponent } from "next-contentlayer/hooks";
import { GetStaticPaths, GetStaticProps } from "next";
import { parseISO, format } from "date-fns";

import { allPosts } from "contentlayer/generated";
import seo from "@/lib/seo";
import ThemeButton from "@/components/ThemeButton";
import MDXComponents from "@/components/MDXComponents";

export default function Post({ post }: { post: IPost }) {
  const Component = useMDXComponent(post.body.code);
  return (
    <>
      <NextSeo
        {...seo}
        canonical={`https://martinsione.com/${post.slug}`}
        description={post.description}
        title={`${post.title} - Martin Sione`}
      />
      <div className="flex items-center justify-between sm:mt-12">
        <Link href="/">
          <a className="flex items-center justify-center gap-2 rounded-full bg-gray-200 py-2 px-3 transition-all hover:ring-2 hover:ring-pink-300 dark:bg-gray-700 ">
            <IoArrowBack className="text-lg" />
            <p className="text-sm font-medium">martinsione.com</p>
          </a>
        </Link>
        <ThemeButton />
      </div>
      <article className="mx-auto mt-12 flex w-full max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex w-full items-start space-x-3 text-sm text-gray-600 dark:text-gray-400">
          <p>{format(parseISO(post.date), "MMMM dd, yyyy")}</p>
          <span>&middot;</span>
          <p className="flex items-center gap-2">
            <FaRegClock />
            {post.readingTime.text}
          </p>
          <span className="hidden sm:block">&middot;</span>
          <a
            className="hidden items-center gap-2 hover:text-gray-700 hover:underline hover:dark:text-gray-300 sm:flex"
            href={`https://github.com/martinsione/martinsione.com/edit/main/data/blog/${post.slug}.mdx`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub />
            <p>Edit on github</p>
          </a>
        </div>
        <div className="prose mt-4 w-full max-w-none dark:prose-dark">
          <Component components={MDXComponents} />
        </div>
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allPosts.find((p) => p.slug === params?.slug);
  return { props: { post } };
};
