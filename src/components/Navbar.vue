<template>
  <nav>
    <v-app-bar color="white">
      <img
        :src="require('../assets/amiya.png')"
        alt="amiya"
        class="mr-3"
        width="40"
      />
      <v-toolbar-title class="text-overline">
        <span class="font-weight-bold">superres-upscaling</span>
      </v-toolbar-title>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>