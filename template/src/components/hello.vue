<template>
  <div :class="style.hello">
    <h1>Hello, Vue!</h1>
    <img src="/static/image/white.png">
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as style from "../assets/css/page.css";
export default Vue.extend({
  data() {
    return {
      style
    };
  }
});
</script>
