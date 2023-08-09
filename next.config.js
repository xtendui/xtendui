const webpack = require('webpack')

const nextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // fix fs nextjs build
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          // fixes next-i18next dependencies
          path: false,
          fs: false,
        },
      }
    }
    config.module.exprContextCritical = false // Workaround to suppress next-i18next warning, see https://github.com/isaachinman/next-i18next/issues/1545
    // https://github.com/webpack/webpack/issues/13290#issuecomment-1188760779
    config.plugins.push(
      // Remove node: from import specifiers, because Next.js does not yet support node: scheme
      // https://github.com/vercel/next.js/issues/28774
      new webpack.NormalModuleReplacementPlugin(/^node:/, resource => {
        resource.request = resource.request.replace(/^node:/, '')
      }),
    )
    // https://dmitriy-comarov.medium.com/app-version-from-package-json-with-react-and-webpack-84097bd3f4f9
    config.plugins.push(
      new webpack.DefinePlugin({
        package_json_version: JSON.stringify(require('./package.json').version),
        package_json_keywords: JSON.stringify(require('./package.json').keywords),
      }),
    )
    return config
  },
}

module.exports = nextConfig
