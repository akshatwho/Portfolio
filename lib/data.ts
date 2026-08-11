import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaBriefcase } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";

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
      "Shipping React Native features across iOS and Android for FanDuel, America's #1 sportsbook — from native modules through to TypeScript/React components. Built critical real-time transaction flows, patched VoiceOver/TalkBack accessibility at the native layer, and integrated prediction markets into the core app.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2026 - Present",
  },
  {
    title: "Full Stack Developer",
    location: "Edinburgh, UK",
    description:
      "Led mobile development at Computershare on EquatePlus, the leading ESPP platform globally (9M+ annual logins), building Angular/Ionic UI and native Capacitor plugins in Swift and Java, alongside RESTful APIs in Java Spring and Oracle SQL.",
    icon: React.createElement(FaBriefcase),
    date: "Sept 2022 - Mar 2026",
  },
] as const;

export const projectsData = [
  {
    title: "Tongyou",
    status: "In production",
    description:
      "A production React Native app migrated from a legacy Vue.js codebase, with real-time WebSocket messaging, native Swift UI work (iOS 26 Liquid Glass tab bar), Stripe in-app payments, and a Redis-backed session system.",
    tags: ["React Native", "SwiftUI", "WebSockets", "Redux", "Redis", "Spring Boot"],
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
