<template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我+1</button>
    <pre>
        Vue3.0中可以继续使用Vue2.x中的生命周期钩子，但有有两个被更名：
        beforeDestroy改名为 beforeUnmount
        destroyed改名为 unmounted
        Vue3.0也提供了 Composition API 形式的生命周期钩子，与Vue2.x中钩子对应关系如下：
        beforeCreate===>setup()
        created=======>setup()
        beforeMount ===>onBeforeMount
        mounted=======>onMounted
        beforeUpdate===>onBeforeUpdate
        updated =======>onUpdated
        beforeUnmount ==>onBeforeUnmount
        unmounted =====>onUnmounted
    </pre>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

export default {
    name: 'demo',
    setup() {

        console.log('---setup---');

        //数据
        let sum = ref(0)

        //通过组合式API的形式去使用生命周期钩子
        onBeforeMount(() => {
            console.log('---onBeforeMount---')
        })
        onMounted(() => {
            console.log('---onMounted---')
        })
        onBeforeUpdate(() => {
            console.log('---onBeforeUpdate---')
        })
        onUpdated(() => {
            console.log('---onUpdated---')
        })
        onBeforeUnmount(() => {
            console.log('---onBeforeUnmount---')
        })
        onUnmounted(() => {
            console.log('---onUnmounted---')
        })

        return {
            sum
        }

    },
    beforeCreate() {
        console.log('---beforeCreate---')
    },
    created() {
        console.log('---created---')
    },
    beforeMount() {
        console.log('---beforeMount---')
    },
    mounted() {
        console.log('---mounted---')
    },
    beforeUpdate() {
        console.log('---beforeUpdate---')
    },
    updated() {
        console.log('---updated---')
    },
    beforeUnmount() {
        console.log('---beforeUnmount---')
    },
    unmounted() {
        console.log('---unmounted---')
    }

}
</script>

<!-- Vue3.0中可以继续使用Vue2.x中的生命周期钩子，但有有两个被更名：
beforeDestroy改名为 beforeUnmount
destroyed改名为 unmounted
Vue3.0也提供了 Composition API 形式的生命周期钩子，与Vue2.x中钩子对应关系如下：
beforeCreate===>setup()
created=======>setup()
beforeMount ===>onBeforeMount
mounted=======>onMounted
beforeUpdate===>onBeforeUpdate
updated =======>onUpdated
beforeUnmount ==>onBeforeUnmount
unmounted =====>onUnmounted -->
