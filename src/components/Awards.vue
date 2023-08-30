<template>
  <h1 class="awards_title">比赛介绍及荣誉</h1>
  <div class="awards">
    <h2 class="CAAITitle"> <a style="text-decoration: none;" href="https://computergames.caai.cn/" target="_blank" rel="noopener noreferrer">计算机博弈大赛</a></h2>
    <h3 class="CAAIIntroductionTitle">赛事简介</h3>
    <div class="CAAIIntroduction">  根据《国家中长期教育改革和发展规划纲要(2010-2020年)》提出的全面实施素质教育，坚持能力培养的要求，为有效提高学生计算机水平、科研能力，增强创新意识，全面提高学生科学素质，拟在全国高等学校开展计算机博弈大赛。
      每年一次的全国大学生计算机博弈大赛暨全国计算机博弈锦标赛，由教育部高等学校计算机类专业教学指导委员会与中国人工智能学会机器博弈专业委员会共同组成的全国大学生计算机博弈大赛组委会主办，以吸引、鼓励广大学生踊跃参加课外科技活动，培育大学生创新意识，丰富大学校园文化，为优秀人才脱颖而出创造条件。
      计算机博弈(Computer Games)，亦称机器博弈，是一个挑战无穷、生机勃勃的研究领域。计算机博弈大赛坚持以学生喜闻乐见的、高对抗性的娱乐载体(如中国象棋、围棋、连珠棋等)为研究载体，以理论与实际系统构建相结合为原则，调动大学生学习与研究热情，激发大学生创新潜能，培养大学生科学素养、团队协作能力和专业技术实践技能。这项大赛投入低（一台能联网的电脑即可满足），适合团队协作，方便组队，利于与专业课程及其知识对接；操作性强，竞赛规则透明，竞赛成绩判定准确，能充分保证公平、公开和公正。</div>
    <div class="award-list">
      <div class="award-item" v-for="(award, index) in awardsCAAI" :key="index">
        <img :src="award.image" :alt="award.title">
        <h3>{{ award.title }}</h3>
        <p>{{ award.description }}</p>
        <p>队伍核心：{{award.member}}</p>
      </div>
    </div>
  </div>
  <div class="awards">
    <h2 class="CAAITitle"> <a style="text-decoration: none;" href="https://computergames.caai.cn/" target="_blank" rel="noopener noreferrer">蓝桥杯全国软件和信息技术专业人才大赛个人赛</a></h2>
    <h3 class="CAAIIntroductionTitle">赛事简介</h3>
    <div class="CAAIIntroduction">  蓝桥杯全国软件和信息技术专业人才大赛是由中华人民共和国工业和信息化部人才交流中心主办，国信蓝桥教育科技（北京）股份有限公司承办的计算机类学科竞赛。</div>
    <div class="award-list">
      <div class="award-item" v-for="(award, index) in awardsLanqiao" :key="index">
        <img :src="award.image" :alt="award.title">
        <h3>{{ award.title }}</h3>
        <p>{{ award.description }}</p>
        <p>获奖个人：{{award.member}}</p>
      </div>
    </div>
  </div>
  <div class="awards">
    <h2 class="CAAITitle"> <a style="text-decoration: none;" href="https://computergames.caai.cn/" target="_blank" rel="noopener noreferrer">蓝桥杯全国软件和信息技术专业人才大赛个人赛（国赛）</a></h2>
    <h3 class="CAAIIntroductionTitle">赛事简介</h3>
    <div class="CAAIIntroduction">  蓝桥杯全国软件和信息技术专业人才大赛是由中华人民共和国工业和信息化部人才交流中心主办，国信蓝桥教育科技（北京）股份有限公司承办的计算机类学科竞赛。</div>
    <div class="award-list">
      <div class="award-item" v-for="(award, index) in awardsLanqiaoG" :key="index">
        <img :src="award.image" :alt="award.title">
        <h3>{{ award.title }}</h3>
        <p>{{ award.description }}</p>
        <p>获奖个人：{{award.member}}</p>
      </div>
    </div>
  </div>
  <div class="awards">
    <h2 class="CAAITitle"> <a style="text-decoration: none;" href="https://computergames.caai.cn/" target="_blank" rel="noopener noreferrer">安徽省大数据人工智能应用竞赛</a></h2>
    <h3 class="CAAIIntroductionTitle">赛事简介</h3>
    <div class="CAAIIntroduction">   安徽省大数据与人工智能应用竞赛是安徽省教育厅主办，安徽省内各高校承办，安徽省省内部分企业协办，属于B类赛事。

      安徽省大数据与人工智能应用竞赛本竞赛主要目的是推动安徽省各高校大数据与人工智能相关专业的建设，培养安徽省大学生大数据与人工智能技能、数据科学思维、实践能力和协作能力，提高大学生的大数据与人工智能的创新创业能力，以适应大数据与人工智能技术应用领域快速增长的人才需求。

    </div>
    <div class="award-list">
      <div class="award-item" v-for="(award, index) in awardsAHB" :key="index">
        <img :src="award.image" :alt="award.title">
        <h3>{{ award.title }}</h3>
        <p>{{ award.description }}</p>
        <p>获奖个人：{{award.member}}</p>
      </div>
    </div>
  </div>
  <div class="awards">
    <h2 class="CAAITitle"> <a style="text-decoration: none;" href="https://computergames.caai.cn/" target="_blank" rel="noopener noreferrer">安徽省大学生计算机博弈大赛（AHCG）</a></h2>
    <h3 class="CAAIIntroductionTitle">赛事简介</h3>
    <div class="CAAIIntroduction">   国务院发布的《新一代人工智能发展规划》中明确指出：支持开展人工智能竞赛。计算机博弈竞赛特别符合人工智能发展的需要，符合新工科人才培养的需要。

      计算机博弈(ComputerGames)，亦称机器博弈，是一个挑战无穷、生机勃勃的研究领域。计算机博弈大赛坚持以学生喜闻乐见的、高对抗性的棋牌游戏为载体，以理论与实际系统构建相结合为原则，利于与专业课程及其知识对接，可操作性强，适合团队协作；竞赛规则透明，竞赛成绩判定准确，能充分保证竞赛的公平、公开、公正。该竞赛旨在调动大学生学习与研究热情，有效提高大学生计算机水平，激发大学生创新潜能，培养大学生科学素养和专业技术实践技能，为优秀的人工智能人才脱颖而出创造条件。
    </div>
    <div class="award-list">
      <div class="award-item" v-for="(award, index) in awardsAHCG" :key="index">
        <img :src="award.image" :alt="award.title">
        <h3>{{ award.title }}</h3>
        <p>{{ award.description }}</p>
        <p>获奖个人：{{award.member}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Awards",
  data() {
    return {
      awardsCAAI: [
        {
          title: "阜阳师范大学 咬定青山不放松(Bamboo in the Rock)——冠军",
          description: "2023年”竞技世界杯“中国大学生计算机博弈大赛暨第十七届中国计算机博弈锦标赛",
          image: require("@/assets/AwardCertificate/champion.jpg"), // Provide the image path
          member:"杨舒云 方明 范龙龙"
        },
        {
          title: "阜阳师范大学 咬定青山不放松(Bamboo in the Rock)——季军",
          description: "2023年”竞技世界杯“中国大学生计算机博弈大赛暨第十七届中国计算机博弈锦标赛",
          image: require('@/assets/AwardCertificate/BronzeMedalist.jpg'), // Provide the image path
          member:"姚欣 吴尔杰 余显良"
        },
        // Add more awards
      ],
      awardsBigdata: [
        {
          title: "阜阳师范大学 咬定青山不放松(Bamboo in the Rock)——冠军",
          description: "2023年”竞技世界杯“中国大学生计算机博弈大赛暨第十七届中国计算机博弈锦标赛",
          image: require("@/assets/AwardCertificate/champion.jpg") // Provide the image path
        },
        {
          title: "Gold Medal",
          description: "Received for first place in the national competition...",
          image: require('@/assets/AwardCertificate/BronzeMedalist.jpg') // Provide the image path
        },
        // Add more awards
      ],
      awardsLanqiao: [
        {
          title: "第十四届蓝桥杯程序设计大赛省级一等奖",
          description: "第十四届蓝桥杯程序设计大赛（安徽赛区）",
          image: require("@/assets/AwardCertificate/Lanqiao/829875_狄松龙.jpg"),
          member:"狄松龙"// Provide the image path
        },
        {
          title: "第十四届蓝桥杯程序设计大赛省级一等奖",
          description: "第十四届蓝桥杯程序设计大赛（安徽赛区）",
          image: require('@/assets/AwardCertificate/Lanqiao/829882_张玮琪.jpg'), // Provide the image path
          member:"张玮琪"// Provide the image path

        },
        {
          title: "第十四届蓝桥杯程序设计大赛省级一等奖",
          description: "第十四届蓝桥杯程序设计大赛（安徽赛区）",
          image: require('@/assets/AwardCertificate/Lanqiao/838782_董晓强.jpg'),
          member:"董晓强"// Provide the image path

        },
        {
          title: "第十四届蓝桥杯程序设计大赛省级一等奖",
          description: "第十四届蓝桥杯程序设计大赛（安徽赛区）",
          image: require('@/assets/AwardCertificate/Lanqiao/838784_张宇翔.jpg') // Provide the image path
          ,
          member:"张宇翔"// Provide the image path
        },
        {
          title: "第十四届蓝桥杯程序设计大赛省级一等奖",
          description: "第十四届蓝桥杯程序设计大赛（安徽赛区）",
          image: require('@/assets/AwardCertificate/Lanqiao/838794_黄小杰.jpg') // Provide the image path
          ,
          member:"黄小杰"// Provide the image path
        },
        {
          title: "第十四届蓝桥杯程序设计大赛省级一等奖",
          description: "第十四届蓝桥杯程序设计大赛（安徽赛区）",
          image: require('@/assets/AwardCertificate/Lanqiao/838785_刘道薇.jpg') // Provide the image path
          ,
          member:"刘道薇"// Provide the image path
        },
        {
          title: "第十四届蓝桥杯程序设计大赛省级一等奖",
          description: "第十四届蓝桥杯程序设计大赛（安徽赛区）",
          image: require('@/assets/AwardCertificate/Lanqiao/838788_方松.jpg') // Provide the image path
          ,
          member:"方松"// Provide the image path
        },
        {
          title: "第十四届蓝桥杯程序设计大赛省级一等奖",
          description: "第十四届蓝桥杯程序设计大赛（安徽赛区）",
          image: require('@/assets/AwardCertificate/Lanqiao/838790_高如林.jpg') // Provide the image path
          ,
          member:"高如林"// Provide the image path

        },
        {
          title: "第十四届蓝桥杯程序设计大赛省级一等奖",
          description: "第十四届蓝桥杯程序设计大赛（安徽赛区）",
          image: require('@/assets/AwardCertificate/Lanqiao/838783_韩宇杰.jpg') // Provide the image path
          ,
          member:"韩宇杰"// Provide the image path
        }
        // Add more awards
      ],
      awardsLanqiaoG:[
        {
          title: "第十四届蓝桥杯程序设计大赛国家级二等奖",
          description: "第十四届蓝桥杯程序设计大赛（全国赛）",
          image: require('@/assets/AwardCertificate/LanqiaoG/ZWQ.jpg'),
          member:"张玮琪"
        },
        {
          title: "第十四届蓝桥杯程序设计大赛国家级三等奖",
          description: "第十四届蓝桥杯程序设计大赛（全国赛）",
          image: require('@/assets/AwardCertificate/LanqiaoG/GRL.jpg'),
          member:"高如林"
        }
      ],
      awardsAHB:[
        {
          title: "安徽省大数据人工智能应用竞赛（人工智能-软件赛道）一等奖",
          description: "安徽省大数据人工智能应用竞赛（人工智能-软件赛道）",
          image: require('@/assets/AwardCertificate/AHB/RG_1.jpg'),
          member: "李林森 王博 方明"
        },
        {
          title: "安徽省大数据人工智能应用竞赛（人工智能-软件赛道）二等奖",
          description: "安徽省大数据人工智能应用竞赛（人工智能-软件赛道）",
          image: require('@/assets/AwardCertificate/AHB/RG_2.jpg'),
          member:"方明 王博 高如林"
        },
        {
          title: "安徽省大数据人工智能应用竞赛（人工智能-软件赛道）三等奖",
          description: "安徽省大数据人工智能应用竞赛（人工智能-软件赛道）",
          image: require('@/assets/AwardCertificate/AHB/RG_3.jpg'),
          member:"王孝阳 臧泉昆 黄小杰"
        },
        {
          title: "安徽省大数据人工智能应用竞赛（人工智能-软件赛道）二等奖",
          description: "安徽省大数据人工智能应用竞赛（人工智能-软件赛道）",
          image: require('@/assets/AwardCertificate/AHB/CCF20230221_0006_00.jpg'),
          member:"姚程静秋 王银宵 梁家畅"
        },
        {
          title: "安徽省大数据人工智能应用竞赛（人工智能-软件赛道）一等奖",
          description: "安徽省大数据人工智能应用竞赛（人工智能-软件赛道）",
          image: require('@/assets/AwardCertificate/AHB/CCF20230221_0009_00.jpg'),
          member:"王宇 余正涛 郭晨靓"
        }
        ,{
          title: "安徽省大数据人工智能应用竞赛（人工智能-硬件赛道）一等奖",
          description: "安徽省大数据人工智能应用竞赛（人工智能-软件赛道）",
          image: require('@/assets/AwardCertificate/AHB/RG_Y_1.jpg'),
          member: "王孝阳 韩鹏"
        },
        {
          title: "安徽省大数据人工智能应用竞赛（人工智能-硬件赛道）二等奖",
          description: "安徽省大数据人工智能应用竞赛（人工智能-软件赛道）",
          image: require('@/assets/AwardCertificate/AHB/RG_Y_2.jpg'),
          member: "方明 王博 韩宇杰"
        },
        {
          title: "安徽省大数据人工智能应用竞赛（人工智能-硬件赛道）三等奖",
          description: "安徽省大数据人工智能应用竞赛（人工智能-硬件赛道）",
          image: require('@/assets/AwardCertificate/AHB/RG_Y_3.jpg'),
          member: "吴彤 黄小杰"
        },
        {
          title: "安徽省大数据人工智能应用竞赛（人工智能-硬件赛道）三等奖",
          description: "安徽省大数据人工智能应用竞赛（人工智能-硬件赛道）",
          image: require('@/assets/AwardCertificate/AHB/RG_Y_4.jpg'),
          member: "狄松龙 臧泉昆"
        },
        {
          title: "安徽省大数据人工智能应用竞赛（大数据赛道）二等奖",
          description: "安徽省大数据人工智能应用竞赛（大数据赛道）",
          image: require('@/assets/AwardCertificate/AHB/CCF20230221_0005_00.jpg'),
          member: "范龙龙 洪安 王孝阳"
        },
        {
          title: "安徽省大数据人工智能应用竞赛（大数据赛道）二等奖",
          description: "安徽省大数据人工智能应用竞赛（大数据赛道）",
          image: require('@/assets/AwardCertificate/AHB/CCF20230221_0005_00.jpg'),
          member: "吴彤 韩宇杰 黄小杰"
        },
        {
          title: "安徽省大数据人工智能应用竞赛（大数据赛道）二等奖",
          description: "安徽省大数据人工智能应用竞赛（大数据赛道）",
          image: require('@/assets/AwardCertificate/AHB/CCF20230221_0004_00.jpg'),
          member: "张宇翔 臧泉昆 张玮琪"
        }



      ],
      awardsAHCG:[
        {
          title: "安徽省大学生计算机博弈大赛——五子棋赛道——省级一等奖",
          description: "安徽省大学生计算机博弈大赛（五子棋赛道）",
          image: require('@/assets/AwardCertificate/AHCG/五子棋一等奖一骑绝尘--学生：范龙龙、方明、王孝阳；导师：陈秀明、王先传_00.jpg'),
          member: "范龙龙 方明 王孝阳"
        },
        {
          title: "安徽省大学生计算机博弈大赛——五子棋赛道——省级三等奖",
          description: "安徽省大学生计算机博弈大赛（五子棋赛道）",
          image: require('@/assets/AwardCertificate/AHCG/五子棋三等奖天马行空队--学生：张玮琪、丁俊凯、李由；导师：南淑萍、张杰_00.jpg'),
          member: "张玮琪 丁俊凯 李由"
        },
        {
          title: "安徽省大学生计算机博弈大赛——亚马逊棋赛道——省级三等奖",
          description: "安徽省大学生计算机博弈大赛（亚马逊棋赛道）",
          image: require('@/assets/AwardCertificate/AHCG/亚马逊棋三等奖欧镁尬--学生：李泽同、杨舒云、张朝阳；导师：赵佳、孙刚_00.jpg'),
          member: "李泽同 杨舒云 张朝阳"
        },
        {
          title: "安徽省大学生计算机博弈大赛——六子棋赛道——省级一等奖",
          description: "安徽省大学生计算机博弈大赛（六子棋赛道）",
          image: require('@/assets/AwardCertificate/AHCG/六子棋一等奖极客六子--学生：王孝阳、黄小杰、余显良；导师：王先传、陈秀明_00.jpg'),
          member: "王孝阳 黄小杰 余显良"
        },
        {
          title: "安徽省大学生计算机博弈大赛——六子棋赛道——省级二等奖",
          description: "安徽省大学生计算机博弈大赛（六子棋赛道）",
          image: require('@/assets/AwardCertificate/AHCG/六子棋二等奖纳西妲--学生：王博、洪安、黄小杰；导师：南淑萍、张杰_00.jpg'),
          member: "王博、洪安、黄小杰"
        },
        {
          title: "安徽省大学生计算机博弈大赛——幻影围棋赛道——省级一等奖",
          description: "安徽省大学生计算机博弈大赛（幻影围棋棋赛道）",
          image: require('@/assets/AwardCertificate/AHCG/幻影围棋一等奖One--学生：方明、范龙龙、高如林；导师：齐保峰、张炳明_00.jpg'),
          member: "方明 范龙龙 高如林"
        },
        {
          title: "安徽省大学生计算机博弈大赛——幻影围棋赛道——省级二等奖",
          description: "安徽省大学生计算机博弈大赛（幻影围棋赛道）",
          image: require('@/assets/AwardCertificate/AHCG/幻影围棋二等奖与非门--学生：王凯、张子豪、彭金苗；导师：侯大有、王先超_00.jpg'),
          member: "王凯 张子豪 彭金苗"
        },
        {
          title: "安徽省大学生计算机博弈大赛——海克斯赛道——省级二等奖",
          description: "安徽省大学生计算机博弈大赛（海克斯赛道）",
          image: require('@/assets/AwardCertificate/AHCG/海克斯棋三等奖科技与狠活--学生：邓泽松、谢雨彤、张乐；导师：张炳明、齐保峰_00.jpg'),
          member: "邓泽松 谢雨彤 张乐"
        },
        {
          title: "安徽省大学生计算机博弈大赛——点格棋赛道——省级二等奖",
          description: "安徽省大学生计算机博弈大赛（点格棋赛道）",
          image: require('@/assets/AwardCertificate/AHCG/点格棋二等奖左手LPL--学生：朱晋华、范龙龙、方明；导师：侯大有、王先超_00.jpg'),
          member: "朱晋华 范龙龙 方明"
        },
        {
          title: "安徽省大学生计算机博弈大赛——艾恩斯坦棋赛道——省级二等奖",
          description: "安徽省大学生计算机博弈大赛（艾恩斯坦棋赛道）",
          image: require('@/assets/AwardCertificate/AHCG/爱恩斯坦棋二等奖海飞斯--学生：狄松龙、洪安、张宇翔；导师：李振杰、朱明山_00.jpg'),
          member: "狄松龙 洪安 张宇翔"
        },
        {
          title: "安徽省大学生计算机博弈大赛——苏拉卡塔尔棋赛道——省级二等奖",
          description: "安徽省大学生计算机博弈大赛（艾恩斯坦棋赛道）",
          image: require('@/assets/AwardCertificate/AHCG/苏拉卡尔塔棋二等奖泰坦之舟--学生：张朝阳、鲍凯悦、蒋慎杰；导师：朱明山、李振杰_00.jpg'),
          member: "张朝阳 鲍凯悦 蒋慎杰"
        },
        {
          title: "安徽省大学生计算机博弈大赛——苏拉卡塔尔棋赛道——省级二等奖",
          description: "安徽省大学生计算机博弈大赛（苏拉卡塔尔棋赛道）",
          image: require('@/assets/AwardCertificate/AHCG/苏拉卡尔塔棋二等奖摩拉克斯--学生：洪安、王博、杨炘盛；导师：陈秀明、王先传_00.jpg'),
          member: "洪安 王博 杨炘盛"
        }

      ]

    };
  }
};
</script>

<style>
.awards {
  text-align: center;
}

.award-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.award-item {
  border: 1px solid #ccc;
  padding: 20px;
  max-width: 300px;
  text-align: center;
}

.award-item img {
  max-width: 100%;
}
.awards_title {
  font-size: 28px;
  font-weight: bold;
  color: transparent;
  background-image: linear-gradient(to right, #91895b, #ffaf00);
  -webkit-background-clip: text;
  background-clip: text;
  text-align: center;
  margin-bottom: 20px;
  border: 2px solid #ffd700;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.CAAITitle{
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}
.CAAIIntroductionTitle{
  font-size: 24px;
  color: #007bff;
  margin-top: 20px;
}
.CAAIIntroduction{
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  margin-top: 10px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
