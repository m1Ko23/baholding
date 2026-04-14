"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";

const navItems = [
  { href: "/about", label: "О компании" },
  { href: "/#projects", label: "Проекты" },
  { href: "/#investors", label: "Инвесторам" },
  { href: "/#careers", label: "Карьера" },
  { href: "/#contact", label: "Контакты" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const { overflow } = document.body.style;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#08152f]/92 backdrop-blur-md"
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-12">
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <BrandLogo priority variant="white" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-ui text-white/70 transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link 
              href="/#contact" 
              className="nav-ui rounded-sm border border-[#567CDF] px-7 py-2.5 text-[#567CDF] transition-all hover:bg-[#567CDF] hover:text-white"
            >
              Связаться
            </Link>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-sm border border-white/10 text-white transition-colors hover:border-[#567CDF] hover:text-[#567CDF] lg:hidden"
          >
            <span className="relative h-4 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-transform ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#081022]/80 backdrop-blur-md lg:hidden"
          >
            <motion.div
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mt-[76px] border-b border-white/10 bg-[#08152f] px-4 py-6 sm:px-6"
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="nav-ui rounded-sm px-3 py-3 text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="nav-ui mt-5 flex w-full items-center justify-center rounded-sm bg-[#567CDF] px-5 py-3 text-white transition-colors hover:bg-[#466BCC]"
              >
                Связаться
              </Link>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}