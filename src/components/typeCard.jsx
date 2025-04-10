import Image from "next/image";
import Link from "next/link";
import Arrow from "./icons/arrow";

export default function TypeCard({ data = {}, type = "full", to = "" }) {
  return (
    <div className={type !== "full" ? "flex flex-col-reverse" : ""}>
      <h3
        className={`${
          type == "full" ? "text-sm mb-2.5" : "text-min mt-2 text-center"
        } font-medium text-dark-200 `}
      >
        {data?.title}
      </h3>
      <div className="h-30.5 w-full relative">
        <Image
          src="/lion.png"
          alt="logo"
          width={100}
          height={120}
          className="h-full rounded-2xl w-full object-cover"
          priority
        />
        <Link
          href={to}
          className={`${
            type == "full"
              ? "top-1/2 -translate-y-1/2 right-4 "
              : " left-1/2 bottom-2.5 -translate-x-1/2"
          } border bg-dark-full/5 h-7 w-7  absolute backdrop-blur-[2px]  border-white rounded-full flex items-center justify-center `}
        >
          <Arrow className="text-white text-base -rotate-30 hover:rotate-0 transition-all duration-300" />
        </Link>
      </div>
    </div>
  );
}
