<template>
  <div id="app">
    <div class="header">
      <top-bar />
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
import TopBar from '@/components/top-bar.vue';

@Component({
  components: {
    TopBar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html, body {
  height: 100%;
  margin: 0px;
}

#app {
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr;
  height: 100%;
  background-color: powderblue;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

div.header {
  grid-row: 1;
  grid-column: 1;
  background-color: white;
  width: 100%;
  height: 100%;
  margin: auto;
}

div.main {
  grid-row: 2;
  grid-column: 1;
  background-color: powderblue;

  .contents {
    margin: 5px auto;
    width: 100%;
  }
}

.button {
  height: 30px;
  width: 100px;
  border: 1px solid #15aeec;
  background-color: #49c0f0;
  background-image: -webkit-linear-gradient(top, #49c0f0, #2cafe3);
  background-image: linear-gradient(to bottom, #49c0f0, #2cafe3);
  border-radius: 4px;
  color: #fff;
  line-height: 30px;
  -webkit-transition: none;
  transition: none;
  text-shadow: 0 1px 1px rgba(0, 0, 0, .3);

  &:hover {
    border:1px solid #1090c3;
    background-color: #1ab0ec;
    background-image: -webkit-linear-gradient(top, #1ab0ec, #1a92c2);
    background-image: linear-gradient(to bottom, #1ab0ec, #1a92c2);
  }

  &:active {
    background: #1a92c2;
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .2);
    color: #1679a1;
    text-shadow: 0 1px 1px rgba(255, 255, 255, .5);
  }

}

</style>
