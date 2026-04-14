"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, revealViewport, sectionStagger, slideLeft, slideRight } from "@/components/motion";

export default function Projects() {
  return (
    <section id="projects" className="section-dark py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mb-12 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between md:gap-8"
        >
          <div>
            <div className="section-tag mb-5 gap-3 sm:mb-6">
              <div className="section-tag-line"></div>
              <span className="section-tag-text">
                Избранные проекты
              </span>
            </div>
            <h2 className="display-title-soft text-3xl text-white sm:text-4xl md:text-5xl">
              Реализованные работы
            </h2>
          </div>
          
          <Link href="#all-projects" className="accent-link">
            Все проекты
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>

        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid grid-cols-1 gap-0 overflow-hidden rounded-sm border border-white/10 lg:grid-cols-2"
        >
          <motion.div variants={slideLeft} className="flex flex-col justify-center bg-[linear-gradient(180deg,#2C5EB2_0%,#173A76_100%)] p-6 shadow-[0_24px_64px_rgba(24,59,121,0.18)] sm:p-10 lg:p-16">
            <motion.span variants={fadeUp} className="accent-kicker mb-4 w-max sm:mb-6">
              Строительство · Коммерческая недвижимость
            </motion.span>
            <motion.h3 variants={fadeUp} className="display-title-soft mb-6 text-3xl text-white sm:mb-8 sm:text-4xl md:text-5xl">
              Бизнес-центр <br /> «Ривер-сайд»
            </motion.h3>
            <motion.p variants={fadeUp} className="body-copy mb-8 text-base text-[#CAD8F5] sm:mb-12 sm:text-lg">
              Знаковый коммерческий проект, сочетающий современную архитектуру, экологичные технологии и продуманную инфраструктуру для ведущих компаний.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <Link 
                href="#project-details" 
                className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-center font-medium text-[#163A76] shadow-[0_12px_28px_rgba(255,255,255,0.18)] transition-colors hover:bg-[#ECF3FF] sm:px-8"
              >
                Смотреть проект
              </Link>
              <Link 
                href="#more" 
                className="group inline-flex items-center gap-2 rounded-sm border border-white/18 px-6 py-3 font-medium text-white transition-colors hover:bg-white/6 sm:px-8"
              >
                Детали проекта
                <svg className="transform group-hover:translate-x-1 transition-transform" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div variants={slideRight} className="group relative aspect-[4/3] overflow-hidden lg:aspect-auto">
            <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(24,58,118,0.06)_100%)]"></div>
            <Image
              src="/home/projects.png"
              alt="Избранный проект B.A. Holding"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="z-0 object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}