"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, revealViewport, sectionStagger } from "@/components/motion";

const sectors = [
  { id: "construction", title: "Строительство", image: "/home/direction-construction.png" },
  { id: "industry", title: "Промышленность", image: "/home/direction-industry.png" },
  { id: "media", title: "Медиа", image: "/home/direction-media.png" },
  { id: "investments", title: "Инвестиции", image: "/home/direction-investments.png" },
];

export default function Directions() {
  return (
    <section id="directions" className="section-dark py-20 sm:py-24 lg:py-32">
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
                Направления бизнеса
              </span>
            </div>
            <h2 className="display-title-soft text-3xl text-white sm:text-4xl md:text-5xl">
              Ключевые сферы деятельности
            </h2>
          </div>
          
          <Link href="#all-directions" className="accent-link">
            Все направления
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
          className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {sectors.map((sector) => (
            <motion.div key={sector.id} variants={fadeUp}>
              <Link href={`#${sector.id}`} className="group relative block h-[300px] overflow-hidden rounded-sm border border-white/10 bg-[linear-gradient(180deg,#2C5EB2_0%,#173A76_100%)] shadow-[0_26px_64px_rgba(24,59,121,0.18)] sm:h-[360px] lg:h-[400px]">
                <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(12,28,64,0.08)_0%,rgba(12,28,64,0.24)_42%,rgba(12,28,64,0.88)_100%)]"></div>
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-8">
                  <span className="accent-kicker mb-2 w-max transition-all group-hover:translate-y-0 group-hover:opacity-100">Сектор</span>
                  <h3 className="text-2xl font-semibold leading-tight text-white transition-transform group-hover:-translate-y-2">{sector.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}