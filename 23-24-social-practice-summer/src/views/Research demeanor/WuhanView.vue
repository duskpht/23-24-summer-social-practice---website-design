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
        <h3>武汉站·国立中央大学 金陵大学</h3>
        <p>“江城如画里，山晚望晴空”</p>
        <p>
          1937年，烽火连天，硝烟弥漫。金陵大学面临着前所未有的挑战——寻找相对安全的地方暂时安置师生，并为下一步迁移做好准备。武汉成为了金大师生暂时停留的理想之地。与此同时，国立中央大学的学生或在此办理入学，或沿江继续向前。
        </p>
        <img
          src="../../assets/presentationView/武汉/粤汉码头.png"
          alt="今日码头"
        />
        <h2>今日的粤汉码头</h2>
        <p>
          调研过程中，团队先后前往华中师范大学佑铭体育馆、粤汉码头、德林公寓、武汉市档案馆。金大的师生们曾在佑铭体育馆借住一月，共克时艰。校史档案馆内存有少量国立中央大学学生毕业证书，纸张泛黄，岁月留痕。它们是时间的信使，传递着历史的温度。
        </p>
        <img
          src="../../assets/presentationView/武汉/佑铭体育馆合影.png"
          alt="体育馆合影"
          style="width: 1000px"
        />
        <h2>佑铭体育馆合影</h2>
        <p>
          粤汉码头曾是中大师生西迁的重要起点。团队在这里拍摄实景照片，并采访当地工作人员与游客。
        </p>
        <img
          src="../../assets/presentationView/武汉/粤汉码头采访.jpg"
          alt="码头采访"
        />
        <h2>粤汉码头采访</h2>
        <p>
          “1937年，乔启明受托租用解汉口特三区湖南街德林楼十三号二楼的四间房间,孚为金大迁得办事处以应对迁得事务”。如今，它静静地守望着会议旧址，每一块砖石都讲述着一段历史。
        </p>
        <img
          src="../../assets/presentationView/武汉/德林楼，金大办事处旧址.png"
          alt="办事处旧址"
        />
        <h2>德林楼，金大办事处旧址</h2>
        <p>
          在武汉市档案馆，团队共带回58件档案复印件和40余张馆藏史料照片。虽由于档案馆的规章制度和保密协议，无法将收获公之于众，但心灵的触动，却如同江水般绵长不息。愿我们在未来的日子里，继续追寻那些被岁月遗忘的故事，让历史的光芒永远照亮我们前行道路。
        </p>
        <img
          src="../../assets/presentationView/武汉/武汉档案馆.png"
          alt="武汉档案馆"
          style="width: 1000px"
        />
        <h2>武汉档案馆</h2>
        <video
          src="../../assets/presentationView/武汉/武汉市档案馆环绕视频.mp4"
          controls
          style="width: 1000px"
        ></video>
        <h2>武汉市档案馆环绕视频</h2>
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
