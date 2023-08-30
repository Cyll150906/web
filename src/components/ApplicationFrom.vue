<template>
  <div class="application">
    <h1 class="title" >报名表单</h1>
    <form class="form">
      <div class="form-group">
        <label for="StudentName">姓名：</label>
        <input v-model="StudentName" type="text" id="name" required>
      </div>
      <div class="form-group">
        <label for="class">班级：</label>
        <select v-model="selectedClass" id="class" class="class-select">
          <option value="class1">请选择自己的班级</option>
            <option value="数据科学与大数据技术1班">数据科学与大数据技术1班</option>
            <option value="智能科学与技术1班">智能科学与技术1班</option>
            <option value="物联网工程1班">物联网工程1班</option>
            <option value="计算机科学与技术">计算机科学与技术（非师范）1班</option>
            <option value="计算机科学与技术">计算机科学与技术（非师范）2班</option>
            <option value="计算机科学与技术">计算机科学与技术（师范）1班</option>
          <!-- 其他班级选项 -->
        </select>
      </div>
      <div class="form-group">
        <label for="studentId">学号：</label>
        <input v-model="StudentId" type="text" id="studentId" required>
      </div>
      <div class="form-group">
        <label>选择编程语言：</label>
        <input type="radio" v-model="selectedLanguage" value="python"> Python
        <input type="radio" v-model="selectedLanguage" value="java"> Java
        <input type="radio" v-model="selectedLanguage" value="c_cpp"> C/C++
      </div>
      <div class="form-group">
        <label>手机号：</label>
        <input type="text" v-model="PhoneNumber" >
      </div>

      <div class="form-group">
        <label for="qq">qq：</label>
        <input type="text" class="qq" v-model="QQNumber">
      </div>
      <div class="form-group">
        <label for="bio">个人简介：</label>
        <textarea v-model="bio" id="bio" rows="4" >简单介绍一下你自己</textarea>
      </div>
      <button type="submit" class="submit-button" @click="addUser" >提交报名</button>
    </form>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "ApplicationFrom",
  data:function() {
return {
      StudentName: "",
      selectedClass: "class1",
      StudentId: "",
      selectedLanguage: "python",
      QQNumber: "",
      PhoneNumber: "",
      bio: ""};
},
  methods: {
    addUser(){ //
      // eslint-disable-next-line no-unused-vars

    axios.post('http://localhost:3000/api/user/addUser',{ validateStatus: true },{
        params:{
          StudentName : this.StudentName,
          selectedClass : this.selectedClass,
          // eslint-disable-next-line no-unused-vars
          StudentId :this.StudentId,
          // eslint-disable-next-line no-unused-vars
          selectedLanguage : this.selectedLanguage,
          QQNumber : this.QQNumber,
          PhoneNumber : this.PhoneNumber,
          bio : this.bio
        }
        // eslint-disable-next-line no-unused-vars
      }).then(()=>{
        alert('信息添加成功');
      }).catch(err=>{
        console.log(err)
      })
    },

    },
};
</script>
<style>
.application {


  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.form {
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;

}
.class-select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  transition: border-color 0.3s ease-in-out;
}

.class-select:focus {
  outline: none;
  border-color: #1564dc;
  box-shadow: 0 0 3px rgba(21, 100, 220, 0.5);
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 40%;
}

.submit-button:hover {
  background-color: #0056b3;
}
.phone-input {
  margin-bottom: 20px;
}
</style>