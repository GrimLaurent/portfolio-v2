<template>
  <div>
    New homepage
    <v-container>
      <FooterSwipe />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

//modules
import FooterSwipe from "@/components/modules/swipe/FooterSwipe.vue";

export default Vue.extend({
  name: "HomePage Evol",
  components: {
    FooterSwipe,
  },
  data() {
    return {};
  },
});
</script>
