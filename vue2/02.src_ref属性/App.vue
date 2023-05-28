<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM" ref="btn">点我输出上方的DOM元素</button>
    <school ref="sch"></school>
  </div>
</template>

<script>
import school from "./components/school";
export default {
  name: "App",
  components: { school },
  data() {
    return {
      msg:"欢迎学习Vue"
    }
  },
  methods: {
    showDOM() {
      console.log(this.$refs.title);//真实DOM元素
      console.log(this.$refs.btn);//真实DOM元素
      console.log(this.$refs.sch);//School组件的实例对象（vc）
      console.log(document.getElementById('sch'));//ref与id的区别：使用id时输出School组件的真实DOM
    }
  },
};
</script>

<style>
</style>


<!-- ## ref属性

1. 被用来给元素或子组件注册引用信息（id的替代者）
2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
3. 使用方式：
    1. 打标识：```<h1 ref="xxx">.....</h1>``` 或 ```<School ref="xxx"></School>```
    2. 获取：```this.$refs.xxx``` -->