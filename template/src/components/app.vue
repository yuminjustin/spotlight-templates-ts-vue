<template>
  <div class="todobox">
    <h1>Vue+Typescript Todolist</h1>
    <ipt @save="save" />
    <todo-item
      v-for="(item, key) in list"
      :key="key"
      :idx="key"
      :source="item"
      @edit="edit"
      @update="update"
      @select="select"
      @remove="remove"
    />
    <div class="foot">
      <span>\{{ num }}项被选中</span>
      <template v-if="num > 0">
        <button @click="remove2">删除所选</button>
        <button @click="cancel">取消选择</button>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Ipt from "./ipt.vue";
import TodoItem from "./todo_item.vue";
import { Todo } from "./todo";

@Component({
  components: {
    Ipt,
    TodoItem,
  },
})
export default class App extends Vue {
  list: Todo[] = [];
  get num() {
    let temp = 0;
    this.list.map((item) => {
      if (item.isSelected) temp++;
    });
    return temp;
  }
  save(e: string) {
    if (e) {
      let temp: Todo = {
        id: this.list.length + 1,
        word: e,
        isSelected: false,
        edit: false,
      };
      this.list.push(temp);
    }
  }
  edit(arr: any[]) {
    this.list[arr[0]].edit = arr[1] == 1;
  }
  update(arr: any[]) {
    this.list[arr[0]].word = arr[1];
    this.list[arr[0]].edit = false;
  }
  select(arr: any[]) {
    this.list[arr[0]].isSelected = arr[1];
  }
  remove(idx: number) {
    this.list.splice(idx, 1);
  }
  cancel() {
    this.list.map((item) => {
      item.isSelected = false;
    });
  }
  remove2() {
    this.list = this.list.filter((item) => {
      if (!item.isSelected) return item;
    });
  }
}
</script>
