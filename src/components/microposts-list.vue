<template>
  <div class="microposts-list-container">
    <ul class="microposts-list-group">
      <li class="microposts-list-item" v-for="(micropost) in microposts" :key="micropost.id">
        <div class="micropost-header">
          <span class="u-font-bold">{{ user.name }}</span> {{ micropost.created_at }}
        </div>
        <div class="micropost-content">
          {{micropost.content}}
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
  @State(state => state.profile.user) private user!: User;
  @State(state => state.microposts.microposts) private microposts!: Micropost[];
  @Action(MicropostsActionType.getTweetList) private getTweetList: any;

  private created() {
    if(this.user) {
      this.getTweetList({userId: this.user.id});
    }
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

  }
</style>
