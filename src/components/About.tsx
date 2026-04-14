"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, revealViewport, sectionStagger, slideLeft } from "@/components/motion";

export default function About() {
  return (
    <section id="about" className="section-light relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="pointer-events-none absolute left-0 top-20 hidden -translate-x-1/4 select-none text-[120px] font-bold leading-none text-[#1A2A5A]/40 sm:block lg:top-32 lg:text-[200px]"
        >
          01
        </motion.div>

        <div className="relative z-10 grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image
                src="/home/about.png"
                alt="О компании B.A. Holding"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            variants={sectionStagger}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="flex flex-col justify-center"
          >
            <motion.div variants={fadeUp} className="section-tag mb-5 gap-3 sm:mb-6">
              <div className="section-tag-line"></div>
              <span className="section-tag-text">
                О компании
              </span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="display-title-soft mb-6 text-3xl text-[#163A76] sm:text-4xl md:text-5xl sm:mb-8">
              Диверсифицированный холдинг, <br className="hidden md:block"/>основанный на опыте
            </motion.h2>

            <motion.p variants={fadeUp} className="body-copy mb-5 text-base text-[#5C78A9] sm:text-lg sm:mb-6">
              B.A. Holdлдинг — диверсифицированная холдинговая компания, управляющая портфелем активов в ключевых секторах экономики. Мы инвестируем в потенциал и создаем инфраструктуру будущего.
            </motion.p>

            <motion.p variants={fadeUp} className="body-copy mb-8 text-base text-[#5C78A9] sm:text-lg sm:mb-10">
              Наш ключевой фокус — развитие эффективного сотрудничества, внедрение передовых практик управления и достижение выдающихся финансовых и операционных результатов.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link href="#more" className="accent-link w-max">
                Узнать больше о нас
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
              className="mt-12 grid grid-cols-2 gap-6 border-t border-[#D9E4F9] pt-10 sm:mt-16 sm:gap-8 sm:pt-12 md:grid-cols-4 lg:mt-20 lg:pt-16"
            >
              {[
                { number: "25+", text: "Лет опыта" },
                { number: "120+", text: "Проектов" },
                { number: "4", text: "Направления" },
                { number: "18", text: "Стран" }
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeUp} className="flex flex-col gap-2 rounded-sm border border-[#DCE6F7] bg-white px-4 py-5 shadow-[0_22px_60px_rgba(5,13,30,0.14)] sm:px-5 sm:py-6">
                  <span className="text-3xl font-bold text-[#567CDF] sm:text-4xl">{stat.number}</span>
                  <span className="text-[#5C78A9] text-sm uppercase tracking-wider">{stat.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}