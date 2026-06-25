import Image from "next/image";

export default function Header() {
  return (
    <header className="py-4 px-8 flex items-center justify-between fixed bg-this-background top-0 left-0 w-full z-10">
      <a href="/" arias-label="Início" className="">
        <Image
          className="h-auto"
          src="/logo-blue.webp"
          width={36}
          height={0}
          alt="Início"
        />
      </a>
      <div className="flex gap-8">
        <a
          href="/curriculo-vitor-bruno.pdf"
          download
          className="text-this-primary text-2xl font-this-playball
          relative
          after:w-full
          after:h-0.5
          after:bg-this-secondary
          after:absolute
          after:-bottom-1
          after:left-[50%]
          after:-translate-x-[50%]
          after:origin-left
          after:transition-transform
          after:duration-75
          after:scale-x-0
          hover:after:scale-x-100
          "
        >
          currículo
        </a>
        <a
          href="#contato"
          className="text-this-primary text-2xl font-this-playball
          relative
          after:w-full
          after:h-0.5
          after:bg-this-secondary
          after:absolute
          after:-bottom-1
          after:left-[50%]
          after:-translate-x-[50%]
          after:origin-left
          after:transition-transform
          after:duration-75
          after:scale-x-0
          hover:after:scale-x-100
      "
        >
          contato
        </a>
      </div>
    </header>
  );
};
