<template>
  <div class="weather-info">
    <div class="icon">
      <img
        :src="`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`"
        :alt="weatherData.icon"
      />
    </div>
    <div class="temp">{{ (weatherData.temp - 273.15).toFixed(1) }}&deg;</div>
    <div class="text">{{ weatherData.text }}</div>
    <div class="location">
      {{ weatherData.city }},
      {{ weatherData.location }}
    </div>
  </div>
</template>

<script setup>
  // const props = defineProps({
  //   weatherData: Object,
  // });
  // vuex로 인한 전역 상태관리가 가능해짐에 따라 필요없어짐

  import { useStore } from '../store/store-pinia.js';
  import { storeToRefs } from 'pinia';

  const store = useStore(); // 먼저 스토어를 가져오고
  const { weatherData } = storeToRefs(store); // 그 안에 있는 상태값들을 ref로 감싸서 가져온다 , 내가 가져오고 싶은것만 가져올수 있다
</script>

<style lang="scss" scoped>
  .weather-info {
    padding: 20px;
    & > div {
      margin-bottom: 20px;
      padding: 20px;
      border: 1px solid #ccc;
    }
    .icon img {
      width: 140px;
    }
    .temp {
      font-size: 4em;
    }
    .text {
      font-size: 2em;
    }
  }
</style>
