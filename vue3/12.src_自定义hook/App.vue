<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <demo v-if="isShowDemo" />
  <hr>
  <Test></Test>
</template>

<script>
import Demo from "./components/demo";
import Test from "./components/Test";
import { ref } from "vue";

export default {
  name: 'App',
  components: { Demo, Test },
  setup() {
    let isShowDemo = ref(true)
    return { isShowDemo }
  }
}
</script>

