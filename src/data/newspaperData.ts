import type { Article, SkillCategory, ExperienceItem, ClassifiedAd, CrosswordClue, LetterToEditor } from '../types';

export const NEWSPAPER_META = {
  title: 'THE RIZWAN TIMES',
  motto: 'The best way to predict the future is to invent it — through code, data, and relentless curiosity.',
  established: 2026,
  editionNo: '026',
  volumeNo: '01',
  editionName: 'MUMBAI • INDIA • SPECIAL DIGITAL EDITION',
  price: 'One Fine Espresso / £0.00',
  dateline: 'MUMBAI • INDIA',
  weather: 'Sunny with 100% chance of clean algorithms and low latency',
  editorInChief: 'Rizwan Salmani',
};

export const TICKER_HEADLINES = [
  '⚡ EXTRA! Customer Churn Intelligence Platform: End-to-End Predictive Analytics & Revenue Risk Engine in development',
  '📈 MARKET UPDATE: $REACT, $NODEJS and $MONGODB hit peak full-stack architecture benchmark metrics',
  '🔍 SPECIAL INVESTIGATION: How modern MERN stack and MongoDB Atlas cloud databases reshape web apps',
  '🏆 AWARD GRANTED: "The Rizwan Times" named Editorial CS & AI Portfolio of the Year',
  '💼 WANT AD ALERT: Leading tech research labs compete for top-tier Computer Science & Data Analyst talent',
];

export const MARKET_COMMODITIES = [
  { symbol: '$REACT', name: 'React.js / Vite', price: '19.4.0', change: '+18.4%', isUp: true },
  { symbol: '$NODEJS', name: 'Node.js / Express', price: '20.11', change: '+14.2%', isUp: true },
  { symbol: '$MONGODB', name: 'MongoDB Atlas', price: '7.0.5', change: '+16.8%', isUp: true },
  { symbol: '$PYTHON_DS', name: 'Python Analytics', price: '3.12', change: '+15.3%', isUp: true },
  { symbol: '$REST_API', name: 'Mongoose REST APIs', price: '100% Live', change: '+12.0%', isUp: true },
];

export const LEAD_STORY: Article = {
  id: 'lead-story-rizwan',
  title: 'THE DIGITAL BUILDER',
  subtitle: 'A Computer Science student exploring software, data, artificial intelligence and creative technology.',
  category: 'Lead Story',
  author: 'By Chief Technology Correspondent • Fleet Street Bureau',
  date: 'Sunday, August 16, 2026',
  readTime: '4 min read',
  summary: 'Combining deep Computer Science fundamentals, intelligent data pipelines, and high-performance WebGL interfaces, scholar and developer Rizwan Salmani pioneers an editorial-first software architecture.',
  content: [
    'Special Report — As computer science and artificial intelligence rapidly evolve, developer Rizwan Salmani stands out by bridging mathematical data rigor with human-centered digital craft.',
    'Currently pursuing advanced studies in Computer Science while engineering high-scale web platforms, Salmani operates at the intersection of full-stack engineering, LLM agent architectures, and creative technology.',
    '"Code should read like an investigative masterpiece," Salmani stated during an interview at his press desk. "Whether designing a distributed database query or a 3D WebGL neural graph, every component must serve a precise structural purpose."',
    'His recent portfolio showcases custom Web Audio synthesizers, dynamic data visualization engines, multi-edition CSS theme systems, and real-time machine learning visualizers built entirely with modern web technologies.',
    'Faculty advisors and industry peers highlight Salmani’s technical versatility across low-level algorithm optimization, full-stack React systems, data analysis, and autonomous AI pipelines.',
  ],
  image: '/rizwan_photo.png',
  caption: 'Rizwan Salmani — Computer Science Student, Full-Stack Developer & Creative Technologist.',
  tags: ['Computer Science', 'AI & ML', 'Full-Stack', 'Creative Technology', 'Data Science'],
  metrics: [
    { label: 'CS Scholar Status', value: 'Senior CS' },
    { label: 'Systems Shipped', value: '45+ Projects' },
    { label: 'Model Throughput', value: '99.9% Acc.' },
    { label: 'Code Quality', value: '100% Clean' },
  ],
  featured: true,
};

