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
        <h3>九江站·金陵大学</h3>
        <p>“一山飞峙大江边，跃上葱茏四百旋。”</p>
        <p>
          九江码头，船只穿梭。岁月荏苒，却留下金陵大学师生举校西迁时驻足印迹。与中央大学的未雨绸缪不同，抗战之初，金陵大学并未立刻选择迁校。金大认为，维持在南京办学有助于安定人心以及协助国防研究。随战事恶化，国民政府迁都，金大校方也仓促决议举校西迁，而此时，国立中央大学已基本西迁完毕。
        </p>
        <img
          src="../../assets/presentationView/九江/金大决定西迁文件.png"
          alt="西迁文件"
          style="width: 1000px"
        />
        <h2>金大决定西迁文件</h2>
        <p>
          自南京至川渝，路途遥远。金陵大学的师生停靠于九江码头，以同文中学借为西迁中转站，度过了一段短暂时光。本次实践寻访了九江市长江码头、九江市同文中学，进行实景拍摄与档案查阅。
        </p>
        <p>
          在九江码头，团队利用无人机拍摄了大量图片与视频，俯瞰历史痕迹的今日面貌。
        </p>
        <img
          src="../../assets/presentationView/九江/九江码头景色.png"
          alt="码头景色"
        />
        <h2>九江码头景色</h2>
        <img
          src="../../assets/presentationView/九江/九江码头合影.jpg"
          alt="码头合影"
          style="width: 1000px"
        />
        <h2>九江码头合影</h2>
        <video
          src="../../assets/presentationView/九江/浔阳码头环绕镜头2.mp4"
          style="width: 1000px"
          controls
        ></video>
        <h2>浔阳码头环绕镜头</h2>
        <img
          src="../../assets/presentationView/九江/儒励女中.png"
          alt="儒励女中"
        />
        <h2>儒励女中</h2>
        <img
          src="../../assets/presentationView/九江/儒励办公楼.png"
          alt="儒励办公楼"
        />
        <h2>儒励办公楼</h2>
        <img
          src="../../assets/presentationView/九江/九江市同文中学校史馆参观.png"
          alt="参观"
        />
        <p>
          团队在九江同文中学受到校史馆肖鑫馆长的慷慨接待，并获准查阅了校内的史料档案，并拍摄留影，整理归档，查证补足这段较空白历史。
        </p>
        <p>
          千里辗转，时空对话，旧事依稀。在肖馆长的讲解中管窥着光阴恍惚间穿越两校近百年的风云际遇。在那炮火纷飞，脚步匆忙的时光里，金大时任校长陈裕光为何选择九江同文中学为落脚点让金大师生小住，以及当时情貌已不可考证，但或许恰是两校相似的际遇、坚韧的精神，共生出了这段情深谊长。
        </p>
        <h2>九江市同文中学校史馆参观</h2>
        <img src="../../assets/presentationView/九江/南大贺信.png" alt="贺信" />
        <h2>南大贺信</h2>
        <video
          src="../../assets/presentationView/九江/校史馆.mp4"
          style="width: 1000px"
          controls
        ></video>
        <h2>校史馆</h2>
        <img
          src="../../assets/presentationView/九江/吕沅朋与九江市同文中学肖馆长赠书合影.jpg"
          alt="合影"
        />
        <h2>吕沅朋与九江市同文中学肖馆长赠书合影</h2>
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
  height: 240px;
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
