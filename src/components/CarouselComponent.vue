<template>
  <el-carousel autoplay type="card" arrow="always" interval="5000">
    <el-carousel-item v-for="(value, index) in image" :key="index">
      <el-image :src="value" />
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const image = ref([
  "src/assets/image/1.jpg",
  "src/assets/image/2.jpg",
  "src/assets/image/3.jpg",
]);
</script>

<style lang="less" scope></style>
