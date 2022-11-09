<template>
  <el-space
    direction="vertical"
    class="animate__animated animate__backInLeft animate__delay-1s"
  >
    <div class="text-align-center">
      <h1>公司介绍</h1>
      <p class="font-style">
        致力于打造世界级中国医学影像、远程医疗领军企业，让全球每一个人享受到优质的医疗服务！
      </p>
    </div>
    <el-space class="margin font-style" :size="size">
      <el-image
        class="image-size"
        src="src/assets/image/companyProfileIamge.png"
      />
      <div>
        <p>
          海纳医信（北京）软件科技有限责任公司于2008年由数位留美医学影像信息化专家归国创立，是业界领先的医学影像信息系统及远程医疗系统的研发、生产与服务提供商。
          公司总部位于北京市中关村清华科技园，在陕西省、山东省、黑龙江省、辽宁省、四川省、河南省、贵州省、浙江省和广东省等设有分公司，在北京、天津、郑州、武汉和美国设有研发中心，
          具备自主创新的核心研发能力。在建立国内营销体系的同时，在美国、东南亚、南亚、中东、北非及欧洲建立了市场营销代理体系。
        </p>
      </div>
    </el-space>
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const size = ref(30);
</script>

<style lang="less" scope>
.margin {
  margin: 0 20%;
}
.font-style {
  font-size: 18px;
  font-weight: 300;
  color: gray;
}
.text-align-center {
  text-align: center;
}
.image-size {
  width: 400px;
}
</style>
