# 📰 THE RIZWAN TIMES — Interactive Vintage Broadsheet Developer Portfolio

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

> *"The best way to predict the future is to invent it — through code, data, and relentless curiosity."*

**THE RIZWAN TIMES** is a high-performance, interactive personal developer portfolio designed as a vintage British broadsheet publication. Built by **Rizwan Salmani** (Computer Science Scholar & Lead Developer), the website bridges editorial typography and 1920s newspaper aesthetics with modern web technologies, smooth GSAP animations, and full-stack project case studies.

---

## 🌟 Key Highlights & Narrative Progression

- 👁️ **Cinematic Pupil Zoom Entrance**: Full-page portrait cover with character-by-character typewriter headline reveal (`THE DIGITAL BUILDER`) leading into an automatic **30x left-eye pupil zoom-in transition**.
- 📰 **Authentic Broadsheet Layout**: Double rules, drop caps, datelines, issue numbers, classified want ads, and multiple newspaper themes (1920 Aged Sepia, 1970 Newsprint, Night Press, High-Contrast Broadside).
- 💼 **Case Studies**: Flagship project deep-dives detailing goals, engineering contributions, full-stack architecture pipelines, and live cloud deployment metrics.
- 🛠️ **The Technology Desk**: Clean editorial categorizations for Programming Languages, Frontend, Data Visualization, Backend, Databases, and Data Analytics with zero fake progress bars.
- 📌 **Interactive Reader Utilities**: Real-time Archive Search modal, saved Broadsheet Clippings Drawer, and one-click Print Press mode.

---

## 🚀 5 Essential Portfolio Sections

### 01. Hero Entrance & Front Page Lead Story (`P. 1`)
- **Main Headline**: `THE DIGITAL BUILDER`
- **Subheadline**: *"A Computer Science student exploring software, data, artificial intelligence and creative technology."*
- **Feature Frame**: Authentic portrait frame with natural aspect ratio and press metadata.
- **Key Metrics Bulletin**: Verified scholar status, shipped systems, accuracy metrics, and code quality benchmarks.

### 02. Selected Work & Case Studies (`P. 2`)
- **MindMap (MindLink)**: Full-stack interactive knowledge mapping platform (React + Node.js + Express + Mongoose + MongoDB Atlas, deployed on Render).
- **AI Mind Matrix**: 3D neural thought graph visualizer in WebGL rendering 50k nodes at 60 FPS.
- **Neural Data Lab**: Interactive machine learning laboratory for predictive analytics & loss surface plots.
- **HyperFlow Engine**: Zero-dependency distributed event engine handling 1M msg/s.

### 03. Skills, Tools & Certifications (`P. 3`)
- **Programming Languages**: Python, JavaScript (ES6+), C++
- **Frontend Development**: React.js, HTML5, CSS3, Vite, Responsive Web Design
- **Data Visualization**: D3.js, Chart.js, Matplotlib
- **Backend Development**: Node.js & Express.js, Flask, REST APIs, Mongoose
- **Databases**: MongoDB, MongoDB Atlas, MongoDB Compass, Firebase
- **Data Analytics**: Python, Pandas, NumPy, SQL, Power BI, Exploratory Data Analysis, Data Cleaning
- **Verified Archive**: Computer Science Accreditations, Data Science & Machine Learning credentials.

### 04. Proof & Credentials (`P. 4`)
- Direct links to live cloud deployments, GitHub repositories, and open-source contributions.

### 05. Contact Information & Classifieds (`P. 5`)
- **Featured Want Ads**: Full-Time Software & AI Engineer Roles, CS & Data Science Internships, AI Research & Open-Source Collaborations, Freelance Consulting.
- **Press Telegram Desk**: Direct telegraph contact form with express dispatch confirmation.
- **Direct Mail**: `rizwansalmani.dev@gmail.com`

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Core Framework** | React 19 + TypeScript 5.6 |
| **Build Tooling** | Vite 8.2 + `@tailwindcss/vite` |
| **Styling & System** | Tailwind CSS v4 + Custom Ciguatera Serif System (`Bodoni Moda`, `Italiana`, `Playfair Display`) |
| **Animations** | GSAP 3 (ScrollTrigger) + Framer Motion |
| **Icons & UI** | Lucide React |

