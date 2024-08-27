<template>
  <div class="all">
    <el-container class="nav-index">
      <router-link to="/result/regional">地域风物</router-link>
      <router-link to="/result/history">口述历史</router-link>
      <router-link to="/result/compilation">史料汇编</router-link>
      <router-link to="/result/archive">档案汇编</router-link>
    </el-container>
    <el-container class="content">
      <el-container class="his-word">
        <p>
          “上午船上开饭时，饭菜尚未送到舱口，已被甲板上的人抢光，致舱内的人都未能吃到，船上供应伙食仅上下午两餐。第三天上午八时船只抵九江，暂时停泊，限上岸者于四五分钟内回船。我们派教职员及同学代表七人上街购置食物，我为其中之一。街上逃难的人甚多，致无法在一、二处买到所需的东西，于是大家分头各处搜购馒头与烧饼，赶回船时，已在起锚，开船时尚有三位代表未回，留在九江。”
        </p>
        <p>------某金陵大学校友</p>
      </el-container>
      <el-container class="his-word">
        <p>
          “因为这场会议，所以后来学校觉得这栋楼可能有价值，所以我们找建筑学院负责文物保护修复的老师重新做了设计，并研究历史，考察这栋楼何时修建，周恩来是否在此发表过演讲并取得成果。最终将这里外立面完全恢复成原先样貌，并将其作为展厅”
        </p>
        <p>------重庆大学龙灏教授谈及七七抗战大礼堂的修复工作</p>
      </el-container>
      <el-container class="his-word">
        <p>
          “1938年10月，武汉沦陷，宜昌有三万以上人员和九万吨以上军工物资急需抢运入川，日军也正在进攻，宜昌十分危急。然而，长江上游滩多流急，船只太小，运输能力有限，枯水季节又即将来临，情况非常严峻。卢作孚先生在此从武汉飞到宜昌，立即召集各轮船公司负责人开会，定出最佳的运输方案，冒着敌机轰炸投入抢运，白天航行，夜间装卸，仅用40天时间，把人员全部运走，物资也运走三分之二，这就是宜昌大撤退”
        </p>
        <p>------民生公司负责人</p>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.all {
  display: flex;
  background-image: url("../../assets/MyMemory/背景3.jpg");
  background-size: cover; /* 确保背景图片覆盖整个元素 */
  background-position: center; /* 背景图片居中显示 */
  background-attachment: fixed; /* 背景图片固定，不随滚动条滚动 */
}
.nav-index {
  position: fixed;
  margin-top: 30px;
  font-family: "华文中宋";
  font-size: 20px;
  line-height: 2;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 150px;
  height: 160px;
  background-color: rgb(120, 41, 120);
}
.nav-index a {
  text-decoration: none;
  text-align: center;
  color: white;
}
a:hover {
  background: white;
  color: black;
}
.content {
  margin-left: 300px;
  width: 1100px;
  align-items: center;
}
.content h2 {
  color: rgb(120, 41, 120);
  text-align: center;
}
.his-word {
  margin-top: 30px;
  width: 1000px;
  height: 200px;
  border: 1px solid;
  background-image: url("../../assets/historyDictation/2.png");
  background-size: cover;
}
.his-word p {
  font-family: "华文中宋";
  font-size: large;
  text-indent: 2em;
}
</style>
