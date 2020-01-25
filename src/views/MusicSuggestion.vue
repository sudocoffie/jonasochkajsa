<template>
  <div>
    <section class="hero hero-image"></section>
    <div class="container">
      <div class="card is-one-thrids">
        <h1>{{ posted ? "" : "Förslag på musik" }}</h1>
        <h2>
          {{
            posted ? "Tack för ditt förslag skicka in ett till om du vill!" : ""
          }}
        </h2>
        <div class="divider"></div>

        <form @submit="handleSubmit">
          <h2></h2>

          <b-field label="Länk (Spotify/youtube) *">
            <b-input
              name="link"
              v-model="link"
              maxlength="255"
              required
            ></b-input>
          </b-field>

          <BButton type="submit" class="is-primary" @click="handleSubmit">
            Skicka
          </BButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";

export default {
  name: "MusicSuggestion",
  data() {
    return {
      ok: false,
      link: null,
      posted: false
    };
  },

  created() {},

  computed: {},

  methods: {
    ...mapActions("musicSuggestions", ["addSuggestion"]),

    validate() {
      return this.url !== null;
    },

    async handleSubmit() {
      if (!this.validate()) return;

      const payload = {
        url: this.url
      };

      await this.addSuggestion(payload);

      this.url = null;
      this.posted = true;
    }
  },

  components: {}
};
</script>

<style scoped>
.hero-pass {
  height: 100vh;
  background-size: cover;
}

.card {
  margin-top: 2rem;
  border-radius: 5px;
  padding: 1rem;
}

.card > h1 {
  font-size: 1.75rem;
}

.divider {
  width: 99%;
  margin: 0 auto;
  margin-bottom: 1rem;
  border: 1px solid darkgray;
}

.card > h2 {
  font-size: 1.3rem;
}
</style>
