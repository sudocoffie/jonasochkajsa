<template>
  <section class="section color-kajsa">
    <h1 class="title text-center">Kontakt</h1>
    <div class="container tile is-parent">
      <div class="tile is-child is-2"></div>
      <div class="tile is-child is-4">
        <div class="text-center" style="margin-bottom: 2rem">
          <img
            class="round-corner-image center"
            src="../assets/basse.jpg"
            style="height:400px; width: auto"
          />
          <h2 class="title" style="margin-top: 1rem; margin-bottom: 1rem">
            Toastmaster
          </h2>
          <h2 class="subtitle" style="margin: 0.5rem">
            Sebastian Andersson
          </h2>
          <p><b-icon icon="phone" size="is-small" /> 070-422 62 73</p>
        </div>
      </div>
      <div class="tile is-child is-4">
        <div class="text-center" style="margin-bottom: 2rem">
          <img
            class="round-corner-image center"
            src="../assets/julia.jpg"
            style="height:400px; width: auto"
          />
          <h2 class="title" style="margin-top: 1rem; margin-bottom: 1rem">
            Toastmadame
          </h2>
          <h2 class="subtitle" style="margin: 0.5rem">
            Julia Larsson
          </h2>
          <p><b-icon icon="phone" size="is-small" /> 070-574 20 88</p>
          <p>
            <b-icon icon="email" size="is-small" /> julia.larsson@lansfast.se
          </p>
        </div>
      </div>
      <div class="tile is-child is-2"></div>
    </div>
  </section>
</template>
<script>
export default {
  name: "toastmastersection"
};
</script>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
