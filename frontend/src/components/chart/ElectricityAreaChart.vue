<template>
  <apexchart
    type="area"
    height="350"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref, watch } from "vue";

export default {
  props: {
    chartData: {
      type: Array,
      required: true
    }
  },

  setup(props) {
    const series = ref([]);
    const chartOptions = ref({});

    const updateChart = () => {
      if (!props.chartData.length) return;

      const record = props.chartData[0]

      series.value = record.series;

      chartOptions.value = {
        chart: {
          type: "area",
          height: 350,
          toolbar: { show: true },
          zoom: { enabled: false }
        },

        colors: ["#4F46E5"],

        dataLabels: { enabled: false },

        stroke: {
          curve: "smooth",
          width: 3
        },

        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 0.4,
            opacityFrom: 0.35,
            opacityTo: 0.05
          }
        },

        grid: {
          strokeDashArray: 4
        },

        xaxis: {
          categories: record.categories,
          title: { text: "Day of Month" }
        },

        yaxis: {
          title: { text: "Units Consumed (kWh)" }
        },

        tooltip: {
          y: {
            formatter: val => `${val.toLocaleString()} Units`
          }
        },

        legend: { show: false }
      };
    };

    watch(() => props.chartData, updateChart, { immediate: true });

    return { series, chartOptions };
  }
};
</script>
