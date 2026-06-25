import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contato" className="mt-12 p-16 flex flex-col items-center gap-4">
      <nav aria-label="Contato">
        <ul className="flex items-center gap-4">
          <li>
            <a
              href="https://wa.me/5543988729240"
              target="_blank"
              className="
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
                hover:after:scale-x-100"
            >
              <FaWhatsapp className="text-this-primary text-3xl" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/vitorbrunobueno"
              target="_blank"
              className="
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
                hover:after:scale-x-100"
            >
              <FaLinkedinIn className="text-this-primary text-3xl" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vitorfront97"
              target="_blank"
              className="
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
                hover:after:scale-x-100"
            >
              <FaGithub className="text-this-primary text-3xl" />
            </a>
          </li>
        </ul>
      </nav>
      <span className="font-this-play">© Vitor Bruno - 2026</span>
    </footer>
  );
}
