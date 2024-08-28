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
        <h3>南京站·启程</h3>
        <p>
          1937
          年7月7日,日本帝国主义者以制造卢沟桥事变为起点,发动了全面侵华战争。国民政府教育部鉴于战事影响，决定处于战区内的学校应当延期开学,并令各校及早寻觅安全地点，以备战局不利时西迁继续办学。经中大校方多方考虑，正式通过西迁决议，举校入川。
        </p>
        <p>
          与中央大学的未雨绸缪不同,抗战之初,金陵大学迁校的准备并不充分。西方人士认为,即使日本打到南京金大仍有美国大使馆的保护。而国民政府方面,则认为公立大学已搬迁,教会大学迁不迁无关紧要。金大自身维持在南京的办学,有助于在抗战的非常时期下,安定首都社会人心以及协助国防研究。但随着局势严重恶化,金大不得不决定西迁。
        </p>
        <img
          src="../../assets/presentationView/南京/国立中央大学旧址.png"
          alt="大学旧址"
          style="width: 1000px"
        />
        <h2>国立中央大学旧址</h2>
        <p>
          两校均由下关码头（也就是如今中山码头）乘船出发，本次实践团队同样也选择中山码头作为寻脉之旅的起点，寻脉向西，厘清西迁往事，鉴往而知来。此外，还寻访了两校旧址，现为南京大学鼓楼校区及东南大学四牌楼校区。
        </p>
        <img
          src="../../assets/presentationView/南京/今日的中山码头.png"
          alt="今日码头"
        />
        <h2>今日的中山码头</h2>
        <p>
          团队在中山码头拍摄实景照片，并与档案馆取得联系，获取珍贵史料影像。在向乘客宣传交流时，团队成员巧妙地将南京大学及其前身在抗战时期西迁的悲壮历程融入历史讲述之中，这不仅丰富了游客们对中山码头的历史故事的认识，也有效提升了公众对南大历史文化的认知与兴趣。两校区的大量历史建筑保留至今，用镜头记录一切，沉心感悟岁月印痕。
        </p>
        <img
          src="../../assets/presentationView/南京/团队成员在中山码头采访游客.png"
          alt="采访游客"
          style="width: 1000px"
        />
        <h2>团队成员在中山码头采访游客</h2>
        <video
          src="../../assets/presentationView/南京/中山码头 调研视频.mp4"
          style="width: 1000px"
          controls
        ></video>
        <h2>中山码头调研视频</h2>
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
  width: 10%;
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
  margin-left: 20%;
  width: 73.33%;
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
  font-size: 25px;
}
.pic h3 {
  font-size: 50px;
  text-align: center;
}
</style>
