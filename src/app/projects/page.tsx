"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/github";
import { Reveal } from "@/components/reveal";

function DescriptionBullets({ text }: { text: string }) {
  const bullets = text.split(/\n\s*-\s*/).filter(Boolean).map((s) => s.replace(/^-\s*/, "").trim());
  const isSingleParagraph = bullets.length <= 1 && !text.trim().startsWith("-");

  if (isSingleParagraph) {
    return <p className="text-muted-foreground leading-relaxed">{text}</p>;
  }

  return (
    <ul className="space-y-2">
      {bullets.map((bullet, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400" />
          <span className="text-muted-foreground leading-relaxed">{bullet}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectMedia({
  project,
}: {
  project: { image?: string; title: string };
}) {
  const [error, setError] = useState(false);
  const mediaPath = project.image?.startsWith("/") ? project.image : null;
  const isVideo = mediaPath?.match(/\.(mp4|webm|ogg)$/i);

  if (!mediaPath || error) {
    return (
      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
        <span className="font-mono text-sm">
          [Architecture / Screenshot placeholder]
        </span>
      </div>
    );
  }

  if (isVideo) {
    return (
      <video
        src={mediaPath}
        className="absolute inset-0 w-full h-full object-contain"
        playsInline
        loop
        muted
        autoPlay
        onError={() => setError(true)}
      />
    );
  }

  return (
    <Image
      src={mediaPath}
      alt={project.title}
      fill
      className="object-contain"
      unoptimized={mediaPath.startsWith("/api/")}
      onError={() => setError(true)}
    />
  );
}

const projects = [
  {
    slug: "project-one",
    title: "SentinelGraph: Agentic Cyber Attack Path Analyzer",
    description:
      "- A cybersecurity platform that helps SOC teams analyze attack paths.\n" +
      "- MITRE ATT&CK, AlienVault OTX threat intel, and security logs feed into a Neo4j graph database.\n" +
      "- SOC analysts can query the graph in natural language using LLM-powered agents.",
    tags: ["LangGraph", "Python", "Neo4j", "Cybersecurity"],
    href: "#",
    github: "https://github.com/rmaahin/attack-path-analyzer",
    image: "/projects/sentinelgraph.mp4",
    featured: true,
  },
  {
    slug: "project-two",
    title: "Multimodal Person Re-Identification",
    description:
      "- A cross-modal Re-ID system that matches individuals across Video (kinematic pose) and IMU data, developed for my Master's thesis at the SnR Lab.\n" +
      "- The architecture uses a Siamese Transformer with a shared projection layer to align the two modalities topologically, supported by a robust data synchronization pipeline.\n" +
      "- Learning complex gait kinematics proved far more superior than the physics-based Spectral Re-ID (FFT) baseline.\n" +
      "- The system reaches an ROC-AUC score of ~0.98 and visible separation between positive and negative pairs.",
    tags: ["Python", "Pytorch", "Transformers", "FastAPI"],
    href: "#",
    github: "https://github.com/rmaahin/multimodal-person-reid",
    image: "/projects/person-reid.png",
    featured: true,
  },
  {
    slug: "project-three",
    title: "3D Reconstruction using NeRF and 3DGS",
    description:
      "- Built around the nerfstudio framework, comparing NeRF and 3D Gaussian Splatting on real-world and synthetic data.\n" +
      "- 3DGS delivers 6–10 dB better fidelity and real-time 100+ FPS, while NeRF trades speed for a more predictable memory footprint.\n" +
      "- Both approaches suffer when training data drops to sparse 24-view setups.\n" +
      "- The work outlines a practical framework for choosing the right model given hardware and scene constraints.",
    tags: ["3D Reconstruction", "nerfstudio", "Computer Vision", "Python", "PyTorch"],
    href: "#",
    github: "https://github.com/rmaahin/3D-reconstruction-using-nerf-and-3dgs.git",
    image: "/projects/3d-reconstruction.mp4",
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-3">
          Projects
        </h1>
        <p className="text-muted-foreground mb-10">
          A selection of my research and engineering projects.
        </p>
      </Reveal>

      <div className="space-y-16">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.1}>
            <motion.article
              whileHover={{ y: -4 }}
              className="group rounded-2xl overflow-hidden border border-border bg-zinc-200/90 dark:bg-zinc-800/60 backdrop-blur-sm"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div
                  className={`relative overflow-hidden aspect-video lg:aspect-auto ${
                    project.featured ? "lg:min-h-[400px]" : "lg:min-h-[280px]"
                  } bg-zinc-200 dark:bg-zinc-800`}
                >
                  <ProjectMedia project={project} />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h2 className="text-2xl font-semibold text-foreground group-hover:text-teal-500 transition-colors">
                      {project.title}
                    </h2>
                    <div className="flex gap-2 shrink-0">
                      {project.href && project.href !== "#" && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                          aria-label="View project"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={project.github}
                        className="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <GitHubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <div className="mb-6">
                    <DescriptionBullets text={project.description} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-teal-500/10 text-teal-400 text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
