import { defineStore } from "pinia";
import apolloClient from "../middleware/apollo";
import gql from "graphql-tag";

export const useMainStore = defineStore("main", {
  state: () => ({
    user: {
      repositories: {
        edges: [
          {
            node: {
              name: "test",
              object: {
                history: {
                  totalCount: 1,
                  edges: [
                    {
                      node: {
                        oid: "cd4460d1e150986f79a67a1bda199daedc5cdbcb",
                        message: "Final",
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
  }),
  actions: {
    getUser(userName) {
      apolloClient
        .query({
          query: gql`
            query {
              user(login: "${userName}") {
                name
                avatarUrl
                repositories(last: 10) {
                  totalCount
                  edges {
                    node {
                      name
                      object(expression: "master") {
                        ... on Commit {
                          history(first: 1) {
                            totalCount
                            edges {
                              node {
                                oid
                                message
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
        })
        .then((result) => {
          console.log(result);
          this.user = result.data.user;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
