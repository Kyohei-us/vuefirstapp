<template>
  <div id="app">
    <Menu itemName="thisItem" />
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <div class="router_links">
      <router-link to="/">home</router-link>
      <router-link to="/route111">route111</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Menu from "./components/menu.vue";

export default {
  name: "App",
  components: {
    Menu,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router_links {
  display: flex;
  justify-content: center;
}

.router_links > a {
  padding: 5px;
}

.router-link-exact-active {
  color: red;
}
</style>
