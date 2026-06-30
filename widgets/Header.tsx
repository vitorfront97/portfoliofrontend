"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaBars,
  FaTimes,
  FaFileAlt,
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import MenuBg from "@/components/MenuBg";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const lockScroll = () => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.dataset.scrollY = scrollY.toString();
  };

  const unlockScroll = () => {
    const scrollY = document.body.dataset.scrollY;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";

    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY));
    }
  };

  useEffect(() => {
    if (openMenu) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return unlockScroll;
  }, [openMenu]);
  
  return (
    <header className="py-4 px-8 w-full flex items-center justify-between fixed top-0 left-0 bg-this-background z-10">
      <a href="/" arias-label="Início">
        <Image
          className="h-auto"
          src="/logo-blue.webp"
          width={36}
          height={0}
          alt="Início"
        />
      </a>
      <button className="absolute right-8 cursor-pointer z-10 sm:hidden" onClick={() => setOpenMenu((o) => !o)}>
        {openMenu ? (
          <FaTimes
            className=" text-this-primary text-3xl"
          />
        ) : (
          <FaBars
            className="text-this-secondary text-3xl"
          />
        )}
      </button>
      <nav className="hidden sm:flex">
        <ul className="flex gap-8">
          <li>
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
          </li>
          <li>
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
          </li>
        </ul>
      </nav>
      <MenuBg openMenu={openMenu} />
      <nav
        className={`py-12 px-16 flex justify-center absolute top-24 left-[50%] -translate-x-[50%] border-4 border-this-primary backdrop-blur-2xl transition-transform duration-300 z-10 sm:hidden
        ${openMenu ? `translate-y-0` : `-translate-y-110`}  
        `}
      >
        <ul className="flex flex-col gap-8">
          <li>
            <a
              download
              href="/curriculo-vitor-bruno.pdf"
              className="flex items-center gap-2 text-this-primary text-2xl font-this-oleoScript"
            >
              <FaFileAlt aria-hidden="true" className="text-this-primary text-2xl" /> Currículo
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5543988729240"
              target="_blank"
              className="flex items-center gap-2 text-this-primary text-2xl font-this-oleoScript"
            >
              <FaWhatsapp aria-hidden="true" className="text-this-primary text-2xl" /> WhatsApp
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/vitorbrunobueno"
              target="_blank"
              className="flex items-center gap-2 text-this-primary text-2xl font-this-oleoScript"
            >
              <FaLinkedinIn aria-hidden="true" className="text-this-primary text-2xl" /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vitorfront97"
              target="_blank"
              className="flex items-center gap-2 text-this-primary text-2xl font-this-oleoScript"
            >
              <FaGithub aria-hidden="true" className="text-this-primary text-2xl" /> GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
