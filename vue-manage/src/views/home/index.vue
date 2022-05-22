<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userIcon" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超管</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2022-05-22</span></p>
          <p>上次登录地点：<span>北京</span></p>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      userIcon: require("@/assets/images/user.png"),
    };
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style lang='css' scoped>
</style>