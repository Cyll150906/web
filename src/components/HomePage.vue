<template>
    <div class="app">
  <h1 class="TopTitle">阜阳师范大学</h1>
  <h1 class="TopTitle">软件创新实验室105</h1>
      <div>
        <p class="small_log">这是一个亲和的团队 一个有爱的团队</p>
      </div>
      <div class="button-container">
        <button class="join_us" @click="navigateToApplication">
          加入我们
        </button>
      </div>
      <br>
      <section class="vt-section">
        <div class="vt-box">
          <h1>选择理由一</h1>
          <p>
              我们是一个亲和的团队 一个有爱的团队。共同追求着共同的目标。在这个温暖的大家庭里，每个成员都像家人一样紧密相连，彼此扶持，激励着彼此前进。
          </p>

        </div>
        <div class="vt-box">
          <h1>选择理由二</h1>
          <p>
            配有独立工位，配备高速电脑及WiFi，助你驰骋信息快车道。日夜开放的学习时光，丰富学习资料尽情探索。卓越学长学姐坐镇，竞赛、考研、就业路上，助你砥砺前行。
          </p>
        </div>
        <div class="vt-box">
          <h1>选择理由三</h1>
          <p>
            本实验室有包含5名博士在内的导师团队,可以指导科研项目，提供高效的指导，提供所需的学习资源，及时为你答疑解惑。
          </p>
        </div>
      </section>
  </div>

</template>

<script>
export default {
  name: "WebPage",
  methods: {
    navigateToApplication() {
      this.$router.push({ name: 'Application' });
    }}
};

</script>

<style>

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

.TopTitle{
  background: #007bff -webkit-linear-gradient(right,blue, green);
  font-size: 50px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
  text-align: center;
}

.small_log{
  font-size: 24px;
  text-align: center;
  margin-top: 10px;
  color: #8a9090;
  background-clip: text;
  font-family: "Times New Roman", sans-serif;}
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.join_us {
  /* 您的按钮样式 */
  width: 10%;
  height: 50px;
  border-radius: 10px;
  background: #007bff -webkit-linear-gradient(right,blue, green);
  font-size: 20px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 0;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  outline: none;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.vt-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* 确保占满父容器宽度 */
}

.vt-box {
  flex: 1;
  min-width: auto;
  max-width: 450px;
  min-height: 100px; /* 设置最小高度 */
  max-height: 300px; /* 设置最大高度 */
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: linear-gradient(to right, blue, green);
  font-size: 20px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  outline: none;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.vt-box:hover {
  transform: scale(1.05); /* 放大效果 */
  box-shadow: 0 0 10px rgba(108, 14, 14, 0.2); /* 阴影效果 */
}
.join_us:hover{
  transform: scale(1.05); /* 放大效果 */
  box-shadow: 0 0 10px rgba(183, 61, 61, 0.2); /* 阴影效果 */
}

</style>
