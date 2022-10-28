<template>
  <el-header class="navbar">
    <el-row class="navbar-container">
      <el-col :span="4" :offset="2">
        <el-space>
          <el-image src="/favicon.ico" />
          <p class="navbar-title">UNKONWN</p>
        </el-space>
      </el-col>
      <el-col :span="4" :offset="6">
        <RouterLink to="/">
          <el-space>
            <el-icon size="20px">
              <HomeFilled />
            </el-icon>
            <p class="navbar-index">首页</p>
          </el-space>
        </RouterLink>
      </el-col>
      <el-col :span="4">
        <RouterLink to="/news">
          <el-space>
            <el-icon size="20px">
              <Histogram />
            </el-icon>
            <p class="navbar-web-map">服务案例</p>
          </el-space>
        </RouterLink>
      </el-col>
      <el-col :span="4">
        <RouterLink to="/">
          <el-space>
            <el-icon size="20px">
              <Promotion />
            </el-icon>
            <p class="navbar-contact-with-us">联系我们</p>
          </el-space>
        </RouterLink>
      </el-col>
    </el-row>
  </el-header>
</template>

<script lang="ts" setup>
import { HomeFilled, Histogram, Promotion } from "@element-plus/icons-vue";
</script>

<style lang="less" scope>
.navbar {
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  color: white;
  a {
    text-decoration: none;
    color: white;
  }
}
</style>
