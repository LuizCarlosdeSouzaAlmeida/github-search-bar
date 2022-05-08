import { defineStore } from "pinia";
import apolloClient from "../middleware/apollo";
import gql from "graphql-tag";
import { useRouter } from "vue-router";

export default function useMainStore() {
  const router = useRouter();
  return defineStore("main", {
  state: () => ({
    user: {
      name: null,
      repositories: {},
    },
    noResultsDialog: false,
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
          this.user = result.data.user;
          router.push("/details");
        })
        .catch((error) => {
          this.noResultsDialog = true;
        });
    },
  },
})();
};