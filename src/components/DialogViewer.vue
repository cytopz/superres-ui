<template>
  <v-dialog
    v-model="show"
    max-width="840px"
    transition="dialog-bottom-transition"
    fullscreen
    persistent
  >
    <v-card>
      <v-card-title> Hasil Upscale Gambar </v-card-title>
      <img-comparison-slider>
        <img width="1400vw" slot="after" :src="after" alt="Sesudah upscaling" />
        <img
          width="1400vw"
          slot="before"
          :src="before"
          alt="Sebelum upscaling"
        />
      </img-comparison-slider>
      <v-card-actions class="justify-end">
        <v-btn
          dense
          text
          color="primary"
          :href="after"
          :download="'upscaled.' + parsedHeaderAfter.type"
          >Unduh</v-btn
        >
        <v-btn dense text @click="onClose">Selesai</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: Boolean,
    before: String,
    after: String,
  },
  computed: {
    parsedHeaderAfter: function () {
      if (this.after) {
        const header = this.after.split(",")[0];
        const [mime, enc] = header.split(";");
        return {
          type: mime.slice(11),
          enc: enc,
        };
      }
      return null;
    },
  },
  methods: {
    onClose: function () {
      this.$emit("close", false);
    },
  },
};
</script>