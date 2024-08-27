<template>
  <div class="all">
    <el-container class="nav-index">
        <router-link to="/footprint/intro">简介</router-link>
        <router-link to="/footprint/past">溯往</router-link>
        <router-link to="/footprint/today">忆今</router-link>
        <router-link to="/footprint/inspiration">感悟</router-link>
    </el-container>
    <el-container class="image-text-container">
        <el-container class="text">
            团队成员历时十天有余，在线下调研中收获形式多样、内容丰富的各类资料，与校史馆内现存史料相互补充印证，共同填补西迁校史的空缺。在此基础上，我们再将其归类整合汇编成书，按时空顺序再现西迁途中的点点滴滴，是为《西迁足迹》。
            <br>&emsp;&emsp;本书是“重走西迁路，奋进向未来”社会实践项目的最重要成果，分为前言、重走、感悟三大篇章及数十个子篇目，共计十万余字，涵盖从国立中央大学与金陵大学建校、发展到举校西迁，再到抗战胜利回归南京的广阔历史。八十余度春秋已逝，当年地标或存留至今，依旧作为标志性建筑矗立；或名号尚存，但已融入寻常百姓生活，与之密不可分；或随历史飘零，现状已不可考，有关它的一切都止步于史料中。时间确会磨平一切，所以我们更应在记忆完全散落前尽己所能寻觅、记录，令更多人知晓，令其永远活在人们心中。谨将此书呈现给大家，愿我们共同溯往忆今，继往开来，踔厉奋发，共著华章。以下内容均摘录自本书，有少量修改。
        </el-container>

        <div class="image1">
            <img
            src="../../assets/Footprint/简介竖.png"
            alt="简介"
            style="width: 100%"
            />
            <div class="label">《西迁足迹》封面</div>           
        </div>

    </el-container>
  </div>
</template>

<style scoped>
.all {
  display: flex;
  background-image: url('../../assets/MyMemory/背景3.jpg');
  background-size: cover; 
  background-position: center; 
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
.image-text-container{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;  /*在父容器内水平居中*/ 

    width: 1050px;
    height: 700px;
}

.label {
    text-align: center;
    font-size: 17px;
    font-family: "华文中宋";
}
.text {
  display: flex;
  /*margin-top: 10px;*/
  font-family: "华文中宋";
  font-size: 20px;
  flex-direction: column;
  margin-left: 120px;
  margin-right: 30px;
  width: 750px;
  height: 450px;
  justify-content: center;
  text-indent: 2em; 
  line-height: 1.75;
}

</style>