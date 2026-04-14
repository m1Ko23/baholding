"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { fadeUp, revealViewport, sectionStagger, slideLeft, slideRight, softScale } from "@/components/motion";

const values = [
  {
    title: "Миссия",
    text: "Формировать диверсифицированный портфель качественных бизнесов, создающих устойчивую ценность для партнеров, инвесторов и общества.",
  },
  {
    title: "Видение",
    text: "Стать глобально признанной холдинговой компанией, известной стратегическим мышлением, ответственным управлением и долгосрочным ростом.",
  },
  {
    title: "Честность",
    text: "Мы поддерживаем высокие стандарты прозрачности, этического поведения и ответственности на каждом уровне управления.",
  },
  {
    title: "Совершенство",
    text: "Каждый проект, каждое партнерство и каждый процесс движимы стремлением к качеству и дисциплине исполнения.",
  },
];

const milestones = [
  { year: "2001", title: "Основание", text: "B.A. Holding была основана как компания по управлению строительством." },
  { year: "2007", title: "Промышленная экспансия", text: "Приобретены первые промышленные активы." },
  { year: "2013", title: "Медиа-дивизион", text: "Запущено медиа-подразделение." },
  { year: "2018", title: "Инвестиционная платформа", text: "Создано подразделение по работе с инвесторами." },
  { year: "2022", title: "Международное присутствие", text: "Операции расширены до 18 стран." },
  { year: "2026", title: "Стратегическое видение", text: "Холдинг продолжает рост с фокусом на инновации." },
];

const divisions = [
  { title: "Строительство", text: "Коммерческие, жилые и инфраструктурные проекты с полным циклом управления." },
  { title: "Промышленность", text: "Производство, логистика и промышленная инфраструктура." },
  { title: "Медиа", text: "Производство контента и стратегические коммуникации." },
  { title: "Инвестиции", text: "Структурированные партнерства и платформы со-инвестирования." },
];

const leaders = [
  { name: "Александр Хартман", role: "Председатель совета директоров" },
  { name: "Виктория Сёренсен", role: "Операционный директор" },
  { name: "Маркус Делакруа", role: "Финансовый директор" },
  { name: "Елена Ковальски", role: "Директор по стратегии" },
];

