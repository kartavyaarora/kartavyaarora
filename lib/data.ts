export const personal = {
  name: "Kartavya Arora",
  title: "Full Stack Developer",
  location: "Jalandhar, Punjab",
  email: "kartavya12.ka@gmail.com",
  phone: "+91 7087190988",
  linkedin: "https://linkedin.com/in/kartavya-arora", // update with real URL
  github: "https://github.com/kartavyaarora", // update with real URL
  tagline: "3+ years building fast, scalable, and beautiful web products.",
  available: true,
};

export const stats = [
  { num: "3+", label: "Years Experience" },
  { num: "5K+", label: "Users Served" },
  { num: "35%", label: "Avg Perf. Gain" },
  { num: "3", label: "Platforms Built" },
];

export const experiences = [
  {
    company: "SATnPaper",
    role: "Full Stack Developer",
    period: "Nov 2024 — Present",
    location: "Noida, Uttar Pradesh",
    bullets: [
      "Optimized UI & backend architecture — <strong>25% reduction in latency</strong>, 15% boost in user satisfaction",
      "Built Django APIs reducing server response times by <strong>35%</strong>, supporting <strong>60% growth</strong> in concurrent traffic",
      "Spearheaded development of <strong>3 comprehensive testing platforms</strong> serving 5,000+ students nationwide",
      "Delivered high-performance solutions using Next.js + TypeScript achieving <strong>40% performance improvement</strong>",
    ],
    stack: ["Next.js", "TypeScript", "Django", "PostgreSQL"],
  },
  {
    company: "Leadzen.ai",
    role: "SDE — Frontend",
    period: "Jul 2023 — Oct 2024",
    location: "Mumbai, Maharashtra",
    bullets: [
      "Built a <strong>ChatGPT-integrated message generator</strong> — 25% increase in customer engagement across all products",
      "Expanded Chrome extension features leading to a <strong>15% increase in user satisfaction</strong>",
      "Developed web scraping pipeline generating company reports — <strong>40% increase in data accuracy</strong>",
      "Integrated REST APIs with <strong>Zapier</strong>, reducing manual workload by 30%",
    ],
    stack: ["React", "TypeScript", "REST APIs", "Zapier"],
  },
  {
    company: "Verge",
    role: "Software Developer Intern",
    period: "Aug 2021 — Mar 2023",
    location: "Sonipat, Haryana",
    bullets: [
      "Built responsive web apps with React.js — <strong>40% increase in client engagement</strong>",
      "Led team of 4 to build a hospital management system — <strong>30% operational efficiency gain</strong>",
    ],
    stack: ["React.js", "JavaScript", "HTML5", "CSS3"],
  },
];

export const skillGroups = [
  {
    icon: "⚡",
    title: "Frontend",
    tags: [
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "Webpack",
      "Electron",
    ],
  },
  {
    icon: "🔩",
    title: "Backend",
    tags: [
      "Django",
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Docker",
      "Nginx",
      "Redis",
    ],
  },
  {
    icon: "🗄️",
    title: "Databases",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  },
  {
    icon: "🧰",
    title: "Languages & Tools",
    tags: [
      "Python",
      "JavaScript",
      "Java",
      "C++",
      "Git",
      "Azure",
      "JIRA",
      "Bitbucket",
    ],
  },
];

export const projects = [
  {
    num: "01",
    title: "AI News Aggregator",
    subtitle: "Intelligent Content Curation & Personalization System",
    description:
      "A production-grade automated news aggregation pipeline that scrapes multiple sources, processes content with LLM-powered summarization, curates based on user preferences, and delivers personalized daily email digests.",
    tags: ["Python", "PostgreSQL", "OpenAI API", "SQLAlchemy", "Docker", "Render"],
    stats: [
      { num: "Multi-Source", label: "YouTube + RSS" },
      { num: "Daily", label: "Automated Pipeline" },
      { num: "LLM-Powered", label: "Smart Curation" },
    ],
    highlights: [
      "Multi-Source Scraping: Aggregates content from YouTube channels and RSS feeds (OpenAI, Anthropic blogs)",
      "LLM Summarization: Generates concise summaries using OpenAI API with intelligent content processing",
      "Personalized Ranking: Curator agent scores and ranks articles based on user profile and interests",
      "Automated Pipeline: End-to-end workflow from scraping → processing → curation → email delivery",
      "Modular Architecture: Registry pattern with base classes for easy extensibility of new sources",
      "Production Deployment: Dockerized application with automated daily cron jobs on Render.com",
      "Data Persistence: SQLAlchemy ORM with PostgreSQL for reliable storage and duplicate prevention",
    ],
    github: "https://github.com/kartavyaarora/ai-news-aggregator",
    live: "#",
  },
  {
    num: "02",
    title: "Q&A Support Bot",
    subtitle: "AI-Powered RAG support bot",
    description:
      "A production-ready Retrieval Augmented Generation (RAG) system that crawls websites, indexes content, and answers questions based solely on the crawled data.",
    tags: ["Python", "OpenAI", "ChromaDB", "PostgreSQL"],
    stats: [
      { num: "10K+", label: "Chunks Indexed" },
      { num: "<1s", label: "Avg Response Time" },
      { num: "Top-5", label: "Semantic Retrieval" },
    ],
    highlights: [
      "Website Crawling: Automatically crawl and extract content from any website",
      "Smart Chunking: Intelligent text chunking with token-aware splitting",
      "Vector Search: Semantic search using OpenAI embeddings and ChromaDB",
      "Context-Aware Answers: GPT-powered answers based only on indexed content",
      "RESTful API: Complete FastAPI implementation with multiple endpoints",
      "Persistent Storage: Local ChromaDB vector database with persistence",
      "Comprehensive Logging: Detailed logging for debugging and monitoring",
    ],
    github: "https://github.com/kartavyaarora/RAG-support-bot", // update
    live: "#",
  },
   {
    num: "03",
    title: "Music Mantra",
    subtitle: "Feature-Packed Music Player",
    description:
      "A full-featured music streaming platform with song upload, real-time updates, user authentication, payment integration, and a polished player experience — all built for scale.",
    tags: ["Next.js", "Supabase", "Stripe", "PostgreSQL"],
    stats: [
      { num: "<500ms", label: "API Response" },
      { num: "JWT/Auth", label: "Secure Access" },
      { num: "Stripe", label: "Payments Integrated" },
    ],
    highlights: [
      "Stripe payment integration for premium features",
      "Real-time updates via Supabase subscriptions",
      "Advanced player with favorites & playlists",
    ],
    github: "https://github.com/kartavyaarora/Music-Mantra", // update
    live: "#",
  },
];
