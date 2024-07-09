// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "RuyiSDK",
  tagline: "RuyiSDK是面向RISC-V架构的一体化集成开发环境",
  favicon: "https://ruyisdk.org/favicons/favicon.ico",

  // Set the production url of your site here
  url: "https://arhchfeh.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/ruyisdk-org/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ArchFeh", // Usually your GitHub org/user name.
  projectName: "ruyisdk-org", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans", "en", "ru", "de", "ja", "ko"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          blogTitle: "RuyiSDK 博客",
          blogSidebarTitle: "所有博文",
          blogSidebarCount: "ALL",
          showReadingTime: true,
          blogDescription: "Blog",
        },
        theme: {
          customCss: "./src/css/custom.scss",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: "ruyi",
      //   content: "RV",
      //   backgroundColor: "#20232a",
      //   textColor: "#fff",
      //   isCloseable: true,
      // },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "RuyiSDK",
        hideOnScroll: true,
        logo: {
          alt: "RuyiSDK Logo",
          src: "img/ruyi-logo-720.svg",
        },
        style: "dark",
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "文档",
          },
          { to: "/blog", label: "博客", position: "left" },
          { to: "/biweekly", label: "双周报", position: "left" },
          { to: "/download", label: "下载", position: "left" },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/ruyisdk",
            label: "GitHub",
            position: "right",
          },
          {
            type: "dropdown",
            label: "社区",
            position: "left",
            items: [
              {
                label: "Discussion",
                href: "https://github.com/ruyisdk/ruyisdk-website/discussions",
              },
              {
                label: "社区活动",
                to: "/meetup",
              },
              {
                label: "社区守则",
                to: "/code_of_conduct",
              },
            ],
          },
          {
            label: "联系我们",
            to: "/contact",
            position: "left",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "文档",
            items: [
              {
                label: "RuyiSDK",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discussion",
                href: "https://github.com/ruyisdk/ruyisdk-website/discussions",
              },
              {
                label: "X",
                href: "https://twitter.com/RuyiSDK",
              },
              {
                label: "Telegram",
                href: "https://t.me/ruyisdk",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/ruyisdk",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RuyiSDK`,
      },
      prism: {
        additionalLanguages: ["bash"],

        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-content-blog",
      {
        blogTitle: "RuyiSDK 双周报",
        blogSidebarTitle: "RuyiSDK 双周报",
        /**
         * Required for any multi-instance plugin
         */
        id: "biweekly",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "biweekly",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./biweekly",

        blogSidebarCount: "ALL",
      },
    ],
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-999X9XX9XX",
        anonymizeIP: true,
      },
    ],
  ],
};

export default config;
