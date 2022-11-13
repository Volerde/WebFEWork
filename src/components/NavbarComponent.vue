<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    :ellipsis="false"
    class="navbar"
  >
    <el-menu-item index="0">
      <el-space>
        <el-image src="/favicon.ico" />
        <p class="navbar-title">AZUMAUZUKI</p>
      </el-space>
    </el-menu-item>
    <div style="flex-grow: 1" />
    <el-menu-item index="1">
      <RouterLink to="/">
        <el-space>
          <el-icon size="20px">
            <HomeFilled />
          </el-icon>
          <p class="navbar-index">首页</p>
        </el-space>
      </RouterLink>
    </el-menu-item>
    <el-menu-item index="2">
      <RouterLink to="/news">
        <el-space>
          <el-icon size="20px">
            <Histogram />
          </el-icon>
          <p class="navbar-web-map">合作伙伴</p>
        </el-space>
      </RouterLink>
    </el-menu-item>
    <el-menu-item index="3">
      <RouterLink to="/">
        <el-space>
          <el-icon size="20px">
            <Promotion />
          </el-icon>
          <p class="navbar-contact-with-us">联系我们</p>
        </el-space>
      </RouterLink>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { HomeFilled, Histogram, Promotion } from "@element-plus/icons-vue";

const activeIndex = ref(1);
</script>

<style lang="less" scope>
.navbar {
  //   background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  color: white;
  a {
    text-decoration: none;
    color: white;
  }
}
</style>
