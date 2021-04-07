<template>
  <div>
    <h1>TestApi</h1>

    <p v-for="n in 40">{{ test }} {{ zaert }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import http from "@/utils/myapi";

export default Vue.extend({
  data() {
    return {
      test: "Bonjour Xavier, ceci est un text",

      zaert: "shqkjhjhkjsqhdjkhsqjdkhsqjkhdjksqhdjkshqdkhq",
    };
  },
  mounted() {
    http.get("api/hero");
  },
});
</script>
