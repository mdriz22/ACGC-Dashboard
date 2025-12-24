<template>
  <div class="relative bg-[#f5f8ff] w-[300px] border-l-4 border-[#fba800] flex items-center p-4 rounded-lg">
    
    <!-- Count Section -->
    <div class="flex-1">
      <div class="text-4xl font-medium">{{ countCardData.count }}</div>
      <div class="text-gray-500 text-sm">{{ countCardData.title }}</div>
    </div>
    
    <!-- Chart Section -->
    <div class="flex flex-col items-end">
      <SparkLineChart :chartData="countCardData" />
    </div>

  </div>
</template>

<script>
import SparkLineChart from './chart/SparkLineChart.vue';

export default {
  name: "CountCard",
  components: { SparkLineChart },
  props: {
    countCardData: {
      type: Object,
      required: true
    }
  }
};
</script>
