<template>
  <div class="locale-changer">
    <v-menu offset-y v-model="menu">
      <template v-slot:activator="{ on, attrs }">
        <Button @click.native="openMenu()" v-on="on" v-bind="attrs" small>
          <template v-slot:content>
            <v-icon left>mdi-translate</v-icon> {{ $t("translation.button") }}
          </template>
        </Button>
      </template>

      <v-list dense nav>
        <v-subheader class="text-uppercase font-weight-bold">{{
          $t("translation.title")
        }}</v-subheader>
        <v-list-item
          v-for="(item, index) in langs"
          :key="index"
          @click="changeTranslate(item)"
        >
          <v-list-item-avatar size="18">
            <v-img :src="'/img/lang/' + item + '.svg'"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{
              $t("translation." + item)
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{ name: 'HelpTranslate' }">
          <v-list-item-title>{{
            $t("translation.help-translate")
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

//templates
import Button from "@/components/templates/Button.vue";

export default Vue.extend({
  name: "locale-changer",
  components: {
    Button,
  },
  data() {
    return {
      langs: ["fr", "en"],
      menu: false,
    };
  },
  mounted() {
    let lang = localStorage.getItem("app_lang");

    if (lang != null) {
      this.changeTranslate(lang);
    }
  },
  methods: {
    changeTranslate(locale: string) {
      this.$i18n.locale = locale;
      localStorage.setItem("app_lang", locale);
    },

    openMenu() {
      this.menu = true;
    },
  },
});
</script>
