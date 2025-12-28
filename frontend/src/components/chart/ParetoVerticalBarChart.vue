<template>
  <apexchart
    height="460"
    type="line"
    :options="chartOptions"
    :series="series"
  />
</template>

<script setup>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
import cmData from "@/data/maintenance/cm_overall_scheduled_accomplished.js";

 const props = defineProps({
  chartData: {
    type: Object, 
    required: true
  }
});

const series = ref([
  {
    name: "Scheduled",
    type: "column",
    data: props.chartData[0].scheduled
  },
  {
    name: "Accomplished",
    type: "area",
    data: props.chartData[0].accomplished
  },
  {
    name: "% Completed",
    type: "line",
    data: props.chartData[0].percentage
  }
]);

const chartOptions = ref({
  chart: {
    height: 450,
    stacked: false,
    toolbar: { show: true },
    zoom: { enabled: false }
  },

  title: {
    text: "",
    align: "center",
    style: { fontSize: "22px", fontWeight: "bold" }
  },

  stroke: {
    width: [0, 2, 3],
    curve: "smooth"
  },

  plotOptions: {
    bar: {
      columnWidth: "45%",
      borderRadius: 6
    }
  },

  dataLabels: {
    enabled: true,
    formatter: (val, opts) =>
      opts.seriesIndex === 2 ? val + "%" : val
  },

  xaxis: {
    categories: cmData.subjects
  },

  yaxis: [
    {
      title: { text: "Count" }
    },
    {
      opposite: true,
      max: 100,
      title: { text: "Percentage" }
    }
  ],

  colors: ["#3498db", "#2ecc71", "#e74c3c"],

  fill: {
    type: ["solid", "gradient", "solid"],
    gradient: {
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 0.6,
      opacityTo: 0.1,
      stops: [0, 90, 100]
    }
  },

  legend: { position: "bottom" }
});
</script>


