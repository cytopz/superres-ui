<template>
  <v-sheet
    id="dropzone"
    tabindex="0"
    class="rounded-lg"
    color="grey lighten-4"
    width="100%"
    height="200"
    rounded
  >
    <input
      id="file-upload"
      type="file"
      name="img"
      accept="image/*"
      style="display: none"
      @change="onChange"
    />
    <v-row justify="center">
      <v-icon size="128" style="margin-top: 12px">
        mdi-cloud-upload-outline
      </v-icon>
    </v-row>
    <v-row justify="center" style="margin-top: auto">
      <v-btn v-if="!hasSelectedFile" plain @click="onClick">
        Pilih Gambar Untuk di Upscale
      </v-btn>
      <v-progress-circular v-else-if="loading" indeterminate>
      </v-progress-circular>
      <span v-else class="subtitle-2 grey--text text--darken-2">
        {{ file.name }} &mdash; {{ file.size }} KB
        <v-btn icon @click="removeFile">
          <v-icon size="22">mdi-close</v-icon>
        </v-btn>
      </span>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  props: {
    loading: Boolean,
  },
  data: () => ({
    hasSelectedFile: false,
    file: {
      name: "",
      size: 0,
    },
  }),
  methods: {
    onClick: function () {
      const input = document.querySelector("#file-upload");
      if (input) {
        input.click();
      }
    },
    onChange: function (e) {
      const file = e.target.files[0];
      this.file.name = file.name;
      this.file.size = (file.size / 1024).toFixed(2);
      this.hasSelectedFile = true;
      this.$emit("change", file);
    },
    removeFile: function () {
      const input = document.querySelector("#file-upload");
      input.value = null;
      this.hasSelectedFile = false;
      this.$emit("change", null);
    },
  },
};
</script>