---

## 📁 Project Directory Structure

```text
Portfolio/
├── public/
│   ├── mindmap_screenshot.png    # MindMap flagship project screenshot
│   └── rizwan_photo.png          # High-definition portrait photo
├── src/
│   ├── components/
│   │   ├── Footer/
│   │   │   └── NewspaperFooter.tsx # Broadsheet footer & section index
│   │   ├── Header/
│   │   │   ├── BreakingTicker.tsx  # Marquee headlines
│   │   │   ├── MarketTicker.tsx    # Commodities market ticker bar
│   │   │   └── Masthead.tsx        # Broadsheet title, edition switcher, search, clippings
│   │   ├── Interactive/
│   │   │   ├── CustomInkCursor.tsx # Desktop ink cursor
│   │   │   └── EditorialPhotoFrame.tsx # Authentic portrait frame
│   │   ├── Intro/
│   │   │   └── PaperUnfoldIntro.tsx # Full-screen intro & auto left-eye pupil zoom
│   │   ├── Modals/
│   │   │   ├── ArticleModal.tsx    # Detailed case study reader modal
│   │   │   ├── ClippingsDrawer.tsx # Saved clippings drawer
│   │   │   └── SearchModal.tsx     # Archive search modal
│   │   ├── Navigation/
│   │   │   └── SectionNav.tsx      # Sticky broadsheet navigator
│   │   └── Sections/
│   │       ├── CareerTimeline.tsx  # Archival record timeline
│   │       ├── CertificationsArchive.tsx # Verified certifications
│   │       ├── ClassifiedsContact.tsx # Want ads & Press Telegram Desk form
│   │       ├── FeaturedProjects.tsx   # 4 flagship broadsheet case studies
│   │       ├── HeroFrontPage.tsx      # Lead story & key metrics bulletin
│   │       └── TechSkills.tsx         # The Technology Desk categories
│   ├── data/
│   │   └── newspaperData.ts        # Broadside articles, skills, & want ads
│   ├── types/
│   │   └── index.ts               # TypeScript interfaces
│   ├── utils/
│   │   ├── animations.ts          # GSAP animation helpers
│   │   └── audio.ts               # Sound manager utilities
│   ├── App.tsx                    # Root application component
│   ├── index.css                  # Ciguatera serif typography & theme variables
│   └── main.tsx                   # React DOM entry point
├── index.html                     # HTML root & Google Fonts
├── vite.config.ts                 # Vite + Tailwind v4 plugin configuration
└── package.json                   # Dependencies & build scripts
```

---

## 💻 Local Development Setup

Follow these steps to run the portfolio locally on your machine:

1. **Clone Repository / Navigate to Folder**:
   ```bash
   cd /Users/rizwansalmani/Desktop/Portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5174/`.

4. **Compile Production Build**:
   ```bash
   npm run build
   ```

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment Instructions

### Vercel (Recommended)
1. Push your code to GitHub.
2. Import the repository into [Vercel](https://vercel.com).
3. Vercel automatically detects Vite (`npm run build`, `dist` output).
4. Click **Deploy**.

### Netlify
1. Run `npm run build`.
2. Drag and drop the `dist/` directory into [Netlify Drop](https://app.netlify.com/drop).

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## ✉️ Contact & Press Desk

- **Developer**: Rizwan Salmani
- **Email**: [rizwansalmani.dev@gmail.com](mailto:rizwansalmani.dev@gmail.com)
- **GitHub**: [github.com/rizwansalmani](https://github.com/rizwansalmani)
- **LinkedIn**: [linkedin.com](https://linkedin.com)
