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

  headTags: [
    {
      tagName: 'script',
      attributes: {
        defer: 'defer',
      },
      innerHTML: `function initXdnRum() {
        new Layer0.Metrics({
          token: 'fd1c0443-35da-4b9f-b917-68f9718855aa',
          router: new Layer0.Router()
            .match('/', ({ setPageLabel }) => setPageLabel('home'))
            .match('/docs/:id', ({ setPageLabel }) => setPageLabel('docs'))
            .match('/blog/:id', ({ setPageLabel }) => setPageLabel('blog'))
        }).collect()
      }`,
    },
    {
      tagName: 'script',
      attributes: {
        defer: 'defer',
        src: 'https://rum.layer0.co/latest.js',
        onload: 'initXdnRum()',
      },
    }
  ],

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
          blogTitle: '随笔',
          blogDescription: '响萤的随笔',
          blogSidebarCount: 5,
          blogSidebarTitle: '所有的文章',
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
                // @ts-ignore
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [require('remark-math'), [require('./plugin/plugin-previewer/remark/extractCode'), { mobilePreview: false, baseUrl: '/' }],],
          rehypePlugins: [require('rehype-katex')],
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    require.resolve('./plugin/plugin-previewer/plugin.js'),
    'docusaurus-plugin-sass',
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
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),

  themes: [
    '@docusaurus/theme-live-codeblock',
    // ... Your other themes.
    [
      // @ts-ignore
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
      }),
    ],
  ],

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
};

module.exports = config;
