<template>
  <div class="home-container">
    <div class="tweet-block">
      <microposts-tweet></microposts-tweet>
    </div>
    <div class="list-block">
      <microposts-list></microposts-list>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Vue, Prop } from 'vue-property-decorator';
import MicropostsList from '@/components/microposts-list.vue';
import MicropostsTweet from '@/components/microposts-tweet.vue';

@Component({
  components: {
    MicropostsList,
    MicropostsTweet,
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
  margin:0.5em
}

.list-block {
  width: 25.5em;
  margin:0.5em
}
</style>
