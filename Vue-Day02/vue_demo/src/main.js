//导入createApp函数
import { createApp } from "vue";
//导入待渲染App.vue组件
import App from './App.vue'
//调用createApp函数 ， 创建SPA应用实例
const app=createApp(App)
app.mount('#app')