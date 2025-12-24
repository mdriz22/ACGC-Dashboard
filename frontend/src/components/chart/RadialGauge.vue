<template>
  <apexchart
    type="bar"
    height="400"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
import saudiData from "@/data/maintenance/manpower_saudi_national.js";

export default {
  name: "SaudiNationalizationChart",
  components: { apexchart: VueApexCharts },

  setup() {
    const series = ref([
      {
        name: "Total",
        data: saudiData.total
      },
      {
        name: "Saudi Nationals",
        data: saudiData.nationals
      }
    ]);

    const chartOptions = ref({
      chart: {
        type: "bar",
        stacked: false,
        toolbar: { show: true }
      },

      plotOptions: {
        bar: {
          horizontal: true,
          borderRadius: 4,
          barHeight: "50%"
        }
      },

      colors: ["#3498db", "#2ecc71"],

      dataLabels: { enabled: true },

      xaxis: {
        categories: saudiData.functions
      },

      yaxis: {
        title: { text: "Count" },
        min: 0
      },

      legend: {
        position: "bottom"
      }
    });

    return { series, chartOptions };
  }
};
</script>
