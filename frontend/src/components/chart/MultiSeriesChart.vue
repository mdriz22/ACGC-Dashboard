<template>
      <!-- Tiny sparkline chart -->
      <apexchart class=""
        type="line"
        height="200"
        :options="chartOptions"
        :series="series"
      />
</template>

<script>
import { ref } from 'vue';

export default {
  name: "AreaCard",

  setup() {
    const series = ref([
      {
        name: "Preventive Maintenance",
        data: [80, 50, 58, 40, 60, 56, 56, 60, 40, 42, 40, 16]
      },
      {
        name: "Corrective Maintenance",
        data: [50, 36, 42, 20, 42, 30, 70, 24, 54, 58, 50, 70]
      },
      {
        name: "Work Request",
        data: [30, 60, 30, 60, 70, 60, 40, 20, 30, 70, 30, 50]
      }
    ]);

    const chartOptions = ref({
      chart: {
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 10,
          left: 7,
          blur: 5,
          opacity: 0.3
        },
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      colors: ['#64d3aa', '#44c8f6', '#f6b321'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight'
      },
      // grid: {
      //   borderColor: '#e7e7e7',
      //   row: {
      //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      //     opacity: 0.5
      //   },
      // },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        yaxis: {
          min: 0,
          max: 100,
        }
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'left',
        floating: true,
        offsetY: 35,
        offsetX: 5
      },
    });
    return { series, chartOptions };
  }
};
</script>