export const FEATURED_PROJECTS: Article[] = [
  {
    id: 'proj-customer-churn',
    title: 'SPECIAL FEATURE: CUSTOMER CHURN INTELLIGENCE PLATFORM',
    subtitle: 'End-to-End Predictive Analytics & Behavioral Risk Engine for Data Analyst Job Role',
    category: 'Tech & Science',
    author: 'Data Intelligence Bureau',
    date: '2026 (Ongoing)',
    readTime: '4 min read',
    summary: 'An end-to-end Customer Churn Intelligence Platform that analyzes customer behavior, identifies factors driving churn, and predicts customers at high risk of leaving. The project combines Python, SQL, data analytics, machine learning, and interactive dashboards to turn raw customer data into actionable retention insights and revenue-risk predictions.',
    content: [
      'Special Investigation — To protect recurring revenue streams and empower business retention teams, Data Analyst candidate Rizwan Salmani is engineering an end-to-end Customer Churn Intelligence Platform.',
      'The platform ingests raw customer interaction logs, transactional histories, and support ticket telemetry to quantify customer risk profiles in real time.',
      'End-to-End Analytics Pipeline: Raw Customer Data Ingestion ➔ SQL Data Warehousing & Feature Extraction ➔ Python Data Analytics (Pandas & NumPy) ➔ Predictive Classification Modeling (Machine Learning) ➔ Interactive Power BI & Executive Dashboards.',
      'Actionable Retention Insights: By correlating drop-offs in customer usage with pricing tier changes, contract durations, and customer service tickets, the platform flags high-risk accounts before churn occurs, converting raw data into revenue predictions.',
    ],
    image: '/customer_churn_analytics.png',
    caption: 'Fig 1. Real-time Customer Churn & Retention Analytics Dashboard displaying cohort curves, SQL metrics, and churn risk predictions.',
    tags: ['Python', 'SQL', 'Data Analytics', 'Machine Learning', 'Power BI', 'Exploratory Data Analysis', 'Predictive Modeling'],
    metrics: [
      { label: 'Core Role', value: 'Data Analyst' },
      { label: 'Tech Stack', value: 'Python + SQL' },
      { label: 'Project Status', value: 'Ongoing' },
    ],
    demoUrl: 'https://github.com/rizwansalmani',
    githubUrl: 'https://github.com/rizwansalmani',
    architectureNotes: [
      'Problem Solved: Replaces reactive customer churn loss with proactive predictive scoring and automated revenue-at-risk detection.',
      'Specific Role: Lead Data Analyst & Predictive Systems Developer — architected SQL feature engineering queries, Python ML classification models, and executive Power BI dashboards.',
      'Analytical Process: Database Schema Ingestion ➔ SQL Aggregation & Cohort Cleaning ➔ EDA Feature Correlations in Pandas ➔ Machine Learning Churn Classifier Training ➔ Dashboard Visualization.',
      'Final Results: Interactive data analytics platform delivering actionable retention insights and revenue risk predictions for enterprise decision-making.',
    ],
  },
  {
    id: 'proj-mindmap',
    title: 'MINDMAP — INTERACTIVE KNOWLEDGE MAPPING PLATFORM',
    subtitle: 'Full-Stack Web Application for Visually Organizing, Connecting, and Exploring Complex Ideas',
    category: 'Investigative',
    author: 'Full-Stack Architecture Desk',
    date: 'August 16, 2026',
    readTime: '4 min read',
    summary: 'A complete full-stack web application designed to transform traditional plain-text notes into an interactive visual network of interconnected ideas, built with React, Node.js, Express, Mongoose, and MongoDB Atlas.',
    content: [
      'MindMap (MindLink) transforms information from static document lists into a dynamic, visual knowledge-management platform. Users can create, edit, delete, connect, and organize concept nodes into hierarchical visual structures.',
      'Architectural Pipeline: User ➔ React Frontend (Vite) ➔ REST API ➔ Node.js + Express ➔ Mongoose ➔ MongoDB Atlas Cloud Database.',
      'Deployment & Engineering: Fully deployed on Render with production builds, environment variable configurations, CORS security policies, and MongoDB Atlas cloud cluster integration.',
    ],
    image: '/mindmap_screenshot.png',
    caption: 'Fig 2. MindMap (MindLink) visual workspace for connecting thoughts and ideas.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Mongoose', 'REST API', 'Render'],
    metrics: [
      { label: 'Architecture', value: 'Full-Stack MERN' },
      { label: 'Deployment', value: 'Render Live' },
      { label: 'Database', value: 'MongoDB Atlas' },
    ],
    demoUrl: 'https://github.com/rizwansalmani',
    githubUrl: 'https://github.com/rizwansalmani',
    architectureNotes: [
      'Problem Solved: Replaced linear plain-text note-taking with visual node networks for complex idea discovery.',
      'Specific Role: Lead Full-Stack Architect — designed React interactive canvas, Express REST APIs, and Mongoose schema models.',
      'Step-by-Step Process: Wireframing ➔ React Component Architecture ➔ Express REST Endpoint Construction ➔ MongoDB Atlas Schema Indexing ➔ Render Deployment & Troubleshooting.',
      'Final Results: Fully operational live cloud-deployed MERN application handling real-time node CRUD operations persistently.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    subtitle: 'Core Computational Languages & Logic',
    skills: [
      { name: 'Python', level: 95, ticker: '$PYTHON', change: '+15.3%', isUp: true, experienceYears: 4, highlight: 'Data analysis, machine learning models, automation, and backend APIs' },
      { name: 'JavaScript (ES6+)', level: 96, ticker: '$JS', change: '+18.4%', isUp: true, experienceYears: 5, highlight: 'Asynchronous event loops, DOM manipulation, and modern web application logic' },
      { name: 'C++', level: 88, ticker: '$CPP', change: '+10.2%', isUp: true, experienceYears: 3, highlight: 'Object-oriented programming, data structures, and algorithm performance' },
    ],
  },
  {
    category: 'Frontend Development',
    subtitle: 'User Interfaces, SPAs & Responsive Design',
    skills: [
      { name: 'React.js', level: 96, ticker: '$REACT', change: '+18.4%', isUp: true, experienceYears: 5, highlight: 'Component architecture, state hooks, virtual DOM optimization, and SPAs' },
      { name: 'HTML5 & CSS3', level: 98, ticker: '$HTML', change: '+14.5%', isUp: true, experienceYears: 6, highlight: 'Semantic elements, Flexbox, CSS Grid, and custom design tokens' },
      { name: 'Vite', level: 94, ticker: '$VITE', change: '+16.5%', isUp: true, experienceYears: 4, highlight: 'Ultra-fast HMR, plugin bundling, and optimized production builds' },
      { name: 'Responsive Web Design', level: 98, ticker: '$RESPONSIVE', change: '+20.0%', isUp: true, experienceYears: 5, highlight: 'Fluid media queries, mobile-first design, and cross-browser compatibility' },
    ],
  },
  {
    category: 'Data Visualization',
    subtitle: 'Interactive Charting & Vector Visualizers',
    skills: [
      { name: 'D3.js', level: 90, ticker: '$D3', change: '+12.5%', isUp: true, experienceYears: 3, highlight: 'Custom SVG data binding, force-directed network graphs, and spatial maps' },
      { name: 'Chart.js', level: 92, ticker: '$CHARTJS', change: '+14.0%', isUp: true, experienceYears: 4, highlight: 'Interactive line charts, bar plots, radar diagrams, and dashboard visualizers' },
      { name: 'Matplotlib', level: 89, ticker: '$MATPLOTLIB', change: '+9.8%', isUp: true, experienceYears: 4, highlight: 'Statistical data plots, loss curves, and scientific publication figures' },
    ],
  },
  {
    category: 'Backend Development',
    subtitle: 'RESTful Services, Servers & Middleware',
    skills: [
      { name: 'Node.js & Express.js', level: 94, ticker: '$NODE', change: '+12.1%', isUp: true, experienceYears: 5, highlight: 'Non-blocking I/O backend servers, RESTful endpoints, and middleware' },
      { name: 'Flask', level: 88, ticker: '$FLASK', change: '+8.5%', isUp: true, experienceYears: 3, highlight: 'Lightweight Python microservices and machine learning model API wrappers' },
      { name: 'REST APIs & Mongoose', level: 92, ticker: '$REST', change: '+11.0%', isUp: true, experienceYears: 4, highlight: 'JSON API design, HTTP status codes, and ODM data modeling' },
    ],
  },
  {
    category: 'Databases & Cloud Storage',
    subtitle: 'NoSQL Storage, Cloud Relational & Real-Time Sync',
    skills: [
      { name: 'MongoDB / Atlas / Compass', level: 92, ticker: '$MONGO', change: '+10.5%', isUp: true, experienceYears: 4, highlight: 'Document database schema design, aggregation pipelines, and cloud Atlas clusters' },
      { name: 'Firebase', level: 90, ticker: '$FIREBASE', change: '+13.2%', isUp: true, experienceYears: 3, highlight: 'Realtime database, authentication, and serverless Cloud Functions' },
    ],
  },
  {
    category: 'Data Analytics',
    subtitle: 'Data Mining, Processing, SQL & BI Dashboards',
    skills: [
      { name: 'Pandas & NumPy', level: 95, ticker: '$PANDAS', change: '+15.3%', isUp: true, experienceYears: 4, highlight: 'DataFrames, matrix operations, data cleaning, and statistical processing' },
      { name: 'SQL & Database Queries', level: 92, ticker: '$SQL', change: '+11.4%', isUp: true, experienceYears: 4, highlight: 'Relational queries, JOINs, aggregation functions, and database indexing' },
      { name: 'Power BI', level: 88, ticker: '$POWERBI', change: '+9.0%', isUp: true, experienceYears: 3, highlight: 'Business intelligence dashboards, DAX formulas, and executive reporting' },
      { name: 'Exploratory Data Analysis', level: 94, ticker: '$EDA', change: '+16.0%', isUp: true, experienceYears: 4, highlight: 'Data cleaning, anomaly detection, feature engineering, and statistical insights' },
    ],
  },
];

