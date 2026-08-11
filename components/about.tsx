"use client";
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';


export default function About() {

    const { ref } = useSectionInView("About", 0.75);


  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-180 text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
        I am a{" "}
        <span className="font-medium">software engineer</span> who works
        comfortably across the stack — from native{" "}
        <span className="font-medium">iOS (Swift, Objective-C) and Android (Kotlin)</span>{" "}
        to <span className="font-medium">React Native</span>, and back down into{" "}
        <span className="font-medium">Java Spring and Angular</span> on the backend and web
        side. I currently ship consumer products at America&apos;s #1 sportsbook,{" "}
        <span className="font-medium">FanDuel</span>, and previously led mobile
        development at Computershare on{" "}
        <span className="font-medium">EquatePlus, the leading ESPP platform globally</span>.{" "}
        <span className="italic">My favorite part of engineering</span> is the
        problem-solving aspect. I <span className="font-medium">love</span> pulling
        apart a gnarly bug or a native platform quirk until it clicks.
      </p>

      <p>
        <span className="italic">When I am not coding</span>, I enjoy playing
        video games, watching movies, and going out to play sports. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and pschology</span>. I am also
        learning how to play the guitar.
      </p>
    </motion.section>
  )
}
