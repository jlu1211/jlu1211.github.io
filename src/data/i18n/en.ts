import type { SiteContent } from './types';
import { email, profiles, repos, resumes } from './facts';

/**
 * English copy. Facts come from Chris's profile (November 17, 2026).
 * Do not add employers, dates, metrics, visa status, or interview targets here.
 */
const content: SiteContent = {
  locale: 'en',
  meta: {
    title: 'Jiachen (Chris) Lu · Software and AI Engineering',
    description:
      'Jiachen (Chris) Lu, M.S. Computer Science student at USC (expected May 2027), seeking new-grad software and AI engineering roles. B.S. from the University of Washington.',
    htmlLang: 'en',
    ogLocale: 'en_US',
    ogLocaleAlternate: 'ja_JP',
    ogImageAlt:
      'Jiachen (Chris) Lu, 盧 嘉宸. Software and AI engineering. USC M.S. Computer Science, expected May 2027.',
  },
  ui: {
    skip: 'Skip to content',
    navLabel: 'Sections',
    langLabel: 'Language',
    themeToDark: 'Switch to dark mode',
    themeToLight: 'Switch to light mode',
    opensNewTab: 'opens in a new tab',
    currentPage: 'Current language',
    resumeMissing: 'PDF not uploaded yet',
    resumeReady: 'PDF ready to download',
  },
  brand: {
    mark: 'JL',
    name: 'Jiachen (Chris) Lu',
    nameLang: 'en',
    homeHref: '/#top',
  },
  languages: [
    { href: '/', label: 'EN', lang: 'en' },
    { href: '/ja/', label: '日本語', lang: 'ja' },
  ],
  nav: [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#languages', label: 'Languages' },
    { href: '#resume', label: 'Résumé' },
    { href: '#contact', label: 'Contact' },
  ],
  hero: {
    kicker: 'New graduate · Software and AI engineering',
    name: 'Jiachen (Chris) Lu',
    nameLang: 'en',
    reading: '盧 嘉宸（ロ カチン）',
    altName: '',
    altNameLang: 'ja',
    summary:
      'M.S. student in Computer Science at the University of Southern California, expected to graduate in May 2027. I work across numerical computing, warehouse-robotics integration, and business-process automation, with the most time spent on implementation and debugging.',
    preference:
      'I am looking for new-graduate software and AI engineering roles. I prefer to work in the United States, and I am glad to speak with employers in Japan.',
    facts: [
      { label: 'Based in', value: 'Los Angeles, California' },
      { label: 'Degree', value: 'M.S. Computer Science, USC' },
      { label: 'Graduation', value: 'May 2027 (expected)' },
      { label: 'Target start', value: 'Summer 2027' },
      { label: 'Languages', value: 'English, Japanese, Mandarin' },
    ],
    ctas: [
      { label: 'Email', href: `mailto:${email}` },
      { label: 'LinkedIn', href: profiles.linkedin, external: true },
      { label: 'GitHub', href: profiles.github, external: true },
      { label: 'Résumé', href: '#resume' },
    ],
  },
  about: {
    id: 'about',
    index: '01',
    title: 'About',
    paragraphs: [
      'I am Chris, also known as Jiachen Lu. I am pursuing an M.S. in Computer Science at the University of Southern California, with expected graduation in May 2027. I previously earned a B.S. in Applied & Computational Mathematical Sciences from the University of Washington, concentrating on Scientific Computing & Numerical Analysis, with minors in Applied Mathematics and Data Science.',
      'That background mixes software development, numerical computing, robotics integration, and business-process automation. In summer 2026 I interned with Mujin in Atlanta on warehouse-automation integration, debugging, acceptance testing, and pallet-pattern tooling. At PxNexus my work includes HR automation, system integrations, and ChatZO prototypes for document processing and agent workflows.',
      'I want a deep technical foundation: implementation, debugging, system design, and responsibility for real systems. I communicate in English, Japanese, and Mandarin Chinese.',
      'Outside of school and work I follow the NBA, play games, and spend time with Pokémon.',
    ],
  },
  education: {
    id: 'education',
    index: '02',
    title: 'Education',
    intro:
      'Graduate study is in progress. Course projects from USC, and the University of Washington coursework called out in my profile, are summarized under Projects.',
    schools: [
      {
        school: 'University of Southern California',
        degree: 'M.S. in Computer Science',
        dates: 'August 2025 – May 2027 (expected)',
        location: 'Los Angeles, California',
        gpa: 'GPA 3.50 / 4.00',
        points: [
          'The GPA is the figure recorded in October 2026 application materials, not a newly checked transcript.',
          'Known Fall 2026 courses: CSCI 572 (Information Retrieval and Web Search Engines), CSCI 585 (Database Systems), and EE 542 (Internet and Cloud Computing).',
        ],
      },
      {
        school: 'University of Washington',
        degree:
          'B.S. in Applied & Computational Mathematical Sciences · Scientific Computing & Numerical Analysis',
        dates: 'September 2021 – June 2025',
        location: 'Seattle, Washington',
        gpa: 'GPA 3.79 / 4.00',
        points: [
          'Minors in Applied Mathematics and Data Science.',
          'Parallel numerical-computing coursework included distributed numerical integration in C++ with MPI reductions, and GPU spectral differentiation with CUDA/cuFFT, benchmarked on five three-dimensional grid sizes up to 256 × 256 × 256.',
          'The public AMATH 583 repository contains that coursework, including MPI and CUDA/cuFFT homework. Separate scientific-computing notebooks (root-finding, including Newton and bisection, and ODE boundary-value problems) are in the Scientific-Computing repository.',
          'Undergraduate research with the Washington Experimental Mathematics Lab is listed under Experience. The public FEM repository holds MATLAB finite-element code from that lab.',
        ],
      },
    ],
  },
  experience: {
    id: 'experience',
    index: '03',
    title: 'Experience',
    intro: 'A robotics-integration internship, part-time engineering, undergraduate research, and an earlier API internship.',
    roles: [
      {
        org: 'Mujin',
        title: 'Software Integration Engineer Intern',
        dates: 'May 2026 – August 2026',
        location: 'Atlanta, Georgia, USA · also a customer deployment in Kansas City',
        points: [
          'Diagnosed Quicktron AGV task-execution and pallet-transfer failures using SSH, log analysis, process monitoring, and batch tests, and worked with engineers on fleet-communication problems.',
          'Integrated and acceptance-tested warehouse workflows involving palletizing, bin picking, AGVs, warehouse execution systems, packing, and wrapping.',
          'Ran site acceptance testing for single- and mixed-SKU palletizing across simulation, controller software, WebUI, and physical robots, and investigated cycle-time bottlenecks.',
          'Imported, edited, validated, and saved pallet-layout data in JSON, TOPS, and RoboPalExport formats, then reran existing orders on a development controller to check downstream behavior.',
        ],
      },
      {
        org: 'PxNexus (formerly PeopleX)',
        title: 'CTO and Board Member',
        dates: '2024 – present',
        location: 'Part-time · remote',
        note: 'Recent application materials describe my current role as CTO and Board Member. Earlier materials list Software Engineer Intern from July 2024. The 2024 date is when I joined the company, not how long I have held the CTO title. The recorded arrangement is part-time and remote. “Tokyo” in older materials refers to the company, not where I live. I am based in Los Angeles.',
        points: [
          'Automated HR document intake and validation with Python and UiPath, working with Japanese HR specialists to match the automation to document-processing and validation requirements.',
          'Integrated REST and GraphQL APIs across 5+ HR systems.',
          'Built Docker and GitHub Actions pipelines for testing and deployment to AWS ECS.',
          'My résumé says this work contributed to a 50% reduction in HR processing time on a platform serving 1M+ users. Those are résumé-reported, platform-level figures. They do not mean I built the entire platform or independently measured the full reduction.',
          'ChatZO prototype for Japanese year-end-adjustment documents: Google Document AI and OpenAI image understanding for extraction, normalization of the extracted values, business-rule validation, an LLM recheck, and routing of uncertain cases to a person. This is a prototype. Production status, volume, accuracy, latency, and cost are not established.',
          'Connected business interviews to process visualization, workflow requirements, execution support, and human confirmation inside the workflow.',
        ],
      },
      {
        org: 'University of Washington',
        title: 'Research Assistant, Washington Experimental Mathematics Lab',
        dates: 'September 2024 – June 2025',
        location: 'Seattle, Washington',
        points: [
          'Developed MATLAB finite-element solvers for advection-diffusion PDEs, including matrix assembly, boundary conditions, and time integration.',
          'Reused fixed matrices across simulation steps to avoid assembling them again.',
          'Compared implicit Euler, Crank–Nicolson, and BDF2 over five mesh refinements, and used L2 error to assess convergence.',
        ],
      },
      {
        org: 'Accenture',
        title: 'Software Engineer Intern',
        dates: 'July 2023 – September 2023',
        location: 'Hong Kong SAR',
        points: [
          'Developed Python APIs with Flask and FastAPI.',
          'Supported NLP pipelines on AWS EC2. The résumé describes the pipeline scale as 100M+ tokens. That is a documented project-scale figure, not a benchmark re-run for this site.',
          'Added automated tests with pytest.',
        ],
      },
    ],
  },
  projects: {
    id: 'projects',
    index: '04',
    title: 'Projects',
    intro:
      'Coursework, research code, and one course brief. Links go only to public repositories under github.com/jlu1211. ChatZO is described with PxNexus above and has no public repository linked here.',
    items: [
      {
        title: 'Finite-element code (WXML)',
        context: 'University of Washington · research',
        summary:
          'Public MATLAB from the Washington Experimental Mathematics Lab finite-element project: meshes, element matrices, boundary conditions, and L2 error. The research write-up (advection-diffusion, time integrators, five mesh refinements) is in Experience.',
        points: [],
        href: repos.fem,
        linkLabel: 'github.com/jlu1211/FEM',
      },
      {
        title: 'AMATH 583 — parallel numerical computing',
        context: 'University of Washington · Computational Methods for Data Analysis',
        summary:
          'Homework for AMATH 583, including C++ with MPI and a CUDA/cuFFT spectral-differentiation assignment. The coursework benchmarks used five 3D grid sizes, up to 256 × 256 × 256.',
        points: [],
        href: repos.amath583,
        linkLabel: 'github.com/jlu1211/AMATH-583',
      },
      {
        title: 'Scientific computing notebooks',
        context: 'Coursework',
        summary:
          'Public notebooks on numerical methods, including root-finding (Newton and bisection) and ODE boundary-value problems.',
        points: [],
        href: repos.scientificComputing,
        linkLabel: 'github.com/jlu1211/Scientific-Computing',
      },
      {
        title: 'Machine learning coursework',
        context: 'Coursework',
        summary:
          'Public notebooks on linear and logistic regression, decision trees, classification, neural networks, and model comparison. This is separate from the USC dog/cat CNN below.',
        points: [],
        href: repos.machineLearning,
        linkLabel: 'github.com/jlu1211/Machine-Learning',
      },
      {
        title: 'Dog/cat image classification',
        context: 'USC · EE 542 · group coursework',
        summary:
          'A group exercise in PyTorch. About 20,000 training images and 5,000 unseen evaluation images. We compared CPU and GPU runs and input-processing setups. Learning stalled with a ReLU output layer; after the change to linear outputs, evaluation accuracy across three seeds was 77.0%–78.4%. These are documented course results.',
        points: [],
      },
      {
        title: 'Multithreaded web crawler',
        context: 'USC · CSCI 572',
        summary:
          'Python crawler using Requests and BeautifulSoup, with seven threads, robots.txt checks, URL deduplication, and access-delay control. A recorded run produced 9,573 HTTP 200 responses from 10,000 retrieval attempts. That is a response count, not a count of unique pages or a general reliability rate.',
        points: [],
      },
      {
        title: 'Database design and model-output review',
        context: 'USC · CSCI 585',
        summary:
          'Compared Llama 3 and Gemma 2 through Ollama with a comparison application provided for the course. I did not build that application or train the models. I reviewed generated dental-clinic schemas for syntax errors and for missing attributes, keys, and cardinality, and I designed an ER diagram covering appointments, treatment, billing, and insurance.',
        points: [],
      },
      {
        title: 'Japanese residence-record extraction',
        context: 'Document processing · separate from ChatZO',
        summary:
          'An OCR pipeline for structured extraction from Japanese residence records: Python, OpenAI Vision, Azure OCR, and OpenCV preprocessing, with exploration of pytesseract and other OCR approaches. This is not the ChatZO year-end-adjustment prototype and not the same dataset.',
        points: [],
      },
      {
        title: 'Elderly Digital Clone',
        context: 'USC · EE 542 · Group 6 brief · October 2026',
        summary:
          'Public October 2026 brief for a proposed daily phone companion that talks with an older adult about family-approved memories and sends the family a short summary. The repository is the brief, not a launched product.',
        points: [],
        href: repos.elderlyDigitalClone,
        linkLabel: 'github.com/jlu1211/elderly-digital-clone',
      },
    ],
  },
  skills: {
    id: 'skills',
    index: '05',
    title: 'Skills',
    intro:
      'Technologies from the work and coursework above. This is not a ranking, and it is not a claim of the same depth in every item.',
    groups: [
      {
        title: 'Programming',
        items: 'Python, C++, C, SQL, MATLAB, Bash, TypeScript/JavaScript',
      },
      {
        title: 'Backend and APIs',
        items: 'FastAPI, Flask, REST, GraphQL',
      },
      {
        title: 'Web',
        items: 'React, Next.js',
        note: 'Listed in application materials. Recent implementation detail is thinner than for the backend and numerical work.',
      },
      {
        title: 'AI and document understanding',
        items:
          'PyTorch, OpenAI API and Vision, Google Document AI, Azure OCR, OpenCV, pytesseract, Ollama',
      },
      {
        title: 'Cloud and delivery',
        items: 'AWS EC2, AWS ECS, Docker, GitHub Actions',
      },
      {
        title: 'Systems and debugging',
        items: 'Linux, SSH, process monitoring, logs, batch testing, Git',
      },
      {
        title: 'Testing',
        items: 'pytest, acceptance testing, controlled comparisons',
      },
      {
        title: 'Numerical computing',
        items:
          'Finite elements, PDEs, numerical integration, error and convergence analysis, MPI, CUDA/cuFFT',
      },
      {
        title: 'Retrieval and data design',
        items: 'Requests, BeautifulSoup, URL deduplication, robots.txt, ER diagrams',
      },
      {
        title: 'Business automation',
        items: 'UiPath, document validation, HR integrations, human review',
      },
    ],
  },
  languagesSection: {
    id: 'languages',
    index: '06',
    title: 'Languages',
    intro: 'Credentials below are the ones recorded on my résumé.',
    items: [
      {
        name: 'Japanese',
        detail:
          'Native-level. JLPT N1, passed December 2018, as recorded on the résumé.',
      },
      {
        name: 'English',
        detail:
          'Used in university, work, applications, and everyday communication. Résumé scores: IELTS 7.5 (December 2020) and TOEFL 110 (2020). Those are historical results, not a claim that they are still valid for a given application.',
      },
      {
        name: 'Mandarin Chinese',
        detail:
          'Used in personal communication, and listed as Mandarin Chinese on English materials.',
      },
    ],
  },
  resume: {
    id: 'resume',
    index: '07',
    title: 'Résumé',
    intro: 'English and Japanese PDFs. The buttons download a file only after it has been added to the site.',
    pendingNote:
      'If a PDF is not in the repository yet, the button stays inactive and says so, instead of opening an error page.',
    files: [
      {
        href: resumes.en,
        label: 'Résumé (English, PDF)',
        missingLabel: 'English résumé — PDF not uploaded yet',
      },
      {
        href: resumes.ja,
        label: 'Résumé (Japanese, PDF)',
        missingLabel: 'Japanese résumé — PDF not uploaded yet',
      },
    ],
  },
  contact: {
    id: 'contact',
    index: '08',
    title: 'Contact',
    intro:
      'Email is the best way to reach me about a role. I read English and Japanese.',
    links: [
      { label: email, href: `mailto:${email}` },
      { label: 'linkedin.com/in/jiachenlu2002', href: profiles.linkedin, external: true },
      { label: 'github.com/jlu1211', href: profiles.github, external: true },
    ],
  },
  footer: {
    note: 'Jiachen (Chris) Lu · Los Angeles · Expected graduation May 2027',
  },
  schemaDescription:
    'M.S. Computer Science student at the University of Southern California (expected May 2027), seeking software and AI engineering roles.',
};

export default content;