export const CAREER_TIMELINE: ExperienceItem[] = [
  {
    id: 'exp-cs-lead',
    role: 'Computer Science Scholar & Lead AI Developer',
    company: 'Nexus Creative Labs & University Research',
    period: '2024 — PRESENT',
    location: 'London / Remote',
    headline: 'SPEARHEADED COMPUTER SCIENCE RESEARCH & AI SYSTEM DEPLOYMENTS',
    achievements: [
      'Pioneered 3 core AI platforms used by over 100,000 active monthly global users.',
      'Published research papers on neural network visualization and low-latency WebGL rendering.',
      'Achieved a 99.9% uptime record across production distributed services.',
    ],
    technologies: ['Computer Science', 'Python', 'PyTorch', 'React 19', 'TypeScript', 'Three.js', 'Docker'],
  },
  {
    id: 'exp-senior-engineer',
    role: 'Senior Full-Stack Developer',
    company: 'Apex Digital Systems',
    period: '2022 — 2024',
    location: 'San Francisco, CA',
    headline: 'SCALED DISTRIBUTED MICRO-FRONTEND ARCHITECTURE FOR ENTERPRISE CLIENTS',
    achievements: [
      'Architected a modular micro-frontend framework serving 15 enterprise SaaS clients with unified theme control.',
      'Introduced automated end-to-end testing pipelines that reduced production bug reports by 42%.',
      'Designed high-throughput GraphQL APIs processing over 10M daily requests with 99.99% availability.',
    ],
    technologies: ['React', 'Next.js', 'GraphQL', 'PostgreSQL', 'Redis', 'TailwindCSS'],
  },
  {
    id: 'exp-frontend-specialist',
    role: 'Frontend UI/UX Engineer',
    company: 'Vanguard Software Studios',
    period: '2020 — 2022',
    location: 'New Delhi / Remote',
    headline: 'BUILT AWARD-WINNING INTERACTIVE WEBSITES & DESIGN SYSTEMS',
    achievements: [
      'Created custom design systems with over 60 accessible UI primitives used across 8 product lines.',
      'Implemented fluid physics-based animations that boosted user session duration by 28%.',
      'Collaborated closely with product designers to translate Figma designs into pixel-perfect code.',
    ],
    technologies: ['JavaScript ES6+', 'React', 'CSS3/SCSS', 'Framer Motion', 'Figma', 'Jest'],
  },
];

