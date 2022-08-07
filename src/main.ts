import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).mount('#app')

// 表示导入./components/glob文件夹下所有的文件
const modules = import.meta.glob('./components/glob/*')
// 打印结果如下图，是一个对象，key是文件的目录名字，value是对应的导入函数
console.log('modules', modules)
