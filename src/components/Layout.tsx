interface Props {
  children: React.ReactNode;
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="underlined font-medium text-gray-500 hover:text-rose-300 dark:hover:text-rose-200/90"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="relative z-10 mx-auto flex w-full sm:max-w-4xl">
        <span className="pointer-events-none absolute top-[-70vh] left-0 right-0 bottom-[-5vw] -z-10 bg-gradient-to-r from-rose-400/50 via-fuchsia-500/50 to-indigo-500/50 blur-3xl filter dark:from-rose-400/20 dark:via-fuchsia-500/20 dark:to-indigo-500/20" />
      </div>
      <div className="min-h-screen antialiased selection:bg-pink-200/70 dark:text-gray-50 dark:selection:bg-pink-500/50 dark:selection:text-white">
        <main className="mx-auto w-full max-w-2xl px-6 py-8 md:px-0">
          {children}
        </main>
        <footer className="mb-8 mt-16 flex flex-col items-center justify-center space-y-4 sm:mt-36 sm:mb-24 sm:space-y-6">
          <div className="space-x-6">
            <FooterLink href="https://github.com/martinsione">
              Github
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/martinsione">
              Linkedin
            </FooterLink>
            <FooterLink href="/resume">Resume</FooterLink>
          </div>
        </footer>
      </div>
    </>
  );
}
