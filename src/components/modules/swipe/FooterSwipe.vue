<template>
  <div>
    Components FooterSwipe<br />

    <br />
    <p>{{ $t("message") }}</p>

    <Footer />
    <SubFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

//modules
import Footer from "@/components/modules/footer/Footer.vue";
import SubFooter from "@/components/modules/footer/SubFooter.vue";

export default Vue.extend({
  name: "FooterSwiper",
  components: {
    Footer,
    SubFooter,
  },
});
</script>
