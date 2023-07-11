<script lang="ts">
import { Ref, VNode, h, ref, resolveComponent } from 'vue';

export interface IBase {
  text: Ref<string>;
  buttons: Ref<(() => VNode)[]>;
}

export class Base implements IBase {
  public buttons: Ref<(() => VNode)[]> = ref([]);
  public text: Ref<string> = ref('');

  public action() {
    alert(0);
  }

  constructor() {
    this.buttons.value.push(
      () => h('button', { onClick: this.action }, this.text.value)
    )
  }
}
</script>

<script setup lang="ts">
let base: IBase;

const Current: any = resolveComponent('Current');

if (Current.base) {
  base = Current.base;
  console.log(base);
} else {
  base = new Base();
}

</script>

<template>
  <Current /><br />
  <template v-for="btn in base.buttons.value">
    <component :is="btn" />
  </template>
</template>
