<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon>
          <v-icon v-bind="attrs" v-on="on">
            {{ themeSelected }}
          </v-icon>
        </v-btn>
      </template>
      <v-list dense>
        <v-list-item
          v-for="(item, index) in themeList"
          :key="index"
          @click="changeTheme(item.var)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
/**
 * COMPONENT
 * @name Darkmode
 * @description Change to Darkmode / Lightmode to application
 * @author Laurent Grimaldi
 * @props no props, use $vuetify variables
 * @returns change global UI for dark or light mode
 * @link https://vuetifyjs.com/en/features/theme/#example
 */
import Vue from "vue";
export default Vue.extend({
  name: "modeTheme",
  data() {
    return {
      themeList: [
        {
          name: "dark_theme",
          var:
            "8cf19abac44887797fc8b62658d2efdcf06a2e339396e497d71395d6dfdd6f66",
          icon: "mdi-moon-waning-crescent",
        },
        {
          name: "light_theme",
          var:
            "a6341d5aae1cd59bda37fbdcf1492cd3c177123c7215c74dbd546040091438d1",
          icon: "mdi-white-balance-sunny",
        },
        {
          name: "system_theme",
          var: "f19abac44887797fc8b62658d2efdcf06a2e339396e497d71395d6dfdd6f66",
          icon: "mdi-theme-light-dark",
        },
      ],

      themeSelected: "",
    };
  },
  methods: {
    changeTheme(theme) {
      switch (theme) {
        case this.themeList[0].var:
          localStorage.setItem("app_theme", this.themeList[0].var);
          this.themeSelected = this.themeList[0].icon;
          this.$vuetify.theme.dark = true;

          console.log("dark");
          break;
        case this.themeList[1].var:
          localStorage.setItem("app_theme", this.themeList[1].var);
          this.themeSelected = this.themeList[1].icon;
          this.$vuetify.theme.dark = false;

          console.log("light");
          break;
        case this.themeList[2].var:
        default:
          localStorage.setItem("app_theme", this.themeList[2].var);
          this.themeSelected = this.themeList[2].icon;
          const colorTheme = matchMedia("(prefers-color-scheme: dark)");

          if (colorTheme.matches) {
            this.$vuetify.theme.dark = true;
          } else {
            this.$vuetify.theme.dark = false;
          }

          console.log("system");
          break;
      }
    },
  },
  mounted() {
    const theme = localStorage.getItem("app_theme");
    this.changeTheme(theme);
  },
});
</script>
