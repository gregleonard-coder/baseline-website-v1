export const pages = ["home", "residential", "commercial", "clarity", "contact"] as const;
export type PageKey = (typeof pages)[number];
export type StreamType = "Residential" | "Commercial";