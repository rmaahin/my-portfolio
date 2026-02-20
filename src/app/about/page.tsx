"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { GitHubIcon } from "@/components/icons/github";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
          About
        </h1>
        <p className="text-muted-foreground mb-12 sm:mb-16">
        I specialize in building agentic AI systems and RAG pipelines, with a focus on fine-tuning models and using knowledge graphs to reason through complex data. My work also involves developing Computer Vision and Multimodal ML architectures.
        <br />
        <br />
        I&#39;m passionate about engineering scalable ML infrastructure to solve real-world problems. If you&#39;re interested in my work or would like to collaborate, please feel free to connect!
        </p>
      </Reveal>

      <div className="space-y-8">
        {/* <Reveal delay={0.1}>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              About Me
            </h2>
            <p className="text-muted-foreground leading-relaxed">
            I specialize in building agentic AI systems and RAG pipelines, with a focus on fine-tuning models and using knowledge graphs to reason through complex data. My work also involves developing Computer Vision and Multimodal ML architectures that bridge the gap between raw perception and actionable insights.
            <br />
            <br />
            I am passionate about engineering scalable ML infrastructure to solve real-world problems. If you're interested in my work or would like to collaborate, feel free to connect!
            </p>
          </section>
        </Reveal> */}

        {/* <Reveal delay={0.15}>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              [FILLER] What I Do
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              [FILLER] Describe your current focus: full-stack development, ML
              research, open source, or something else. Add any side projects or
              interests.
            </p>
          </section>
        </Reveal> */}

        <Reveal delay={0.2}>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Contact
            </h2>
            <p className="text-muted-foreground mb-6">
              Open to collaboration, opportunities, or just a chat.
              Reach out via any channel below.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="mailto:rmaahin2000@gmail.com"
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2.5 min-h-[44px] rounded-lg border border-border bg-zinc-200/80 dark:bg-zinc-700/60 hover:border-teal-500/50 hover:bg-teal-500/5 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="break-all">rmaahin2000@gmail.com</span>
              </a>
              <a
                href="https://github.com/rmaahin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2.5 min-h-[44px] rounded-lg border border-border bg-zinc-200/80 dark:bg-zinc-700/60 hover:border-teal-500/50 hover:bg-teal-500/5 transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/maahinr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2.5 min-h-[44px] rounded-lg border border-border bg-zinc-200/80 dark:bg-zinc-700/60 hover:border-teal-500/50 hover:bg-teal-500/5 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://scholar.google.com/citations?user=p4n5nPYAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2.5 min-h-[44px] rounded-lg border border-border bg-zinc-200/80 dark:bg-zinc-700/60 hover:border-teal-500/50 hover:bg-teal-500/5 transition-colors"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Google Scholar</span>
              </a>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
