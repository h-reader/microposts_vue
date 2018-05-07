<template>
  <div class="microposts-list-container">
    <ul class="microposts-list-group" v-if="user">
      <li class="microposts-list-item" v-for="(micropost) in microposts" :key="micropost.id">
        <div class="micropost-header">
          <span class="u-font-bold">{{ user.name }}</span> {{ micropost.created_at }}
        </div>
        <div class="micropost-content">
          <div>{{micropost.content}}</div>
          <div class="btn-area">
            <button class="button" @click="deleteClick(micropost.id)">delete</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Vue, Prop } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import { microposts } from '../store/microposts';
import { MicropostsActionType, Micropost } from '@/store/microposts/types';
import { User } from '@/store/profile/types';

@Component({
})
export default class MicropostsList extends Vue {
  @State((state) => state.profile.user) private user!: User;
  @State((state) => state.microposts.microposts) private microposts!: Micropost[];
  @Action(MicropostsActionType.getTweetList) private getTweetList: any;
  @Action(MicropostsActionType.deleteTweet) private deleteTweet: any;

  private created() {
    if (this.user) {
      this.getTweetList({userId: this.user.id});
    }
  }

  private deleteClick(id: number) {
    this.deleteTweet({id: id.toString(), user_id: this.user.id});
  }
}
</script>

<style lang="scss" scoped>
  .microposts-list-container {
    background: white;
    padding: 0.5em;
  }

  .microposts-list-group {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .microposts-list-item {
    border-bottom: solid 1px black;
    margin-bottom: 0.5em;

    .micropost-header {
      font-size: 0.8em;
      
    }

    .micropost-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 0.2em;
    }
  }
</style>
