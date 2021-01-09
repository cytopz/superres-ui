<template>
  <v-app>
    <navbar />
    <v-main>
      <main-content style="margin-top: 32px" />
    </v-main>
    <v-divider></v-divider>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import MainContent from "./components/MainContent.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",

  components: {
    Navbar,
    MainContent,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
