"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Brain, Bot, ScanEye, Layers } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { TechStackMarquee } from "@/components/tech-stack-marquee";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero - Headshot left, text right */}
      <section className="min-h-[80vh] flex flex-col lg:flex-row-reverse items-center justify-center gap-12 lg:gap-16 py-12">
        <div className="flex-1">
          <Reveal>
            <p className="text-teal-500 dark:text-teal-400 font-mono text-sm mb-4 tracking-wider uppercase">
              AI Engineer
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
              Maahin
              <br />
              <span className="text-teal-500 dark:text-teal-400">
                Rathinagiriswaran
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-3xl mb-10">
            👋 Hello! I&#39;m a grad student in Electrical and Computer Engineering specializing in ML at Rutgers University with a professional background in software engineering. My current work focuses on building agentic AI systems and RAG pipelines, where I focus on fine-tuning LLMs and leveraging knowledge bases to reason through complex, heterogeneous data.
            <br />
            <br />
            Beyond agents, I also specialize in Computer Vision and Multimodal ML, developing architectures that bridge the gap between raw perception and actionable insights. Graduating in May 2026, I am looking for full-time opportunities in Generative AI, Computer Vision, and Machine Learning.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-nowrap gap-4 max-w-3xl w-full">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-medium transition-colors"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-medium transition-colors"
              >
                View Experiences
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/publications"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-medium transition-colors"
              >
                View Publications
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-zinc-200/80 dark:bg-zinc-800/60 hover:border-teal-500/100 text-foreground font-medium transition-colors whitespace-nowrap"
              >
                Get in Touch
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Headshot - left side */}
        <Reveal delay={0.2}>
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 shrink-0 rounded-2xl overflow-hidden border border-border bg-zinc-100 dark:bg-zinc-800/50">
            <Image
              src="/headshot-Maahin.png"
              alt="Maahin Rathinagiriswaran"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 320px"
              priority
            />
          </div>
        </Reveal>
      </section>

      {/* Tech Stack Marquee */}
      <TechStackMarquee />

      {/* My AI Specializations */}
      <section className="pt-8 sm:pt-12 pb-16">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-foreground text-center">
            My AI Specializations
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <Reveal delay={0.05}>
            <div className="flex flex-col items-start gap-3 p-6 rounded-xl bg-zinc-200/50 dark:bg-zinc-800/60 border border-border backdrop-blur-sm">
              <Brain className="w-8 h-8 text-teal-500 dark:text-teal-400 shrink-0" />
              <h3 className="font-semibold text-foreground">Machine Learning & Deep Learning</h3>
              <p className="text-sm text-muted-foreground">
                Neural networks, optimization, and model training for predictive and generative tasks.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col items-start gap-3 p-6 rounded-xl bg-zinc-200/50 dark:bg-zinc-800/60 border border-border backdrop-blur-sm">
              <Bot className="w-8 h-8 text-teal-500 dark:text-teal-400 shrink-0" />
              <h3 className="font-semibold text-foreground">AI Agentic Systems & LLMs</h3>
              <p className="text-sm text-muted-foreground">
                Agentic orchestration, RAG pipelines, and fine-tuning language models for complex reasoning.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-col items-start gap-3 p-6 rounded-xl bg-zinc-200/50 dark:bg-zinc-800/60 border border-border backdrop-blur-sm">
              <ScanEye className="w-8 h-8 text-teal-500 dark:text-teal-400 shrink-0" />
              <h3 className="font-semibold text-foreground">Computer Vision</h3>
              <p className="text-sm text-muted-foreground">
                Image and video understanding, object detection, and visual perception systems.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col items-start gap-3 p-6 rounded-xl bg-zinc-200/50 dark:bg-zinc-800/60 border border-border backdrop-blur-sm">
              <Layers className="w-8 h-8 text-teal-500 dark:text-teal-400 shrink-0" />
              <h3 className="font-semibold text-foreground">Multimodal ML</h3>
              <p className="text-sm text-muted-foreground">
                Fusing vision, language, and other modalities for unified understanding and generation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
