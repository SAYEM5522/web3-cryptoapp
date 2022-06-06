/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  images: {
    domains: ["assets.coingecko.com","www.fivesquid.com","miro.medium.com","www.arweave.net",
    "centaur-wp.s3.eu-central-1.amazonaws.com","lh3.googleusercontent.com","img.rarible.com"]
        },
}

const { withExpo } = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  'solito',
  'dripsy',
  '@dripsy/core',
  'moti',
  '@motify/core',
  '@motify/components',
  'app',
])

module.exports = withPlugins(
  [withTM, [withExpo, { projectRoot: __dirname }]],
  nextConfig
)
