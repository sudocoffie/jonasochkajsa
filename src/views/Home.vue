<template>
  <div>
    <section class="hero hero-image">
      <div class="hero-body"></div>
    </section>

    <BigDaySection />
    <!-- <section style="height: 300px">
      <parallax style="max-height: 600px" :speed-factor="0.3">
        <img style="max-height: 600px" src="../assets/solnedgang.jpg" />
      </parallax> 
    </section>
-->
    <FoodSection />
    <ToastMasterSection />
    <b-carousel :autoplay="true" :pause-hover="true" :interval="2000">
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section :class="`hero is-medium is-bold`">
          <div class="hero-body" style="padding: 0; background-color: #6e8187;">
            <img
              :src="getImg(carousel)"
              style="margin: 0 auto; max-height: 400px; display: block"
            />
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
  </div>
</template>

<script>
// @ is an alias to /src
import BigDaySection from "@/components/BigDay.vue";
import FoodSection from "@/components/FoodSection.vue";
import ToastMasterSection from "@/components/ToastMasterSection.vue";

export default {
  name: "home",
  data() {
    return {
      carousels: [
        "kingqueen.jpg",
        "stranden.jpg",
        "stiligt.jpg",
        "lycka.jpg",
        "puss.jpg",
        "forlovning.jpg"
      ]
    };
  },
  methods: {
    getImg(pic) {
      return require("../assets/" + pic);
    }
  },
  components: {
    BigDaySection,
    FoodSection,
    ToastMasterSection
  }
};
</script>

<style>
.text-center {
  text-align: center;
}

.is-center {
  margin: 0 auto !important;
}

.round-corner-image {
  border-radius: 5%;
}

.fnt-xs {
  font-size: 1rem !important;
  font-weight: lighter !important;
}

.hero-image {
  background: url("../assets/bg.jpg");
  min-height: 400px;
}

.light-text {
  color: darkgray !important;
}
</style>
