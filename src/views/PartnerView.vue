<template>
  <el-tabs v-model="activeName" type="border-card">
    <el-tab-pane name="first" label="合作伙伴介绍">
      <!-- <div class="partner-introduction">
        <span>合作伙伴介绍</span>
      </div> -->
      <div class="button-create">
        <div v-show="isEdit" class="new-partner">
          <el-button round type="success" @click="showDrawer = true"
            >新增</el-button
          >
        </div>
        <div>
          编辑：
          <el-switch
            v-model="isEdit"
            active-text="√"
            inactive-text="×"
            inline-prompt
            style="--el-switch-on-color: #13ce66"
          />
        </div>
      </div>

      <el-space
        :size="100"
        :fill="false"
        wrap
        style="text-align: center; margin-left: 5%"
      >
        <div
          class="orderBox box-card text-item space-min-width"
          v-for="(value, index) in partnerData"
          :key="index"
          v-bind="value"
        >
          <div class="order-box-null">
            <el-button
              v-show="isEdit"
              circle
              type="danger"
              :icon="Delete"
              class="button-in-partner"
              @click="removePartner(index)"
            />
          </div>
          <div class="order-title">
            商品名称：<span v-show="!isEdit">{{ value.name }}</span>
            <el-input
              v-show="isEdit"
              v-model="value.name"
              class="input"
              clearable
            />
          </div>
          <div class="order-title">
            商品销量：<span v-show="!isEdit">{{ value.sales }}</span>
            <el-input
              v-show="isEdit"
              v-model="value.sales"
              class="input"
              type="number"
              clearable
            />
          </div>
          <div class="order-introduction">
            商品简介：
            <div v-show="!isEdit">{{ value.introduction }}</div>
            <el-input
              class="order-introduction-input"
              v-show="isEdit"
              v-model="value.introduction"
              type="textarea"
              autosize
            />
          </div>
        </div>
        <!-- <el-card
          class="box-card text-item space-min-width"
          style="width: 400px"
          v-for="(value, index) in partnerData"
          :key="index"
          v-bind="value"
        >
          <template #header>
            <span v-show="!isEdit">{{ value.name }}</span>
            <el-input v-show="isEdit" v-model="value.name" class="input" />
            <el-button
              v-show="isEdit"
              circle
              type="danger"
              :icon="Delete"
              class="button-in-partner"
              @click="removePartner(index)"
            />
          </template>
          <div v-show="!isEdit">{{ value.introduction }}</div>
          <el-input
            v-show="isEdit"
            v-model="value.introduction"
            type="textarea"
            autosize
          />
        </el-card> -->
      </el-space>

      <el-drawer
        v-model="showDrawer"
        direction="rtl"
        title="新增一个合作伙伴"
        :show-close="false"
      >
        <el-card>
          <el-form
            :model="newPartner"
            label-position="top"
            :rules="rules"
            ref="ruleFormRef"
            status-icon
          >
            <el-form-item label="名称:" prop="name">
              <el-input
                v-model="newPartner.name"
                placeholder="请输入商品名称"
                clearable
              />
            </el-form-item>
            <el-form-item label="销量" prop="sales">
              <el-input
                v-model="newPartner.sales"
                placeholder="请输入商品销量"
                clearable
              />
            </el-form-item>
            <el-form-item label="简介:" prop="introduction">
              <el-input
                v-model="newPartner.introduction"
                type="textarea"
                autosize
                placeholder="请输入合作伙伴的简介"
              />
            </el-form-item>
            <el-form-item>
              <el-button
                round
                type="success"
                @click="addNewPartner(ruleFormRef)"
                >新增</el-button
              >
            </el-form-item>
          </el-form>
        </el-card>
      </el-drawer>
    </el-tab-pane>

    <el-tab-pane name="second" label="合作伙伴分布" :lazy="true">
      <el-space :size="400">
        <Bar
          class="chart"
          :chart-data="barChartData"
          :chart-options="chartOptions"
        />
        <Doughnut class="chart" :chart-data="doughnutChartData" />
      </el-space>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { Delete } from "@element-plus/icons-vue";
import type { FormInstance, FormRules } from "element-plus";

import { Bar, Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale
);

const isEdit = ref(false);
const showDrawer = ref(false);

const activeName = ref("first");

const barChartData = computed(() => {
  const data = {
    labels: [""],
    datasets: [
      {
        data: [0],
        label: "销量",
        backgroundColor: "#39c5bb",
      },
    ],
  };
  for (let i = 0; i < partnerData.value.length; i++) {
    data.labels[i] = partnerData.value[i].name;
    data.datasets[0].data[i] = partnerData.value[i].sales;
  }
  return data;
});

