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
import { Action, State } from 'vuex-class';
import { ProfileActionType, User } from '@/store/profile/types';
import { MicropostsActionType } from '@/store/microposts/types';

import MicropostsList from '@/components/microposts-list.vue';
import MicropostsTweet from '@/components/microposts-tweet.vue';
const namespace: string = 'profile';

@Component({
  components: {
    MicropostsList,
    MicropostsTweet,
  },
})
export default class AppHome extends Vue {

  @State((state) => state.profile.user) private user!: User;
  @Action(ProfileActionType.checkLogin, {namespace}) private checkLogin: any;
  @Action(MicropostsActionType.getTweetList) private getTweetList: any;

  private created() {
    this.isLogin();
  }

  private async isLogin() {
    const ret = await this.checkLogin();
    if (ret) {
      this.getTweetList({userId: this.user.id});
    } else if (!ret) {
      this.$router.push({ path: 'login' });
    }
  }
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
