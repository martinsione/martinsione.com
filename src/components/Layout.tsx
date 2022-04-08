interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="relative z-10 mx-auto flex w-full sm:max-w-4xl">
        <span className="pointer-events-none absolute top-[-60vw] left-0 right-0 bottom-[-6vw] -z-10 bg-gradient-to-r from-rose-400/50 via-fuchsia-500/50 to-indigo-500/50 blur-3xl filter dark:from-rose-400/20 dark:via-fuchsia-500/20 dark:to-indigo-500/20" />
      </div>
      <div className="min-h-screen antialiased selection:bg-pink-200/70 dark:text-gray-50 dark:selection:bg-pink-500">
        <main className="mx-auto w-full max-w-2xl py-8 px-6">{children}</main>
      </div>
    </>
  );
}
