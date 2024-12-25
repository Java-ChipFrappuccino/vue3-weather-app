<script setup>
import Navbar from './components/Navbar.vue';
import MainComp from './components/MainComp.vue';
import About from './components/About.vue';
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
// 날씨 데이터 상태변수
// const weatherData = ref({ //store로 옮김
//   icon: 'icon',
//   temp: 0,
//   text: 'text',
//   location: 'location',
//   city: 'seoul',
// });

// 날씨 데이터 가져오기

// 앱이 실행되면(onMounted) 날씨 데이터 가져오기
onMounted(() => {
  console.log('mounted');
  store.dispatch('getWeather');
});

const onSearchCity = (city) => {
  // console.log(city);
  weatherData.value.city = city;
  getWeather();
};
</script>

<template>
  <Navbar />
  <div v-if="$store.state.toggle">
    <MainComp />
  </div>
  <div v-else>
    <About />
  </div>
  <!-- :weatherData="weatherData" @onSearchCity="onSearchCity" 이제 store가 생겼으니 필요없음-->
  <!-- @는 자식에게서 넘겨받은 해당이름의 이벤트를 감지 / 감지후에 뒤에 이름의 함수명을 가진 코드를 실행시킴 -->
</template>

<style scoped lang="scss"></style>
