<template>
  <v-app id="app" data-view>
    <!--<Loading />-->
    <!--<Snackbar />-->

    <!-- navigation-bar -->
    <!--<AppBar />-->
    <!-- !navigation-bar -->

    <!--<v-app-bar flat dense color="header">-->
    <!-- -->
    <!--<v-container class="content--app pr-0 pl-0 pr-mb-2 pl-mb-2">
        <v-toolbar flat dense color="header">
          <span class="text-h4 font-weight-black">Portfolio</span>
          <v-spacer />
          <Darkmode />
        </v-toolbar>
      </v-container>
    </v-app-bar>-->

    <v-main>
      <router-view></router-view>
    </v-main>

    <!--<v-footer color="footerApp" dark>
      <v-container class="content--app">
        <v-row class="align-center">
          <v-col cols="12" sm="10">
            ©2021 - Laurent Grimaldi - Toutes les marques citées appartiennent à
            leurs propriétaires respectifs. Version
            {{ this.versionApp }}
          </v-col>
        </v-row>
      </v-container>
    </v-footer>-->
    <Billy />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

//core
import { ControlReleaseCore } from "@/core/index";
import { getVersionApp } from "@/utils/index";

//templates
import AppBar from "@/components/templates/AppBar.vue";
import Dialog from "@/components/templates/Dialog.vue";

//components
import Darkmode from "@/components/theme/Darkmode.vue";
import Snackbar from "@/components/theme/Snackbar.vue";
import Loading from "@/components/Loading.vue";
import Billy from "@/components/HelpBot.vue";

import http from "@/utils/myapi";
import { callApi } from "@/utils/api/axios";

export default Vue.extend({
  name: "App",

  components: {
    AppBar,
    Darkmode,
    Snackbar,
    Loading,
    Billy,
  },
  data() {
    return {
      versionApp: localStorage.getItem("app_version"),
    };
  },
  async created() {
    const version = await getVersionApp();

    await ControlReleaseCore(version);
    const localVersionApp = localStorage.getItem("app_version");
    this.versionApp = localVersionApp;
  },
  mounted() {
    this.connectMongo();
    this.getProfil();
    this.getApplicationDefault();
  },

  methods: {
    ...mapActions("profil", ["getProfil"]),
    ...mapActions("application", ["getApplicationDefault"]),

    connectMongo() {
      const gnome = http.get("/api/stuff");
      const payload = {
        title: "Hey",
        description: "Bonjour",
        imageUrl: "google.img",
        userId: "crashtest",
        price: 750,
      };
      http.post("api/stuff", payload);

      //  callApi({
      //    url: "api/stuff",
      //    method: "POST",
      //    paramsJson: true,
      //    params: payload,
      //  });

      //console.log("demo:", gnome);

      //  const MongoClient = require("mongodb").MongoClient,
      //    format = require("util").format;
      //  console.log("MongoClient", 0);
      //  MongoClient.connect("mongodb://51.75.202.45:27017/demo", function(
      //    err,
      //    db
      //  ) {
      //    if (err) {
      //      throw err;
      //    } else {
      //      console.log("successfully connected to the database");
      //    }
      //    db.close();
      //  });
    },
  },
});
</script>
