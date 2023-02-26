<script setup lang="ts">
import "element-plus/theme-chalk/display.css";
import { reactive, ref } from "vue";
import type { FormRules, FormInstance } from "element-plus";
import { User, Lock } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import userStore from "@/store/modules/UserStore";
import { toLogin } from "@/api/login";

const router = useRouter();
const user = userStore();
const formRef = ref<FormInstance>();
const formLabelAlign = reactive({
  name: "admin",
  passWord: "123456",
  code: "2593",
});
const rules = reactive<FormRules>({
  name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  passWord: [{ required: true, message: "请输入密码", trigger: "blur" }],
  code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
});
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      const loginMes = await toLogin(formLabelAlign);
      if (loginMes.code !== 200) {
        return;
      }
      user.setUserMessage(loginMes.data);
      const routerPath: any = {
        1: "/grid", // 用户页面
        2: "/backstage", // 后台管理页面
      };
      router.push({
        path: routerPath[loginMes.data.jumpType],
      });
    }
  });
};
</script>

<template>
  <div class="login-left hidden-xs-only">
    <img src="@/assets/login/loginLeft.png" width="700" height="500" />
  </div>
  <div class="login-form">
    <div class="login-logo">MemorAndum-Admin</div>
    <el-form
      ref="formRef"
      :model="formLabelAlign"
      style="max-width: 460px"
      :rules="rules"
    >
      <el-form-item prop="name">
        <el-input
          v-model="formLabelAlign.name"
          placeholder=" 用户名："
          :prefix-icon="User"
        />
      </el-form-item>
      <el-form-item prop="passWord">
        <el-input
          v-model="formLabelAlign.passWord"
          type="password"
          placeholder=" 密码："
          :prefix-icon="Lock"
        />
      </el-form-item>
      <el-form-item prop="code">
        <el-input v-model="formLabelAlign.code" placeholder="请输入验证码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="w-100" @click="submitForm(formRef)"
          >Submit</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="less">
.login-left {
  width: 800px;
  margin: 0 10px 0 0;
}
.login-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 45px;
  font-size: 35px;
  font-weight: 1000;
}
.login-form {
  width: 420px;
  padding: 50px 40px 45px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 3px 7px #0003;
}
</style>
