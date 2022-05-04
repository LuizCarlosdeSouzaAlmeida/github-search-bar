<script setup>
import LogoFooter from "@/assets/LogoFooter.svg";
import SocialMedia from "@/components/SocialMedia/SocialMedia.vue";
</script>
<template>
  <v-row class="details-footer mt-16 pa-0">
    <v-img src="src/assets/Stripe.png" class="w-100 mt-n3" />
    <div style="padding-left: 200px; padding-right: 200px; padding-top: 40px">
      <v-row class="py-12 mx-12" justify="space-between">
        <v-col cols="2" align-self="center">
          <LogoFooter />
        </v-col>
        <v-col class="pa-0" cols="4">
          <p>
            Acreditamos no valor da tecnologia e no impacto positivo que a
            transformação digital exerce sobre a sociedade, mudando o nosso dia
            a dia, facilitando atividades comuns e acelerando os negócios.
          </p>
        </v-col>
        <v-col class="pa-0" cols="2">
          <h4>BRASIL</h4>
          <p>
            R. Raphael Dias da Silva, 75 3º andar • Sala 306 e 308 Campolim •
            Sorocaba/SP
          </p>
        </v-col>
        <v-col class="pa-0" cols="2">
          <h4>CANADÁ</h4>
          <p>830, Av. Ernest-Gagnon, Bureau 315, Sala 609 Quebec</p>
        </v-col>
      </v-row>
      <v-divider color="#A51C92" thickness="4" class="mx-16"></v-divider>
      <v-row class="py-12 mx-12">
        <v-col align-self="center">
          <p>Todos os direitos reservados - 2020</p>
        </v-col>
        <v-col align-self="center">
          <SocialMedia />
        </v-col>
        <v-col class="text-end" align-self="center">
          <a href="">VOLTAR AO TOPO</a>
        </v-col>
      </v-row>
    </div>
  </v-row>
</template>
<style scoped>
.details-footer {
  position: static;
  left: 0;
  background-color: var(--primary);
  font-family: Raleway;
  color: var(--secondary-1);
}
h4 {
  color: var(--white);
  font-size: 12px;
}
a {
  font-size: 12px;
  color: var(--secondary-1);
  text-decoration: none;
}
p {
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 1px;
}
</style>
