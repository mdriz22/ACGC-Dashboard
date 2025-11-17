<template>
  <div class="relative bg-[#f5f8ff] border-l-4 border-[#fba800] flex items-center p-4 rounded-lg">
    <!-- Percentage Section -->
    <div class="flex-1">
      <div class="text-4xl font-medium">{{ percentageCardData.percentage }} %</div>
      <div class="text-gray-500 text-sm">{{ percentageCardData.title }}</div>
    </div>
    <!-- Chart Section-->
    <div class="flex flex-col items-end">
      <GrowthIndicator v-bind:indicatorData="percentageCardData.indicator_percentage"/>
      <SparkLineChart v-bind:chartData="percentageCardData"/>
    </div>
  </div>
</template>

<script>
import SparkLineChart from './chart/SparkLineChart.vue';
import GrowthIndicator from './GrowthIndicator.vue';

export default {
  name: "PercentageCard",
  components: { SparkLineChart, GrowthIndicator },
  props: { percentageCardData: Object }
};
</script>
