<template>
  <v-snackbar v-model="show" :timeout="0">
    {{ msg }}
    <v-btn text @click="show = false">
      <v-icon> mdi-close </v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    show: Boolean,
    msg: String,
  },
};
</script>