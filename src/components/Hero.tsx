"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

export default function Hero() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="relative flex min-h-[720px] items-center overflow-hidden pt-24 sm:min-h-[800px] sm:pt-28 lg:h-screen lg:pt-20">
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/home/hero.png"
          alt="B.A. Holding hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,_rgba(110,154,255,0.26),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(52,104,214,0.22),_transparent_28%)]"></div>
        <div className="absolute inset-0 bg-[#0D1A3A]/62 z-10"></div>
      </motion.div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex max-w-4xl flex-col gap-6 sm:gap-8"
        >
          <motion.div variants={fadeUp} className="section-tag gap-3">
            <div className="section-tag-line"></div>
            <span className="section-tag-text text-sm sm:text-base">
              Диверсифицированный холдинг
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="display-title text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Строим будущее через стратегическое видение
          </motion.h1>

          <motion.p variants={fadeUp} className="body-copy max-w-2xl text-base text-[#8F8F8F] sm:text-lg lg:text-xl">
            B.A. Holding управляет диверсифицированными проектами, обеспечивая устойчивый рост и максимальную ценность для партнеров и инвесторов.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-2 flex flex-col gap-3 sm:mt-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <Link 
              href="#directions" 
              className="w-full rounded-sm bg-[#567CDF] px-6 py-4 text-center font-medium text-white transition-colors hover:bg-[#466BCC] sm:w-auto sm:px-10"
            >
              Направления
            </Link>
            <Link 
              href="#about" 
              className="w-full rounded-sm border border-white/20 px-6 py-4 text-center font-medium text-white transition-colors hover:bg-white/5 sm:w-auto sm:px-10"
            >
              Подробнее
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-4 z-20 hidden flex-col items-center gap-2 sm:left-6 lg:bottom-12 lg:left-12 lg:flex"
      >
        <span className="text-xs text-[#8F8F8F] tracking-widest uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>Вниз</span>
        <div className="w-px h-16 bg-white/20 overflow-hidden relative">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-[#567CDF] absolute top-0"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}