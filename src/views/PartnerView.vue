<template>
  <div class="partner-introduction">
    <span>合作伙伴介绍</span>
  </div>
  <div class="button-create">
    <el-button round type="primary">新增</el-button>
  </div>
  <el-space wrap :size="30" :fill="true">
    <ChartComponentVue
      class="container-partner"
      v-for="(value, index) in partnerData"
      :key="index"
      :partner="value"
    />
  </el-space>
</template>

<script lang="ts" setup>
import ChartComponentVue from "@/components/ChartComponent.vue";
import { ref } from "vue";

const partnerData = ref([
  {
    name: "Vue",
    introduction:
      "This is Test Context,This is Test Context,This is Test Context,This is Test Context,This is Test ContextThis is Test Context",
  },
  {
    name: "Java",
    introduction:
      "This is Test Context,This is Test Context,This is Test Context,This is Test Context,This is Test ContextThis is Test Context",
  },
  {
    name: "JavaScript",
    introduction:
      "This is Test Context,This is Test Context,This is Test Context,This is Test Context,This is Test ContextThis is Test Context",
  },
  {
    name: "TypeScript",
    introduction:
      "This is Test Context,This is Test Context,This is Test Context,This is Test Context,This is Test ContextThis is Test Context",
  },
  {
    name: "Golang",
    introduction:
      "This is Test Context,This is Test Context,This is Test Context,This is Test Context,This is Test ContextThis is Test Context",
  },
  {
    name: "Python",
    introduction:
      "This is Test Context,This is Test Context,This is Test Context,This is Test Context,This is Test ContextThis is Test Context",
  },
]);
</script>

<style lang="less" scope>
.partner-introduction {
  font-size: 30px;
  text-align: center;
  color: black;
  padding: 20px;
  background-color: rgba(65, 64, 64, 0.1);
}
.button-create {
  text-align: right;
  background-color: rgba(65, 64, 64, 0.1);
}
.container-partner {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
