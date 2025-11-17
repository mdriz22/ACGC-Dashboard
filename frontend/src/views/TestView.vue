<template>
      <!-- Tiny sparkline chart -->
      <apexchart 
        type="line"
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
        name: "High - 2013",
        data: [28, 29, 33, 36, 32, 32, 33]
      },
      {
        name: "Low - 2013",
        data: [12, 11, 14, 18, 17, 13, 13]
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
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.5
      },
      // fill: {
      //   type: "gradient",
      //   gradient: {
      //     shadeIntensity: 0.7,
      //     opacityFrom: 0.6,
      //     opacityTo: 0.1,
      //   }
      // },
      tooltip: { enabled: true }
    });

    return { series, chartOptions };
  }
};
</script>
