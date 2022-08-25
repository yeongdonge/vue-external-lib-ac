<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart></bar-chart>
    <line-chart></line-chart>
  </div>
</template>

<script>
import {Chart, registerables}  from 'chart.js';
import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart.vue';
Chart.register(...registerables);
export default {
  components: {
    BarChart,
    LineChart,
  }
};
</script>

<style>
</style>