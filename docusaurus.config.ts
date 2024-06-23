import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const username: string = "nonfan";
const repo: string = "nonfan.github.io";

let config: Config = {
  title: "CodePilot",
  tagline: "书山有路勤为径，学海无涯苦作舟",
  favicon: "img/favicon.ico",
  trailingSlash: true,

  url: `https://nonfan.github.io/`,
  baseUrl: "/codepilot",

  organizationName: username,
  projectName: repo,
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  plugins: ["docusaurus-plugin-sass"],
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["en", "zh-CN"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en",
      },
      "zh-CN": {
        label: "中文",
        direction: "ltr",
        htmlLang: "zh-CN",
      },
    },
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: `https://github.com/${username}/${repo}/tree/main`,
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
    algolia: {
      appId: "X1Z85QJPUV",
      apiKey: "bf7211c161e8205da2f933a02534105a",
      indexName: "docusaurus-2",
    },
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "CodePilot",
      logo: {
        alt: "CodePilot",
        src: "../img/logo.svg",
      },
      items: [
        {
          type: "doc",
          position: "left",
          docId: "index",
          label: "文档",
        },
        { to: "docs/frontend", label: "前端", position: "left" },
        { to: "docs/backend", label: "后端", position: "left" },
        { to: "docs/full-stack", label: "全栈", position: "left" },
        {
          type: "search",
          position: "left",
          className: "custom-search",
        },
        {
          href: `https://github.com/${username}/${repo}`,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      copyright: `Copyright © ${new Date().getFullYear()} AGoodBook.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
