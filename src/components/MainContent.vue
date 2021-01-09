<template>
  <v-container>
    <v-form v-model="valid" @submit.prevent="onSubmit">
      <file-drop :loading="fileLoading" @change="onChange" />
      <v-select
        v-model="selectedModel"
        :items="models"
        label="Model"
        style="margin-top: 24px"
        outlined
        disabled
      >
      </v-select>
      <v-select
        :items="scales"
        v-model="form.upscale"
        :rules="rules.scaleRequired"
        label="Scale"
        outlined
      />
      <v-btn
        block
        color="primary"
        type="submit"
        :disabled="!valid || !form.img"
        :loading="loading"
      >
        Upscale!
        <v-icon> mdi-chevron-double-up </v-icon>
      </v-btn>
    </v-form>
    <dialog-viewer
      :show="showDialog"
      :before="form.img"
      :after="upscaled"
      @close="showDialog = false"
    ></dialog-viewer>
    <v-snackbar v-model="notif.show" timeout="-1" :color="notif.color">
      {{ notif.msg }}
      <template v-slot:action="{ attrs }">
        <v-btn color="dark" text v-bind="attrs" @click="notif.show = false">
          Tutup
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import FileDrop from "./FileDrop.vue";
import DialogViewer from "./DialogViewer";
import toBase64 from "../helpers/toBase64";
import { upscale } from "../services/upscaler";
export default {
  name: "Main",
  created() {
    this.selectedModel = "FSRCNN";
  },
  components: {
    FileDrop,
    DialogViewer,
  },
  data: () => ({
    valid: false,
    rules: {
      scaleRequired: [(v) => !!v || "Scale tidak boleh kosong!"],
    },
    form: {
      img: null,
      upscale: null,
    },
    upscaled: null,
    scales: ["x2", "x3", "x4"],
    models: ["FSRCNN"],
    loading: false,
    fileLoading: false,
    showDialog: false,
    notif: {
      show: false,
      msg: "",
      color: "info",
    },
  }),
  methods: {
    onSubmit: function () {
      const form = { ...this.form };
      form.upscale = form.upscale[1];
      this.loading = true;
      console.log(form);
      upscale({ ...form })
        .then((res) => {
          this.upscaled = res.data.upscaled;
        })
        .then(() => {
          this.showDialog = true;
        })
        .catch(() => {
          this.notif.show = true;
          this.notif.msg = "Terjadi kesalahan pada server!";
          this.notif.color = "error";
        })
        .finally(() => {
          this.loading = false;
        });
    },
    onChange: function (value) {
      const file = value;
      if (file) {
        this.fileLoading = true;
        toBase64(file)
          .then((res) => {
            this.form.img = res;
          })
          .finally(() => {
            this.fileLoading = false;
          });
      } else {
        this.form.img = null;
      }
    },
  },
};
</script>
