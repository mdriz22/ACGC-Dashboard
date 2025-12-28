

<template>
  <apexchart
    type="line"
    height="350"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
import chartData from "@/data/maintenance/water_consumption.js"; 

export default {
  components: { apexchart: VueApexCharts },
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
        height: 350,
        type: "line",
        toolbar: { show: true },
        zoom: { enabled: false }
      },
      dataLabels: { enabled: false },
      stroke: { width: [5, 7], curve: "straight" },
    //   title: { text: "October Water Data", align: "left" },
      xaxis: { categories: props.chartData[0].categories },
      tooltip: {
        y: [
          { title: { formatter: (val) => val + " (RAW)" } },
          { title: { formatter: (val) => val + " (Sweet)" } }
        ]
      },
      markers: { size: 0, hover: { sizeOffset: 6 } },
      legend: {
        tooltipHoverFormatter: (val, opts) =>
          `${val} - <strong>${opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex]}</strong>`
      },
      grid: { borderColor: "#f1f1f1" }
    });

    return { series, chartOptions };
  }
};
</script>

