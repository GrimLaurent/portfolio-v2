<template>
  <v-container class="mc-footer">
    <v-row>
      <v-col cols="12" md="3">
        <v-row>
          <v-col cols="5" sm="2" md="12" class="pb-0">
            <h1>
              <router-link :to="{ name: headers.route }" color="text">
                {{ headers.name }}
              </router-link>
            </h1>
          </v-col>
          <v-col
            cols="7"
            sm="10"
            md="12"
            class="headers-link text-right text-md-left"
          >
            <ul class="mt-2 mt-sm-4 mt-md-0">
              <li
                v-for="subItem in headers.subMenu"
                :key="subItem.name"
                class="d-inline-block d-md-block"
              >
                <v-btn
                  text
                  class="text-capitalize font-weight-light pl-2 pr-2 pl-sm-4 pr-sm-4 social-link"
                  style="min-width: 0px"
                  v-if="subItem.icon"
                >
                  <v-icon>{{ subItem.icon }}</v-icon>
                  <span class="d-none d-sm-inline">{{ subItem.name }}</span>
                </v-btn>
                <v-btn
                  text
                  class="text-capitalize font-weight-light d-none d-sm-inline"
                  v-else
                >
                  <span>{{ subItem.name }}</span>
                </v-btn>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="9" class="mt-md-4">
        <v-row>
          <v-col
            cols="6"
            sm="3"
            class="pa-0 mt-3"
            v-for="(item, index) in items"
            :key="index"
          >
            <ul>
              <li class="font-weight-black mb-2">{{ item.name }}</li>
              <li
                v-for="subItem in items[index].subMenu"
                :key="subItem.name"
                class="font-weight-light mb-2"
              >
                <a href="" v-if="subItem.route.includes('https://')">
                  {{ subItem.name }}
                </a>
                <router-link :to="{ name: subItem.route }" v-else>
                  {{ subItem.name }}
                </router-link>
              </li>
            </ul>
          </v-col>
        </v-row>
        <v-row class="d-none">
          <v-col
            cols="6"
            sm="3"
            class="pa-0"
            v-for="(item, index) in items"
            :key="index"
          >
            <v-list>
              <v-list-group :value="true">
                <template v-slot:activator>
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </template>

                <v-list-item
                  v-for="subItem in items[index].subMenu"
                  :key="subItem.name"
                  nav
                  dense
                >
                  <v-list-item-icon v-if="subItem.icon">
                    <v-icon v-text="subItem.icon"></v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title
                      v-text="subItem.name"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Footer",
  data() {
    return {
      headers: {
        name: "Portfolio",
        route: "Home",
        subMenu: [
          {
            name: "Twitter",
            icon: "mdi-twitter",
            route: "https://google.fr",
            target: "_blank",
          },
          {
            name: "Instagram",
            icon: "mdi-instagram",
            route: "https://google.fr",
            target: "_blank",
          },
          {
            name: "Github",
            icon: "mine-github",
            route: "https://google.fr",
            target: "_blank",
          },
        ],
      },
      items: [
        {
          id: 1,
          name: "Explorer",
          route: "https://google.fr/",
          target: null,
          subMenu: [
            {
              name: "Mes Compétences",
              route: "https://google.fr",
            },
            {
              name: "Mes Projets",
              route: "https://google.fr",
            },
          ],
        },
        {
          id: 2,
          name: "Ressources",
          route: "https://google.fr/",
          target: null,
          subMenu: [
            {
              name: "Blog Medium",
              route: "https://google.fr",
            },
            {
              name: "Github",
              route: "https://google.fr",
            },
            {
              name: "Documentation",
              route: "https://google.fr",
            },
            {
              name: "Support",
              route: "https://google.fr",
            },
          ],
        },
        {
          id: 3,
          name: "Activitées",
          route: "https://google.fr/",
          target: null,
          subMenu: [
            {
              name: "La Guilde des Kibrilles",
              route: "https://google.fr",
            },
            {
              name: "Minecraft",
              route: "https://google.fr",
            },
            {
              name: "Team The Best (TTB)",
              route: "https://google.fr",
            },
          ],
        },
        {
          id: 4,
          name: "Chartes",
          route: "https://google.fr/",
          target: null,
          subMenu: [
            {
              name: "Mentions Légales",
              route: "https://google.fr",
            },
          ],
        },
      ],
      admins: [
        ["Management", "mdi-account-multiple-outline"],
        ["Settings", "mdi-cog-outline"],
      ],
      cruds: [
        ["Create", "mdi-plus-outline"],
        ["Read", "mdi-file-outline"],
        ["Update", "mdi-update"],
        ["Delete", "mdi-delete"],
      ],
    };
  },
});
</script>
