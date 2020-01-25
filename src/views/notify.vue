<template>
  <div>
    <section class="hero hero-image"></section>
    <div class="container">
      <div class="card is-one-thrids">
        <h1>{{ posted ? "Du är anmälen välkommen!" : "Anmälan" }}</h1>
        <div class="divider"></div>

        <form v-if="!posted" @submit="handleSubmit">
          <h2>Person 1 *</h2>
          <div class="columns">
            <div class="column">
              <b-field label="Förnamn">
                <b-input
                  name="person1firstname"
                  v-model="person1.firstname"
                  maxlength="50"
                  required
                ></b-input>
              </b-field>
            </div>

            <div class="column">
              <b-field label="Efternamn">
                <b-input
                  name="person1lastname"
                  v-model="person1.lastname"
                  maxlength="50"
                  required
                ></b-input>
              </b-field>
            </div>
          </div>

          <h2>Person 2</h2>
          <div class="columns">
            <div class="column">
              <b-field label="Förnamn">
                <b-input
                  name="person2firstname"
                  v-model="person2.firstname"
                  maxlength="50"
                ></b-input>
              </b-field>
            </div>

            <div class="column">
              <b-field label="Efternamn">
                <b-input
                  name="person2lastname"
                  v-model="person2.lastname"
                  maxlength="50"
                ></b-input>
              </b-field>
            </div>
          </div>

          <div class="divider"></div>

          <b-field label="Telefonnummer*">
            <b-input
              v-model="phonenumber"
              name="phonenumber"
              maxlength="50"
              required
            ></b-input>
          </b-field>

          <b-field label="Email*">
            <b-input v-model="email" maxlength="50" required></b-input>
          </b-field>

          <b-field label="Allergier">
            <b-input v-model="alergies"></b-input>
          </b-field>

          <b-field label="Vill du/ni åka med bussen?">
            <b-checkbox v-model="bus" maxlength="50"></b-checkbox>
          </b-field>

          <BButton type="submit" class="is-primary" @click="handleSubmit">
            Skicka in Anmälan
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
  name: "notify",
  data() {
    return {
      ok: false,
      person1: {
        firstname: null,
        lastname: null
      },
      person2: {
        firstname: null,
        lastname: null
      },
      phonenumber: null,
      email: null,
      alergies: null,
      bus: false,

      posted: false
    };
  },

  created() {},

  computed: {},

  methods: {
    ...mapActions("notifies", ["addNotify"]),

    validate() {
      return (
        this.person1.firstname !== null &&
        this.person1.lastname !== null &&
        this.phonenumber !== null &&
        this.email !== null
      );
    },

    async handleSubmit() {
      if (!this.validate()) return;

      const payload = {
        firstname1: this.person1.firstname,
        firstname2: this.person2.firstname,
        lastname1: this.person1.lastname,
        lastname2: this.person2.lastname,
        phonenumber: this.phonenumber,
        email: this.email,
        alergies: this.alergies,
        bus: this.bus
      };

      await this.addNotify(payload);

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
