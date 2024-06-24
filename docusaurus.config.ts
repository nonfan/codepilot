import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import {
  repository,
  username,
  logoSrc,
  logoSrcDark,
  algolia,
  favicon,
  title,
} from "./setting";

let config: Config = {
  title: "CodePilot",
  tagline: "吾生也有涯，而知也无涯",
  favicon: favicon,
  trailingSlash: true,

  url: `https://${username}.github.io/`,
  baseUrl: `/${repository}`,

  organizationName: username,
  projectName: repository,
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN"],
  },
  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: `https://github.com/${username}/${repository}/tree/main`,
          routeBasePath: "/",
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    themes: ["@docusaurus/theme-search-algolia"],
    algolia,
    navbar: {
      title,
      logo: {
        alt: "CodePilot",
        src: logoSrc,
        srcDark: logoSrcDark,
      },
      items: [
        { to: "frontend", label: "前端", position: "left" },
        { to: "backend", label: "后端", position: "left" },
        { to: "full-stack", label: "全栈", position: "left" },
        {
          href: `https://github.com/${username}/${repository}`,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      copyright: `Copyright © ${new Date().getFullYear()} MoFan.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
