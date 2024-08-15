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
        <h3>成都站·金陵大学</h3>
        <p>“‌草树云山如锦绣,秦川得及此间无”</p>
        <p>
          成都，巴山蜀水，天府之国，人杰地灵，群英荟萃。自古便是华夏腹地的成都，是我国抗战时期真正的大后方，无数百姓与机构将其作为战时的栖息地、西迁的最优选。
        </p>
        <img
          src="../../assets/presentationView/成都/红瓦寺街实景.png"
          alt="红瓦寺街"
        />
        <h2>红瓦寺街实景</h2>
        <p>
          金陵大学仓促间开始西迁，历经九江、武汉、宜昌的滞留与辗转，终于三月后抵达了成都，得到了当时华西大学的大力支持，并与其他大学形成五大学联合办学的乐章，开始了战时后方高等教育建设的峥嵘岁月。
        </p>
        <img
          src="../../assets/presentationView/成都/黉门街实景.png"
          alt="黄门街"
        />
        <h2>黄门街实景</h2>
        <p>
          成都也是调研行程的最终章。团队走访四川省档案馆、四川大学华西校区、红瓦寺、金陵路等地。在四川省档案馆，以“金陵大学”“中央大学”“金陵路”等为关键词进行索引，进行充分的排查与确认，得到1547条电子档案名录，67份档案原件复印件，还有不计其数的民国时期纸质档案。钟楼，是四川大学华西校区的标志性建筑，充满血与泪的抗战时期，为金陵大学乃至华西五大学坚持求学的学生们注入了时代的强音。后续新建的校舍原址位于红瓦寺街、金陵路等地，如今已基本成为商业街，以另一种形式诉说历史。
        </p>
        <img
          src="../../assets/presentationView/成都/团队成员在四川大学调研.png"
          alt="四川大学"
        />
        <h2>团队成员在四川大学调研</h2>
        <p>
          胜利的凯歌终将奏响，被迫远离的学子亦将回归故土。1945年8月21日，日本宣布无条件投降。凶恶的日寇终究是败给了正义。举国欢腾下，昔日被迫迁徙的高校也开始打算回到故乡。金陵大学柯象峰于返回旧校址后向其余联合办学的四校去涵写道：“敝校避难迁蓉，匆匆八载，其间多承鼎力协助，俾惠良多，公私感切，匪可言喻”。
        </p>
        <p>漫步大街小巷，这一刻，我们与前辈的身影，悄然重合。</p>
        <img
          src="../../assets/presentationView/成都/团队成员在四川省档案馆合影.png"
          alt="四川档案馆"
        />
        <h2>团队成员在四川省档案馆合影</h2>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.all {
  display: flex;
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
