<template>
  <div class="app">
    <div class="home_header">
      <span class="header_title">西迁图书馆</span>
    </div>
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/presentation">项目展示</router-link>
      <router-link to="/footprint">西迁足迹</router-link>
      <router-link to="/memory">我的记忆</router-link>
    </nav>
    <router-view />
    <div class="link">
      底部链接
    </div>
  </div>
</template>

<style lang="scss">
nav {
  font-family: "华文中宋";
  background-color: aqua;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  a {
    font-weight: bold;
    color: black;

    &.router-link-exact-active {
      color: purple;
    }
  }
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
  margin-top:35px;
  width: 100%;
  height: 200px;
  background-color: purple;
}
</style>
