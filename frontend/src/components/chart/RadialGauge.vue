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

  
  props: {
    chartData: {
      type: Array,
      required: true
    }
  },


  setup(props) {

  
    const series = ref([
      {
        name: "Total",
        data: props.chartData[0].total
      },
      {
        name: "Saudi Nationals",
        data: props.chartData[0].nationals
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
        categories: props.chartData[0].functions
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
