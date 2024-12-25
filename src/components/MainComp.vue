<template>
  <div class="container">
    <SearchBar />
    <!-- @onSearchCity="onSearchCity" vuex로 인한 전역 상태관리가 가능해짐에 따라 필요없어짐-->
    <!-- //@는 이벤트 받는용 / :는 프롭보내는용 -->
    <WeatherInfo />
    <!-- :weatherData="props.weatherData" 없어진 이유 위와 동일 -->
  </div>
</template>

<script setup>
import SearchBar from './SearchBar.vue';
import WeatherInfo from './WeatherInfo.vue';

// const emits = defineEmits(['onSearchCity']); //이벤트 컨테이너다, 모든이벤트들을 정의하고 타입정의(ts)도 할수있다 / $emit이나 emits메서드로 정의된 이벤트명에 값을 담아서 보낸다

// const props = defineProps({
//   weatherData: Object,
// });

// const onSearchCity = (city) => {
//   emits('onSearchCity', city);
// };
// 없어진 이유 위와 동일
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
}
</style>
