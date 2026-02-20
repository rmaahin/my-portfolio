"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ImageIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";

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

function PublicationDescription({ overview }: { overview: string }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground mb-2">Overview</h3>
      <p className="text-foreground/90 leading-relaxed">{overview}</p>
    </div>
  );
}

const publications = [
  {
    id: "1",
    title: "RoadscapesQA: A Multitask, Multimodal Dataset for Visual Question Answering on Indian Roads",
    image: "/publications/roadscapes.png", // Add path e.g. "/publications/roadscapesqa.png"
    authors: "Vijayasri Iyer, Maahin Rathinagiriswaran, Jyothikamalesh S",
    venue: "arXiv:2602.12877",
    year: "2025",
    description:
      "- RoadscapesQA is a novel multitask and multimodal dataset that bridges the gap in autonomous driving research for unstructured environments.\n" +
      "- Collected over 5 hours of driving footage (9,000 final images). and implemented a resource-efficient pipeline using YOLO-World for initial object detection, followed by rule-based heuristics to automatically generate 7 ground-truth QA pairs per image.\n" +
      "- The dataset supports four key tasks: object detection, drivable area segmentation, object counting, and image-level visual question answering (VQA).\n" +
      "- GPT-4o demonstrated the strongest semantic reasoning in Surrounding Description with a similarity score of 0.701.\n" +
      "- Conducted a detailed hallucination analysis, finding that models struggle most with fine-grained Object Description (50.8%–61.6% hallucination rates).",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2602.12877", icon: "link" },
      { label: "PDF", href: "https://arxiv.org/pdf/2602.12877", icon: "link" },
    ],
    tags: ["Computer Vision", "VLM", "Autonomous Driving", "GenAI", "YOLO"],
  },
  {
    id: "2",
    title: "A Copula-Driven Unsupervised Learning Framework for Anomaly Detection with Multivariate Heterogeneous Data",
    image: "/publications/copulas.png",
    authors: "S Damodaran, R Padmanabhan, R Maahin, S Gurugopinath",
    venue: "2021 IEEE 31st International Workshop on Machine Learning for Signal Processing (MLSP)",
    year: "2021",
    description:
      "- Designed an unsupervised anomaly detection framework for heterogeneous multivariate data (e.g., UAV sensors) that operates without prior knowledge of statistical correlations.\n" +
      "- Improved the performance of standard unsupervised algorithms by training them on synthetic samples generated from copula-based joint distributions.\n" +
      "- Tested on the IEEE Signal Processing Cup 2020 dataset, successfully fusing 11-dimensional sensor data to detect system abnormalities in autonomous drones.\n" + 
      "- Achieved 93% detection accuracy on real-world heterogeneous data using the C-Vine Copula combined with an Autoencoder, significantly outperforming direct training methods.",
    links: [
      { label: "IEEE", href: "https://ieeexplore.ieee.org/abstract/document/9596359", icon: "link" },
    ],
    tags: ["Machine Learning", "Anomaly Detection", "Multimodality"],
  },
  {
    id: "3",
    title: "Inflated 3D Architecture for South Indian Sign Language Recognition ",
    image: "/publications/sign-language.png",
    authors: "Maahin Rathinagiriswaran, Swapneel Managaokar, K R Yashaskara Jois, Kartik Vijaykumar Suvarna, Niranjana Krupa",
    venue: "2021 IEEE International Conference on Mobile Networks and Wireless Communications (ICMNWC)",
    year: "2021",
    description:
      "- Developed an end-to-end framework to recognize South Indian Sign Language and translate it into spoken Kannada in real-time.\n" +
      "- Implemented an Inflated 3D (I3D) Convolutional Neural Network, bootstrapping pre-trained 2D Inception-V1 weights to effectively capture complex spatiotemporal features from video streams.\n" +
      "- Integrated Optical Flow algorithms to isolate motion dynamics from background noise.\n" + 
      "- Created and augmented a dedicated dataset of 1,068 videos covering 89 distinct gesture classes, combining official ISL resources with manually recorded samples.\n" +
      "- Achieved an average validation accuracy of 87.09% using Stratified K-Fold Cross-Validation, outperforming traditional VGG19 and RNN-based benchmarks in both accuracy and computational efficiency.",
    links: [
      { label: "IEEE", href: "https://ieeexplore.ieee.org/abstract/document/9688520", icon: "link" },
    ],
    tags: ["Deep Learning", "Computer Vision", "3D CNNs"],
  }
  // Add more publications below
];

export default function PublicationsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
          Publications
        </h1>
        <p className="text-muted-foreground mb-12 sm:mb-16">
          Research papers and publications across ML, computer vision, and Generative AI.
        </p>
      </Reveal>

      <div className="space-y-6 sm:space-y-8">
        {publications.map((pub, i) => (
          <Reveal key={pub.id} delay={i * 0.08}>
            <motion.article
              whileHover={{ y: -2 }}
              className="rounded-2xl overflow-hidden border border-border bg-zinc-200/90 dark:bg-zinc-800/60 backdrop-blur-sm"
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="grid sm:grid-cols-[minmax(0,200px)_1fr] lg:grid-cols-[minmax(0,240px)_1fr] gap-0">
                {/* Image placeholder / project image */}
                <div className="relative aspect-video sm:aspect-square sm:min-h-[200px] bg-zinc-200 dark:bg-zinc-800 shrink-0">
                  {(pub as { image?: string }).image ? (
                    <Image
                      src={(pub as { image?: string }).image!}
                      alt={pub.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground/50">
                      <ImageIcon className="w-10 h-10" />
                      <span className="font-mono text-xs px-4 text-center">
                        [Publication image]
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center min-w-0">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                {pub.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-2">
                {pub.authors}
              </p>
              <p className="text-sm text-teal-500 dark:text-teal-400 font-medium mb-3">
                {pub.venue}, {pub.year}
              </p>
              <div className="mb-5">
                  <DescriptionBullets text={pub.description} />
                
              </div>

              {pub.links && pub.links.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-5">
                  {pub.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl border border-border bg-white/60 dark:bg-zinc-800/60 hover:border-teal-500/50 hover:bg-teal-500/10 text-sm font-medium text-foreground transition-all duration-200"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              )}

              {pub.tags && pub.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-teal-500/30 text-teal-700 dark:bg-teal-500/10 dark:text-teal-400 text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
