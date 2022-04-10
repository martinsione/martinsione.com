import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-36 flex flex-col items-center justify-center space-y-8 md:mt-52">
      <h4 className="text-3xl font-bold sm:text-5xl">404 - Not Found</h4>
      <Link href="/">
        <a className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-tl from-purple-500/80 to-rose-400/80 py-3 px-8 font-medium text-rose-100 duration-300  hover:scale-105 hover:shadow-md active:scale-100">
          Return home
        </a>
      </Link>
    </div>
  );
}
