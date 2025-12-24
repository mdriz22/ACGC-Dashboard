<!-- <template>
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

export default {
  components: { apexchart: VueApexCharts },
  setup() {
    const series = ref([
      {
        name: "Session Duration",
        data: Array.from({ length: 31 }, () => Math.floor(Math.random() * 60)) // example data
      },
      {
        name: "Page Views",
        data: Array.from({ length: 31 }, () => Math.floor(Math.random() * 70))
      },
      {
        name: "Total Visits",
        data: Array.from({ length: 31 }, () => Math.floor(Math.random() * 100))
      }
    ]);

    // Generate categories: "01 Oct" to "31 Oct"
    const categories = Array.from({ length: 31 }, (_, i) => {
      const day = String(i + 1).padStart(2, "0");
      return `${day} Oct`;
    });

    const chartOptions = ref({
      chart: {
        height: 350,
        type: 'line',
        zoom: { enabled: false },
      },
      dataLabels: { enabled: false },
      stroke: { width: [5, 7, 5], curve: 'straight', dashArray: [0, 8, 5] },
      title: { text: 'Page Statistics', align: 'left' },
      legend: {
        tooltipHoverFormatter: (val, opts) => 
          `${val} - <strong>${opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex]}</strong>`
      },
      markers: { size: 0, hover: { sizeOffset: 6 } },
      xaxis: { categories },
      tooltip: {
        y: [
          { title: { formatter: (val) => val + " (mins)" } },
          { title: { formatter: (val) => val + " per session" } },
          { title: { formatter: (val) => val } }
        ]
      },
      grid: { borderColor: '#f1f1f1' }
    });

    return { series, chartOptions };
  }
};
</script>

<style scoped>
</style> -->




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
  setup() {
    const series = ref(chartData.series);
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
      xaxis: { categories: chartData.categories },
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

