<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mtPosition } from "@/api/index.js";
export default {
  name: "App",

  created() {
    mtPosition().then(res => {
      console.log("mtPosition", res);
      this.$store.commit("position/set_value", res.data.name);
      this.$store.commit("position/set_nearCity", res.data.nearCity);
    });
  }
};
</script>

<style lang='scss'>
@import "./assets/css/init.scss";
#app {
  font-size: 12px;
}
</style>
