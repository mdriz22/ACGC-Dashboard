<template>
  <apexchart
    type="heatmap"
    height="900"
    width="650"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
import scoresData from "@/data/maintenance/safety_and_environment.js";

export default {
  name: "SafetyHeatMap",
  components: { apexchart: VueApexCharts },
   props: {
    chartData: {
      type: Array,
      required: true
    }
  },

  setup(props) {
    const series = ref(
      props.chartData[0].categories.map((cat, i) => ({
        name: cat,
        data: [
          {
            x: "Applicable",
            y: props.chartData[0].applicable[i] ?? 0
          },
          {
            x: "Actual",
            y: props.chartData[0].actual[i] ?? 0
          },
          {
            x: "Satisfactory Rating",
            y: Number(props.chartData[0].percentage[i]) || 0
          }
        ]
      })).reverse()
    );

    const chartOptions = ref({
      chart: { toolbar: { show: true } },

      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val;
        },
        style: { fontSize: "10px" }
      },

      tooltip: {
        y: {
          formatter: (val) => val
        }
      },

      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          colorScale: {
            ranges: [
              { from: 0, to: 25, color: "#FF4560", name: "Low" },
              { from: 26, to: 50, color: "#FEB019", name: "Medium" },
              { from: 51, to: 75, color: "#008FFB", name: "Good" },
              { from: 76, to: 999999, color: "#00E396", name: "High" }
            ]
          }
        }
      },
      colors: ["#FF4560", "#FEB019", "#008FFB", "#00E396"],

      xaxis: {
        type: "category",
        labels: { rotate: -45 }
      },

      yaxis: { show: true },

      legend: { show: true,
        position: "bottom"
       }
    });

    return { series, chartOptions };
  }
};
</script>

<style scoped>
</style>
