<template>
  <div>
    <student name="nunaso" sex="男" :age="20"></student>
  </div>
</template>

<script>
import student from "./components/student";
export default {
  name: "App",
  components: { student },
  data() {
    return {
      msg: "欢迎学习Vue",
    };
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