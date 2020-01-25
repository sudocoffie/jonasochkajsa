<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <h3 class="font-logo">
          <span class="logo-jonas">Jonas</span> <span class="logo-and">&</span>
          <span class="logo-kajsa">Kajsa</span>
        </h3>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        HEM
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/anmalan' }">
        ANMÄLAN
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/musicsuggestion' }">
        MUSIK-TIPS
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
// @ is an alias to /src

export default {
  name: "navbar"
};
</script>

<style>
.font-logo {
  font-family: "Great Vibes", cursive;
  font-size: 35px;
}

.logo-jonas {
  color: #aec6cf;
}
.logo-kajsa {
  color: pink;
}
.logo-and {
  color: gainsboro;
}
</style>
