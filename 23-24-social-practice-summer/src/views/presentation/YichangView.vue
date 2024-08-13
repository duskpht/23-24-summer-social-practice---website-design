<template>
  <div class="all">
    <el-container class="nav-index">
      <router-link to="/chengdu">成都</router-link>
      <router-link to="/wuhan">武汉</router-link>
      <router-link to="/nanjing">南京</router-link>
      <router-link to="/yichang">宜昌</router-link>
      <router-link to="/jiujiang">九江</router-link>
      <router-link to="/chongqing">重庆</router-link>
    </el-container>
    <el-container class="content">
      <el-container class="pic">
        <h3>宜昌站·金陵大学</h3>
        <p>“凝碧初高海气秋，桂轮斜落到江楼”</p>
        <p>
          宜昌地处长江三峡西陵峡口，通连巴蜀与荆襄，素有“川鄂咽暖”之称，历来是兵家必争之地。1937年全面抗战开始后，宜昌作为四川抗战基地的东大门，是中央政府与厂矿企业、教育机构西迁人员和物资的要道。
        </p>
        <img
          src="../../assets/presentationView/宜昌/宜昌市档案馆保存《抗战记忆》封面.png"
          alt="抗战记忆"
        />
        <h2>宜昌市档案馆保存《抗战记忆》封面</h2>
        <p>
          1937年11月，国民政府将四川确立为抗战的重要战略后方，并迁都重庆，广大人民群众纷纷踏上西进入川的道路。与此同时，大批工业设施与珍贵文物也汇聚于“川鄂门户”——宜昌。由于船少人多，在宜昌城里，拥塞的候船者和堆积如山的货物成为史无前例的难题，在此中转的金大师生也饱受苦难。值此之时，民生公司挺身而出，合理安排运力，圆满完成抢运任务，传为佳话，是为宜昌大撤退。
        </p>
        <img
          src="../../assets/presentationView/宜昌/宜昌大撤退纪念碑铭文.jpg"
          alt="大撤退碑文"
          style="width:1000px"
        />
        <h2>宜昌大撤退纪念碑铭文</h2>
        <p>
          调研团队先后前往宜昌市图书馆、宜昌市档案馆、宜昌九码头、宜昌大撤退纪念园及红星路等地进行实地考察。在宜昌市图书馆，我们获取到关于国立中央大学、金陵大学、罗家伦校长、宜昌大撤退及民生公司等多方面的详细资料。在宜昌市档案馆，得到赵希安副馆长的热情接待，并进入利用服务大厅，直接接触、查阅到更为原始和权威的纸质档案资料，带回档案复印件23件。
        </p>
        <img
          src="../../assets/presentationView/宜昌/团队成员在宜昌市图书馆查阅资料.png"
          alt="宜昌市图书馆"
        />
        <h2>团队成员在宜昌市图书馆查阅资料</h2>
        <img
          src="../../assets/presentationView/宜昌/团队成员在宜昌大撤退纪念馆.jpg"
          alt="纪念馆"
          style="width:1000px"
        />
        <h2>团队成员在宜昌大撤退纪念馆</h2>
        <img
          src="../../assets/presentationView/宜昌/宜昌市档案馆工作人员指导团队成员查阅档案.png"
          alt="宜昌市档案馆工作人员进行指导"
        />
        <h2>宜昌市档案馆工作人员指导团队成员查阅档案</h2>
        <img
          src="../../assets/presentationView/宜昌/宜昌市档案馆赵希安副馆长向团队成员吕沅朋赠书.png"
          alt="赠书"
        />
        <h2>宜昌市档案馆赵希安副馆长向团队成员吕沅朋赠书</h2>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.all {
  display: flex;
}
.nav-index {
  margin-top: 30px;
  font-family: "华文中宋";
  font-size: large;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 150px;
  height: 150px;
  background-color: purple;
}
.nav-index a {
  text-align: center;
  color: white;
}
a:hover {
  background: white;
  color: black;
}
.content {
  margin-left: 200px;
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
