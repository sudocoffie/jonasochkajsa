<template>
  <div>
    <section class="hero-pass hero-image">
      <div
        class="column is-one-thirds-fullhd is-one-thirds-tablet is-three-thirds-mobile"
      >
        <div class="column">
          <b-field label="Lösenord" :type="ok ? 'is-success' : 'is-error'">
            <b-input
              size="is-large"
              v-model="password"
              value="password"
              maxlength="30"
            ></b-input>
          </b-field>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";

export default {
  name: "password",
  data() {
    return {
      password: null,
      ok: false
    };
  },

  created() {
    this.login_guest("");
  },

  computed: {
    ...mapState("users", ["loggedIn"])
  },

  methods: {
    ...mapActions("users", ["login_guest"])
  },

  components: {},

  watch: {
    password(val) {
      if (val === "Brollop2020") {
        this.login_guest(val);
        this.$router.push({ path: "/" });
      }
    }
  }
};
</script>

<style scoped>
.hero-pass {
  height: 100vh;
  background-size: cover;
}
</style>
