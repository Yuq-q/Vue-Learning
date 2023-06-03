<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>模板解析时可直接使用{ { person.name }}，不用加.value
  <h2>年龄：{{ person.age }}</h2>
  <h3>工作种类：{{ person.job.type }}</h3>
  <h3>工作薪水：{{ person.job.salary }}</h3>
  <h3>爱好：{{ person.hobby }}</h3>
  <h3>测试的数据c：{{ person.job.a.b.c }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'App',
  /* setup() {
    //数据
    let name = ref('张三')
    let age = ref(18)
    let job = reactive({
      type: '前端工程师',
      salary: '30k',
      a: {
        b: {
          c: 10
        }
      }
    })
    let hobby = ['抽烟', '喝酒', '烫头']

    //let number = reactive(666)//  警告：value cannot be made reactive: 666
    //不能给reactive传递基础数据类型的数据

    //方法
    function changeInfo() {
      // name.value = '李四'
      // age.value = 20
      // job.salary = '20k'
      // job.type = '全栈工程师'
      // job.a.b.c = 999
      hobby[0] = '学习'
      //在代码中，name、age、job 是一个响应式数据，因为你使用了 ref()或reactive() 函数。而 hobby 是一个普通的数组，没有使用 reactive() 或 ref() 函数使其变为响应式。
      //当不注释 hobby[0] = '学习'前面几行时，由于这些数据是响应式的，所以在 changeInfo() 函数中修改他们的值会触发 Vue 的响应式系统，导致页面重新渲染。在这个过程中，尽管 hobby 数组本身不是响应式的，但页面的重新渲染使得 hobby 的变化得以显示。
      //然而，当你注释 hobby[0] = '学习'前面几行时，changeInfo() 函数中没有触发响应式系统的操作。因此，尽管你修改了 hobby 数组，但页面并没有重新渲染，所以你看不到数组的变化。

      console.log(job)
      //RefImpl {__v_isShallow: false, dep: Set(1), __v_isRef: true, _rawValue: '张三', _value: '张三'} 
      //RefImpl {__v_isShallow: false, dep: Set(1), __v_isRef: true, _rawValue: 18, _value: 18}
    }

    //返回一个对象（常用）
    return {
      name,
      age,
      changeInfo,
      job,
      hobby
    }
  } */

  setup() {
    //数据
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        type: '前端工程师',
        salary: '30K',
        a: {
          b: {
            c: 666
          }
        }
      },
      hobby: ['抽烟', '喝酒', '烫头']
    })

    //方法
    function changeInfo() {
      person.name = '李四'
      person.age = 48
      person.job.type = 'UI设计师'
      person.job.salary = '60K'
      person.job.a.b.c = 999
      person.hobby[0] = '学习'
    }

    //返回一个对象（常用）
    return {
      person,
      changeInfo
    }
  }

}
</script>

