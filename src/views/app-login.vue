<template>
  <div class="login">
    <label class="login-label">mail</label>
    <input type="text" v-model="email" />
    <br>
    <label class="login-label">pasword</label>
    <input type="password"  v-model="password" />
    <br>
    <button class="button" @click="loginClick">sign in</button>
    <br>
    <span v-if="loginError">Invalid login. Different mail or password.</span>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Vue, Prop } from 'vue-property-decorator';
import { profile } from '../store/profile';
import { ActionType, GetterType, ProfileState } from '../store/profile/types';
import { Action, Getter } from 'vuex-class';
const namespace: string = 'profile';

@Component({})
export default class AppLogin extends Vue {

  @Action(ActionType.login, {namespace}) private login: any;
  @Getter(GetterType.isLogin) private isLogin!: boolean;

  private email: string = '';
  private password: string = '';
  private loginError: boolean = false;

  private async loginClick() {
    this.loginError = false;
    const ret = await this.login({email: this.email, password: this.password});
    if (ret) {
      this.$router.push({ path: '/' });
    } else {
      this.loginError = !ret;
    }
  }

}
</script>

<style lang="scss" scoped>

.login {
  margin: auto;
  height: 100%;
  padding: 10px;
  min-height: 250px;
  max-height: 400px;
  max-width: 865px;
  background-color: white;

  .login-label {
    display: inline-block;
    width: 70px;
  }

  .button {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

</style>