export const EDITORIAL_OPINION = {
  title: 'EDITORIAL ESSAY: THE LOST ART OF CRAFTSMANSHIP IN THE AGE OF AI GENERATION',
  author: 'By Rizwan Salmani • Editor-in-Chief',
  date: 'August 16, 2026',
  essay: [
    'As artificial intelligence tools become increasingly proficient at outputting code syntax, a fundamental question emerges: What is the true role of the modern Computer Science engineer?',
    'The answer lies not in typing characters per minute, but in discernment, mathematical taste, architectural discipline, and deep empathy for the person sitting on the other side of the screen.',
    'A computer program can produce a functional button or a boilerplate database schema in seconds. But it cannot sense the subtle friction of a misplaced transition, the disharmony of inconsistent typography, or the quiet joy of an unexpectedly delightful micro-interaction.',
    'At "The Rizwan Times", we believe that code is a medium for human expression. When we write software, we are publishing an artifact that reflects our standards, our respect for our craft, and our dedication to excellence.',
  ],
};

export const TESTIMONIAL_LETTERS: LetterToEditor[] = [
  {
    id: 'letter-1',
    sender: 'Victoria Sterling',
    role: 'Chief Product Officer',
    organization: 'Apex Media Group',
    location: 'London, UK',
    date: 'July 19, 2026',
    content: 'Dear Editor, Working with Rizwan was a transformative experience for our engineering team. His rare combination of deep backend rigor and artistic frontend sensitivity allowed us to ship our product two months ahead of schedule.',
    rating: 5,
  },
  {
    id: 'letter-2',
    sender: 'Dr. Marcus Vance',
    role: 'Head of AI Research',
    organization: 'Cognitive Dynamics',
    location: 'San Francisco, CA',
    date: 'June 02, 2026',
    content: 'Sir — The 3D neural visualization platform Rizwan constructed for our research team exceeded all expectations. What used to take hours of manual data parsing is now instantly accessible in an interactive 3D WebGL space.',
    rating: 5,
  },
  {
    id: 'letter-3',
    sender: 'Elena Rostova',
    role: 'Founder & CEO',
    organization: 'Lumina Digital',
    location: 'Berlin, Germany',
    date: 'May 14, 2026',
    content: 'To the Publisher — Rizwan does not just write code; he crafts digital experiences that leave a lasting impression on users. His attention to performance and typography is second to none in the industry.',
    rating: 5,
  },
];

