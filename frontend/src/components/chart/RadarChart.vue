<!-- <template>
  <apexchart
    type="radar"
    height="500"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";

// Your KPI data
const kpiData = [
  { title: 'MANAGEMENT SERVICES', performanceMeasure: 100.00, achieved: 99.95 },
  { title: 'ENVIRONMENTAL, HEALTH AND SAFETY', performanceMeasure: 98.79, achieved: 99.70 },
  { title: 'MECHANICAL, ELECTRICAL AND PLUMBING', performanceMeasure: 99.42, achieved: 99.96 },
  { title: 'CIVIL AND FABRIC MAINTENANCE', performanceMeasure: 99.52, achieved: 100.00 },
  { title: 'CLEANING AND WASTE MANAGEMENT', performanceMeasure: 99.05, achieved: 100.00 },
  { title: 'LANDSCAPING', performanceMeasure: 100.00, achieved: 99.47 },
  { title: 'ATTENDANCE', performanceMeasure: 100.00, achieved: 100.00 }
];

export default {
  components: { apexchart: VueApexCharts },

  setup() {
    // Radar chart series — taking values directly from your dataset
    const series = ref([
      {
        name: "Performance Measure",
        data: kpiData.map(item => item.performanceMeasure)
      },
      {
        name: "Achieved",
        data: kpiData.map(item => item.achieved)
      }
    ]);

    // Chart options
    const chartOptions = ref({
      chart: {
        type: "radar",
        toolbar: { show: true }
      },

      title: {
        text: ""
      },

      xaxis: {
        categories: kpiData.map(item => item.title),
        labels: {
          show: true,
          style: {
            fontSize: "12px",
            fontWeight: 500
          }
        }
      },

      dataLabels: {
        enabled: true
      },

      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColors: "#e9e9e9",
            fill: {
              colors: ["#f8f8f8", "#fff"]
            }
          }
        }
      },

      markers: {
        size: 4,
        colors: ["#fff"],
        strokeWidth: 2
      },

      colors: ["#008FFB", "#00E396"],

      yaxis: {
        min: 95,
        max: 101,
        tickAmount: 6,
        labels: {
          formatter: (val, idx) => (idx % 2 === 0 ? val.toFixed(1) : "")
        }
      },

      tooltip: {
        y: {
          formatter: val => val.toFixed(2)
        }
      }

    });

    return { series, chartOptions };
  }
};
</script> -->



<template>
  <apexchart
    type="radar"
    height="500"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
import kpiData from "@/data/maintenance/kpi_performance_measure.js";   

export default {
  components: { apexchart: VueApexCharts },

  setup() {
    // Build data series using file values
    const series = ref([
      {
        name: "Performance Measure",
        data: kpiData.map(item => item.performanceMeasure)
      },
      {
        name: "Achieved",
        data: kpiData.map(item => item.achieved)
      }
    ]);

    const chartOptions = ref({
      chart: {
        type: "radar",
        toolbar: { show: true }
      },

      xaxis: {
        categories: kpiData.map(item => item.title),
        labels: {
          show: true,
          style: {
            fontSize: "12px",
            fontWeight: 500
          }
        }
      },

      dataLabels: {
        enabled: true
      },

      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColors: "#e9e9e9",
            fill: {
              colors: ["#f8f8f8", "#fff"]
            }
          }
        }
      },

      markers: {
        size: 4,
        colors: ["#fff"],
        strokeWidth: 2
      },

      colors: ["#008FFB", "#00E396"],

      yaxis: {
        min: 95,
        max: 101,
        tickAmount: 6,
        labels: {
          formatter: (val, idx) => (idx % 2 === 0 ? val.toFixed(1) : "")
        }
      },

      tooltip: {
        y: {
          formatter: val => val.toFixed(2)
        }
      }
    });

    return { series, chartOptions };
  }
};
</script>
