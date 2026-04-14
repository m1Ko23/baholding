"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, revealViewport, sectionStagger } from "@/components/motion";

export default function ContactCTA() {
  return (
    <section id="contact" className="section-light relative overflow-hidden py-20 text-center sm:py-24 lg:py-32">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#567CDF] to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#567CDF] to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mx-auto flex max-w-4xl flex-col items-center rounded-sm border border-[#DCE6F7] bg-white px-6 py-10 text-[#163A76] shadow-[0_28px_80px_rgba(5,13,30,0.18)] sm:px-10 sm:py-14 lg:px-16 lg:py-18"
        >
          <motion.div variants={fadeUp} className="section-tag mb-6 gap-3 sm:mb-8">
            <div className="section-tag-line"></div>
            <span className="section-tag-text uppercase">
              Связаться с нами
            </span>
            <div className="section-tag-line"></div>
          </motion.div>
          
          <motion.h2 variants={fadeUp} className="display-title mb-6 text-3xl text-[#163A76] sm:text-4xl md:text-5xl lg:text-6xl sm:mb-8">
            Готовы обсудить ваш следующий проект?
          </motion.h2>
          
          <motion.p variants={fadeUp} className="body-copy mx-auto mb-8 max-w-2xl text-base text-[#5C78A9] sm:mb-12 sm:text-lg">
            Свяжитесь с нашей командой для обсуждения возможностей сотрудничества, инвестиций и стратегического партнерства.
          </motion.p>
          
          <motion.div variants={fadeUp}>
            <Link 
              href="#write-us" 
              className="inline-flex w-full items-center justify-center rounded-sm bg-[#567CDF] px-6 py-4 text-lg font-medium text-white transition-colors hover:bg-[#466BCC] sm:w-auto sm:px-10"
            >
              Написать нам
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}