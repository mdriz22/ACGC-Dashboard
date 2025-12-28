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
   props: {
    chartData: {
      type: Array,
      required: true
    }
  },

  setup(props) {
    // Build data series using file values
    const series = ref([
      {
        name: "Performance Measure",
        data: props.chartData.map(item => item.performanceMeasure)
      },
      {
        name: "Achieved",
        data: props.chartData.map(item => item.achieved)
      }
    ]);

    const chartOptions = ref({
      chart: {
        type: "radar",
        toolbar: { show: true }
      },

      xaxis: {
        categories: props.chartData.map(item => item.title),
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
