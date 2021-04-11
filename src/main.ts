import "@/assets/scss/style.scss";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import vuetify from "./plugins/vuetify";
import VueFlicking from "@egjs/vue-flicking";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);
Vue.use(VueFlicking);

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;

// Load all locales and remember context
function loadMessages() {
  const context = require.context("./locales", true, /[a-z0-9-_]+\.json$/i);

  const messages = context
    .keys()
    .map(key => ({ key, locale: key.match(/[a-z0-9-_]+/i)![0]! }))
    .reduce(
      (messages, { key, locale }) => ({
        ...messages,
        [locale]: context(key),
      }),
      {}
    );

  return { context, messages };
}

const { context, messages } = loadMessages();

// VueI18n instance
const i18n = new VueI18n({
  locale: "fr",
  messages,
});

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount("#app");

// Hot updates
if (module.hot) {
  module.hot.accept(context.id, () => {
    const { messages: newMessages } = loadMessages();

    Object.keys(newMessages)
      .filter(locale => messages[locale] !== newMessages[locale])
      .forEach(locale => {
        messages[locale] = newMessages[locale];
        i18n.setLocaleMessage(locale, messages[locale]);
      });
  });
}