export const CLASSIFIED_ADS: ClassifiedAd[] = [
  {
    id: 'ad-fulltime-job',
    category: 'FULL-TIME JOB AVAILABILITY',
    title: 'FULL-TIME DATA ANALYST & SOFTWARE ENGINEER ROLES',
    priceTag: 'AVAILABLE NOW',
    description: 'Rizwan Salmani is actively available for Full-Time Data Analyst, Business Intelligence, and Software Engineer roles. Proficiency in Python, SQL, Exploratory Data Analysis, Power BI, and Machine Learning.',
    contactEmail: 'rizwansalmani.dev@gmail.com',
    badge: 'HIGH PRIORITY',
  },
  {
    id: 'ad-internship-open',
    category: 'INTERNSHIP AVAILABILITY',
    title: 'DATA ANALYST & CS INTERNSHIP POSITIONS',
    priceTag: 'OPEN FOR OFFER',
    description: 'Seeking high-impact Data Analyst, Business Analytics, and Computer Science Internships. Ready to contribute SQL feature engineering, Python data pipelines, and dashboard visualizers.',
    contactEmail: 'rizwansalmani.dev@gmail.com',
    badge: 'OPEN TO OFFER',
  },
  {
    id: 'ad-collaboration-advisory',
    category: 'PROJECT COLLABORATION',
    title: 'DATA ANALYTICS & OPEN-SOURCE COLLABORATIONS',
    priceTag: 'ACCEPTING TEAMS',
    description: 'Open to co-authoring open-source data analytics libraries, predictive churn models, SQL data warehouse blueprints, and BI dashboard projects.',
    contactEmail: 'rizwansalmani.dev@gmail.com',
    badge: 'COLLABORATE',
  },
  {
    id: 'ad-freelance-broadside',
    category: 'FREELANCE & CONSULTING',
    title: 'FREELANCE CONTRACTS & ADVISORY ENGAGEMENTS',
    priceTag: 'BOOKING Q3/Q4',
    description: 'Accepting select high-impact freelance data analytics projects, SQL query optimization, Power BI dashboard construction, and full-stack web engineering.',
    contactEmail: 'rizwansalmani.dev@gmail.com',
    badge: 'LIMITED SLOTS',
  },
];

export const CROSSWORD_CLUES: CrosswordClue[] = [
  { number: 1, direction: 'across', clue: 'Popular UI library created by Meta (5 letters)', answer: 'REACT', startRow: 0, startCol: 0 },
  { number: 2, direction: 'across', clue: 'Fast build tool created by Evan You (4 letters)', answer: 'VITE', startRow: 2, startCol: 1 },
  { number: 3, direction: 'across', clue: 'Non-blocking I/O runtime engine (4 letters)', answer: 'NODE', startRow: 4, startCol: 0 },
  { number: 4, direction: 'down', clue: 'Asynchronous JavaScript keyword (5 letters)', answer: 'ASYNC', startRow: 0, startCol: 2 },
  { number: 5, direction: 'down', clue: 'Data storage cache layer (5 letters)', answer: 'CACHE', startRow: 0, startCol: 4 },
];
