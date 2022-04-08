import Image from "next/image";

interface Props {
  alt: string;
  src: string;
}
export default function Avatar({ alt, src }: Props) {
  return (
    <div className="h-[96px] w-[96px] select-none rounded-full bg-gradient-to-tl from-purple-700/60 to-rose-400/60 p-1 shadow-lg sm:h-[128px] sm:w-[128px]">
      <Image
        priority
        alt={alt}
        className="rounded-full"
        draggable="false"
        height={160}
        src={src}
        width={160}
      />
    </div>
  );
}
