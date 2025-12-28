<template>
  <apexchart
    v-if="series.length"
    class="bg-white"
    type="bar"
    height="500"
    :options="chartOptions"
    :series="series"
  />
   <div v-else class="text-center mt-5 text-gray-500">
      No data available for selected filters.
    </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "BarChart",
  props: {
    chartData: {
      type: Array,
      required: true
    }
  },

  setup(props) {

    // ✅ FIXED — DO NOT wrap in another array
    const series = ref(props.chartData);

    const chartOptions = ref({
      chart: {
        type: "bar",
        background: "transparent",
        toolbar: { show: true }
      },

      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: "50%"
        }
      },

      xaxis: {
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"]
      },

      yaxis: {
        min: 0,
        max: 5
      },

      legend: {
        position: "bottom"
      },

      dataLabels: { enabled: false },

      fill: {
        type: "solid",
        opacity: 1
      }
    });

    return { series, chartOptions };
  }
};
</script>
