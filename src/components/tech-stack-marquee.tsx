"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Reveal } from "@/components/reveal";

const LOGO_COLOR = "14b8a6";
const LOGO_SIZE = 96;
const AUTO_SCROLL_SPEED = 0.5; // px per frame

type TechItemConfig = {
  name: string;
  /** Simple Icons slug (e.g. "python") - used when src is not set */
  slug?: string;
  /** Custom image path from /public (e.g. "/logos/my-logo.svg") - overrides slug */
  src?: string;
};

const TECH_STACK: TechItemConfig[] = [
  { name: "Python", src: "/logos/python.svg" },
  { name: "C++", src: "/logos/C++.svg" },
  { name: "C", src: "/logos/C.svg" },
  { name: "MATLAB", src: "/logos/MATLAB.svg" },
  { name: "PyTorch", src: "/logos/pytorch.svg" },
  { name: "TensorFlow", src: "/logos/tensorflow.svg" },
  { name: "Keras", src: "/logos/keras.svg" },
  { name: "OpenCV", src: "/logos/opencv.svg" },
  { name: "LangChain", src: "/logos/langchain.svg" },
  { name: "Docker", src: "/logos/docker.svg" },
  { name: "Neo4j", src: "/logos/neo4j.svg" },
  { name: "Azure", src: "/logos/azure.svg" },
  { name: "AWS", src: "/logos/aws.svg" },
  { name: "PostgreSQL", src: "/logos/postgresql.svg" }
  // Example: use your own image: { name: "My Tool", src: "/logos/my-tool.svg" },
];

function TechItem({ name, slug, src }: TechItemConfig) {
  const imageSrc =
    src ?? (slug ? `https://cdn.simpleicons.org/${slug}/${LOGO_COLOR}` : "");

  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4 shrink-0 px-4 sm:px-6 lg:px-10">
      <div className="w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center rounded-xl bg-zinc-200/80 dark:bg-zinc-400/60 border border-border">
        <Image
          src={imageSrc}
          alt={name}
          width={LOGO_SIZE}
          height={LOGO_SIZE}
          className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
        />
      </div>
      <span className="text-sm sm:text-base font-medium text-muted-foreground">{name}</span>
    </div>
  );
}

export function TechStackMarquee() {
  const items = [...TECH_STACK, ...TECH_STACK];
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [halfWidth, setHalfWidth] = useState(0);
  const dragStart = useRef({ x: 0, offset: 0 });
  const activePointerId = useRef<number | null>(null);
  const rafRef = useRef<number>();

  // Measure half-width (one copy of items) for infinite loop
  useEffect(() => {
    if (!trackRef.current) return;
    const width = trackRef.current.scrollWidth / 2;
    setHalfWidth(width);
    setScrollOffset(0);
  }, []);

  // Auto-scroll animation (paused when dragging)
  useEffect(() => {
    const animate = () => {
      if (isDragging) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }
      setScrollOffset((prev) => {
        const next = prev + AUTO_SCROLL_SPEED;
        return halfWidth > 0 && next >= halfWidth ? next - halfWidth : next;
      });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [halfWidth, isDragging]);

  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return; // only left click
    e.preventDefault();
    activePointerId.current = e.pointerId;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, offset: scrollOffset };
    containerRef.current?.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || halfWidth <= 0) return;
    const delta = dragStart.current.x - e.clientX;
    let next = dragStart.current.offset + delta;
    while (next < 0) next += halfWidth;
    while (next >= halfWidth) next -= halfWidth;
    setScrollOffset(next);
    dragStart.current = { x: e.clientX, offset: next };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    if (activePointerId.current === e.pointerId) {
      setIsDragging(false);
      activePointerId.current = null;
    }
    containerRef.current?.releasePointerCapture(e.pointerId);
  };

  const handlePointerCancel = (e: React.PointerEvent) => {
    if (activePointerId.current === e.pointerId) {
      setIsDragging(false);
      activePointerId.current = null;
    }
  };

  // Fallback: reset drag state if pointer released outside (e.g. right-click, iframe)
  useEffect(() => {
    const handleGlobalPointerUp = (e: PointerEvent) => {
      if (activePointerId.current === e.pointerId) {
        setIsDragging(false);
        activePointerId.current = null;
      }
    };
    window.addEventListener("pointerup", handleGlobalPointerUp);
    return () => window.removeEventListener("pointerup", handleGlobalPointerUp);
  }, []);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY === 0 && e.deltaX === 0) return;
    const delta = e.deltaX !== 0 ? e.deltaX : e.deltaY * 0.5;
    setScrollOffset((prev) => {
      let next = prev + delta;
      while (next < 0) next += halfWidth;
      while (next >= halfWidth) next -= halfWidth;
      return next;
    });
  };

  return (
    <Reveal>
      <section className="pt-8 sm:pt-12 pb-12 sm:pb-10 overflow-hidden">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-10 sm:mb-16 text-foreground text-center">
          Skills
        </h2>
        <div
          ref={containerRef}
          className="relative mask-fade-x select-none cursor-grab active:cursor-grabbing touch-pan-x"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onWheel={handleWheel}
        >
          <div
            ref={trackRef}
            className="flex w-max"
            style={{
              transform: `translateX(-${scrollOffset}px)`,
            }}
          >
            {items.map((tech, i) => (
              <TechItem
                key={`${tech.slug ?? tech.src}-${i}`}
                name={tech.name}
                slug={tech.slug}
                src={tech.src}
              />
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
