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
      "Shipping React Native features across iOS and Android for FanDuel, America's #1 sportsbook, from native modules through to TypeScript/React components. Built critical real-time transaction flows, patched VoiceOver/TalkBack accessibility at the native layer, and integrated prediction markets into the core app. Drove architecture and refactoring for the One App initiative, unifying prediction markets powered by Crypto.com with the core sportsbook into a single seamless product, routing users through specialized geolocation SDKs to serve compliant content by state, while keeping the look and feel customers love consistent across two entirely different backends. Own several BFF services, extracting business logic out of the client and into the BFF layer to boost performance. That work contributed to the app winning industry awards.",
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
      "A location-based social platform facilitating real-time event discovery and peer-to-peer travel coordination for local communities, built around traveling together. A production React Native app migrated from a legacy Vue.js codebase, with real-time WebSocket messaging, native Swift UI work (iOS 26 Liquid Glass tab bar), Stripe in-app payments, and Redis-backed sessions and caching. Also help shape the backend across the entire system, integrating with a Java Spring Boot service on MariaDB hosted on AWS EC2, using the Google Maps API for geolocation, and defining the API contracts and scalable architecture the app relies on.",
    tags: ["React Native", "SwiftUI", "WebSockets", "Redux", "Redis", "Spring Boot", "MariaDB", "AWS EC2", "Google Maps API"],
    gifUrl: "/tongyou-walkthrough.gif",
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
