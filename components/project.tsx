"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number] & { gifUrl?: string };

export default function Project({
  title,
  description,
  tags,
  gifUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="mx-auto grid max-w-2xl items-center gap-10 sm:max-w-3xl sm:grid-cols-[18rem_1fr]"
    >
      <div className="relative mx-auto aspect-[1206/2622] w-52 rounded-[2.2rem] border border-black/10 bg-gray-950 p-2 shadow-2xl dark:border-white/10 sm:w-72">
        <div className="absolute top-3 left-1/2 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-white/20" />
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[1.7rem] bg-gradient-to-br from-violet-600/40 via-gray-900 to-gray-950">
          {gifUrl ? (
            // next/image would re-encode and break the GIF's animation
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={gifUrl}
              alt={`${title} app walkthrough`}
              className="h-full w-full object-cover"
            />
          ) : (
            <p className="px-4 text-center text-[0.65rem] tracking-wider text-white/40 uppercase">
              Walkthrough GIF coming soon
            </p>
          )}
        </div>
      </div>

      <div className="text-center sm:text-left">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
          {description}
        </p>
        <ul className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
          {tags.map((tag, index) => (
            <li
              className="rounded-full bg-black/70 px-3 py-1 text-[0.7rem] tracking-wider text-white uppercase dark:text-white/70"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
