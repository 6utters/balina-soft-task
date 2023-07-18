const nextConfig = {
  poweredByHeader: false,
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "./src/app/styles/mixins.scss";`
  },
  images: {
    domains: ['localhost']
  },
}

module.exports = nextConfig

