<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import userStore from "@/store/modules/UserStore";

const user = userStore();
const { userMes } = storeToRefs(user);
const count = ref(0);
</script>

<template>
  <h1>首页</h1>

  <div class="card">
    <button v-permission="['admin']" type="button" @click="count++">
      count is {{ count }}
    </button>
    <p>
      {{ userMes }}
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p class="ml-10">
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
