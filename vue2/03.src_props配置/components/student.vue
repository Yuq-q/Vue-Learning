<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age + 1 }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      msg: "我是一个scu的学生",
      myAge: this.age, //读取的是props的age，因为props接受的优先级更高
    };
  },
  methods: {
    updateAge() {
      this.age = 40;
    },
  },
  // 这些由props外部动态指定的数据也被存入到了组件实例对象(this)上，并且优先

  //props: ["name", "age", "sex"], //简单接受

  //接收的同时对数据进行类型限制
  /* props: {
    name: String,
    age: Number,
    sex: String,
  }, */

  //接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
  props: {
    sex: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 23,
    },
    name: {
      type: String, //name的类型是字符串
      required: true, //name是必要的
    },
  },
};
</script>

<style>
</style>


<!-- ## props配置项

1. 功能：让组件接收外部传过来的数据

2. 传递数据：```<Demo name="xxx"/>```

3. 接收数据：

    1. 第一种方式（只接收）：```props:['name'] ```

    2. 第二种方式（限制类型）：```props:{name:String}```

    3. 第三种方式（限制类型、限制必要性、指定默认值）：

        ```js
        props:{
        	name:{
        	type:String, //类型
        	required:true, //必要性
        	default:'老王' //默认值
        	}
        }
        ```

    > 备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据，因为props接受的属性优先级高于data中的同名数据，props中的会先被保存到vc中 -->