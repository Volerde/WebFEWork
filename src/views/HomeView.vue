<template>
  <CarouselComponent />
  <CompanyProfileComponent />
  <div
    class="background-color text-align-center animate__animated animate__zoomIn animated__delay-1s"
  >
    <el-space direction="vertical">
      <h1>AI内核</h1>
      <p>
        新锐Deep
        Learning算法的重复训练，冲击工业红线，给专业医师带来前所未有的操作体验。
      </p>
    </el-space>
  </div>
  <el-footer class="footer-background-color">
    <el-row class="text-align-center footer-text">
      <el-col :span="8">电话：xxxxxxx</el-col>
      <el-col :span="8">邮箱：xxx@xxx.com</el-col>
      <el-col :span="8">地址：xx省xx市xx区xx路xx号</el-col>
    </el-row>
  </el-footer>
</template>

<script lang="ts" setup>
import CarouselComponent from "../components/CarouselComponent.vue";
import CompanyProfileComponent from "@/components/CompanyProfileComponent.vue";
</script>

<style lang="less" scope>
.background-color {
  background-color: orange;
}
.footer-background-color {
  background-color: rgba(0, 0, 0, 0.9);
}
.footer-text {
  color: rgb(220, 210, 210);
  padding: 1% 0;
  font-weight: 400;
}
</style>
