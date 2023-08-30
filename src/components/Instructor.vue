<template>
  <h2 class="TeacherTitle">教师团队</h2>
  <div class="Team-list">
    <div class="Team-item" v-for="(Teacher, index) in teachers" :key="index">
      <img :src="Teacher.image" :alt="Teacher.TeacherName" class="TeacherImg">
      <h3>{{Teacher.TeacherName}}</h3>
      <p>{{Teacher.TeacherResearchDirection}}</p>
    </div>
  </div>
  <h2 class="TeacherTitle">2019级主要学生团队</h2>
  <div class="StudentImgContainer">
  </div>
  <div class="app">
    <div class="team-member">
      <div class="StudentImgContainer">
        <img src="@/assets/Students/ZisuZhou.png" alt="周子苏" class="TeamMasterImg">
      </div>
      <h3 class="member-name">周子苏</h3>
      <p class="member-info">主攻方向：数据挖掘</p>
      <p class="member-info">主要竞赛和项目经历：</p>
      <p>第十二届蓝桥杯全国软件和信息技术专业人才大赛安徽赛区
        Python 程序设计大学组一等奖；</p>
      <p>安徽省大数据与人工智能应用竞赛（大数据现场赛）二等奖；</p>
      <p>第十三届蓝桥杯全国软件和信息技术专业人才大赛国赛 Python
        程序设计 B 组二等奖；</p>
      <p>基于 Java Swing、JDBC 独立实现 ATM 机交易系统</p>
      <p>基于 Python 爬虫技术实现 RCR 论文爬取及关键词分析、爬取
        58 同城租房信息（已实现绕过二级反爬）</p>
    </div>
  </div>
  <h2 class="TeacherTitle">2020级主要学生团队</h2>
  <div class="StudentImgContainer">
  </div>
  <div class="app">
    <div class="team-member">
      <div class="StudentImgContainer">
      <img src="@/assets/Students/LonglongFan.jpg" alt="范龙龙" class="TeamMasterImg">
        </div>
      <h3 class="member-name">范龙龙</h3>
      <p class="member-info">主攻方向：数据挖掘</p>
      <p class="member-info">主要竞赛和项目经历：第十三届蓝桥杯程序设计（Python组）国家级三等奖，计算机博弈省级多项第一</p>
    </div>
    <div class="team-2020">
      <div class="team-2020-item" v-for="(student, index) in Students_2020" :key="index">
        <div class="student-img-container">
          <img :src="student.StudentImg" :alt="student.StudentName" class="student-img">
        </div>
        <h3 class="student-name">{{ student.StudentName }}</h3>
        <p class="student-research-direction">主攻方向:{{ student.StudentResearchDirection }}</p>
        <p>主要竞赛和项目经历：</p>
        <p>{{student.StudentAwards}}</p>
      </div>
    </div>
  </div>
  <div class="Student2021">
  <h2 class="TeacherTitle">2021级主要学生团队</h2>
    <div class="app">
    <div class="StudentImgContainer">
      <img src="@/assets/Students/XIaoyangWang.jpg" alt="王孝阳" class="TeamMasterImg">
    </div>
  <h3 class="team-member">王孝阳</h3>
  <p class="member-info">主攻方向：数据分析与挖掘</p>
  <p class="member-info">主要竞赛和项目经历：主持一项安徽省省级立项项目、安徽省大数据人工智能应用竞赛人工智能（硬件赛一等奖）</p>
    <div class="team-2021">
      <div class="team-2021-item" v-for="(student, index) in Students_2021" :key="index">
        <div class="student-img-container">
          <img :src="student.StudentImg" :alt="student.StudentName" class="student-img">
        </div>
        <h3 class="student-name">{{ student.StudentName }}</h3>
        <p class="saying">"{{ student.StudentInfo }}"</p>
        <p class="student-research-direction">主攻方向:{{ student.StudentResearchDirection }}</p>
        <p>主要竞赛和项目经历：</p>
        <p>{{student.StudentAwards}}</p>
      </div>
    </div>
  </div>
  </div>
