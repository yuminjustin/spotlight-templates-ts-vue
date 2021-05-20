<template>
  <div class="iptbox">
    <input v-model="word" type="text" :placeholder="pla" />
    <button @click="saveWord">\{{btn_text}}</button>
    <button @click="cancel" v-if="edit">取消</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from "vue-property-decorator";
@Component
export default class Ipt extends Vue {
  @Prop(Number) public edit!: 0;
  @Prop(String) public value!: "";

  pla = this.edit ? this.value : "请输入一段文字";
  word = this.edit ? this.value : "";
  btn_text = this.edit ? "修改": "添加";

  @Emit("save")
  saveWord() {
    if (this.word) {
      let temp = this.word;
      this.word = "";
      return temp;
    }
    else return '';
  }
  @Emit("cancel")
  cancel(){
    return
  }
}
</script>
