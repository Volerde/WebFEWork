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
        :size="30"
        :fill="false"
        wrap
        style="text-align: center; margin-left: 5%"
      >
        <el-card
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
        </el-card>
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
                placeholder="请输入合作伙伴的名称"
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
    <el-tab-pane name="second" label="合作伙伴分布"> 分布 </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Delete } from "@element-plus/icons-vue";
import type { FormInstance, FormRules } from "element-plus";

const isEdit = ref(false);
const showDrawer = ref(false);

const activeName = ref("first");

const newPartner = ref({
  name: "",
  introduction: "",
});

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

const ruleFormRef = ref<FormInstance>();
const rules = ref<FormRules>({
  name: [{ required: true, message: "合作伙伴名称不能为空", trigger: "blur" }],
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
        introduction: newPartner.value.introduction,
      });
      newPartner.value.name = "";
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
  width: auto;
}
.space-min-width {
  min-width: 1496px;
}
.new-partner {
  float: left;
  padding-left: 20px;
}
</style>
