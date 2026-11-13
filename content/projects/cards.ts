import { googlecleanerCard } from "./googlecleaner";

export type Project = {
  id: string; title: string; category: string; description: string; stack: string[];
  caseStudyUrl?: string; repoUrl?: string;
  tone: "forest" | "amber" | "rust" | "slate" | "teal" | "plum"; // palette tokens in EditorialHome.module.css
};

const github = "https://github.com/benjaminpaulpro1";

export const projects: Project[] = [
  {
    id: "eval-toolkit", title: "AI Code Evaluation Toolkit", category: "LLM EVALUATION / BENCHMARKING",
    description: "A local framework for evaluating AI-generated solutions against specifications, with boundary and invalid-input test suites, rubrics for correctness, efficiency, readability, and instruction adherence, and comparison against reference solutions.",
    stack: ["Python", "Pytest", "Docker", "Git"], tone: "rust",
  },
  googlecleanerCard,
  {
    id: "task-repo", title: "Programming Task Repository", category: "TESTING / REFERENCE SOLUTIONS",
    description: "Algorithm, API, SQL, and debugging exercises with reference implementations, automated checks, and criteria for identifying partially correct solutions.",
    stack: ["Python", "TypeScript", "SQL"], tone: "amber",
  },
  {
    id: "rest-api", title: "Concurrent REST API Service", category: "BACKEND / CONCURRENCY",
    description: "Concurrent request handling, validation, and transactions, with integration tests, load-testing scripts, and documented performance observations.",
    stack: ["Go", "PostgreSQL", "Docker"], tone: "slate",
  },
  {
    id: "macwipe", title: "MacWipe", category: "MACOS APP / STORAGE REVIEW", repoUrl: `${github}/macwipe`,
    description: "Helps Mac users inspect local storage and review files before moving selected items to Trash, with a native macOS app and a browser demo on example data. Built with Juliana Oyola-Pabon.",
    stack: ["Python", "JavaScript", "HTML"], tone: "teal",
  },
  {
    id: "mac-cleaner", title: "mac-cleaner", category: "SHELL SCRIPT / MACOS", repoUrl: `${github}/mac-cleaner`,
    description: "A zsh script that reclaims disk space on macOS by clearing Trash, Homebrew, Xcode, and browser caches and thinning local snapshots. Built with Juliana Oyola-Pabon.",
    stack: ["Zsh", "macOS"], tone: "plum",
  },
];
