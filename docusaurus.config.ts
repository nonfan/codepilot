import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const username: string = "agoodbook";
const repo: string = "agoodbook.github.io";

const config: Config = {
  title: 'AGoodBook', // 站点名称
  tagline: '书山有路勤为径，学海无涯苦作舟',  // slogan，标语
    favicon: 'img/favicon.ico',

  // 配置网站站点url
  url: 'https://agoodbook.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub部署配置
  organizationName: 'agoodbook', // 用户名
  projectName: 'agoodbook.github.io', // 仓库名
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en',
      },
      'zh-CN': {
        label: '中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
      }
    }
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${username}/${repo}/tree/main/packages/create-docusaurus/templates/shared/`,
        },
        theme: {
          customCss: './src/css/custom.css',
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
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'AGoodBook', // 导航上站点名称
      logo: {
        alt: 'AGoodBook', //  站点 logo 文字替换
        src: 'img/logo.svg',  //   站点 logo  链接
      },
      items: [
        {
          type: 'doc',
          docId: 'started',
          position: 'left',
          label: '文档'
        },
        // 导航栏右侧项
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              type: 'html',
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: `https://github.com/${username}/${repo}/issues/3526`,
              label: '帮助我们翻译',
            },
          ],
        },
        {
          href: `https://github.com/${username}/${repo}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AGoodBook.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    themes: ['@docusaurus/theme-search-algolia'],
    algolia: {
      appId: 'X1Z85QJPUV',
      apiKey: 'bf7211c161e8205da2f933a02534105a',
      indexName: 'docusaurus-2',
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
