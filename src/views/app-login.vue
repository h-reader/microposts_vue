<template>
  <div class="login">
    <normal-input labelText="ログインID" :initText="email" @change="onchange" />
    <br>
    {{email}}
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';

import NormalInput from '@/parts/normal-input.vue';

@Component({
  components: {
    NormalInput,
  },
})
export default class AppLogin extends Vue {

    private email: string = '';

    private onchange(val: any) {
        this.email = val;
    }

}
</script>

<style lang="scss" scoped>


</style>
