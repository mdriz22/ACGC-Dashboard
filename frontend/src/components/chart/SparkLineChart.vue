<template>
    <apexchart 
        type="area"
        height="60"
        width="120"
        :options="chartOptions"
        :series="series"
      />
</template>

<script>
import { ref } from 'vue';

export default {
  name: "SparkLineChart",
  props: { chartData: Object },
  setup(props) {
    const series = ref([
      {
        name: "",
        data: props.chartData.data
      }
    ]);

    const chartOptions = ref({
      chart: {
        sparkline: { enabled: true },
      },
      colors: [props.chartData.chart_color],
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
      tooltip: { enabled: false }
    });

    return { series, chartOptions };
  }
};
</script>
