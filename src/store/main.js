import { defineStore } from "pinia";
import apolloClient from "../middleware/apollo";
import gql from "graphql-tag";

export const useMainStore = defineStore("main", {
  state: () => ({
    user: {
      repositories: {},
    },
    noResultsDialog: false,
  }),
  actions: {
    getUser(userName, context) {
      apolloClient
        .query({
          query: gql`
            query {
              user(login: "${userName}") {
                name
                avatarUrl
                repositories(last: 100) {
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
          if (context.$route.path === "/") {
            context.$router.push("/details");
          }
        })
        .catch((error) => {
          console.log(error);
          this.noResultsDialog = true;
        });
    },
  },
});
