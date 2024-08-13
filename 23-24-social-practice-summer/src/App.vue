<template>
  <div class="app">
    <div class="home_header">
      <span class="header_title">西迁图书馆</span>
    </div>
    <nav>
      <router-link to="/">首页</router-link>
      <div class="dropdown">
        <div class="drop-text">项目展示</div>
        <div class="drop-content">
          <router-link to='/chengdu'>成都</router-link>
          <router-link to='/wuhan'>武汉</router-link>
          <router-link to='/nanjing'>南京</router-link>
          <router-link to='/yichang'>宜昌</router-link>
          <router-link to='/jiujiang'>九江</router-link>
          <router-link to='/chongqing'>重庆</router-link>
        </div>
      </div>
      <router-link to="/footprint">西迁足迹</router-link>
      <router-link to="/memory">我的记忆</router-link>
    </nav>

    <router-view />
    <div class="link">底部链接暂无</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
nav {
  height: 60px;
  margin: 10xp;
  font-size: large;
  font-family: "华文中宋";
  background-color: aqua;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  font-weight: bold;
  a {
    color: black;
    &.router-link-exact-active {
      color: purple;
    }
  }
}
.drop-content {
  display: none;
  position: absolute;
  width: 80px;
  flex-direction: column;
  a {
    text-align: center;
    width: 80px;
  }
}
.drop-content a:hover {
  background: white;
  color: black;
}
.dropdown:hover .drop-content{
  display: flex;
}
.home_header {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid gainsboro;
  display: flex;
}

.header_title {
  margin-left: 20px;
  margin-top: 5px;
  font-size: large;
  font-weight: bold;
  font-family: "华文中宋";
}
.link {
  font-family: "华文中宋";
  margin-top: 35px;
  width: 100%;
  height: 200px;
  background-color: purple;
}
</style>
