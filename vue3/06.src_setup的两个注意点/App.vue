<template>
  <demo @hello="showHelloMsg($event)" msg="你好" school="scu">
    <template v-slot:qwe>
      <span>scu</span>
    </template>
    <template v-slot:asd>
      <span>cqu</span>
    </template>
  </demo>
</template>

<script>
import Demo from "./components/demo";

export default {
  name: 'App',
  components: { Demo },
  setup() {
    function showHelloMsg(event, value) {
      console.log(event);
      alert(`你好啊，你触发了hello事件，我收到的参数是:${value}！`)
    }
    return {
      showHelloMsg
    }
  }
}
</script>

