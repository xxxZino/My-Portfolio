// src/types.ts
export type Project = {
  title: string;
  desc: string;
  tech: string[];
  img: string;
  demo: string;
  repo: string;

  imageCount?: number;
  videoCount?: number;
};
