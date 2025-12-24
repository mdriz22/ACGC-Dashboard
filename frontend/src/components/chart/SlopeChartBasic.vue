<!-- <template>
  <apexchart
    type="line"
    height="550"
    width="1200"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";

// Updated KPI data with correct titles
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
  name: "SlopeChart",
  components: { apexchart: VueApexCharts },

  setup() {
    // Prepare the series data based on the KPI data
    const series = ref([
      {
        name: "Performance Measure", // This series will hold the target (performance measure)
        data: kpiData.map(item => ({ x: item.title, y: item.performanceMeasure }))
      },
      {
        name: "Achieved", // This series will hold the actual (achieved) values
        data: kpiData.map(item => ({ x: item.title, y: item.achieved }))
      }
    ]);

    // Chart options
    const chartOptions = ref({
      chart: {
        height: 350,
        width: 400,
        type: "line"
      },
      plotOptions: {
        line: {
          isSlopeChart: true 
        }
      },
      stroke: {
        width: 3
      },
      markers: {
        size: 5
      },
      xaxis: {
        categories: kpiData.map(item => item.title), 
      },
      title: {
        text: "KPI Performance"
      }
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
    height="600"
    width="1000"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";

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

    // Create a separate series for each KPI (exactly how slope charts work)
    const series = ref(
      kpiData.map(item => ({
        name: item.title,
        data: [
          { x: "Performance Measure", y: item.performanceMeasure },
          { x: "Achieved", y: item.achieved }
        ]
      }))
    );

    const chartOptions = ref({
      chart: {
        type: "line",
        toolbar: { show: false }
      },
      plotOptions: {
        line: {
          isSlopeChart: true
        }
      },
      stroke: {
        width: 3,
        curve: "straight"
      },
      markers: {
        size: 5
      },
      xaxis: {
        type: "category",
        categories: ["Performance Measure", "Achieved"],
        labels: {
          style: { fontSize: "14px", fontWeight: 600 }
        }
      },
      yaxis: {
        min: 95,
        max: 101,
        tickAmount: 5,
        labels: {
          formatter: value => value.toFixed(2)
        }
      },
      legend: {
        position: "right",
        fontSize: "12px"
      }
    });

    return { series, chartOptions };
  }
};
</script>

<style scoped>
</style>
    