const culturePoints = [
  "Кросс-функциональные команды",
  "Программы наставничества",
  "Международная мобильность",
  "Непрерывное обучение",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-tag mb-5 gap-3 sm:mb-6">
      <div className="section-tag-line" />
      <span className="section-tag-text text-sm sm:text-base">{children}</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen text-white">
      <Header />

      <section className="section-dark relative overflow-hidden border-b border-white/10 pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <Image
            src="/about/hero.png"
            alt="B.A. Holding overview"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(86,124,223,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.06),_transparent_35%)]" />
          <div className="absolute inset-0 bg-[#0D1A3A]/78" />
        </div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            variants={sectionStagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center gap-3 text-sm text-[#8F8F8F] sm:mb-8">
              <Link href="/" className="transition-colors hover:text-white">Главная</Link>
              <span>/</span>
              <span className="text-white">О компании</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="display-title max-w-3xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              О компании B.A. Holding
            </motion.h1>
          </motion.div>
        </div>
      </section>

      <section className="section-light relative overflow-hidden py-20 sm:py-24 lg:py-32">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="pointer-events-none absolute left-0 top-20 hidden -translate-x-1/4 select-none text-[120px] font-bold leading-none text-[#1A2A5A]/40 sm:block lg:text-[200px]"
          >
            01
          </motion.div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={revealViewport} className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src="/about/who-we-are.png"
                  alt="Команда B.A. Holding"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1229]/60 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-5 right-5 rounded-sm border border-[#DCE6F7]/18 bg-white px-5 py-4 shadow-[0_28px_70px_rgba(5,13,30,0.18)] sm:bottom-8 sm:right-8 sm:px-7 sm:py-5">
                <div className="text-3xl font-bold text-[#567CDF] sm:text-5xl">25+</div>
                <div className="mt-1 text-xs uppercase tracking-[0.24em] text-[#5C78A9] sm:text-sm">лет опыта</div>
              </div>
            </motion.div>

            <motion.div variants={sectionStagger} initial="hidden" whileInView="visible" viewport={revealViewport} className="flex flex-col justify-center">
              <motion.div variants={fadeUp}>
                <SectionLabel>Кто мы</SectionLabel>
              </motion.div>

              <motion.h2 variants={fadeUp} className="display-title-soft mb-6 text-3xl text-[#163A76] sm:text-4xl md:text-5xl sm:mb-8">
                Диверсифицированный холдинг, основанный на доверии и видении
              </motion.h2>

              <motion.p variants={fadeUp} className="body-copy mb-5 text-base text-[#5C78A9] sm:text-lg">
                B.A. Holding — диверсифицированная холдинговая компания, управляющая портфелем активов в строительстве, промышленности, медиа и инвестициях.
              </motion.p>
              <motion.p variants={fadeUp} className="body-copy mb-5 text-base text-[#5C78A9] sm:text-lg">
                Наш подход сочетает глубокий отраслевой опыт с современными практиками управления, стратегическим мышлением и долгосрочной ответственностью.
              </motion.p>
              <motion.p variants={fadeUp} className="body-copy mb-8 text-base text-[#5C78A9] sm:text-lg lg:mb-10">
                Ключевой фокус нашей деятельности — развитие эффективного сотрудничества, устойчивый рост бизнеса и создание ценности для партнеров, инвесторов и команд.
              </motion.p>

              <motion.div variants={sectionStagger} initial="hidden" whileInView="visible" viewport={revealViewport} className="grid grid-cols-3 gap-4 border-t border-[#D9E4F9] pt-8 sm:gap-6 sm:pt-10">
                {[
                  { value: "120+", label: "Проектов" },
                  { value: "18", label: "Стран" },
                  { value: "4", label: "Сектора" },
                ].map((item) => (
                  <motion.div key={item.label} variants={fadeUp}>
                    <div className="text-2xl font-bold text-[#567CDF] sm:text-4xl">{item.value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[#5C78A9] sm:text-sm">{item.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-dark py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={revealViewport} className="mb-12 max-w-3xl sm:mb-16">
            <SectionLabel>Принципы</SectionLabel>
            <h2 className="display-title-soft text-3xl text-white sm:text-4xl md:text-5xl">Миссия и ценности</h2>
          </motion.div>

          <motion.div variants={sectionStagger} initial="hidden" whileInView="visible" viewport={revealViewport} className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <motion.article key={value.title} variants={fadeUp} className="rounded-sm border border-white/10 bg-[#0D1A3A] p-6 sm:p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-sm bg-[#567CDF]/10 text-lg font-semibold text-[#567CDF] sm:h-16 sm:w-16">
                  0{index + 1}
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-white">{value.title}</h3>
                <p className="text-sm leading-relaxed text-[#8F8F8F] sm:text-base">{value.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-light py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={revealViewport} className="pointer-events-none absolute left-0 top-20 hidden -translate-x-1/4 select-none text-[120px] font-bold leading-none text-[#1A2A5A]/40 sm:block lg:text-[200px]">
            02
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={revealViewport} className="relative z-10 mb-12 max-w-3xl sm:mb-16">
            <SectionLabel>Наша история</SectionLabel>
            <h2 className="display-title-soft text-3xl text-[#163A76] sm:text-4xl md:text-5xl">Ключевые вехи</h2>
          </motion.div>

          <motion.div variants={sectionStagger} initial="hidden" whileInView="visible" viewport={revealViewport} className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {milestones.map((item) => (
              <motion.article key={item.year} variants={fadeUp} className="rounded-sm border border-[#DCE6F7] bg-white p-6 shadow-[0_24px_70px_rgba(5,13,30,0.16)] sm:p-8">
                <div className="mb-5 flex items-center gap-4">
                  <div className="text-2xl font-bold text-[#567CDF] sm:text-3xl">{item.year}</div>
                  <div className="h-px flex-1 bg-[#D9E4F9]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#163A76]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#5C78A9] sm:text-base">{item.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-dark py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={revealViewport} className="mb-12 flex flex-col gap-6 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <SectionLabel>Структура</SectionLabel>
              <h2 className="display-title-soft text-3xl text-white sm:text-4xl md:text-5xl">Дивизионы холдинга</h2>
            </div>

            <Link href="/#directions" className="accent-link">
              Все направления
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          <motion.div variants={sectionStagger} initial="hidden" whileInView="visible" viewport={revealViewport} className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {divisions.map((division, index) => (
              <motion.article key={division.title} variants={fadeUp} className="rounded-sm border border-white/10 bg-[linear-gradient(180deg,#2B5AAA_0%,#173A76_100%)] p-6 text-white shadow-[0_20px_52px_rgba(24,59,121,0.18)] sm:p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/24 text-base font-semibold text-[#A8C1FF] sm:h-16 sm:w-16 sm:text-lg">
                  {index + 1}
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-white">{division.title}</h3>
                <p className="text-sm leading-relaxed text-[#CAD8F5] sm:text-base">{division.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-light py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={revealViewport} className="pointer-events-none absolute right-0 top-20 hidden translate-x-1/4 select-none text-[120px] font-bold leading-none text-[#1A2A5A]/40 sm:block lg:text-[200px]">
            03
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={revealViewport} className="relative z-10 mb-12 max-w-3xl sm:mb-16">
            <SectionLabel>Руководство</SectionLabel>
            <h2 className="display-title-soft text-3xl text-[#163A76] sm:text-4xl md:text-5xl">Исполнительное руководство</h2>
          </motion.div>

          <motion.div variants={sectionStagger} initial="hidden" whileInView="visible" viewport={revealViewport} className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {leaders.map((leader, index) => (
              <motion.article key={leader.name} variants={fadeUp} className="overflow-hidden rounded-sm border border-[#DCE6F7] bg-white shadow-[0_24px_70px_rgba(5,13,30,0.16)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={`/about/leader-${index + 1}.png`}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#163A76]">{leader.name}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#5C78A9]">{leader.role}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-dark py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={revealViewport}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src="/about/culture.png"
                  alt="Корпоративная культура B.A. Holding"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1229]/55 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div variants={sectionStagger} initial="hidden" whileInView="visible" viewport={revealViewport} className="flex flex-col justify-center">
              <motion.div variants={fadeUp}>
                <SectionLabel>Корпоративная культура</SectionLabel>
              </motion.div>
              <motion.h2 variants={fadeUp} className="display-title-soft mb-6 text-3xl text-white sm:text-4xl md:text-5xl sm:mb-8">
                Ориентация на людей, нацеленность на результат
              </motion.h2>
              <motion.p variants={fadeUp} className="body-copy mb-5 text-base text-[#8F8F8F] sm:text-lg">
                В B.A. Holding корпоративная культура построена на уважении, ответственности и высоких стандартах профессионализма.
              </motion.p>
              <motion.p variants={fadeUp} className="body-copy mb-8 text-base text-[#8F8F8F] sm:text-lg lg:mb-10">
                Наша организационная структура способствует сотрудничеству между подразделениями и развитию людей внутри компании.
              </motion.p>

              <motion.div variants={sectionStagger} initial="hidden" whileInView="visible" viewport={revealViewport} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {culturePoints.map((point) => (
                  <motion.div key={point} variants={fadeUp} className="flex items-center gap-3 rounded-sm border border-white/10 bg-[linear-gradient(180deg,#2B5AAA_0%,#173A76_100%)] px-4 py-4 text-sm text-white shadow-[0_20px_52px_rgba(24,59,121,0.16)] sm:text-base">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#567CDF]" />
                    <span>{point}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-light py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div variants={softScale} initial="hidden" whileInView="visible" viewport={revealViewport} className="rounded-sm border border-[#DCE6F7] bg-white p-6 text-[#163A76] shadow-[0_28px_80px_rgba(5,13,30,0.18)] sm:p-10 lg:p-16">
            <motion.div variants={sectionStagger} initial="hidden" whileInView="visible" viewport={revealViewport} className="mx-auto max-w-3xl text-center">
              <motion.div variants={fadeUp} className="section-tag mb-6 justify-center gap-3">
                <div className="section-tag-line" />
                <span className="section-tag-text text-sm sm:text-base">Партнёрство</span>
                <div className="section-tag-line" />
              </motion.div>

              <motion.h2 variants={fadeUp} className="display-title mb-6 text-3xl text-[#163A76] sm:text-4xl md:text-5xl sm:mb-8">
                Заинтересованы в сотрудничестве?
              </motion.h2>

              <motion.p variants={fadeUp} className="body-copy mx-auto mb-8 max-w-2xl text-base text-[#5C78A9] sm:mb-10 sm:text-lg">
                Мы приветствуем обращения от потенциальных партнёров, инвесторов и профессионалов.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                <Link href="/#contact" className="inline-flex items-center justify-center rounded-sm bg-[#567CDF] px-6 py-4 font-medium text-white transition-colors hover:bg-[#466BCC] sm:px-10">
                  Связаться
                </Link>
                <Link href="/" className="inline-flex items-center justify-center rounded-sm border border-[#1F4F9A]/14 px-6 py-4 font-medium text-[#163A76] transition-colors hover:bg-[#1F4F9A]/5 sm:px-10">
                  На главную
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}