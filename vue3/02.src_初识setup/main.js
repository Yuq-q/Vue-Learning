//引入的不再是Vue构造函数(需要通过new调用)了，引入的是一个名为createApp的工厂函数(无需通过new调用)
import { createApp } from 'vue' //不兼容以前的写法，不能导入Vue构造函数
import App from './App.vue'

//创建应用实例对象——app(类似于之前Vue2中的vm，但app比vm更“轻”)(属性和方法都比vm少)
const app = createApp(App)

//挂载
app.mount('#app')
