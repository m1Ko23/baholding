"use client";

import { motion } from "framer-motion";
import { fadeUp, revealViewport, sectionStagger, slideRight } from "@/components/motion";

export default function Advantages() {
  return (
    <section className="section-light relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="pointer-events-none absolute right-0 top-0 hidden translate-x-1/4 select-none text-[120px] font-bold leading-none text-[#1A2A5A]/40 sm:block lg:text-[200px]"
        >
          03
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mb-12 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between md:gap-8 lg:mb-20"
        >
          <div>
            <div className="section-tag mb-5 gap-3 sm:mb-6">
              <div className="section-tag-line"></div>
              <span className="section-tag-text">
                Почему B.A. Holding
              </span>
            </div>
            <h2 className="display-title-soft text-3xl text-[#163A76] sm:text-4xl md:text-5xl">
              Наши конкурентные преимущества
            </h2>
          </div>
        </motion.div>

        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid grid-cols-1 gap-x-6 gap-y-10 sm:gap-y-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16"
        >
          <motion.div variants={fadeUp} className="flex flex-col rounded-sm border border-[#D9E4F9] bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.12)] sm:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-sm bg-[#567CDF]/10 text-[#567CDF] sm:mb-6 sm:h-16 sm:w-16">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 9H21M9 21V9" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#163A76] sm:mb-4">Управление проектами</h3>
            <p className="body-copy text-[#5C78A9]">
              Комплексное сопровождение сложных проектов от концепции до успешной реализации и эксплуатации.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col rounded-sm border border-[#D9E4F9] bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.12)] sm:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-sm bg-[#567CDF]/10 text-[#567CDF] sm:mb-6 sm:h-16 sm:w-16">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#163A76] sm:mb-4">Работа с инвесторами</h3>
            <p className="body-copy text-[#5C78A9]">
              Прозрачные и структурированные партнёрства с инвесторами, обеспечивающие высокий уровень доверия и возврата инвестиций.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col rounded-sm border border-[#D9E4F9] bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.12)] sm:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-sm bg-[#567CDF]/10 text-[#567CDF] sm:mb-6 sm:h-16 sm:w-16">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L2 12H5V21H19V12H22L12 3Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#163A76] sm:mb-4">Диверсифицированная структура</h3>
            <p className="body-copy text-[#5C78A9]">
              Мультисекторный портфель, балансирующий риски и создающий синергию между различными направлениями бизнеса.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col rounded-sm border border-[#D9E4F9] bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.12)] sm:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-sm bg-[#567CDF]/10 text-[#567CDF] sm:mb-6 sm:h-16 sm:w-16">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="currentColor" strokeWidth="2"/>
                <path d="M17 6H23V12" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#163A76] sm:mb-4">Устойчивый рост</h3>
            <p className="body-copy text-[#5C78A9]">
              Долгосрочное стратегическое планирование, ориентированное на стабильное масштабирование и создание ценности.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}