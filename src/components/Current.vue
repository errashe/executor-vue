<script lang="ts">
import { h } from 'vue';
import { Base } from './Base.vue';

class Current extends Base {
  public action(): void {
      alert(2);
  }
}

const current = new Current();

</script>

<script setup lang="ts">

current.text.value = "qwe";

current.buttons.value.push(
  () => h('button', { onClick: () => alert('wtf') }, 'CURRENT FORM EXPORTED')
);

defineOptions({
  base: current,
})

</script>

<template>
  END FORM
</template>
