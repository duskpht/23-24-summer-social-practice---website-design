<template>
  <div class="all">
    <el-container class="title">
      故事分享
    </el-container>

    <!--故事分享1-->
    <div class="image-text-container1">
      <div class="image1">
        <img
          src="../assets/MyMemory/故事分享1.png"
          alt="故事分享1"
          style="width: 100%"
        />
      </div>
      <div class="text1">       
        我知道中山码头原先叫下关码头，是因中山陵先生的灵柩经此到达南京而得名。但是我们对南京大学了解还真不多。我知道西南联大以及《重走》这本书，但第一次了解到国立中央大学同样开展西迁，并由中山码头出发踏上旅途，也获得了更多知识。<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;——中山码头的游客 
      </div>
    </div>

    <!--故事分享2-->
    <div class="image-text-container1">
      <div class="image1">
        <img
          src="../assets/MyMemory/故事分享2.png"
          alt="故事分享2"
          style="width: 100%"
        />
      </div>
      <div class="text1">       
        我在粤汉码头已经工作了九年，对其很有感情。19世纪80年代张之洞先生修建了京汉铁路及粤汉铁路，贯通南北，武汉就是交界处，但因为隔着长江无法连接，所以专门修建了粤汉码头。我听过南京大学，知道其前身是国立中央大学，但不了解学校的西迁历史，今天很高兴能多了解一点历史。<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;——粤汉码头的工作人员 
      </div>
    </div>

    <!--故事分享3-->
    <div class="image-text-container1">
      <div class="image1">
        <img
          src="../assets/MyMemory/故事分享3.jpg"
          alt="故事分享3"
          style="width: 100%"
        />
      </div>
      <div class="text1">       
        18年年中，我们也对自己学校的历史比较感兴趣，又恰逢南大、东大的团队来这里考察，便感觉这栋楼（大礼堂）的历史应该很老，后来经过考证发现这就是当年国立中央大学的建筑留存，经过修缮、外立面改建，成为地标性建筑之一，有幸能够共同了解这段历史。<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;——重庆大学教授
      </div>
    </div>


    <el-container class="title">
      媒体宣传
    </el-container>
    <!--媒体宣传-->
    <div class="image-container2">
      <div class="image2">
        <img
          src="../assets/MyMemory/媒体宣传1.png"
          alt="媒体宣传1"
          style="width: 100%"
        />
      </div>
      <div class="image2">
        <img
          src="../assets/MyMemory/媒体宣传2.png"
          alt="媒体宣传2"
          style="width: 100%"
        />
      </div>
    </div>

    <div class="text-container2">
      <div class="text2">
          三峡日报第四版与官方公众号“我的宜昌”同步刊登调研团队走进宜昌，重温东方“敦刻尔克”——宜昌大撤退及金陵大学西迁足迹的过程。团队不仅收获了大量关于金陵大学西迁的宝贵历史资料，更深入了解抗战中宜昌作为大后方门户的地位。
        </div>
        <div class="text2">
          重庆晨报报道了团队成员于重庆深入调研的情况。大家先后来到重庆市档案馆、卢作孚纪念馆、重庆大学校史馆、西南大学等地，寻觅西迁途中的珍贵历史，从中感受到教育的坚韧，知识的尊严，文化传承的不息脉动。以实际步伐丈量着先辈们的足迹，以满腔热血书写着新时代的奋斗华章。        </div>
    </div>

    <el-container class="title">
      调研收获
    </el-container>

    <el-container class="title">
      共创回忆
    </el-container>
  </div>
</template>

<style scoped>
.all {
  display: flex;
  flex-direction: column;
  background-image: url('../assets/MyMemory/背景3.jpg');
  background-size: cover; /* 确保背景图片覆盖整个元素 */
  background-position: center; /* 背景图片居中显示 */
  background-attachment: fixed; /* 背景图片固定，不随滚动条滚动 */
  /*sheight: 100vh; /* 设置高度为视口的100% */
}

.title{
  font-family: "隶书";
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.image-text-container1 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;  /*在父容器内水平居中*/ 
  margin-top: 30px;
  width: 1200px;
  height: 450px;
  
}
.image1 {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  margin-top: 50px;
  margin-left: 50px;
  
  /*border: 1px solid;*/
}
.text1 {
  display: flex;
  /*margin-top: 10px;*/
  font-family: "华文中宋";
  font-size: 25px;
  flex-direction: column;
  margin-left: 60px;
  width: 420px;
  height: 450px;
  justify-content: center;
  text-indent: 2em; 
  white-space: pre-wrap;
}

.image-container2{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;  /*在父容器内水平居中*/ 
  margin-top: 30px;
  width: 1500px;
  height: 350px;
}
.image2 {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  margin-top: 50px;
  margin-left: 3%;
  margin-right: 30px;

}
.text-container2{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;  /*在父容器内水平居中*/ 
  margin-top: 150px;
  width: 1500px;
  height: 200px;
  margin-top: 90px;
  margin-bottom: 30px;
}
.text2 {
  font-family: "华文中宋";
  font-size: 25px;
  text-indent: 2em; 
  white-space: pre-wrap;  

  display: flex;
  flex-direction: column;
  width: 600px;
  /*height: 100px;*/
  /*justify-content: center;*/
  margin: 0 auto;
  margin-top: 0px;

}
</style>