<!--  <h2 class="TeacherTitle">2022级学生团队</h2>-->
<!--  <div class="app">-->
<!--  <div class="StudentImgContainer">-->
<!--  <img src="@/assets/Students/MiaoLiu.jpeg" alt="刘淼" class="TeamMasterImg">-->
<!--  </div>-->
<!--  <h3 class="team-member">刘淼</h3>-->
<!--  <p class="member-info">主攻方向：数据分析与挖掘</p>-->
<!--  <p class="member-info">主要竞赛和项目经历：全国大学生电工数学建模竞赛国家级三等奖、2023年国际高校数学建模竞赛特等奖提名</p>-->
<!--  <div class="StudentList2022">-->
<!--    <div class="Team2022Item" v-for="(Student,index) in Students_2022" :key="index">-->
<!--      <div class="StudentImgContainer">-->
<!--        <img :src="Student.StudentImg" :alt="Student.StudentName" class="Student2022Img">-->
<!--      </div>-->
<!--      <h3 class="StudentName">-->
<!--        {{Student.StudentName}}-->
<!--      </h3>-->
<!--      <p>{{Student.StudentResearchDirection}}</p>-->
<!--    </div>-->
<!--  </div>-->
<!--  </div>-->
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Instructor",
  data(){
    return{
      teachers:[
        {
          TeacherName:'陈秀明',
          TeacherResearchDirection:"大数据分析与数据挖掘、智能决策与群推荐",
          image:require("@/assets/TeacherImg/XiumingChen.png")
        },{
          TeacherName:'赵佳',
          TeacherResearchDirection:"计算机视觉、视觉问答",
          image:require("@/assets/TeacherImg/JiaZhao.png")
        },{
          TeacherName:'孙刚',
          TeacherResearchDirection:"人工智能、推荐系统",
          image:require("@/assets/TeacherImg/GangSun.png")
        },{
          TeacherName:'王先超',
          TeacherResearchDirection:"数据挖掘、深度学习",
          image:require("@/assets/TeacherImg/XianchaoWang.png")
        },{
          TeacherName:'王先传',
          TeacherResearchDirection:"自然语言处理、知识图谱",
          image:require("@/assets/TeacherImg/XianchuanWang.png")
        }
      ],
      Students_2019:[
      ],
      Students_2020:[
        {
          StudentName:'韩宇杰',
          StudentResearchDirection:"算法",
          StudentAwards:"安徽省大数据与人工智能竞赛二等奖，蓝桥杯国赛二等奖",
          StudentImg:require("@/assets/Students/YujieHan.jpg")
        },
        {
          StudentName:'洪安',
          StudentResearchDirection:"大数据处理与分析",
          StudentAwards:"计算机博弈国一，安徽省大数据人工智能 (大数据) 省二",
          StudentImg:require("@/assets/Students/AnHong.jpg")
        },
        {
          StudentName:'杨舒云',
          StudentResearchDirection:"数据分析",
          StudentAwards:"计算机博弈国赛围棋冠军，第十四届蓝桥杯程序设计（Python组）省级三等奖",
          StudentImg:require("@/assets/Students/ShuyunYang.jpg"),
        },{
          StudentName:'吴桐',
          StudentResearchDirection:"数据分析",
          StudentAwards:"安徽省大数据人工智能应用竞赛（大数据组）省级二等奖、硬件组省级三等奖",
          StudentImg:require("@/assets/Students/TongWu.jpg"),
        }
        ,
        {
          StudentName:'张朝阳',
          StudentResearchDirection:"凝聚态理论",
          StudentAwards:"蓝桥杯省级二等奖，计算机博弈一等奖，服务外包二等奖",
          StudentImg:require("@/assets/Students/ChaoyangZhang.jpg"),
          StudentInfo: '学的越多，不会的越多'
        }
        ,
        {
          StudentName:'王博',
          StudentResearchDirection:"数据挖掘",
          StudentAwards:"安徽省大数据与人工智能一等奖，计算机博弈国家级二等奖",
          StudentImg:require("@/assets/Students/BoWang.jpg"),
        },
        {
          StudentName:'狄松龙',
          StudentResearchDirection:"数学建模",
          StudentAwards:"蓝桥杯省级一等奖，数学建模省级二等奖，计算机博弈省级二等奖",
          StudentImg:require("@/assets/Students/SonglongDi.jpg"),
        },
        {
          StudentName:'刘道薇',
          StudentResearchDirection:"数学建模",
          StudentAwards:"蓝桥杯国家级三等奖，数学建模省级三等奖",
          StudentImg:require("@/assets/Students/DaoweiLiu.jpg"),
        },
        {
          StudentName:'王银宵',
          StudentResearchDirection:"深度学习",
          StudentAwards:"蓝桥杯省级二等奖，数学建模省级三等奖",
          StudentImg:require("@/assets/Students/YingxiaoWang.jpg"),
        },
        {
          StudentName:'李林森',
          StudentResearchDirection:"Web前端",
          StudentAwards:"安徽省大数据与人工智能应用竞赛（人工智能软件组）一等奖",
          StudentImg:require("@/assets/Students/LingsengLi.jpg"),
        },
        {
          StudentName:'方明',
          StudentResearchDirection:"数据分析",
          StudentAwards:"安徽省大数据与人工智能一等奖，计算机博弈一等奖多项，蓝桥杯省二",
          StudentImg:require("@/assets/Students/MingFang.jpg"),
        },
        {
          StudentName:'姚程静秋',
          StudentResearchDirection:"数学建模",
          StudentAwards:"蓝桥杯省级二等奖，数学建模省级三等奖",
          StudentImg:require("@/assets/Students/ChengjinqiuYao.png"),
        }

      ],
      Students_2021:[
        {
          StudentName:'黄小杰',
          StudentResearchDirection:"数据分析 机器学习",
          StudentAwards:"第十四届蓝桥杯程序设计大赛（Python）国家级三等奖、主持一项安徽省省级立项项目",
          StudentImg:require("@/assets/Students/XiaojieHuang.jpg"),
          StudentInfo: "知不足而奋进，望远山而前行"
        },
        {
          StudentName:'高如林',
          StudentResearchDirection:"数据分析",
          StudentAwards:"第十四届蓝桥杯Python程序设计大学B组国赛三等奖",
          StudentImg:require("@/assets/Students/RulingGao.jpg"),
          StudentInfo: '学的越多，不会的越多'
        },
        {
          StudentName:'韩鹏',
          StudentResearchDirection:"数据挖掘与分析",
          StudentAwards:"安徽省大数据与人工智能硬件组省一等奖，蓝桥杯java组省三等奖，2023年国际高校数学建模竞赛优异奖(M)",
          StudentImg:require("@/assets/Students/PengHan.jpg"),
          StudentInfo: '将注意力和精力放在自己身上'
        },
        {
          StudentName:'张宇翔',
          StudentResearchDirection:"大数据分析 数据可视化",
          StudentAwards:"第十四届蓝桥杯程序设计大赛（Python）国家级二等奖、安徽省大数据人工智能应用竞赛（大数据赛道二等奖）",
          StudentImg:require("@/assets/Students/YuxiangZhang.jpg"),
          StudentInfo:'轻舟已过万重山'
        },
        {
          StudentName:'张玮琪',
          StudentResearchDirection:"Java全栈开发",
          StudentAwards:"第十四届蓝桥杯程序设计大赛（Java）国家级二等奖、安徽省大数据人工智能应用竞赛（大数据赛道二等奖）",
          StudentImg:require("@/assets/Students/WeiqiZhang.jpg"),
          StudentInfo: '...'
        },{
          StudentName:'董晓强',
          StudentResearchDirection:"前端开发",
          StudentAwards:"第十四届蓝桥杯程序设计大赛（Python）国家级三等奖、2023年（第十六届）中国大学生设计大赛国家级三等奖",
          StudentImg:require("@/assets/Students/XiaoqiangDong.jpg"),
          StudentInfo:'急事缓做，缓事急做'
        }
      ],
      Students_2022:[

      ]


    }
  }
};
</script>

