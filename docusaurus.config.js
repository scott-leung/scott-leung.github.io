// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '响萤的小站',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://scottleung.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'scott-leung', // Usually your GitHub org/user name.
  projectName: 'scott-leung.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          editLocalizedFiles: false,
          blogTitle: 'Blog title',
          blogDescription: 'Blog',
          blogSidebarCount: 5,
          blogSidebarTitle: 'All our posts',
          routeBasePath: 'blog',
          include: ['**/*.{md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          postsPerPage: 10,
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          remarkPlugins: [require('remark-math'), [require('./plugin/plugin-previewer/remark/extractCode'), { mobilePreview: false, baseUrl: '/' }],],
          rehypePlugins: [require('rehype-katex')],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: '',
            description: '',
            copyright: '',
            language: undefined,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    require.resolve('./plugin/plugin-previewer/plugin.js'),
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'https://github.com/scott-leung.png',
      navbar: {
        title: '响萤的小站',
        logo: {
          alt: '响萤的Github头像',
          src: 'https://github.com/scott-leung.png',
        },
        items: [
          { to: '/blog', label: '随笔', position: 'left' },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '学习笔记',
          },
          {
            href: 'https://github.com/scott-leung/scott-leung.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '友情链接',
            items: [
              {
                label: '半斤八两',
                href: 'https://www.cnblogs.com/BjblCracked/default.html?page=1',
              },
            ],
          },
          {
            title: '社交媒体',
            items: [
              {
                label: 'Scott Leung - 知乎',
                href: 'https://www.zhihu.com/people/ScottLeung',
              },
              {
                label: 'Scott Leung - 掘金',
                href: 'https://juejin.cn/user/588993965595704',
              },
              {
                label: 'Scott Leung - Github',
                href: 'https://github.com/scott-leung',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} scottleung.com`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
