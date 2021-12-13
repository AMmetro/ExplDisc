module.exports = {
  apps: [
    {
      name: 'Next',
      script: 'next dev',
      watch: ['next.config.js'],
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'GraphQL Code Generator',
      script: 'npm run generate:graphql:watch',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
}
