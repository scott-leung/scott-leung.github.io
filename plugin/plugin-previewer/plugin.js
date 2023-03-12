const path = require('path');
const webpack = require('webpack');

module.exports = function (context) {
  const { siteDir } = context;
  const pkgMeta = require(path.resolve(siteDir, 'package.json'));

  const requireOptions = { paths: [siteDir, __dirname] };

  const mdxReactPath = require.resolve('@mdx-js/react', requireOptions);

  // const styleUnitPath = require.resolve('style-unit', requireOptions);

  const styleRegExpStrs = ['/\\.css$/i', '/\\.module\\.css$/i', '/\\.s[ca]ss$/', '/\\.less$/'];

  const getLoader = (rule, loaderName) => rule.use.find((u) => u.loader.includes(loaderName));

  const insertPostcssPlugin = (rule, pluginName) => {
    const postcssLoader = getLoader(rule, 'postcss-loader');
    postcssLoader?.options.postcssOptions.plugins.push(require.resolve(pluginName));
  };

  const updateLoaderOptions = (rule, loaderName, newOptions) => {
    const loader = getLoader(rule, loaderName);
    if (loader) {
      loader.options = Object.assign({}, loader.options, newOptions);
    }
  };

  return {
    name: 'docusaurus-plugin',
    configureWebpack(config) {
      const cssRules = config.module.rules.filter((rule) => {
        const testRegExpStr = rule.test.toString();
        // eslint-disable-no-useless-escape
        return styleRegExpStrs.includes(testRegExpStr);
      });
      cssRules.forEach((rule) => {
        if (rule.use) {
          updateLoaderOptions(rule, 'mini-css-extract-plugin', { esModule: false });
        } else if (rule.oneOf) {
          rule.oneOf.forEach((o) => {
            if (o.use) {
              updateLoaderOptions(o, 'mini-css-extract-plugin', { esModule: false });
            }
          });
        }
      });

      return {
        resolve: {
          alias: Object.assign({
            react: path.resolve(siteDir, 'node_modules/react'),
            'react-dom': path.resolve(siteDir, 'node_modules/react-dom'),
            'react/jsx-runtime': path.resolve(siteDir, 'node_modules/react/jsx-runtime'),
            '@mdx-js/react': mdxReactPath,
            // 'style-unit': styleUnitPath,
          }),
        },
        plugins: [
          // new webpack.ProvidePlugin({
          //   createElement: [path.resolve(siteDir, '.docusaurus', 'hijackCreateElement.js'), 'default'],
          //   Fragment: ['react', 'Fragment'],
          // }),
        ],
      };
    },
  };
};
