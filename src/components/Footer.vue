<template>
  <v-footer padless>
    <v-col class="text-center" cols="12" style="padding: 4px">
      <span class="text-overline">
        <a
          class="text-decoration-none"
          href="https://github.com/cytopz/superres-ui"
          target="_noblank"
        >
          superres-upscaling</a
        >
        &mdash; {{ appVer }}
      </span>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  computed: {
    appVer: function () {
      return process.env.VUE_APP_VERSION;
    },
  },
};
</script>