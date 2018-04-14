<template>
  <div class="topbar">
    <div class="title">
      <router-link to="/">Microposts</router-link>
    </div>
    <div class="settings">
      <button class="button" @click="clickFunc">sign up</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class TopBar extends Vue {

  private async clickFunc() {
    this.$router.push({ path: 'login' });

  }
}
</script>

<style lang="scss" scoped>
  .topbar {
    max-width: 865px;
    display: grid;
    grid-template-columns: 1fr, 1fr;
    margin: auto;
    padding-top: 5px;

    .title {
      grid-column: 1;
      text-align: left;

      a {
        font-size: large;
        color: #999999;
        text-decoration: none;
      }
    }

    .settings {
      grid-column: 2;
      text-align: right;
    }
  }
</style>