<style>
.Team-list {
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: space-between; /* 在一行中平均分布 */
}

.Team-item {
  text-align: center; /* 文字居中 */
  margin: 10px; /* 调整项目间距 */
}

.TeacherImg {
  width: 100px; /* 调整照片尺寸 */
  height: 100px;
  border-radius: 50%; /* 设置照片为圆形 */
  overflow: hidden; /* 隐藏超出边界的部分 */
  margin: 0 auto; /* 居中显示 */
}

.circle-image img {
  display: block;
  width: 100%; /* 让图片充满圆形容器 */
  height: 100%;
  object-fit: cover; /* 保持图片比例不变并覆盖整个容器 */
}
.TeacherTitle {
  font-size: 28px; /* 字体大小 */
  font-weight: bold; /* 字体粗细 */
  background: linear-gradient(135deg, #0d65dc, #011828); /* 背景渐变 */
  -webkit-background-clip: text; /* 将背景渐变应用于文本 */
  background-clip: text;
  border: 2px solid transparent; /* 透明边框 */
  border-radius: 10px; /* 边框圆角 */
  padding: 10px 20px; /* 内边距 */
  text-align: center; /* 文字居中 */
  margin-bottom: 20px; /* 底部间距 */
  color: transparent; /* 文本颜色透明 */
  -webkit-text-fill-color: transparent; /* Webkit 浏览器支持的透明文本颜色 */
}


.Team-list {
  display: flex;
  justify-content: space-between;
}

.Team-item {
  text-align: center;
  margin: 10px;
}

/* 居中样式 */
.TeamMasterImg,
.StudentImgContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 照片圆形样式 */
.TeamMasterImg,
.Student2019Img,
.Student2022Img {
  width: 100px; /* 适当调整照片尺寸 */
  height: 100px; /* 适当调整照片尺寸 */
  border-radius: 50%; /* 将照片变成圆形 */
}

/* 其他样式 */
.app {
  padding: 20px;
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
  text-align: center;
}

.team-member {
  margin-top: 40px;
}

.member-name {
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
}

.member-info {
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
}
.team-2021,
.team-2020 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}
.team-2021-item,
.team-2020-item {
  flex: 0 0 calc(33.33% - 20px);
  margin: 10px;
  padding: 15px;
  background: linear-gradient(to right, #d9dccd, #aba7ce);
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}
.team-2021-item:hover,
.team-2020-item:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(108, 14, 14, 0.2);
}

.student-img-container {
  text-align: center;
}

.student-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

.student-name {
  font-size: 20px;
  margin-top: 10px;
  color: #333;
}

.student-research-direction {
  font-size: 16px;
  color: #555;
  margin-top: 5px;
}

.saying{
  font-size: 16px;
  color: #836c6c;
  margin-top: 5px;
}
</style>
