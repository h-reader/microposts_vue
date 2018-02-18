<template>
  <div class="topbar">
    <div class="title">
      <router-link to="/">Microposts</router-link>
    </div>
    <div class="settings">
      <button>sign up</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ToBar extends Vue {
}
</script>

<style lang="scss" scoped>
  .topbar {
    width: 100%;
    max-width: 865px;
    display: grid;
    grid-template-columns: 1fr, 1fr;
    flex-flow: row;

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
