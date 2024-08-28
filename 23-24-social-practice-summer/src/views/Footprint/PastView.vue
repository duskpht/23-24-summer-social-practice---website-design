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
                    “曾经有这样一所大学，仅仅存在了几十年的时间，却如流星一般，璀璨而又辉煌，它就是国立中央大学。”
                </el-container>
                <el-container class="text2">
                    谈起中国近代大学的起源，大部分人或许第一时间想到的便是“京师大学堂”，即现在中国的最高学府之一的北京大学，这也无可争议。但是，真正第一次让中国的大学站上世界舞台的，是之后成立于南京的国立中央大学。
                </el-container>
                <el-container class="text2">
                    国学堂堂，创校伊始。国立中央大学于清末（1902年）在南京创校，名称及沿革曾数度变更，1928年中华民国政府定都南京后，校名定为国立中央大学。
                </el-container>
                <el-container class="text2">
                    三江并起，强强联合。为在一定程度上解决当时大学的规模小、杂乱、实力薄弱等现象，联合多所大学之后，共同组建了中大。
                </el-container>
                <el-container class="text2">
                    风云激荡，西迁重庆。战期间，中央大学迁校至重庆沙坪坝、成都华西坝等地办学，拥有地处民国时期首都、陪都的优势，加上历任校长用心经营，中央大学的发展蒸蒸日上，抗战结束时已成为当时国立大学系科设置之最。
                </el-container>
                <el-container class="text2">
                    金陵大学前身为汇文书院，同美国康奈尔大学为姊妹大学，当时社会评价为“中国最好的教会大学”。虽然没有中央大学那样的规模与实力，但是同样创造了许多“中国之最”，成为江东地区的知名学府，位列教会大学的顶端。
                </el-container>
                <el-container class="text2">
                    抗战时任国立中央大学校长的罗家伦先生是五四运动的先驱者之一，也更易被学生们接受。尽早踏上西迁征程，这是属于罗家伦校长的未雨绸缪。早在1936年，罗先生便预感到中日之间的持续性战争，而且南京作为首都一定是重点的打击对象，到那时，中央大学该何去何从？于是罗家伦校长命人打造了五百五十口大箱子，里面用铅皮进行加固包装，用以防备后患……
                </el-container>
                <el-container class="text2">
                    1937年8月15日，校本部第一次遭到日机轰炸，图书馆中弹，接着于18日、23日、31日连续三次遭到轰炸，学校损失惨重，所幸已经装箱的图书仪器运到江边趸船上。在此情形下，罗家伦校长迅速召开会议准备搬迁。虽然举校搬迁并非易事，但大家已做好充分准备，历时四十余天即全部迁入重庆继续办学。途中种种情形与中央大学的未雨绸缪不同,抗战之初,金陵大学迁校的准备并不充分。当时美国在中国有治外法权，金大的一些西方人士认为,即使日本打到南京金大仍有美国大使馆的保护，再加之内外种种原因，金大仍照常办学。但随着局势严重恶化,金大不得不于 11 月 18 日停课,决定西迁。金大原打算迁往湖南，后因文化机关迁湘者众多,金大经与另一教会大学-----成都华西协合大学商洽,决定迁往四川，最终于次年3月恢复办学。            
                </el-container>
            </el-container>

            <el-container class="image_container">
                <el-container class="image1">
                    <img
                        src="../../assets/Footprint/决定西迁的校务会议记录1937.9.4.png"
                        alt="溯往1"
                        style="width: 300px; margin-left: auto; margin-right: auto; display: block;"
                    />
                    <div class="label">决定西迁的校务会议记录1937.9.4</div> 
                </el-container>
                <el-container class="image1">
                    <img
                        src="../../assets/Footprint/罗家伦1.png"
                        alt="溯往2"
                        style="width: 160px; margin-left: auto; margin-right: auto; display: block;"
                    />
                    <div class="label">罗家伦</div>
                </el-container>
                <el-container class="image1">
                    <img
                        src="../../assets/Footprint/沙坪坝松林坡临时校舍.jpg"
                        alt="溯往3"
                        style="width: 300px; margin-left: auto; margin-right: auto; display: block;"
                    />
                    <div class="label">沙坪坝松林坡临时校舍</div>
                </el-container>
                <el-container class="image1">
                    <img
                        src="../../assets/Footprint/陈裕光就借校舍事宜致华西协和大学校长张凌高的信函.jpg"
                        alt="溯往4"
                        style="width: 300px; margin-left: auto; margin-right: auto; display: block;"
                    />
                    <div class="label">决定西迁的校务会议记录1937.9.4</div>
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
    height: 1170px;
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