export type Locale = 'en' | 'ja';

export interface LabeledLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Fact {
  label: string;
  value: string;
}

export interface School {
  school: string;
  degree: string;
  dates: string;
  location: string;
  gpa: string;
  points: string[];
}

export interface Role {
  org: string;
  title: string;
  dates: string;
  location: string;
  note?: string;
  points: string[];
}

export interface Project {
  title: string;
  context: string;
  summary: string;
  points: string[];
  href?: string;
  linkLabel?: string;
}

export interface SkillGroup {
  title: string;
  items: string;
  note?: string;
}

export interface LanguageItem {
  name: string;
  detail: string;
}

export interface SiteContent {
  locale: Locale;
  meta: {
    title: string;
    description: string;
    htmlLang: Locale;
    ogLocale: string;
    ogLocaleAlternate: string;
    ogImageAlt: string;
  };
  ui: {
    skip: string;
    navLabel: string;
    langLabel: string;
    themeToDark: string;
    themeToLight: string;
    opensNewTab: string;
    currentPage: string;
    resumeMissing: string;
    resumeReady: string;
  };
  brand: {
    mark: string;
    name: string;
    nameLang: Locale;
    homeHref: string;
  };
  languages: { href: string; label: string; lang: Locale }[];
  nav: { href: string; label: string }[];
  hero: {
    kicker: string;
    name: string;
    nameLang: Locale;
    reading: string;
    altName: string;
    altNameLang: Locale;
    summary: string;
    preference: string;
    facts: Fact[];
    ctas: LabeledLink[];
  };
  about: {
    id: string;
    index: string;
    title: string;
    paragraphs: string[];
  };
  education: {
    id: string;
    index: string;
    title: string;
    intro: string;
    schools: School[];
  };
  experience: {
    id: string;
    index: string;
    title: string;
    intro: string;
    roles: Role[];
  };
  projects: {
    id: string;
    index: string;
    title: string;
    intro: string;
    items: Project[];
  };
  skills: {
    id: string;
    index: string;
    title: string;
    intro: string;
    groups: SkillGroup[];
  };
  languagesSection: {
    id: string;
    index: string;
    title: string;
    intro: string;
    items: LanguageItem[];
  };
  resume: {
    id: string;
    index: string;
    title: string;
    intro: string;
    pendingNote: string;
    files: {
      href: string;
      label: string;
      missingLabel: string;
    }[];
  };
  contact: {
    id: string;
    index: string;
    title: string;
    intro: string;
    links: LabeledLink[];
  };
  footer: {
    note: string;
  };
  schemaDescription: string;
}
