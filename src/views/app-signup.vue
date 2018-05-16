<template>
  <div class="signup-container">
    <h1 class="component-title">Sign up</h1>
    <div class="signup-ctrl-container">
      <div class="input-ctrl">
        <label class="label">mail</label>
        <input type="email" v-bind:class="{ inputError: isEmailError }" v-model="email" />
      </div>
      <div class="input-ctrl">
        <label class="label">password</label>
        <input type="password" v-bind:class="{ inputError: isPasswordError }" v-model="password" />
      </div>
      <div class="input-ctrl">
        <label class="label">password(confirm)</label>
        <input type="password" v-bind:class="{ inputError: isPasswordConfirmError }" v-model="passwordConfirm" />
      </div>
      <div class="input-ctrl">
        <label class="label">Name</label>
        <input type="text" v-bind:class="{ inputError: isNameError }" v-model="name" />
      </div>
    </div>
    <span class="errorMessage" v-if="isControlError()">Invalid input parameter. Please Check parameter for back ground color is red.</span>

    <div class="btn-area">
        <button class="button" @click="signupClick">sign up</button>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Vue, Prop } from 'vue-property-decorator';
import { Action, Getter, State } from 'vuex-class';
import { ProfileActionType, ProfileGetterType } from '@/store/profile/types';
import { User } from '@/store/profile/types';
const namespace: string = 'profile';

@Component({
})
export default class AppSignup extends Vue {

  @Action(ProfileActionType.signup, {namespace}) private signup: any;

  private email: string = '';
  private password: string = '';
  private passwordConfirm: string = '';
  private name: string = '';

  private isEmailError = false;
  private isPasswordError = false;
  private isPasswordConfirmError = false;
  private isNameError = false;

  private async signupClick() {

    if (!this.validateInput()) {
      return;
    }

    const ret = await this.signup({email: this.email,
                                    password: this.password,
                                    password_confirmation: this.passwordConfirm,
                                    name: this.name});
    if (ret) {
      this.$router.push({ path: '/home' });
    } else {
      console.log('Error!');
    }

  }


  private validateInput(): boolean {

    this.isEmailError = false;
    this.isPasswordError = false;
    this.isPasswordConfirmError = false;
    this.isNameError = false;

    if (!this.email || !this.validEmail(this.email)) {
        this.isEmailError = true;
    }
    if (!this.password || this.password.length < 8) {
        this.isPasswordError = true;
    }
    if (this.password !== this.passwordConfirm) {
        this.isPasswordConfirmError = true;
    }
    if (!this.name) {
        this.isNameError = true;
    }

    return !this.isControlError();
  }

  private isControlError(): boolean {
      return this.isEmailError || this.isPasswordError ||
      this.isPasswordConfirmError || this.isNameError;
  }

  private validEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
</script>

<style lang="scss" scoped>

.signup-container {
  margin: auto;
  height: 100%;
  padding: 10px;
  min-height: 250px;
  max-height: 400px;
  max-width: 865px;
  background-color: white;

}

.signup-ctrl-container {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.btn-area {
  margin-top: 0.5em;
}

.inputError {
    background-color: rgba(241, 129, 129, 0.959);
}

.errorMessage {
    color: red;
    font-size: 0.8em;
}
</style>
