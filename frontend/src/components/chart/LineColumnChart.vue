<template>
  <apexchart
    type="line"
    height="500"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "LineColumnChart",

  props: {
    chartData: {
      type: Object,   // because room_occupancy is an object
      required: true
    }
  },

  setup(props) {
    
    const series = ref([
      {
        name: "Total Rooms",
        type: "column",
        data: props.chartData.totalRooms
      },
      {
        name: "Occupied Rooms",
        type: "column",
        data: props.chartData.occupiedRooms
      },
      {
        name: "Vacant Rooms",
        type: "column",
        data: props.chartData.vacantRooms
      },
      {
        name: "Occupancy %",
        type: "line",
        data: props.chartData.occupancyPercent
      }
    ]);

    const chartOptions = ref({
      chart: {
        type: "line",
        height: 500,
        toolbar: { show: true },
        zoom: { enabled: false }
      },

      colors: ["#2E86DE", "#28B463", "#E67E22", "#8E44AD"],

      stroke: { width: [0, 0, 0, 3] },

      xaxis: {
        categories: props.chartData.buildings,
        labels: { rotate: -45, fontSize: "12px" }
      },

      yaxis: [
        {
          title: { text: "Rooms" },
          min: 0
        },
        {
          opposite: true,
          title: { text: "Percentage" },
          min: 0,
          max: 100
        }
      ],

      dataLabels: {
        enabled: true,
        formatter: (val, opt) =>
          opt.seriesIndex === 3 ? val + "%" : val
      },

      tooltip: {
        shared: true,
        y: {
          formatter: (val, { seriesIndex }) =>
            seriesIndex === 3 ? val + "%" : val
        }
      },

      legend: {
        position: "bottom",
        horizontalAlign: "center",
        fontSize: "13px"
      }
    });

    return { series, chartOptions };
  }
};
</script>
