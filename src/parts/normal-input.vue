<template>
  <div class="NormalInput">
    <label for="">{{labelText}}</label>
    <input type="text" @change="onChange" v-model="displayText" />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Prop, Vue, Emit } from 'vue-property-decorator';
import { emit } from 'cluster';

@Component
export default class NormalInput extends Vue {

  @Prop()
  public labelText!: string;

  @Prop()
  public initText!: string;

  private displayText: string = this.initText;

  @Emit(`change`)
  public changeText(value: string) {
    // 処理は無し
  }


  private onChange() {
    this.changeText(this.displayText);
  }


}
</script>

