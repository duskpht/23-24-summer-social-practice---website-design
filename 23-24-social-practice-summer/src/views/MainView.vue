<template>
  <div class="all">
    <img
      src="../assets/mainView/main-pic/标题.png"
      alt="重走西迁路"
      class="main-pic"
    />
    <el-container class="uni-history">
      <el-container class="uni-pic">
        <img
          src="../assets/mainView/uni-history/南京.jpg"
          alt="南京"
          style="height: 100%"
        />
      </el-container>
      <el-container class="uni-word">
        <p>
          二源合流，百廿沧桑。南京大学校史，是古韵悠长的歌，也是沧海桑田的时代印记。从三江师范学堂到国立中央大学与金陵大学并立，再共同孕育如今的南京大学，悠悠岁月赋予深厚底蕴，也铭记前辈们的光辉事迹。如今，北大楼嵯峨依旧，一如近百年前举校西迁时。寻觅散落印痕，拂去满身尘埃，记忆仍清晰如昨日，愿你我一同追忆。
        </p>
      </el-container>
    </el-container>
    <h2>南大校史</h2>
    <img
      src="../assets/mainView/introduction/中国（部分）.png"
      alt="部分中国地图"
      class="china-map"
    />
    <h2>西迁路线图(待补充)</h2>
    <el-container class="introduction">
      <el-container class="map-nav">
        <el-button @click="getMessage(0)" type="primary"> 南京 </el-button>
        <el-button @click="getMessage(1)" type="primary"> 九江 </el-button>
        <el-button @click="getMessage(2)" type="primary"> 武汉 </el-button>
        <el-button @click="getMessage(3)" type="primary"> 宜昌 </el-button>
        <el-button @click="getMessage(4)" type="primary"> 重庆 </el-button>
        <el-button @click="getMessage(5)" type="primary"> 成都 </el-button>
      </el-container>
      <el-container class="map">
        <el-container class="concrete-content" v-if="isVisible[0]">
          <img
            src="../assets/mainView/introduction/南京.jpg"
            alt="南京"
            style="height: 100%"
          />
        </el-container>
        <el-container class="concrete-content" v-if="isVisible[1]">
          <img
            src="../assets/mainView/introduction/九江图片.png"
            alt="九江"
            style="width: 100%"
          />
        </el-container>
        <el-container class="concrete-content" v-if="isVisible[2]">
          <img
            src="../assets/mainView/introduction/武汉.png"
            alt="武汉"
            style="width: 100%"
          />
        </el-container>
        <el-container class="concrete-content" v-if="isVisible[3]">
          <img
            src="../assets/mainView/introduction/宜昌.jpg"
            alt="宜昌"
            style="width: 100%"
          />
        </el-container>
        <el-container class="concrete-content" v-if="isVisible[4]">
          <img
            src="../assets/mainView/introduction/重庆.png"
            alt="重庆"
            style="width: 100%"
          />
        </el-container>
        <el-container class="concrete-content" v-if="isVisible[5]">
          <img
            src="../assets/mainView/introduction/成都.jpg"
            alt="成都"
            style="width: 100%"
          />
        </el-container>
      </el-container>
      <el-container class="result">
        <el-container class="concrete-content" v-if="isVisible[0]">
          <p>
            南京是两校旧址所在与西迁起点，也是本次团队寻访起点。寻脉向西，厘清西迁往事，鉴往而知来。金陵大学旧址所在现为南京大学鼓楼校区，国立中央大学旧址则位于今东南大学四牌楼校区。团队于两地拍摄实景照片，并在中山码头采访游客与工作人员。在今夕对比中感悟历史变迁，深情回望西迁历史足迹。
          </p>
        </el-container>
        <el-container class="concrete-content" v-if="isVisible[1]">
          <p>
            自南京至川渝，路途遥远。金陵大学的师生停靠于九江码头，以同文中学借为西迁中转站，度过了一段短暂时光。本次实践寻访了九江市长江码头、九江市同文中学，进行实景拍摄与档案查阅。获得丰富史料，并得到九江市同文中学校史馆肖鑫馆长的热情接待，轻抚一幅幅旧照，探寻历史痕迹的今日面貌。
          </p>
        </el-container>
        <el-container class="concrete-content" v-if="isVisible[2]">
          <p>
            1937年，烽火连天，硝烟弥漫。金大急需寻找相对安全的地方暂时安置师生，武汉成为金大师生暂时停留的理想之地，师生在此驻足一月有余。与此同时，国立中央大学的学生或在此办理入学，或沿江继续向前。调研过程中，团队先后前往华中师范大学佑铭体育馆、粤汉码头、德林公寓、武汉市档案馆，寻觅当年印痕。
          </p>
        </el-container>
        <el-container class="concrete-content" v-if="isVisible[3]">
          <p>
            宜昌，素有“川鄂咽喉”之称，历来是兵家必争之地。全面抗战开始后，宜昌是四川抗战基地的东大门、民众和物资转运的要道。宜昌大撤退由卢作孚先生亲自安排，短时间内完成大量人员物资转运，最大限度保存实力，被誉为“东方的敦刻尔克大撤退”。团队在此考察宜昌市图书馆、宜昌市档案馆、宜昌九码头、宜昌大撤退纪念园及红星路等地。
          </p>
        </el-container>
        <el-container class="concrete-content" v-if="isVisible[4]">
          <p>
            重庆，是国立中央大学的西迁终点，亦是金陵大学西迁途中的最后一站。国立中央大学最终暂驻于重庆大学校园一隅继续办学，磐溪、西南大学校园中亦有当年校舍遗迹。团队走访了重庆市档案馆、磐溪、重庆大学及西南大学。在重庆大学，龙灏教授带领我们一路参观走访校园，讲解历史。大部分遗迹留存至今，石砖斑驳，树木茂盛，静物无言。
          </p>
        </el-container>
        <el-container class="concrete-content" v-if="isVisible[5]">
          <p>
            成都，巴山蜀水，天府之国，人杰地灵，群英荟萃。自古便是华夏腹地的成都，是我国抗战时期真正的大后方。金陵大学辗转三月后终抵成都，开始了战时后方高等教育建设的峥嵘岁月。金大主校区与华西大学等五校共享，校舍则增设于红瓦巷、金陵路等地。团队走访上述地点，收获千余份电子档案与民国时期纸质档案，于今昔对比中感悟历史。
          </p>
        </el-container>
      </el-container>
    </el-container>
    <h2>西迁简介</h2>
    <el-container class="container">
    <el-container class="propagation">
      <el-container class="pic-link">
        <img
          src="../assets/mainView/propagation/三峡日报.png"
          alt="三峡日报"
          style="height: 200px"
        />
        <h2>“金陵大学西迁”调研活动走进宜昌——三峡日报</h2>
        <a
          href="https://nginx-sxrmtzx.sxrmapp.cn3x.com.cn/sxrmtzx/site1/mweb/202408/19/c661800.html"
          >三峡日报</a
        >
      </el-container>
      <el-container class="pic-link">
        <img
          src="../assets/mainView/propagation/重庆晨报.png"
          alt="重庆晨报"
          style="height: 200px"
        />
        <h2>南京大学学生再走“西迁路” 感悟“西迁”光辉史——重庆晨报</h2>
        <a href="https://chinacqsb.com/">重庆日报</a>
      </el-container>
      <el-container class="text-link">
        <a href="https://mp.weixin.qq.com/s/qroIb4FtbFXA1G6CURXkTA"
          >向西•古都启程 | 中山码头：风雨飘摇之际的温情港湾</a
        >
        <a href="https://mp.weixin.qq.com/s/WDPugPPtm1yXam2_yPy6LA"
          >向西•江畔停泊|九江：长江之畔的文化驿站</a
        >
        <a href="https://mp.weixin.qq.com/s/-GIMocnQvmDUHb4UvBrx8A"
          >向西•江城记忆 | 武汉：楚汉风韵与江城变迁</a
        >
        <a href="https://mp.weixin.qq.com/s/36203Yk_nzuELR_5eDIrDQ"
          >向西•东方的敦刻尔克大撤退 | 宜昌：险象环生的川鄂门户</a
        >
        <a href="https://mp.weixin.qq.com/s/_uHPxlTuWEU6SIw5Pz457A"
          >向西•山城灯火(上) | 重庆：立体都市的社会实践画卷</a
        >
        <a href="https://mp.weixin.qq.com/s/01TKEzBx2Nn7AjmN5VBvbQ"
          >向西•山城灯火(中) |
          寻根问脉，共话时代：南京大学学子在重庆大学重温西迁精神</a
        >
        <a href="https://mp.weixin.qq.com/s/mp6o2QpSv8xnNldUaPjSIQ"
          >向西•山城灯火(下) |
          穿越时光的航迹：南京大学学子探寻民生公司与西迁记忆</a
        >
        <a href="https://mp.weixin.qq.com/s/K6ctvN_DH9bQjAB1cak5-A"
          >向西•天府之国 | 成都：慢生活下的社会实践探索</a
        >
        <h2>公众号链接</h2>
      </el-container>
    </el-container>
    <h2>宣传链接</h2>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: [true, false, false, false, false, false],
    };
  },
  methods: {
    getMessage(index) {
      for (let x = 0; x < 6; x++) {
        if (index == x) {
          this.isVisible[x] = true;
        } else {
          this.isVisible[x] = false;
        }
      }
    },
  },
};
</script>

