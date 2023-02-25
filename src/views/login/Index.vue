<script setup lang="ts">
import loginForm from "@/views/login/loginForm.vue";
</script>

<template>
  <div class="login flex-center">
    <div class="login-box">
      <loginForm />
    </div>
  </div>
</template>

<style scoped lang="less">
.login {
  background: url("@/assets/svg/login.svg");
  height: 100vh;
  width: 100%;
  background-size: cover;
  .login-box {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 96%;
    height: 94%;
    padding: 0 50px;
    margin: 0 auto;
    background-color: #fffc;
    border-radius: 10px;
  }
}
</style>
