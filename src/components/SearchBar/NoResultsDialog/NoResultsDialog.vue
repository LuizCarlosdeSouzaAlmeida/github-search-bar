<script setup>
import SocialMedia from "@/components/SocialMedia/SocialMedia.vue";
import  useMainStore  from "@/store/main";
import { storeToRefs } from "pinia";

const main = useMainStore();

const { noResultsDialog } = storeToRefs(main);
</script>

<template>
  <v-dialog width="786px" height="198px" v-model="noResultsDialog">
    <v-card width="786px" min-height="198px" class="noResultsDialog rounded-xl">
      <a class="noResultsDialog-close" @click="main.noResultsDialog = false">
        <v-icon size="16px">mdi-close</v-icon>
      </a>
      <v-card-title class="noResultsDialog-title pt-14 pb-0 pl-10">
        Nenhum usuário encontrado!
      </v-card-title>
      <div class="noResultsDialog-subTitle d-flex d-inline pt-11 pl-10">
        <v-card-text class="noResultsDialog-text pa-0">
          Enquanto isso, acompanhe a Bitwise nas redes sociais:
        </v-card-text>
        <SocialMedia class="pa-0 mt-n2" />
      </div>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.noResultsDialog {
  background: var(--gradient);
  font-family: Raleway;
}
.noResultsDialog-title {
  color: var(--white);
  font-size: 36px;
  line-height: 40px;
  font-weight: 700;
}
.noResultsDialog-subTitle {
  width: 560px;
}
.noResultsDialog-text {
  color: var(--white);
  white-space: nowrap;
  font-size: 14px;
  height: 16px;
}
.noResultsDialog-close {
  position: absolute;
  top: 12px;
  right: 18px;
  z-index: 10;
  color: var(--white);
  cursor: pointer;
}
:deep() .media-bar {
  margin: 0;
  justify-content: right;
}
:deep() .media-bar--icon {
  height: 24px;
  margin: 5px;
  color: var(--white);
}
</style>
