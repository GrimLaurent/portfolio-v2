<template>
  <swiper
    :page-transition="pageTransition"
    :loop="loop"
    :autoplay="autoplay"
    :interval="interval"
    :show-indicator="showIndicator"
    @beforeChange="beforeChange"
    @afterChange="afterChange"
  >
    <swiper-item v-for="(item, index) in items" :key="index">
      <div
        class="page"
        :style="{
          background: item.color,
        }"
      >
        <component :is="item.component"> </component>
      </div>
    </swiper-item>
  </swiper>
</template>

<script lang="ts">
import Vue from "vue";

import { Swiper, SwiperItem } from "vue-h5-swiper";

//modules
import FooterSwipe from "@/components/modules/swipe/FooterSwipe.vue";

export default Vue.extend({
  components: {
    Swiper,
    SwiperItem,
    FooterSwipe,
  },
  data() {
    return {
      items: [
        {
          color: "#76D7C4",
          component: "HomeSwipe",
        },
        //{
        //  color: "#F1948A",
        //  component: "HomeSwipe",
        //},
        //{
        //  color: "#BB8FCE",
        //  component: "HomeSwipe",
        //},
        //{
        //  color: "#7FB3D5",
        //  component: "HomeSwipe",
        //},
        {
          color: "#F1948A",
          component: "FooterSwipe",
        },
      ],
      colors: ["#76D7C4", "#F1948A", "#BB8FCE", "#7FB3D5"],
      loop: true,
      autoplay: false,
      interval: 1000,
      showIndicator: true,
      pageTransition: "move",
      pageTransitions: "move",
    };
  },
  methods: {
    beforeChange(activeIndex, oldIndex) {
      console.log(`before-change: ${activeIndex}, ${oldIndex}`);
    },

    afterChange(activeIndex, oldIndex) {
      console.log(`after-change: ${activeIndex}, ${oldIndex}`);
    },
  },
});
</script>

<style lang="scss">
.page {
  //position: absolute;
  //height: 100%;
  width: 100%;
  //display: flex;

  > div {
    width: 100%;
  }
}
</style>
