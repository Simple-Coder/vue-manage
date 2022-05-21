<template>
  <el-container>
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "@/components/CommonAside";
export default {
  name: "Main",
  data() {
    return {};
  },

  components: {
    CommonAside,
  },

  computed: {},

  methods: {},
};
</script>
<style lang='less' scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding: 0;
}
</style>