<style scoped>
.all {
  background-image: url("../assets/MyMemory/背景3.jpg");
  background-size: cover;
  background-position: center; /* 背景图片居中显示 */
  background-attachment: fixed; /* 背景图片固定，不随滚动条滚动 */
}
.main-pic {
  margin-top: 15px;
  margin-left: 15%;
  margin-right: 15%;
  height: 500px;
  width: 70%;
}
.uni-history {
  display: flex;
  margin-top: 30px;
  margin-left: 10%;
  margin-right: 10%;
  height: 500px;
  width: 80%;
  background-image: url("../assets/mainView/uni-history/背景图参考，注意是背景哈.png");
}
.uni-pic {
  margin: 40px;
  width: 18.67%;
  height: 420px;
}
.uni-word {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
  margin-left: 3.33%;
  height: 400px;
  width: 62%;
}
p {
  font-family: "华文中宋";
  text-indent: 2em;
}
.uni-word p {
  font-size: xx-large;
  color: white;
}
.introduction {
  display: flex;
  margin-top: 30px;
  margin-left: 10%;
  margin-right: 10%;
  height: 400px;
  width: 80%;
}
.map-nav {
  width: 90px;
  margin-right: 30px;
  align-items: center;
  justify-content: center;
  background-color: rgb(120, 41, 120);
}
.map-nav button {
  margin-top: 15px;
  margin-left: 10px;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  padding: 0;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  font-family: "华文中宋";
}
.map {
  width: 70%;
  height: 100%;
  margin-right: 30px;
}
.result {
  background-image: url("../assets/historyDictation/8.png");
  background-size: cover;
  margin-left: 15px;
  margin-right: 0;
  width: 33%;
  height: 100%;
  color: black;
}

.concrete-content {
  width: 100%;
  height: 100%;
}
.concrete-content p {
  align-items: center;
  justify-content: center;
  font-size: 22px;
}
.propagation {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 30px;
  width: 80%;
  height: 580px;
}
.pic-link,
.text-link {
  display: flex;
  flex-direction: column;
  margin: 2.5%;
  width: 29.17%;
  height: 440px;
}
.pic-link img {
  margin-top: 30px;
}
.pic-link a {
  font-size: large;
  color: #000;
}
.pic-link a:hover {
  color: white;
  background-color: #000;
}
.pic-link h2 {
  font-size: 20px;
}
.text-link {
  justify-content: center;
}
.text-link a {
  margin: 10px;
  color: blue;
}
.text-link a:hover {
  color: white;
  background-color: #000;
}
a {
  text-decoration: none;
  text-align: center;
  margin: 30px;
}
.china-map {
  margin-top: 30px;
  margin-left: 10%;
}
h2 {
  font-family: "华文中宋";
  font-size: x-large;
  text-align: center;
}
.container{
    display: flex;
    flex-direction: column; /* 垂直排列 */
    align-items: center; /* 水平居中对齐 */
    justify-content: center; /* 垂直居中对齐 */
}
</style>
