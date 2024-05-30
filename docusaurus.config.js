// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const Themes = require("prism-react-renderer").themes;
const lightCodeTheme = Themes.github;
const darkCodeTheme = Themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SignalWire Community",
  url: "https://signalwire-community.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/logo_black.png",
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "signalwire-community", // Usually your GitHub org/user name.
  projectName: "signalwire-community.github.io", // Usually your repo name.
  deploymentBranch: "main",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "SignalWire Community",
        logo: {
          alt: "SignalWire Community",
          src: "img/logo_black.png",
          srcDark: "img/logo_white.png",
        },
        items: [
          { to: "/docs", label: "Libraries", position: "left" },
          {
            href: "https://github.com/signalwire-community",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} SignalWire Community`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["php", "java"],
      },
    }),

  plugins: ["docusaurus-plugin-sass"],
};

module.exports = config;
