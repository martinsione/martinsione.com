import type { Post as IPost } from "contentlayer/generated";

import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
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
        description={post.summary}
        title={`${post.title} - Martin Sione`}
      />
      <div className="mt-12 flex items-center justify-between">
        <Link href="/">
          <a className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-2xl transition-all hover:ring-2 hover:ring-pink-300 dark:bg-neutral-700">
            <IoArrowBack />
          </a>
        </Link>
        <div>
          <ThemeButton />
        </div>
      </div>
      <article className="mx-auto mt-12 flex w-full max-w-3xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          {post.title}
        </h1>
        <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Martin Sione"
              className="rounded-full"
              draggable="false"
              height={24}
              src="/img/avatar.jpg"
              width={24}
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {"Martin Sione / "}
              {format(parseISO(post.date), "MMMM dd, yyyy")}
            </p>
          </div>
          <p className="min-w-32 mt-2 text-sm text-gray-600 dark:text-gray-400 md:mt-0">
            {post.readingTime.text}
          </p>
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
