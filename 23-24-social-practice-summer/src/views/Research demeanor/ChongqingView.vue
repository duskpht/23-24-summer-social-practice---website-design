<template>
  <div class="all">
    <el-container class="nav-index">
      <router-link to="/research/nanjing">南京</router-link>
      <router-link to="/research/jiujiang">九江</router-link>
      <router-link to="/research/wuhan">武汉</router-link>
      <router-link to="/research/yichang">宜昌</router-link>
      <router-link to="/research/chongqing">重庆</router-link>
      <router-link to="/research/chengdu">成都</router-link>
    </el-container>
    <el-container class="content">
      <el-container class="pic">
        <h3>重庆站·国立中央大学 金陵大学</h3>
        <p>“路长知水性，山转见渝州”</p>
        <p>
          在抗日战争的硝烟弥漫中，中国的教育事业并未停歇，而是在炮火与困难中展现出了顽强的生命力。重庆，是国立中央大学的西迁终点，亦是金陵大学西迁途中的最后一站。
        </p>
        <p>
          国立中央大学最终暂驻于重庆大学校园一隅继续办学。四川省政府表达热烈欢迎，重庆大学慷慨借地，卢作孚先生提供船只，展现了在危难时刻重庆社会各界的格局与担当。迁校次年，考虑到因为学生增加校舍不敷，以及建筑密集防空威胁尤重等问题，学校委在重庆嘉陵江对岸磐溪觅地建筑校舍，农学院则因占地面积较大而迁至四川省立教育学院（今西南大学），此后维持格局直至抗战胜利。
        </p>
        <img
          src="../../assets/presentationView/重庆/团队成员在卢作孚纪念馆.png"
          alt="卢作孚纪念馆"
        />
        <h2>团队成员在卢作孚纪念馆</h2>
        <p>
          团队走访了重庆市档案馆、磐溪、重庆大学及西南大学。在档案馆向导的帮助下，团队成员分为三路，细致查阅了珍贵档案资料，对实体及数字资料进行详尽归类整理。在磐溪调研过程中，团队成员发现关于中大在磐溪的发展历史，附近的居民知之甚少，因此我们借机宣传了南京大学的前身校史，居民反馈效果甚好。团队在西南大学北碚校区受到热情接待，志愿者对西南大学的校史及建筑进行了专门的介绍和讲解，并带领一行人游览西南大学校园。
        </p>
        <img
          src="../../assets/presentationView/重庆/团队成员在重庆大学校史馆.png"
          alt="校史馆"
        />
        <h2>团队成员在重庆大学校史馆</h2>
        <img
          src="../../assets/presentationView/重庆/团队成员在重庆大学校史馆听取讲解.png"
          alt="校史馆讲解"
        />
        <h2>团队成员在重庆大学校史馆听取讲解</h2>
        <p>
          重庆大学是本次行程的核心。龙灏教授带领我们一路参观走访校园，讲解历史。龙教授通过当年留下来的中央大学的建筑测绘图，以及遗留下来的中大松林坡老照片，大致确定了当年中大松林坡校址的大门位置。在时间的洗礼下，很多建筑不复当年模样，但所幸因为重大的面积够大，教学以及其他建设用地够用，所以中大在当年的道路以及建筑布局基本没有太大改动，只可惜柏溪校区仅存的或许为当年的传达室建筑遗存在前两年被当地‘保护性拆除重修’了一栋崭新的建筑，实在令人痛心疾首。漫步在松林坡上，用脚步丈量着先辈开垦过的土地，古老的建筑默默无言，诉说着筚路蓝缕的曾经。
        </p>
        <img
          src="../../assets/presentationView/重庆/重庆大学教授带领团队成员参观校园、讲解历史.png"
          alt="参观"
        />
        <h2>重庆大学教授带领团队成员参观校园、讲解历史 -1</h2>
        <img
          src="../../assets/presentationView/重庆/重大教授带领参观2.png"
          alt="参观"
        />
        <h2>重庆大学教授带领团队成员参观校园、讲解历史 -2</h2>
        <img src="../../assets/presentationView/重庆/教授3.png" alt="参观" />
        <h2>重庆大学教授带领团队成员参观校园、讲解历史 -3</h2>
        <img src="../../assets/presentationView/重庆/教授4.png" alt="参观" />
        <h2>重庆大学教授带领团队成员参观校园、讲解历史 -4</h2>
        <img
          src="../../assets/presentationView/重庆/教授与团队成员在国立中央大学大礼堂旧址前合影.png"
          alt="合影"
        />
        <h2>教授与团队成员在国立中央大学大礼堂旧址前合影</h2>
        <p>石砖斑驳，树木茂盛，静物无言。</p>
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
  font-size: large;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 150px;
  height: 210px;
  background-color: purple;
}
.nav-index a {
  margin-top: 10px;
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
  color: purple;
  text-align: center;
}
.pic img {
  margin-top: 30px;
}
.pic {
  margin-top: 30px;
  font-family: "华文中宋";
}
.pic p {
  text-indent: 2em;
  font-size: 30px;
}
.pic h3 {
  font-size: 60px;
  text-align: center;
}
</style>
