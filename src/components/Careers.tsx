"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, revealViewport, sectionStagger, softScale } from "@/components/motion";

export default function Careers() {
  return (
    <section id="careers" className="section-dark border-t border-white/5 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={softScale}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="flex flex-col items-start justify-between gap-8 rounded-sm border border-white/10 bg-[linear-gradient(180deg,#2C5EB2_0%,#173A76_100%)] p-6 shadow-[0_26px_64px_rgba(24,59,121,0.18)] sm:gap-10 sm:p-10 lg:flex-row lg:items-center lg:gap-12 lg:p-16"
        >
          <motion.div
            variants={sectionStagger}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="flex-1 max-w-2xl"
          >
            <motion.div variants={fadeUp} className="section-tag mb-5 gap-3 sm:mb-6">
              <div className="section-tag-line"></div>
              <span className="section-tag-text">
                Карьера
              </span>
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="display-title-soft mb-5 text-2xl text-white sm:text-3xl md:text-4xl sm:mb-6">
              Присоединяйтесь к нашей команде
            </motion.h2>
            
            <motion.p variants={fadeUp} className="body-copy text-base text-[#CAD8F5] sm:text-lg">
              Мы всегда ищем талантливых профессионалов, разделяющих наши ценности и стремление к лидерству. Создавайте будущее вместе с B.A. Holding.
            </motion.p>
          </motion.div>
          
          <motion.div variants={fadeUp}>
            <Link 
              href="#vacancies" 
              className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-sm bg-white px-6 py-4 font-medium text-[#163A76] shadow-[0_12px_28px_rgba(255,255,255,0.18)] transition-colors hover:bg-[#ECF3FF] sm:w-auto sm:px-10"
            >
              Смотреть вакансии
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}