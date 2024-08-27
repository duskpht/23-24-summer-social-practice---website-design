<template>
  <div class="app">
    <div class="home_header">
      
    </div>
    <nav>
      <el-container class="nav-box">
        <router-link to="/">首页</router-link>
      </el-container>
      <el-container class="nav-box">
        <div class="dropdown">
          <router-link to="/research/nanjing">调研风采</router-link>
          <div class="drop-content">
            <router-link to="/research/nanjing">南京</router-link>
            <router-link to="/research/jiujiang">九江</router-link>
            <router-link to="/research/wuhan">武汉</router-link>
            <router-link to="/research/yichang">宜昌</router-link>
            <router-link to="/research/chongqing">重庆</router-link>
            <router-link to="/research/chengdu">成都</router-link>
          </div>
        </div>
      </el-container>
      <el-container class="nav-box">
        <div class="dropdown">
          <router-link to="/result/regional">调研结果</router-link>
          <div class="drop-content">
            <router-link to="/result/regional">地域风物</router-link>
            <router-link to="/result/history">口述历史</router-link>
            <router-link to="/result/compilation">史料汇编</router-link>
            <router-link to="/result/archive">档案汇编</router-link>
          </div>
        </div>
      </el-container>
      <el-container class="nav-box">
        <div class="dropdown">
          <router-link to="/footprint/intro">西迁印迹</router-link>
          <div class="drop-content">
            <router-link to="/footprint/intro">简介</router-link>
            <router-link to="/footprint/past">溯往</router-link>
            <router-link to="/footprint/today">忆今</router-link>
            <router-link to="/footprint/inspiration">感悟</router-link>
          </div>
        </div>
      </el-container>
      <el-container class="nav-box">
        <router-link to="/memory">我的记忆</router-link>
      </el-container>
    </nav>

    <router-view />
    <div class="link">
      <el-container class="links">
        <a href="https://historymuseum.nju.edu.cn/">南京大学校史博物馆</a>
        <a href="https://dawww.nju.edu.cn/">南京大学档案馆</a>
        <a href="https://www.nju.edu.cn/">南京大学</a>
        <a href="https://tuanwei.nju.edu.cn/">南京大学校团委</a>
      </el-container>
      <el-container class="info">
        <p>地址：江苏省南京市栖霞区仙林大道163号</p>
        <p>邮编：210023</p>
        <p>联系电话：18260048834</p>
      </el-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
/*nav {
  height: 70px;
  font-size: x-large;
  font-family: "华文中宋";
  background-color: rgb(120, 41, 120);
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  gap: 30px;
  font-weight: bold;
  color: white;
  a {
    text-decoration: none;
    color: white;
  }
}
nav .nav-box {
  width: 200px;
}
.drop-content { 
  width: 160px;
  margin-left: 20px;
  background-color: rgb(120, 41, 120);
  display: none;
  position: absolute;
  flex-direction: column;
}*/

nav {
  height: 40px;
  font-size: 20px;
  font-family: "华文中宋";
  background-color: rgb(120, 41, 120);
  line-height: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  gap: 30px;
  font-weight: bold;
  color: white;
  a {
    text-decoration: none;
    color: white;
  }
}
nav .nav-box {
  width: 200px;

}
.drop-content {
  width: 160px;
  margin-left: 20px;
  background-color: rgb(120, 41, 120);
  display: none;
  position: absolute;
  flex-direction: column;
}


.drop-content a {
  width: 160px;
  /*margin-top: 5px;
  margin-bottom: 5px;*/
}
.drop-content a:hover {
  background: black;
  color: white;
}
.dropdown:hover .drop-content {
  display: flex;
  .city {
    display: none;
  }
  .citys:hover .city {
    display: flex;
  }
}
.citys {
  width: 80px;
  .city {
    width: 160px;
  }
}
.home_header {
  background-image: url('./assets/题头2.png');
  background-size: 100%;
  width: 100%;
  height: 140px;
  display: flex;
}

.link {
  font-size: large;
  justify-content: center;
  align-items: center;
  display: flex;
  font-family: "华文中宋";
  /*margin-top: 35px;*/
  width: 100%;
  height: 200px;
  color: white;
  background-color: rgb(120, 41, 120);
  a {
    text-decoration: none;
    color: white;
  }
}
.links {
  width: 13%;
  display: flex;
  flex-direction: column;
  a {
    margin-top: 15px;
  }
  a:hover {
    background-color: white;
    color: black;
  }
}
.info {
  margin-left: 40%;
}
</style>
