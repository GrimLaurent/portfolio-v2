<template>
  <v-container class="mc-sub-footer">
    <v-toolbar flat>
      Copyright ©2020 - 2021 Laurent Grimaldi. All rights reserved.
      <v-spacer />
      <Darkmode />
      <Translate />
    </v-toolbar>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

//theme
import Darkmode from "@/components/theme/Darkmode.vue";
import Translate from "@/components/theme/Translate.vue";

export default Vue.extend({
  name: "SubFooter",
  components: {
    Darkmode,
    Translate,
  },
  data() {
    return {};
  },
});
</script>
