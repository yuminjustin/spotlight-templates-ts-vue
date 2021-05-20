<template>
  <div :class="['todo-item', source.edit ? 'edit' : '']">
    <div class="todo-item-view" v-if="!source.edit" @dblclick="setEdit">
      <input type="checkbox" :checked="source.isSelected" @change="select" />
      <span class="word ellipsis">\{{ source.word }}</span>
      <span class="del" @click="del"></span>
    </div>
    <div v-else>
      <ipt @save="save" @cancel="cancel" :edit="1" :value="source.word" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import Ipt from "./ipt.vue";
import { Todo } from "./todo";

@Component({
  components: {
    Ipt,
  },
})
export default class TodoItem extends Vue {
  @Prop(Object) public source!: Todo;
  @Prop(Number) public idx!: 0;

  @Emit("update")
  save(e: string) {
    if (e) return [this.idx, e];
    else return [this.idx, this.source.word];
  }

  @Emit("edit")
  setEdit() {
    return [this.idx, 1];
  }
  @Emit("edit")
  cancel() {
    return [this.idx, 0];
  }
  @Emit("select")
  select(e: any) {
    return [this.idx, e.target.checked];
  }
  @Emit("remove")
  del() {
    return this.idx;
  }
}
</script>
