<template>
  <div class="microposts-tweet-container">
    <div class="user-name">{{ user.name }}</div>
    <div class="tweet-area">
      <textarea class="tweet-text" v-model="tweetText" cols="30" rows="10"></textarea>
    </div>
    <div class="btn-area">
      <button class="button" @click="tweet">Tweet!</button>
    </div>
    <div class="errorMessage" v-if="isError">
      Tweet Message need less than 140.
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Vue, Prop } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import { microposts } from '../store/microposts';
import { MicropostsActionType, Micropost } from '@/store/microposts/types';
import { User } from '@/store/profile/types';
import { isError } from 'util';

@Component({
})
export default class MicropostsTweet extends Vue {
  @State(state => state.profile.user) private user!: User;
  @Action(MicropostsActionType.tweet) private addTweet: any;

  private tweetText: string = '';
  private isError: boolean = false;

  public tweet() {
    this.isError = false;

    if (!this.tweetText) {
      return;
    }

    if (!this.tweetText || this.tweetText.length > 140) {
      this.isError = true;
      return;
    }

    this.addTweet({user_id: this.user.id, content: this.tweetText});
  }
}
</script>

<style lang="scss" scoped>
.microposts-tweet-container {
  background: white;
  padding: 0.5em;
}

.tweet-area {
  width: 100%;
}

.tweet-text {
  margin: 0.5em;
  width: 95%;
}

.errorMessage {
  font-size: 0.8em;
  color: red;
}

</style>
