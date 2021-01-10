import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                accent: "#F5F5F5"
            },
            dark: {
                accent: "#212121"
            },
        },
        dark: true,
    },
});
