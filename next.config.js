// /** @type {import('next').NextConfig} */
// const nextConfig = {}
//
// module.exports = nextConfig

module.exports = (phase, {defaultConfig}) => {
  if ('sassOptions' in defaultConfig) {
    defaultConfig['sassOptions'] = {
      includePaths: ['./src'],
      prependData: `@import "./src/app/styles/mixins.scss";`
    }
  }
  return defaultConfig;
}
