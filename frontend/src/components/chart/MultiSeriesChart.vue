<template>
      <!-- Tiny sparkline chart -->
      <apexchart 
        type="area"
        height="120"
        width="200"
        :options="chartOptions"
        :series="series"
      />
</template>

<script>
import { ref } from 'vue';

export default {
  name: "AreaCard",

  setup() {
    const series = ref([
      {
        name: "HI",
        data: [20, 35, 30, 50, 40, 55, 45]
      }
    ]);

    const chartOptions = ref({
      chart: {
        sparkline: { enabled: true },
      },
      colors: ['#9b5cf6'],
      stroke: {
        width: 2,
        curve: 'straight'
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 0.7,
          opacityFrom: 0.6,
          opacityTo: 0.1,
        }
      },
      tooltip: { enabled: true }
    });

    return { series, chartOptions };
  }
};
</script>
