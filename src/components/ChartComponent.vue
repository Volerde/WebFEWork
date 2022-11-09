<template>
  <el-card class="box-card text-item" style="width: 400px">
    <template #header>
      <span>{{ partner.name }}</span>
      <el-button round class="button-in-partner" type="danger">删除</el-button>
      <el-button round class="button-in-partner" type="success">编辑</el-button>
    </template>
    <div class="">{{ partner.introduction }}</div>
  </el-card>
</template>

<script lang="ts" setup>
defineProps(["partner"]);
</script>

<style lang="less" scope>
.button-in-partner {
  float: right;
}
.text-item {
  background-color: rgba(231, 228, 228, 0.1);
}
</style>
