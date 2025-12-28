<template>
  <apexchart
    class="bg-white"
    type="polarArea"
    height="350"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref } from "vue";

export default {
  name: "SafetyPolarChart",

  props: {
    chartData: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const series = ref(props.chartData[0].series);

    const chartOptions = ref({
      chart: {
        type: "polarArea",
        toolbar: { show: true },
      },

      labels: props.chartData[0].labels,

      stroke: {
        colors: ["#fff"]
      },

      fill: {
        opacity: 0.8
      },

      legend: {
        position: "bottom"
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    });

    return { series, chartOptions };
  }
};
</script>
