import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Neeraj Chauhan",
  initials: "NC",
  url: "https://github.com/neeraj-ch7",
  resumeUrl: "/Resume_nj.pdf",
  location: "Lucknow, UP, India",
  locationLink: "https://www.google.com/maps/place/Lucknow,+Uttar+Pradesh",
  title: "Backend & Full-Stack Engineer",
  description:
    "4th-year Computer Science (IoT) student with hands-on full-stack development & AI integration experience.",
  summary:
    "4th-year Computer Science (IoT) student with hands-on full-stack development experience across React.js, Node.js, Express.js, and AI-integrated platforms (Gemini API). Strong foundations in Python, C/C++, Java, JavaScript, data structures, algorithms, and distributed systems. APL Hackathon finalist with a track record of shipping production-grade systems under real-world constraints. Currently strengthening backend engineering skills through REST API development, database integration, and modular backend architecture at FlyRank AI. Active competitive programmer with 161+ problems solved on LeetCode.",
  avatarUrl: "/Profile.jpeg",
  skills: [
    "Python",
    "C/C++",
    "Java",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "Vite",
    "Tailwind CSS",
    "SQLite",
    "Supabase",
    "PostgreSQL",
    "MySQL",
    "AWS",
    "REST APIs",
    "Linux",
    "Gemini API",
  ],
  navbar: [
    { href: "/", icon: "home", label: "Home" },
    { href: "/blog", icon: "notebook", label: "Blog" },
  ],
  contact: {
    email: "ncs7704@gmail.com",
    tel: "+91-7704870486",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/neeraj-ch7",
        icon: "github",
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/neeraj-ch7/",
        icon: "linkedin",
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/neerajch7/",
        icon: "leetcode",
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ncs7704@gmail.com",
        icon: "email",
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "FlyRank AI",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Backend Engineering Intern",
      logoUrl: "/flyrank_logo.jpg",
      start: "Jul 2026",
      end: "Aug 2026",
      description:
        "Developed and maintained RESTful APIs using Node.js and Express.js, integrating SQLite/SQL for persistent storage. Implemented complete CRUD operations, request validation, error handling, and proper HTTP status codes. Built backend features including authentication, database integration, and API documentation as part of weekly engineering assignments. Applied backend best practices — separating API logic from the data layer, modular code, and Git-based version control.",
    },
  ],
  education: [
    {
      school: "Shri Ramswaroop Memorial University, Barabanki, UP",
      href: "https://srmu.ac.in",
      degree: "B.Tech in Computer Science (IoT) — CGPA: 6.67",
      logoUrl: "/SRMU.jpg",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Jansunwai AI Portal",
      href: "https://janai-1.onrender.com/",
      dates: "Apr 2026 - May 2026",
      active: true,
      description:
        "Built a full-stack civic grievance platform automating complaint triage for UP's Jansunwai system; asynchronous backend handles concurrent multi-user submissions. Integrated Gemini 1.5 Flash for real-time complaint classification, priority scoring, department routing, and SLA auto-escalation. Built a real-time admin dashboard with workload analytics and a bilingual (EN/HI) citizen notification system.",
      technologies: [
        "Node.js",
        "Express.js",
        "React.js",
        "Supabase",
        "Gemini API",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://janai-1.onrender.com/",
          iconName: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/neeraj-ch7/JanAi",
          iconName: "github",
        },
      ],
      image: "/Jansunwai.png",
      video: "",
    },
    {
      title: "Arogya",
      href: "https://arogya-azure.vercel.app/",
      dates: "Feb 2026 - Mar 2026",
      active: true,
      description:
        "Built a full-stack AI-powered healthcare platform addressing fragmented medical records and limited rural healthcare access. Integrated Google Gemini API for an AI symptom checker giving early-detection insights from described symptoms. Built digital health records, a QR-based health passport, a medication tracker, and a mood/wellness tracker; deployed on Vercel with CI/CD.",
      technologies: [
        "React.js",
        "Vite",
        "Supabase",
        "Tailwind CSS",
        "Gemini API",
      ],
      links: [
        {
          type: "Website",
          href: "https://arogya-azure.vercel.app/",
          iconName: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/neeraj-ch7/arogya",
          iconName: "github",
        },
      ],
      image: "/Arogya.png",
      video: "",
    },
    {
      title: "FitTrack App",
      href: "https://github.com/neeraj-ch7/FitTrack-App",
      dates: "May 2026 - Jun 2026",
      active: true,
      description:
        "Built an innovative gamified fitness mobile application that converts physical movement into real-world territory capture gameplay. Features activity tracking, interactive territory control, secure user authentication, and cross-platform mobile compatibility built with Expo Router.",
      technologies: [
        "React Native",
        "Expo",
        "Expo Router",
        "Node.js",
        "Express.js",
        "JavaScript",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/neeraj-ch7/FitTrack-App",
          iconName: "github",
        },
      ],
      image: "/FitTrack.png",
      video: "",
    },
  ],
  clientProjects: [] as Array<{
    title: string;
    href?: string;
    dates: string;
    active?: boolean;
    description: string;
    technologies: readonly string[];
    links: readonly any[];
    image?: string;
    video?: string;
  }>,
  hackathons: [
    {
      title: "APL Hackathon Finalist (Team Lead)",
      dates: "2026",
      location: "India",
      description:
        "Advanced from 150+ competing teams to top 24; led system architecture and team execution for real-world production-grade systems.",
      image: "/gdg.jpg",
      links: [],
    },
    {
      title: "Smart India Hackathon (SIH) 2025",
      dates: "2025",
      location: "India",
      description:
        "Participated in rapid full-stack development under national-level competition constraints, building innovative solutions.",
      image: "/SIH2.webp",
      links: [],
    },
    {
      title: "SWOC 2024 Contributor",
      dates: "2024",
      location: "Remote",
      description:
        "Open-source contributions strengthening Git workflows, code review practices, and open collaboration.",
      image: "/swoc.jpg",
      links: [],
    },
    {
      title: "Competitive Programming (LeetCode)",
      dates: "Active",
      location: "LeetCode",
      description:
        "161+ problems solved on LeetCode, demonstrating consistent, active problem-solving and algorithmic skills.",
      image: "/Leetcode_logo.jpg",
      links: [
        {
          title: "LeetCode Profile",
          iconName: "leetcode",
          href: "https://leetcode.com/u/neerajch7/",
        },
      ],
    },
  ],
  certifications: [
    {
      title: "AWS APAC Solutions Architecture Job Simulation",
      issuer: "Forage / AWS",
      description: "EC2, S3, and core cloud infrastructure design.",
    },
    {
      title: "Anthropic — AI Fluency: Framework and Foundations",
      issuer: "Anthropic",
      description: "AI concepts, framework patterns, and LLM foundations.",
    },
    {
      title: "L&T EduTech — Python Programming & Web Development",
      issuer: "L&T EduTech",
      description: "Comprehensive Python programming and web application development.",
    },
  ],
} as const;
