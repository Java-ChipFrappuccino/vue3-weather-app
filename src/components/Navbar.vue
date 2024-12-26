<template>
  <nav class="navbar">
    <button @click="store.toggleButton()" class="toggle">
      <!-- 함수같은 경우는 스토어에서 바로 함수명 호출하면 됨 -->
      <font-awesome-icon class="icon" :icon="['fas', 'bars-staggered']" />
    </button>
  </nav>
</template>

<script setup>
  import { useStore } from '../store/store-pinia.js';

  const store = useStore(); // 먼저 스토어를 가져오고
</script>

<style lang="scss" scoped>
  .navbar {
    background: #fff;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: end;

    button {
      border: none;
      background: transparent;
      cursor: pointer;
    }
    .icon {
      color: #333;
      font-size: 24px;
    }
  }
</style>
