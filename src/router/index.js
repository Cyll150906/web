import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue"; // 首页组件路径
import Application from "@/components/ApplicationFrom.vue"; // 报名界面
import Instructor from "@/components/Instructor.vue";// 服务页面组件路径
import Awards from "@/components/Awards.vue";
const routes = [
    { path: "/", name:'Home',component: HomePage },
    { path: "/Application",name:'Application', component: Application},
    { path: "/awards",name:'Awards', component: Awards },
    { path: "/instructor", name:'Instructor',component: Instructor }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
