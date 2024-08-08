<template>
  <div>
    <el-container class="main-pic">
      <img src="../assets/main-pic/01.jpg" alt="" class="main-pic" />
    </el-container>
    <el-container class="uni-history">
      <el-container class="uni-pic"> </el-container>
      <el-container class="uni-word">
        <p>南京大学具有非常悠久的历史</p>
      </el-container>
    </el-container>
    <el-container class="introduction">
      <el-container class="map">
        <el-button @click="getMessage(0)" type="primary"> 南京 </el-button>
        <el-button @click="getMessage(1)" type="primary"> 上海 </el-button>
        <el-button @click="getMessage(2)" type="primary"> 北京 </el-button>
        <el-button @click="getMessage(3)" type="primary"> 武汉 </el-button>
        地图
      </el-container>
      <el-container class="result">
        <el-container class="concrete-content" v-if="isVisible[0]">
          南京
        </el-container>
        <el-container class="concrete-content" v-if="isVisible[1]">
          上海
        </el-container>
        <el-container class="concrete-content" v-if="isVisible[2]">
          北京
        </el-container>
        <el-container class="concrete-content" v-if="isVisible[3]">
          武汉</el-container
        >
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: [true, false, false, false],
      images: [
        require("@/assets/main-pic/01.jpg"),
        require("@/assets/main-pic/02.jpg"),
        require("@/assets/main-pic/03.jpg"),
        require("@/assets/main-pic/04.jpg"),
      ],
    };
  },
  methods: {
    getMessage(index) {
      for (let x = 0; x < 4; x++) {
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
.main-pic {
  margin-top: 15px;
}
.main-pic img {
  border: 1px solid;
  margin-left: 15%;
  margin-right: 15%;
  height: 350px;
  width: 70%;
  background-color: aqua;
}
.uni-history {
  display: flex;
  border: 1px solid;
  margin-top: 30px;
  margin-left: 10%;
  margin-right: 10%;
  height: 500px;
  width: 80%;
  background-color: aqua;
}
.uni-pic {
  border: 1px solid;
  margin: 30px;
  width: 280px;
  height: 420px;
  background-color: red;
}
.uni-word {
  border: 1px solid;
  margin: 40px;
  margin-left: 50px;
  height: 400px;
  width: 62%;
  background-color: red;
}
p {
  font-size: large;
  font-family: "华文中宋";
}
.introduction {
  display: flex;
  border: 1px solid;
  margin-top: 30px;
  margin-left: 10%;
  margin-right: 10%;
  height: 400px;
  width: 80%;
  background-color: aqua;
}
.map {
  border: 1px solid;
  width: 70%;
  height: 100%;
  margin-right: 15px;
  background-color: red;
}
.result {
  border: 1px solid;
  margin-left: 15px;
  margin-right: 0;
  width: 33%;
  height: 100%;
  background-color: red;
}
button {
  /* 设置边框半径为50%以创建圆形 */
  border-radius: 50px; /* 或者使用 50%，但可能需要确保宽度和高度相等 */

  /* 设置宽度和高度相等以确保按钮是完美的圆形 */
  width: 50px; /* 根据需要调整 */
  height: 50px; /* 与宽度相同 */

  /* 可能需要调整内边距以确保文本居中 */
  padding: 0; /* 移除默认内边距 */
  line-height: 50px; /* 设置行高与高度相同以垂直居中文本 */
  text-align: center; /* 水平居中文本 */

  /* 其他样式，如字体大小，可以根据需要调整 */
  font-size: 16px;
  font-family: "华文中宋";
}
.concrete-content {
  width: 100%;
  height: 100%;
  background-color: greenyellow;
}
</style>
