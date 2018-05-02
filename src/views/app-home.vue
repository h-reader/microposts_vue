<template>
  <div class="home-container">
    <div class="tweet-block">a</div>
    <div class="list-block">
      <microposts-list></microposts-list>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Vue, Prop } from 'vue-property-decorator';
import MicropostsList from '@/components/microposts-list.vue';

@Component({
  components: {
    MicropostsList,
  },
})
export default class AppHome extends Vue {

}
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  margin: auto;
  height: 100%;
  padding: 10px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

.tweet-block {
  width: 13.5em;
  background: #5566ee;
}

.list-block {
  width: 25.5em;
}
</style>
