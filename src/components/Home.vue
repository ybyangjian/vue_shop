<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    //退出登录
    logout() {
      sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" scoped></style>
