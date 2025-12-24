<!-- <template>
  <apexchart
    type="line"
    height="450"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
import cmData from "@/data/maintenance/cm_overall_scheduled_accomplished.js";

export default {
  name: "CMOverallChart",
  components: { apexchart: VueApexCharts },

  setup() {
    const series = ref([
      {
        name: "Scheduled",
        type: "column",
        data: cmData.scheduled
      },
      {
        name: "Accomplished",
        type: "column",
        data: cmData.accomplished
      },
      {
        name: "% Completed",
        type: "line",
        data: cmData.percentage
      }
    ]);

    const chartOptions = ref({
      chart: { stacked: false },
      title: {
        text: "CM Overall Scheduled vs Accomplished",
        align: "center",
        style: { fontSize: "22px", fontWeight: "bold" }
      },

      plotOptions: {
        bar: {
          columnWidth: "45%",
          borderRadius: 4
        }
      },

      stroke: { width: [0, 0, 3], curve: "smooth" },

      xaxis: {
        categories: cmData.subjects
      },

      yaxis: [
        // LEFT AXIS → Scheduled & Accomplished
        {
          title: { text: "Count" },
          min: 0
        },

        // RIGHT AXIS → Percentage ONLY
        {
          opposite: true,
          min: 0,
          max: 100,
          title: { text: "Percentage" }
        }
      ],

      dataLabels: {
        enabled: true,
        formatter: (val, opts) =>
          opts.seriesIndex === 2 ? val + "%" : val
      },

      colors: ["#3498db", "#2ecc71", "#e74c3c"],

      legend: {
        position: "bottom"
      }
    });

    return { series, chartOptions };
  }
};
</script> -->


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

const series = ref([
  {
    name: "Scheduled",
    type: "column",
    data: cmData.scheduled
  },
  {
    name: "Accomplished",
    type: "area",
    data: cmData.accomplished
  },
  {
    name: "% Completed",
    type: "line",
    data: cmData.percentage
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

