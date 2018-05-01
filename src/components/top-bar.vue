<template>
  <div class="topbar">
    <div class="title">
      <router-link to="/">Microposts</router-link>
    </div>
    <div class="settings">
      <div v-if="isLogin">
        <button class="button" @click="logoutApp()">Logout</button>
      </div>
      <div v-else>
        <button class="button" @click="moveDisplay('login')">Login</button>
        <button class="button" @click="moveDisplay('signup')">sign up</button>
      </div>      
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ProfileActionType, ProfileGetterType } from '../store/profile/types';
import { Action, Getter } from 'vuex-class';
const namespace: string = 'profile';

@Component({})
export default class TopBar extends Vue {
  @Action(ProfileActionType.logout, {namespace}) private logout: any;
  @Getter(ProfileGetterType.isLogin) private isLogin!: boolean;

  private moveDisplay(movePath: string) {
    this.$router.push({ path: movePath });
  }

  private logoutApp() {
    this.logout();
    this.$router.push({ path: 'login' });
  }
}
</script>

<style lang="scss" scoped>
  .topbar {
    max-width: 865px;
    display: grid;
    grid-template-columns: 1fr, 1fr;
    margin: auto;
    padding-top: 5px;

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
