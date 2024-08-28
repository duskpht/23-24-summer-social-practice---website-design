<template>
    <div class="all">
        <el-container class="nav-index">
            <router-link to="/footprint/intro">简介</router-link>
            <router-link to="/footprint/past">溯往</router-link>
            <router-link to="/footprint/today">忆今</router-link>
            <router-link to="/footprint/inspiration">感悟</router-link>
        </el-container>
        <el-container class="image-text-container">
            <el-container class="text_container">
                <el-container class="text1">
                    八十七年前，为保留高等教育火种，延续华夏文脉，中大与金大师生西迁办学，开启了一段辉煌岁月……
                </el-container>
                <el-container class="text1">
                    八十七年后，为讲好南大故事，发掘南大历史，传承南大记忆，“西勘南雍，寻脉向西”团队从南京出发，再上西迁征途……
                </el-container>
                <el-container class="text2">
                    历史与时间，是很神秘的力量，它可以带来磨损，也可以带来遗忘。而遗忘，之于个人来说，则无异于第二次死亡；之于百廿高校而言，则是一场底蕴与传承的磨损。
                    <br>&emsp;&emsp;历史，不应该被忘记；传承，不应当断绝……
                    <br>&emsp;&emsp;回顾两部西迁史，我认为核心不过其中二字——担当。
                </el-container>
                <el-container class="text2">
                    以背曰负，以肩曰担。先辈们在纷飞战火中负重西行的画面，构成了中国教育史上“担当”二字的意象。
                </el-container>
                <el-container class="text2">
                    烽火年代，担当是罗家伦和陈裕光校长“筚路以启山林”的坚韧，谓之“寇能覆之，我必能兴之”。
                </el-container>
                <el-container class="text2">
                    临危之时，担当是王酉亭等教职“位卑未敢忘忧国”的胸襟，谓之“人不做亡国奴，动物也不做亡国奴”。           
                </el-container>
                <el-container class="text2">
                    艰难之间，担当是两校师生“人间遍种自由花”的壮志，谓之“敌人可以炸毁的是我们的物质，炸不毁的是我们的意志”。
                </el-container>
                <el-container class="text2">
                    和平时期，担当是南大今辈学子“回首翘望来时路”的精神，谓之“弦歌不辍，薪火相传”。
                </el-container>
                <el-container class="text2">
                    时光匆匆，无数西迁办学的痕迹在被时光悄悄地抹去，而南大学子，当深感前辈之担当，在“重走”之路中发掘前辈身影，传承南大记忆，争做时光中的拾穗者。
                </el-container>
            </el-container>
            <el-container class="image_container">
                <el-container class="image1">
                    <img
                        src="../../assets/Footprint/如今的北大楼.png"
                        alt="忆今1"
                        style="width: 300px; margin-left: auto; margin-right: auto; display: block;"
                    />
                    <div class="label">如今的北大楼</div> 
                </el-container>
                <el-container class="image1">
                    <img
                        src="../../assets/Footprint/如今的大纛坪.png"
                        alt="忆今2"
                        style="width: 300px; margin-left: auto; margin-right: auto; display: block;"
                    />
                    <div class="label">如今的大纛坪</div>
                </el-container>
                <el-container class="image1">
                    <img
                        src="../../assets/Footprint/位于南京大学鼓楼校区的二源壁.jpg"
                        alt="忆今3"
                        style="width: 300px; margin-left: auto; margin-right: auto; display: block;"
                    />
                    <div class="label">位于南京大学鼓楼校区的二源壁</div>
                </el-container>

            </el-container>
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
    width: 81%;
    height: 790px;
    margin-bottom: 50px;
}
.text_container{
    display: flex;
    flex-direction: column; /* 垂直排列 */
    align-items: center; /* 水平居中对齐 */
    justify-content: center; /* 垂直居中对齐 */
    font-size: 18px;
    margin-left: 120px;
    margin-right: 45px;
    width: 70%;
    height: 450px;
}
.text1{
    display: flex;
    /*margin-top: 10px;*/
    font-family: "楷体";
    text-indent: 2em; 
    line-height: 1.75;
}
.text2{
    display: flex;
    /*margin-top: 10px;*/
    font-family: "华文中宋";
    text-indent: 2em; 
    line-height: 1.75;
}
.image_container{
    display: flex;
    flex-direction: column; /* 垂直排列 */
    align-items: center; /* 水平居中对齐 */
    justify-content: center; /* 垂直居中对齐 */
}
.image1{
    margin-top: 40px;
}
.label {
    text-align: center;
    font-size: 15px;
    font-family: "华文中宋";
    margin-top: 5px;
}
</style>