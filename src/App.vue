<template>
  <header class="top-nav">
    <div class="logo">
      <img src="./assets/logo.png" alt="Logo">
    </div>
    <nav class="links">
      <router-link class="link" :to="{ name: 'Home' }" >主页</router-link>
      <router-link class="link" :to="{ name: 'Application' }">报名页面</router-link>
      <router-link class="link" :to="{ name: 'Awards' }">所得荣誉</router-link>
      <router-link class="link" :to="{ name: 'Instructor' }">团队简介</router-link>
    </nav>
  </header>
  <router-view></router-view>
  <div class="footer">
    <p class="copyright">© 2023 Software Innovation Lab 105, Fuyang Normal University. All rights reserved.</p>
    <div class="links">
      <a >Privacy Policy</a>
      <a >Terms of Use</a>
    </div>
  </div>

</template>

<script>
import HomePage from "@/components/HomePage.vue";
export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HomePage
  }
}

</script>

<style>
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px 20px;
  color: white;
}
.footer {
  margin-top: 20px;
  text-align: center;
}

.links {
  margin-top: 10px;
}

.links a {
  margin: 0 10px;
  color: #333;
  text-decoration: none;
}
.links a{
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
}
.logo img {
  height: 50px;
}

.links router-link {
  color: white;
  text-decoration: none;
  margin-left: 20px;
}

.links router-link-active {
  text-decoration: underline;
}
.links {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.link:hover {
  background-color: #1564dc;
  color: white;
}
.link:active{
  color: #1564dc;
}
</style>
