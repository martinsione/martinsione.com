import Link from "next/link";
import Image from "next/image";

function CustomLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{children}</a>
      </Link>
    );
  }

  return (
    <a href={href} rel="noopener noreferrer" target="_blank" {...props}>
      {children}
    </a>
  );
}

function RoundedImage({ alt, src, ...props }: { alt: string; src: string }) {
  return (
    <div>
      <Image alt={alt} className="hidden" src={src} {...props} />
    </div>
  );
}

function Callout({
  emoji,
  children,
}: {
  emoji: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex rounded-lg bg-gray-200 p-4 dark:bg-gray-800">
      <div className="mr-4 flex w-4 items-center">{emoji}</div>
      <div className="callout w-full">{children}</div>
    </div>
  );
}

export default {
  Image: RoundedImage,
  a: CustomLink,
  Callout,
};
