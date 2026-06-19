"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { GitHubIcon } from "@/components/icons/github";
import { Link2, ExternalLink } from "lucide-react";

// Add company logos to public/companies/ (e.g. rutgers.svg) and reference with logo: "/companies/your-file.svg"
const timeline = [
  {
    id: "1",
    company: "Rutgers University - Sensing & Reasoning Lab",
    role: "Research Assistant",
    period: "May 2025 – Present",
    logo: "/companies/rutgers.svg",
    description: "- Contributing to the architecture of a privacy-first urban sensing network CityOS, under Dr. Jorge Ortiz. \n - Specifically engineering the Single-Locality Aggregation API, a system designed to ingest and process continuous data streams from fixed, localized environments. \n - Developing a multi-modal sensing pipeline for pedestrian behavior analysis, integrating sensor data from cameras, IMUs to identify pedestrians and their activities.",
    tags: ["Python", "PyTorch", "Docker", "Git"],
  },
  {
    id: "2",
    company: "WINLAB",
    role: "Machine Learning Intern",
    period: "May 2025 – August 2025",
    logo: "/companies/winlab.png",
    description: "- Architected a PostgreSQL schema and Python ETL workflow to streamline multimodal gait analysis, slashing data synchronization latency by 90% across a corpus of 300+ recordings. \n - Developed a dual-stream gait recognition framework leveraging Transformer backbones to correlate video and accelerometer data, delivering a predictive performance of 0.98 AUC-ROC.",
    links: [
      { label: "GitHub", href: "https://github.com/rmaahin/multimodal-person-reid", icon: "github" },
      { label: "Project Page", href: "https://www.orbit-lab.org/wiki/Other/Summer/2025/SASS", icon: "link2" },
    ],
    tags: ["Python", "PostgreSQL", "PyTorch"],
  },
  {
    id: "3",
    company: "Cornell University - Break Through Tech Program",
    role: "Teaching Assistant - ML Foundations",
    period: "May 2025 – August 2025",
    logo: "/companies/btt.svg",
    description: "Delivered lectures, designed lesson plans, graded assignments, and provided personalized feedback for 50+ undergraduates.",
    links: [],
    tags: ["Python", "Scikit-learn", "Pandas", "Numpy", "TensorFlow"],
  },
  {
    id: "4",
    company: "Habacus",
    role: "AI Intern",
    period: "September 2022 – November 2022",
    logo: "/companies/habacus.png",
    description: "- Deployed an end-to-end Vision Transformer (ViT) pipeline on PyTorch to directly parse multilingual academic records without traditional OCR dependencies. \n - Optimized document throughput for an Italian fintech client, achieving 88% extraction accuracy and slashing processing latency by 90%. \n - Part of the Pi School of AI Fall 2022 cohort.",
    links: [{ label: "Project Page", href: "https://picampus-school.com/document-digitization-information-extraction-using-ai/", icon: "link2" }],
    tags: ["Python", "PyTorch", "Hugging Face"],
  },
  {
    id: "5",
    company: "PricewaterhouseCoopers (PwC)",
    role: "Software Engineer",
    period: "September 2021 – August 2024",
    logo: "/companies/pwc.svg",
    description: "- Built KQL pipelines to extract and clean 50,000+ Sentinel security alerts, creating a Pandas preprocessed dataset in PostgreSQL \n - Trained an ensemble alert-triage classifier with Scikit-Learn (Random Forest + Gradient Boosting) on structured log features, reducing false-positive rates by 18% across 3 client SOC environments \n - Fine-tuned RoBERTa-base using PyTorch and HuggingFace on 40,000+ raw alert descriptions to better capture severity, boosting F1 by 12% over the tabular-only model \n - Containerized the end-to-end inference pipeline with Docker and deployed it as a FastAPI microservice on Azure ML, that cut average analyst triage time by 5 minutes per incident",
    links: [],
    tags: ["SQL", "Python", "Scikit-learn", "PyTorch", "Hugging Face", "Docker", "FastAPI", "Azure ML"],
  },
  {
    id: "6",
    company: "Entigence Solutions",
    role: "Machine Learning Intern",
    period: "January 2021 – May 2021",
    logo: "/companies/entigence.png",
    description: "- Engineered high-fidelity ROS simulations to validate autonomous navigation, deploying SLAM for instantaneous mapping and localization. \n - Implemented robust traffic perception systems using YOLO and R-CNN in TensorFlow, securing a 93% detection accuracy.",
    links: [],
    tags: ["ROS", "SLAM", "Python", "Tensorflow", "YOLO", "R-CNN"],
  },
];

function CompanyLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-14 h-14 rounded-xl bg-zinc-200 dark:bg-zinc-600 border border-border overflow-hidden shrink-0 flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={56}
        height={56}
        className="object-contain p-2"
        unoptimized
      />
    </div>
  );
}

function DescriptionBullets({ text }: { text: string }) {
  const bullets = text.split(/\n\s*-\s*/).filter(Boolean).map((s) => s.replace(/^-\s*/, "").trim());
  const isSingleParagraph = bullets.length <= 1 && !text.trim().startsWith("-");

  if (isSingleParagraph) {
    return <p className="text-foreground/90 leading-relaxed">{text}</p>;
  }

  return (
    <ul className="space-y-3">
      {bullets.map((bullet, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400" />
          <span className="text-foreground/90 leading-relaxed">{bullet}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ExperiencePage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end end"],
  });
  const fillProgress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 24,
    mass: 0.2,
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
          Experience
        </h1>
        <p className="text-muted-foreground mb-12 sm:mb-16">
          My professional journey across research, industry, and education.
        </p>
      </Reveal>

      <div ref={timelineRef} className="relative">
        {/* Vertical timeline line - runs through center of left column */}
        <div
          className="absolute left-[11px] top-6 bottom-6 w-px bg-zinc-300/60 dark:bg-zinc-700/70"
          aria-hidden
        />
        {/* Scroll progress fill */}
        <motion.div
          className="absolute left-[11px] top-6 bottom-6 w-px bg-gradient-to-b from-teal-500 via-teal-400 to-teal-300 origin-top"
          style={{ scaleY: fillProgress }}
          aria-hidden
        />
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <div className="relative flex flex-col sm:flex-row gap-3 sm:gap-12 pb-10 sm:pb-16 last:pb-0">
                {/* Dot - on the timeline line */}
                <div
                  className="absolute left-[11px] top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-teal-500 dark:bg-teal-400 shrink-0 ring-4 ring-background dark:ring-zinc-950 z-10"
                  aria-hidden
                />
                {/* Period - right next to the circle, wide column for proper fit */}
                <div className="pl-5 sm:pl-6 shrink-0 w-full sm:w-48 md:w-52 flex items-center">
                  <span className="text-base font-mono text-muted-foreground leading-tight">
                    {item.period}
                  </span>
                </div>
                {/* Card */}
              <motion.div
                className="flex-1 min-w-0 rounded-2xl p-4 sm:p-6 lg:p-8 border border-border bg-zinc-50/80 dark:bg-zinc-900/60 backdrop-blur-sm"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                  {item.logo && <CompanyLogo src={item.logo} alt={item.company} />}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                      {item.role}
                    </h2>
                    <p className="text-teal-500 dark:text-teal-400 font-medium mt-0.5">
                      {item.company}
                    </p>
                  </div>
                </div>

                <div className="text-base mb-5">
                  <DescriptionBullets text={item.description} />
                </div>

                {item.links && item.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-5">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl border border-border bg-white/60 dark:bg-zinc-800/60 hover:border-teal-500/50 hover:bg-teal-500/10 text-sm font-medium text-foreground transition-all duration-200"
                      >
                        {link.icon?.toLowerCase() === "github" ? (
                          <GitHubIcon className="w-4 h-4 text-teal-500 dark:text-teal-400" />
                        ) : link.icon?.toLowerCase() === "link2" ? (
                          <Link2 className="w-4 h-4 text-teal-500 dark:text-teal-400" />
                        ) : (
                          <ExternalLink className="w-4 h-4 text-teal-500 dark:text-teal-400" />
                        )}
                        <span>{link.label}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                      </a>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-teal-500/30 text-teal-700 dark:bg-teal-500/10 dark:text-teal-400 text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
