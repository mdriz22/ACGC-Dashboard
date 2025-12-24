<template>
  <apexchart
    class="bg-white"
    type="donut"
    width="500"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref } from "vue";

export default {
  name: "DonutChart",

  props: {
    chartData: {
      type: Array,
      required: true
    }
  },

  setup(props) {
    const series = ref(props.chartData.map(item => item.count));

    const chartOptions = ref({
      labels: props.chartData.map(item => item.meal),

      legend: {
        position: "bottom"
      },

      dataLabels: {
        enabled: true
      },

      chart: {
        type: "donut",
        background: "transparent",
        toolbar: { show: true },
      },

      colors: ["#FF9800", "#4CAF50", "#03A9F4"],
    });

    return { series, chartOptions };
  }
};
</script>
