<template>
  <div class="topbar">
    <div class="title">
      <router-link to="/">Microposts</router-link>
    </div>
    <div class="settings">
      <normal-button text="sign up" @click="clickFunc('12')" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';
import NormalButton from '@/parts/normal-button.vue';

import { ProfileState, User, ActionType } from '@/store/profile/types';

const namespace: string = 'profile';

@Component({
  components: {
    NormalButton,
  },
})
export default class TopBar extends Vue {

  @Action(ActionType.login, { namespace }) private login: any;

  private async clickFunc(str: string) {
    this.$router.push({ path: 'login' });

  }
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
