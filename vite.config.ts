import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** GitHub Pages project site: username.github.io/DCApp-Support-info/ */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  base: isGitHubPages ? "/DCApp-Support-info/" : "/",
  plugins: [react()],
});
