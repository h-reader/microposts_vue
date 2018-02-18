<template>
  <div id="app">
    <div class="header">
      <TopBar />
    </div>
    <div class="main">
      <div class="contents">
        <router-view/>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopBar from '@/components/TopBar.vue';

@Component({
  components: {
    TopBar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html, body {
  margin: 0px;
}

#app {
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

div.header {
  grid-row: 1;
  grid-column: 1;
  width: 100%;
  max-width: 850px;
  margin: auto;
}

div.main {
  grid-row: 2;
  grid-column: 1;
  background-color: powderblue;

  .contents {
    margin: 1px auto auto auto;
    background-color: white;
    width: 100%;
    max-width: 850px;
  }
}
</style>
