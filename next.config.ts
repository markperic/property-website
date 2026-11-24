import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The on-screen dev-tools badge only ever renders in `next dev`, never in a
  // production build, but it floats over full-bleed sections and gets mistaken
  // for site chrome during design review.
  devIndicators: false,
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
