<template>
  <apexchart
    type="area"
    height="350"
    :series="series"
    :options="chartOptions"
  />
</template>

<script>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
import garbageData from "@/data/maintenance/garbage_collection.js";

export default {
  name: "GarbageChart",
  components: { apexchart: VueApexCharts },
   props: {
    chartData: {
      type: Object,   
      required: true
    }
  },

  setup(props) {
    const series = ref([
      {
        name: "Garbage Collection Capacity",
        data: props.chartData[0].capacities
      }
    ]);

    const chartOptions = ref({
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        // zoom: { type: "x", enabled: true, autoScaleYaxis: true },
        // toolbar: { autoSelected: "zoom" }
        zoom: { enabled: false },
        toolbar: { show: true }
      },
      dataLabels: { enabled: false },
      markers: { size: 0 },
      title: {
        text: "Daily Garbage Collection Capacity",
        align: "left"
      },
      fill: {
        type: "gradient",
        gradient: { shadeIntensity: 1, inverseColors: false, opacityFrom: 0.5, opacityTo: 0, stops: [0, 90, 100] }
      },
      yaxis: { title: { text: "Capacity" } },
      xaxis: { categories: props.chartData[0].dates },
      tooltip: {
        shared: false,
        y: {
          formatter: (val) => `${val} units`
        }
      }
    });

    return { series, chartOptions };
  }
};
</script>
