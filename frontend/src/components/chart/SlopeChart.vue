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

// Week-based series data
import chartData from "@/data/maintenance/catering_laundry_service.js"; 

// X-axis categories (names of categories)
const categories = [
  'Taste of the food',
  'Service',
  'Food Quality',
  'Restaurant employees service Quality',
  'Laundry Service Quality'
];

export default {
  name: "ReversedSlopeChart",
  components: { apexchart: VueApexCharts },

  setup() {
    const series = ref(chartData);

    const chartOptions = ref({
      chart: {
        type: "line",
        height: 450,
        toolbar: { show: true },
        zoom: { enabled: false }
      },
      xaxis: {
        categories: categories,
        title: { text: "Categories" }
      },
      yaxis: {
        title: { text: "Rating" },
        min: 0,
        max: 6,
        tickAmount: 6
      },
      stroke: {
        curve: "smooth",
        width: 3
      },
      markers: {
        size: 5
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: val => val.toFixed(2)
        }
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center"
      },
      dataLabels: {
        enabled: true
      },
      colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560"]
    });

    return { series, chartOptions };
  }
};
</script> -->

<template>
  <div>
    <apexchart
      v-if="series.length"
      type="line"
      height="450"
      :options="chartOptions"
      :series="series"
    />
    <div v-else class="text-center mt-5 text-gray-500">
      No data available for selected filters.
    </div>
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";
import VueApexCharts from "vue3-apexcharts";

const categories = [
  'Taste of the food',
  'Service',
  'Food Quality',
  'Restaurant employees service Quality',
  'Laundry Service Quality'
];

export default {
  name: "SlopeChart",
  components: { apexchart: VueApexCharts },
  props: {
    chartData: {
      type: Object,
      required: false,
      default: () => null
    }
  },

  setup(props) {
    // series should be chartData.records if chartData exists, else empty array

    // const series = computed(() => {
    //   return props.chartData && props.chartData.records ? props.chartData.records : [];
    // });

    const series = ref(props.chartData);

    const chartOptions = ref({
      chart: {
        type: "line",
        height: 450,
        toolbar: { show: true },
        zoom: { enabled: false }
      },
      xaxis: {
        categories,
        title: { text: "Categories" }
      },
      yaxis: {
        title: { text: "Rating" },
        min: 0,
        max: 12,  // If your data has values like 10.5, increase max accordingly
        tickAmount: 6
      },
      stroke: {
        curve: "smooth",
        width: 3
      },
      markers: {
        size: 5
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: val => val.toFixed(2)
        }
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center"
      },
      dataLabels: {
        enabled: true
      },
      colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560"]
    });

    return { series, chartOptions };
  }
};
</script>
