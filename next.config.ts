import type { NextConfig } from "next";
import path from "node:path";

export default {
  sassOptions: {
    implementation: "sass-embedded",
  },
} satisfies NextConfig;
