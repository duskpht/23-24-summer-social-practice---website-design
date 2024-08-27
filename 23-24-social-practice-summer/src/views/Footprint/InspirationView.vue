<template>
    <div class="all">
        <el-container class="nav-index">
            <router-link to="/footprint/intro">简介</router-link>
            <router-link to="/footprint/past">溯往</router-link>
            <router-link to="/footprint/today">忆今</router-link>
            <router-link to="/footprint/inspiration">感悟</router-link>
        </el-container>
        <el-container class="text_container">
            <el-container class="text1">
                每每谈及抗战时期的高校西迁，世人总会第一时间想到西南联大，那段不折不扣的传奇故事，那段波澜壮阔的迁移历史，那座中国教育史上的最高峰……但是，无独有偶，风云激荡之际，群星闪耀之时，并非只有西南联大一座高峰，还有无数的高校、学者，在西迁教育史上，留下了浓墨重彩的一笔……
                <br>&emsp;&emsp;许是因缘巧合，亦是冥冥注定。南京大学开学校史教育是每个南大学子的必修课，于是，“为国开利甲，两弹裂长空”的程开甲院士、“东方的居里夫人”吴健雄院士以及人民教育家陶行知……这些曾经出现在课本中、作文里、历史上的大先生，这些曾经自己无比景仰的人物，无数次被引用在自己作文里的人物，第一次这样贴近我们的生活……
                <br>&emsp;&emsp;大人物有大人物的伟大，小人物也有小人物的不平凡。因缘巧合之下，我帮助老师整理学校的校史资料，偶然中了解到了王酉亭这一名字，一个普通却不平凡的名字……
                <br>&emsp;&emsp;在南京沦陷的前几天，罗家伦校长最后一次巡视检查学校。他来到了丁家桥农学院畜牧场，集中职工宣布遣散，并与中大畜牧场场长王酉亭等人落泪话别。
                <br>&emsp;&emsp;当时，中大农学院有大量从外国高价引入并饲养多年的家畜家禽，是畜禽改良的稀缺品种，具有极高的科研价值，更是国家财产，其价值非凡。但其西迁不易，如若丢弃，实在不舍。
                <br>&emsp;&emsp;于是王酉亭召集职工会议，大家一致认为，不惜一切代价，也要将学校的资产从南京运到重庆！一行人从1937年12月，徒步走到了1938年10月，终于赶到宜昌，趁着宜昌大撤退的余音，得到了民生公司的大力支持，最后坐水路到达了重庆。这是一次苦难中的敢于担当，这是一次国难中的挺身而出，这是一次大我中的小我奉献，这是一种值得传承的南大精神。
                <br>&emsp;&emsp;传奇，不应该被埋没；英雄，不应该被忘记。
                <br>&emsp;&emsp;知道了这些事情，总觉得，我需要做点什么……
                <br>&emsp;&emsp;恰逢其会，南大校史馆档案馆正在进行西迁项目研究，于是便有了“重走西迁路，奋进向未来”的暑期社会实践项目，按照当年中大与金大西迁的路线重走了一遍，遂留下此书，按照地点的顺序，梳理了当年中大与金大西迁的事宜以及我们团队重走之中发掘的资料与感悟。
                <br>&emsp;&emsp;同时，讲中大与金大的西迁，又不能只讲中大与金大的西迁。西迁之所以成功，在乎那真正的一方有难各方来助；抗战之所以胜利，在乎我全民族的大联合。同舟共济，患难与共，一直以来便是我们民族最坚定的内核。
                <br>&emsp;&emsp;而在这个夏天，我们团队将沿着先辈的足迹，拨开历史的尘埃，再次踏上西迁之路。
            </el-container>
            <el-container class="text1">
            <el-container class="text2">
                《西迁足迹》主编&emsp;李宗膳
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
.text_container{
    display: flex;
    flex-direction: column; /* 垂直排列 */
    align-items: flex-end; /* 水平居右对齐 */
    justify-content: center; /* 垂直居中对齐 */
    font-size: 18px;
    margin-left: 300px;
    margin-right: auto;
    width: 750px;
    height: 1020px;
}
.text1{
    display: flex;
    /*margin-top: 10px;*/
    font-family: "华文中宋";
    text-indent: 2em; 
    line-height: 1.75;
}
.text2{
    display: flex;
    /*margin-top: 10px;*/
    font-family: "华文中宋";
    text-indent: 2em; 
    line-height: 1.75;
    align-items: flex-end;
}
</style>