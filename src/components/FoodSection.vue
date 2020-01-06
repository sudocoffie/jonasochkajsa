<template>
  <section class="section color-jonas">
    <div class="container text-center tile is-parent">
      <div class="tile is-child is-4 columns is-vcentered">
        <img class="round-corner-image imagefix" src="../assets/party.jpg" />
      </div>

      <div class="tile is-child is-8">
        <h1 class="title" style="color: linen; margin-top: 2rem;">
          Information
        </h1>
        <h2 class="subtitle text-center fnt-xs">
          Så ni vet vad som gäller
        </h2>
        <p class="tile is-8 is-center" style="text-align: left;">
          <b-icon
            icon="pasta"
            size="is-large"
            style="color: linen; margin-right: 1rem"
          />
          Under kvällen kommer det att serveras en sommarbuffé samt dessert. Om
          ni har några allergier eller andra matpreferenser får ni gärna meddela
          oss detta i er OSA.
        </p>
        <br />
        <p class="tile is-8 is-center" style="text-align: left;">
          <b-icon
            icon="glass-mug-variant"
            size="is-large"
            style="color: linen; margin-right: 1rem"
          />
          Under kvällen gäller fri bar! Det kommer självklart finnas både
          alkoholhaltiga drycker och alkoholfria.
        </p>
        <br />
        <p class="tile is-8 is-center" style="text-align: left;">
          <b-icon
            icon="baby-carriage-off"
            size="is-large"
            style="color: linen; margin-right: 1rem"
          />
          Vi älskar era barn men denna dag önskar vi fira med våra vuxna vänner!
          Ammande barn får självklart komma.
        </p>
        <br />
        <p class="tile is-8 is-center" style="text-align: left;">
          <b-icon
            icon="gift-outline"
            size="is-large"
            style="color: linen; margin-right: 1rem"
          />
          Den största glädjen och presenten är att ni vill fira denna stora dag
          med oss! Om ni ändå vill ge oss en gåva önskar vi bidrag till vår
          framtida bröllopsresa. För mer information, kontakta toastmasters.
        </p>
        <br />
        <p class="tile is-8 is-center" style="text-align: left;">
          <b-icon
            icon="dresser"
            size="is-large"
            style="color: linen; margin-right: 1rem"
          />
          Dresscode: Kavaj
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "bigday",
  data() {
    return {
      iconColors: ["powderblue", "seagreen", "linen"]
    };
  },

  computed: {
    getRandomIconColor() {
      return this.iconColors[Math.floor(Math.random() * 3)];
    }
  }
};
</script>

<style>
.text-center {
  text-align: center;
}

.light-text {
  color: darkgray !important;
}
</style>
