<template>
    <h1>一个人的信息</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script>
import { reactive } from 'vue'

export default {
    name: 'demo',
    props: ['school', 'msg'],
    emits: ['hello'],
    setup(props, context) {
        // console.log('---setup---', props);
        //console.log('---setup---', context);
        //console.log('---setup---', context.attrs);//相当与Vue2中的$attrs，该组件在父组件实例化时传入，但该组件中未接收完的数据将存放在此
        //console.log('---setup---', context.emit);//触发自定义事件的。
        console.log('---setup---', context.slots);//插槽
        //console.log('---setup---', this);//this是undefined，所以无法在setup中使用this取任何数据
        //数据
        let person = reactive({
            name: '张三',
            age: 18
        })
        function test() {
            context.emit('hello', 666)
        }

        //返回一个对象（常用）
        return {
            person, test
        }
    }

}
</script>



<!-- 6.setup的两个注意点
        setup执行的时机
        
        在beforeCreate之前执行一次，this是undefined。
        setup的参数
        
        props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。
        context：上下文对象
        attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于 this.$attrs。
        slots: 收到的插槽内容, 相当于 this.$slots。
        emit: 分发自定义事件的函数, 相当于 this.$emit。 -->

