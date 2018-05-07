<template>
  <div class="login-container">
    <h1 class="component-title">Login</h1>

    <div class="login-ctrl-container">
      <div class="input-ctrl">
        <label class="label">mail</label>
        <input type="text" v-model="email" />
      </div>
      <div class="input-ctrl">
        <label class="label">password</label>
        <input type="password" v-model="password" />
      </div>
    </div>
    <button class="button" @click="loginClick">Login</button>
    <span v-if="loginError">Invalid login. Different mail or password.</span>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Vue, Prop } from 'vue-property-decorator';
import { profile } from '../store/profile';
import { ProfileActionType, ProfileGetterType } from '../store/profile/types';
import { Action, Getter, State } from 'vuex-class';
const namespace: string = 'profile';
const namespaceMicroposts: string = 'microposts';

@Component({
})
export default class AppLogin extends Vue {

  @Action(ProfileActionType.login, {namespace}) private login: any;
  @Action(ProfileActionType.checkLogin, {namespace}) private checkLogin: any;
  @Getter(ProfileGetterType.isLogin) private isLogin!: boolean;

  private async created() {
    const ret = await this.checkLogin();
    if (ret) {
      this.$router.push({ path: 'home' });
    }
  }

  private email: string = '';
  private password: string = '';
  private loginError: boolean = false;

  private async loginClick() {
    this.loginError = false;
    const ret = await this.login({email: this.email, password: this.password});
    if (ret) {
      this.$router.push({ path: '/home' });
    } else {
      this.loginError = !ret;
    }
  }

}
</script>

<style lang="scss" scoped>

.login-container {
  margin: auto;
  height: 100%;
  padding: 10px;
  min-height: 250px;
  max-height: 400px;
  max-width: 865px;
  background-color: white;

  .button {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

</style>
