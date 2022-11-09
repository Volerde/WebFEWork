<template>
  <el-carousel autoplay arrow="always" :interval="3000" height="600px">
    <el-carousel-item
      v-for="(value, index) in carouselObj"
      :key="index"
      class=""
    >
      <div class="carousel-container" :style="value.backgroundImage">
        <div class="content-at-center">
          <h2>{{ value.title }}</h2>
          <p>{{ value.context }}</p>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const image = ref([
  "background-image: url(src/assets/image/1.png)",
  "background-image: url(src/assets/image/2.png)",
  "background-image: url(src/assets/image/3.png)",
]);

const carouselObj = ref([
  {
    title: "全新的一体化的平台",
    context: "全新的一体化的平台",
    backgroundImage: "background-image: url(src/assets/image/1.png)",
  },
  {
    title: "人工智能强大核心驱动",
    context: "人工智能强大核心驱动",
    backgroundImage: "background-image: url(src/assets/image/2.png)",
  },
  {
    title: "分级诊疗",
    context: "分级诊疗",
    backgroundImage: "background-image: url(src/assets/image/3.png)",
  },
]);
</script>

<style lang="less" scope>
.carousel-container {
  height: 600px;
  background-size: cover;
  background-repeat: no-repeat;
}

.no-margin-padding {
  margin: 0;
  padding: 0;
}

.content-at-center {
  text-align: center;
  color: white;
  padding: 10% 0 0 0;
}
</style>