const doughnutChartData = computed(() => {
  const data = {
    labels: [""],
    datasets: [
      {
        data: [0],
        backgroundColor: [
          "#41B883",
          "#E46651",
          "#00D8FF",
          "#DD1B16",
          "#3910bb",
          "#30D103",
          "#FF9999",
          "#666FF",
          "#CCCCCC",
          "#FF6666",
        ],
      },
    ],
  };
  for (let i = 0; i < partnerData.value.length; i++) {
    data.labels[i] = partnerData.value[i].name;
    data.datasets[0].data[i] = partnerData.value[i].sales;
  }
  return data;
});
const chartOptions = {
  responsive: true,
};

const newPartner = ref({
  name: "",
  sales: 0,
  introduction: "",
});

const partnerData = ref([
  {
    name: "Vue",
    sales: 150,
    introduction:
      "Vue，读音是/vju:/，是一套用于构建用户界面的渐进式框架，自底层向上应用，Vue的核心库只关注视图层，容易入门，可以和第三方库或者已有的项目进行整合，可以做复杂的单页应用。",
  },
  {
    name: "Java",
    sales: 120,
    introduction:
      "Vue，读音是/vju:/，是一套用于构建用户界面的渐进式框架，自底层向上应用，Vue的核心库只关注视图层，容易入门，可以和第三方库或者已有的项目进行整合，可以做复杂的单页应用。",
  },
  {
    name: "JavaScript",
    sales: 80,
    introduction:
      "Vue，读音是/vju:/，是一套用于构建用户界面的渐进式框架，自底层向上应用，Vue的核心库只关注视图层，容易入门，可以和第三方库或者已有的项目进行整合，可以做复杂的单页应用。",
  },
  {
    name: "TypeScript",
    sales: 95,
    introduction:
      "Vue，读音是/vju:/，是一套用于构建用户界面的渐进式框架，自底层向上应用，Vue的核心库只关注视图层，容易入门，可以和第三方库或者已有的项目进行整合，可以做复杂的单页应用。",
  },
  {
    name: "Golang",
    sales: 110,
    introduction:
      "Vue，读音是/vju:/，是一套用于构建用户界面的渐进式框架，自底层向上应用，Vue的核心库只关注视图层，容易入门，可以和第三方库或者已有的项目进行整合，可以做复杂的单页应用。",
  },
  {
    name: "Python",
    sales: 130,
    introduction:
      "Vue，读音是/vju:/，是一套用于构建用户界面的渐进式框架，自底层向上应用，Vue的核心库只关注视图层，容易入门，可以和第三方库或者已有的项目进行整合，可以做复杂的单页应用。",
  },
]);

const ruleFormRef = ref<FormInstance>();
const rules = ref<FormRules>({
  name: [{ required: true, message: "合作伙伴名称不能为空", trigger: "blur" }],
  sales: [
    {
      required: true,
      message: "销量不能为零",
      trigger: "blur",
    },
  ],
  introduction: [
    {
      required: true,
      message: "合作伙伴简介不能为空",
      trigger: "blur",
    },
  ],
});

const removePartner = (index: number) => {
  partnerData.value.splice(index, 1);
};

const addNewPartner = async (formEl: FormInstance | undefined) => {
  if (!formEl) {
    return;
  }
  await formEl.validate((valid, fields) => {
    if (valid) {
      partnerData.value.unshift({
        name: newPartner.value.name,
        sales: newPartner.value.sales,
        introduction: newPartner.value.introduction,
      });
      newPartner.value.name = "";
      newPartner.value.sales = 0;
      newPartner.value.introduction = "";
    } else {
      console.log("error submit", fields);
    }
  });
};
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
  //   background-color: rgba(65, 64, 64, 0.1);
}
.container-partner {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
.button-in-partner {
  float: right;
}

.text-item {
  background-color: rgba(231, 228, 228, 0.1);
}
.input {
  width: 150px;
  font-size: 18px;
}
.space-min-width {
  min-width: 1496px;
}
.new-partner {
  float: left;
  padding-left: 20px;
}
.orderBox {
  min-width: 400px;
  max-width: 400px;
  min-height: 500px;
  background-image: url(../assets/image/bgi.webp.jpg);
}
.order-box-null {
  min-height: 50px;
}
.order-title {
  font-size: 30px;
  font-weight: 300;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
.order-introduction {
  font-size: 20px;
  font-weight: 500;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 30px;
  margin-right: 30px;
  line-height: 40px;
}
.order-introduction-input {
  textarea {
    font-size: 18px;
    min-height: 200px !important;
  }
}
</style>
