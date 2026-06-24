import Image from "next/image";

interface mainProps {
  source: string;
  link: string;
};

export default function MainItem({source, link}: mainProps) {
  return (
    <article className="relative group z-0">
      <Image
        className="w-auto h-auto"
        src={source}
        width={500}
        height={0}
        alt=""
      />
      <div
        className="
          flex items-center justify-center
          w-full
          h-full
          absolute
          top-0
        bg-black/50
          backdrop-blur-sm
          invisible
          transition-transform
          duration-300
          scale-y-0
          origin-top
          group-hover:visible
          group-hover:scale-y-100
          "
      >
        <a
          href={link}
          target="_blank"
          className="py-2 px-6 bg-this-primary text-this-background font-this-play border border-this-primary hover:bg-transparent hover:text-this-primary"
        >
          Visitar site
        </a>
      </div>
    </article>
  );
};
