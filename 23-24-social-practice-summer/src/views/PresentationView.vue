<template>
  <div>
    <el-container class="intro-text">
      <p>介绍文本</p>
    </el-container>
    <el-container class="pic-video">
      <video src="../assets/video/sample.mp4" controls>演示视频</video>
      <el-container class="video-text">
        <p>视频内容概述</p>
      </el-container>
    </el-container>
    <el-container class="regional-scenery">
      <h2>地域风物</h2>
      <el-container class="con-con">具体内容（图文视频）</el-container>
    </el-container>
    <el-container class="history">
      <h2>史料再现</h2>
      <el-container class="con-con">具体内容（图文视频）</el-container>
    </el-container>
    <el-container class="dictate">
      <h2>口述历史</h2>
      <p>文本内容</p>
    </el-container>
    <el-container class="archive-compilation">
      <h2>档案汇编</h2>
      <el-table :data="sampleData" class="table" >
        <el-table-column prop="date" label="日期" width="180px" />
        <el-table-column prop="name" label="档案名" width="180px" />
        <el-table-column prop="address" label="归档地" width="180px" />
      </el-table>
    </el-container>
  </div>
</template>

<script>
export default {
    data(){
        return{
            sampleData:[
                {
                    date:'2024-08-06',
                    name:'档案1',
                    address:'南京'
                },
                {
                    date:'2024-08-07',
                    name:'档案2',
                    address:'武汉'
                },
                {
                    date:'2024-08-08',
                    name:'档案3',
                    address:'上海'
                }
            ]
        }
    }
};
</script>

<style scoped>
.intro-text {
  font-family: "华文中宋";
  border: 1px solid;
  margin: 0 auto;
  margin-top: 30px;
  height: 400px;
  width: 1200px;
  background-color: aqua;
}
.pic-video {
  display: flex;
  border: 1px solid;
  margin: 0 auto;
  margin-top: 30px;
  height: 410px;
  width: 1200px;
  background-color: aqua;
}
video {
  margin: 30px;
  width: 700px;
  height: 350px;
}
.video-text {
  font-family: "华文中宋";
  border: 1px solid;
  margin: 30px;
  height: 350px;
  width: 200px;
  background-color: red;
}
.regional-scenery,
.history,
.dictate,
.archive-compilation {
  border: 1px solid;
  height: 600px;
  width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
  background-color: aqua;
}
h2 {
  font-family: "华文中宋";
  border: 1px solid;
  margin: 0 auto;
  margin-top: 30px;
  width: 120px;
  font-size: x-large;
  align-content: center;
  background-color: red;
}
.con-con {
  border: 1px solid;
  margin: 0 auto;
  margin-top: 30px;
  height: 450px;
  width: 100%;
  background-color: red;
}
.table{
    border: 1px solid;
    margin: 0 auto;
    margin-top: 30px;
    width: 540px;
    font-family: "华文中宋";
    font-size: medium;
    background-color:red;
}
</style>
