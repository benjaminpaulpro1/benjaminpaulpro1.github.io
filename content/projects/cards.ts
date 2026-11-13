import { googlecleanerCard } from "./googlecleaner";

export type Project = {
  id: string; title: string; category: string; description: string; stack: string[];
  caseStudyUrl?: string; backdrop: string; fill: string;
};

export const projects: Project[] = [
  {
    id: "eval-toolkit", title: "AI Code Evaluation Toolkit", category: "LLM EVALUATION / BENCHMARKING",
    description: "A local framework for evaluating AI-generated solutions against specifications, with boundary and invalid-input test suites, rubrics for correctness, efficiency, readability, and instruction adherence, and comparison against reference solutions.",
    stack: ["Python", "Pytest", "Docker", "Git"], backdrop: "#FF9F96", fill: "#FFB5A7",
  },
  googlecleanerCard,
  {
    id: "task-repo", title: "Programming Task Repository", category: "TESTING / REFERENCE SOLUTIONS",
    description: "Algorithm, API, SQL, and debugging exercises with reference implementations, automated checks, and criteria for identifying partially correct solutions.",
    stack: ["Python", "TypeScript", "SQL"], backdrop: "#F9D58D", fill: "#FFBE94",
  },
  {
    id: "rest-api", title: "Concurrent REST API Service", category: "BACKEND / CONCURRENCY",
    description: "Concurrent request handling, validation, and transactions, with integration tests, load-testing scripts, and documented performance observations.",
    stack: ["Go", "PostgreSQL", "Docker"], backdrop: "#A9DFEA", fill: "#B7E5EB",
  },
];
