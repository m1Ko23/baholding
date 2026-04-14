"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, revealViewport, sectionStagger, slideLeft, slideRight } from "@/components/motion";

export default function Investors() {
  return (
    <section id="investors" className="section-light py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid grid-cols-1 gap-0 overflow-hidden rounded-sm border border-[#D9E4F9] lg:grid-cols-2"
        >
          <motion.div variants={slideLeft} className="relative aspect-[4/3] lg:aspect-auto">
            <Image
              src="/home/investors.png"
              alt="Отношения с инвесторами B.A. Holding"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="z-0 object-cover"
            />
            <div className="absolute inset-0 z-10 bg-[#0F1B3D] mix-blend-multiply opacity-20"></div>
          </motion.div>

          <motion.div variants={slideRight} className="flex flex-col justify-center bg-white p-6 shadow-[0_24px_70px_rgba(5,13,30,0.16)] sm:p-10 lg:p-16">
            <motion.div
              variants={sectionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
            >
              <motion.div variants={fadeUp} className="section-tag mb-5 gap-3 sm:mb-6">
                <div className="section-tag-line"></div>
                <span className="section-tag-text">
                  Отношения с инвесторами
                </span>
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="display-title-soft mb-6 text-3xl text-[#163A76] sm:mb-8 sm:text-4xl">
                Стратегические партнёрства <br /> для долгосрочного роста
              </motion.h2>
              
              <motion.p variants={fadeUp} className="body-copy mb-5 text-sm text-[#5C78A9] sm:mb-6 sm:text-base">
                B.A. Holding поддерживает прозрачные и структурированные отношения с инвесторами, предоставляя доступ к перспективным активам и стабильной доходности.
              </motion.p>
              
              <motion.p variants={fadeUp} className="body-copy mb-8 text-sm text-[#5C78A9] sm:mb-10 sm:text-base">
                Наша система работы с инвесторами построена на доверии, глубоком анализе рынков и строгом управлении рисками.
              </motion.p>
              
              <motion.div variants={fadeUp} className="mb-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:mb-12 sm:grid-cols-2 sm:gap-y-6 sm:gap-x-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#567CDF]"></div>
                  <span className="font-medium text-[#163A76]">Прозрачная отчётность</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#567CDF]"></div>
                  <span className="font-medium text-[#163A76]">Стратегическое согласование</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#567CDF]"></div>
                  <span className="font-medium text-[#163A76]">Управление рисками</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#567CDF]"></div>
                  <span className="font-medium text-[#163A76]">Долгосрочное видение</span>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Link 
                  href="#partner" 
                  className="inline-flex w-full items-center justify-center rounded-sm bg-[#567CDF] px-6 py-3 font-medium text-white transition-colors hover:bg-[#466BCC] sm:w-max sm:px-8"
                >
                  Стать партнёром
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}