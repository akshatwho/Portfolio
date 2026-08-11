import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaBriefcase } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdevImg.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import tongyouImg from "@/public/tongyou-placeholder.svg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Edinburgh, UK",
    description:
      "Shipping React Native features across iOS and Android for FanDuel, the #1 sportsbook in the US — from native modules through to TypeScript/React components. Built critical betting flows, patched VoiceOver/TalkBack accessibility at the native layer, and integrated prediction markets into the core app.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2026 - Present",
  },
  {
    title: "Full Stack Developer",
    location: "Edinburgh, UK",
    description:
      "Led mobile development for one of the world's largest Employee Share Plan platforms (9M+ annual logins) at Computershare, building Angular/Ionic UI and native Capacitor plugins in Swift and Java, alongside RESTful APIs in Java Spring and Oracle SQL.",
    icon: React.createElement(FaBriefcase),
    date: "Sept 2022 - Mar 2026",
  },
] as const;

export const projectsData = [
  {
    title: "Tongyou",
    description:
      "A production React Native app migrated from a legacy Vue.js codebase, with real-time WebSocket messaging, native Swift UI work (iOS 26 Liquid Glass tab bar), Stripe in-app payments, and a Redis-backed session system.",
    tags: ["React Native", "SwiftUI", "WebSockets", "Redux", "Redis", "Spring Boot"],
    imageUrl: tongyouImg,
  },
  {
    title: "PathMaker (Dissertation Project)",
    description: "Guides users to discover historical sites and go on witch hunts in foreign countries they are travelling to, connecting with like minded people through it.",
    tags: ["React Native", "Google Maps APIs", "Tailwind", "Firebase", "Expo"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Earth Defenders Game",
    description:
      "Inspired from Space Invaders, this game gives players intriguing enemy levels along with arcade vibes.",
    tags: ["Unity", "C#", "AI state machine", "Performance and Memory Use", "3D Math"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Labyrinth",
    description:
      "2D game developed as a group project based on the classic board game Labyrinth.",
    tags: ["Java", "JavaFX", "Pair Programming", "Game Design", "Concurrency"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "JavaScript",
  "Java",
  "Kotlin",
  "Swift",
  "Objective-C",
  "SQL",
  "React Native",
  "Expo",
  "iOS (UIKit)",
  "Android",
  "Capacitor",
  "Ionic",
  "React",
  "Redux",
  "RxJS",
  "NGXS",
  "Angular",
  "Spring Boot",
  "GraphQL",
  "REST",
  "Git",
  "Datadog",
  "Firebase",
  "Redis",
  "SonarQube",
] as const;
