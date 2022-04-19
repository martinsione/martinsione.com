/* eslint-disable jsx-a11y/anchor-has-content */
import { useState } from "react";
import NextLink from "next/link";
import NextImage from "next/image";

function Image({ alt, src, ...props }: { alt: string; src: string }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="flex overflow-hidden rounded-xl bg-white/[2%]">
      <NextImage
        alt={alt || ""}
        {...props}
        className={`duration-700 ease-in-out ${
          isLoading
            ? "scale-105 blur-xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        }`}
        loading="lazy"
        src={src}
        onLoadingComplete={() => setLoading(false)}
        {...props}
      />
    </div>
  );
}

export default {
  Image,
  a: ({ href, ...props }: { href: string }) =>
    href.startsWith("http") ? (
      <a href={href} rel="noopener noreferrer" target="_blank" {...props} />
    ) : (
      <NextLink passHref href={href}>
        <a {...props} />
      </NextLink>
    ),
};
