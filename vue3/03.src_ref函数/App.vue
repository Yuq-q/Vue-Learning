<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>模板解析时可直接使用{{ name }}，不用加.value
  <h2>年龄：{{ age }}</h2>
  <h3>工作种类：{{ job.type }}</h3>
  <h3>工作薪水：{{ job.salary }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    //数据
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type: '前端工程师',
      salary: '30k'
    })

    //方法
    function changeInfo() {
      name.value = '李四'
      age.value = 20
      job.value.salary = '20k'
      job.value.type = '全栈工程师'

      console.log(name, age)//ref引用实例对象
      //RefImpl {__v_isShallow: false, dep: Set(1), __v_isRef: true, _rawValue: '张三', _value: '张三'} 
      //RefImpl {__v_isShallow: false, dep: Set(1), __v_isRef: true, _rawValue: 18, _value: 18}
    }

    //返回一个对象（常用）
    return {
      name,
      age,
      changeInfo,
      job
    }
  }

}
</script>

