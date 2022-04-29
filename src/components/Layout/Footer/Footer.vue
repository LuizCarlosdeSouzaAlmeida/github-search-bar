<script setup>
import LogoFooter from "@/assets/LogoFooter.svg";
import Stripe from "@/assets/Stripe.svg";
import SocialMedia from "@/components/SocialMedia/SocialMedia.vue";
</script>
<template>
  <v-row class="details-footer mt-16 pa-0">
    <Stripe class="w-100 mt-n3" />
    <v-row class="pa-12 mx-12">
      <v-col cols="2">
        <LogoFooter />
      </v-col>
      <v-col cols="5">
        <p>
          Acreditamos no valor da tecnologia e no impacto positivo que a
          transformação digital exerce sobre a sociedade, mudando o nosso dia a
          dia, facilitando atividades comuns e acelerando os negócios.
        </p>
      </v-col>
      <v-col cols="3">
        <h4>BRASIL</h4>
        <p>
          R. Raphael Dias da Silva, 75 3º andar • Sala 306 e 308 Campolim •
          Sorocaba/SP
        </p>
      </v-col>
      <v-col cols="2">
        <h4>CANADÁ</h4>
        <p>830, Av. Ernest-Gagnon, Bureau 315, Sala 609 Quebec</p>
      </v-col>
    </v-row>
    <v-divider color="#A51C92" thickness="3" class="mx-16"></v-divider>
    <v-row class="pa-12 mx-12">
      <v-col>
        <p>Todos os direitos reservados - 2020</p>
      </v-col>
      <v-col>
        <SocialMedia />
      </v-col>
      <v-col class="text-end">
        <a href="">VOLTAR AO TOPO</a>
      </v-col>
    </v-row>
  </v-row>
</template>
<style scoped>
.details-footer {
  position: absolute;
  left: 0;
  background-color: var(--primary);
  font-family: Raleway;
  color: var(--secondary-1);
}
h4 {
  color: var(--white);
}
a {
  color: var(--secondary-1);
  text-decoration: none;
}

:deep() .media-bar {
  justify-content: center;
}
</style>
