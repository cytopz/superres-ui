<template>
  <nav>
    <v-app-bar>
      <img
        :src="require('../assets/amiya.png')"
        alt="amiya"
        class="ml-1 mr-3"
      />
      <v-toolbar-title class="text-overline">
        <span class="font-weight-bold">superres-upscaling</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon class="mr-1" @click="toggleDark">
        <v-icon> mdi-brightness-{{ dark ? 7 : 4 }} </v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import Vuetify from "../plugins/vuetify";
export default {
  name: "Navbar",
  computed: {
    dark: function () {
      return Vuetify.framework.theme.dark;
    },
  },
  methods: {
    toggleDark: function () {
      Vuetify.framework.theme.dark = !Vuetify.framework.theme.dark;
    },
  },
};
</script>