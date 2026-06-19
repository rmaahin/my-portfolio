"use client";

import { Download, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/reveal";

const RESUME_PATH = "/resume.pdf";
const RESUME_FILENAME = "Maahin_Rathinagiriswaran_Resume.pdf";

export default function ResumePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
              Resume
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              View or download my resume for roles in Generative AI, Computer
              Vision, and Machine Learning.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={RESUME_PATH}
              download={RESUME_FILENAME}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-sm sm:text-base font-medium transition-colors"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-xl border border-border bg-zinc-200/80 dark:bg-zinc-800/60 hover:border-teal-500/50 text-foreground text-sm sm:text-base font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Open in new tab
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="rounded-2xl border border-border bg-zinc-50/80 dark:bg-zinc-900/60 backdrop-blur-sm overflow-hidden shadow-lg shadow-black/5 dark:shadow-black/20">
          <iframe
            src={`${RESUME_PATH}#view=FitH`}
            title="Maahin Rathinagiriswaran Resume"
            className="w-full h-[min(85vh,1100px)] min-h-[500px] bg-white"
          />
        </div>
      </Reveal>
    </div>
  );
}
