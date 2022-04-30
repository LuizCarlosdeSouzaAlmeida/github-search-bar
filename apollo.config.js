// apollo.config.js
module.exports = {
  client: {
    service: {
      name: "github-search-bar",
      // URL to the GraphQL API
      url: "https://api.github.com/graphql",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"],
  },
};
