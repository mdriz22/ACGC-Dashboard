<!-- <template>
  <apexchart
    type="area"
    height="450"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
import roomData from "@/data/maintenance/room_occupancy_typewise.js";

export default {
  components: { apexchart: VueApexCharts },

  setup() {
    const categories = roomData.map(r => r.category);

    const series = ref([
      {
        name: "Vacant Rooms",
        type: "area",
        data: roomData.map(r => r.vacant)
      },
      {
        name: "Occupied Rooms",
        type: "area",
        data: roomData.map(r => r.occupied)
      },
      {
        name: "Total Rooms",
        type: "line",
        data: roomData.map(r => r.total)
      },
      {
        name: "Occupancy %",
        type: "line",
        data: roomData.map(r => r.occupancy)
      }
    ]);

    const chartOptions = ref({
      chart: {
        type: "area",
        stacked: true,   // ✔ FIX: stack vacant + occupied
        toolbar: { show: true }
      },

      stroke: {
        curve: "smooth",
        width: [2, 2, 3, 3] // thicker for lines
      },

      dataLabels: {
        enabled: false
      },

      colors: [
        "#FEB019", // Vacant
        "#00E396", // Occupied
        "#008FFB", // Total Rooms (Line)
        "#775DD0"  // Occupancy % (Right Axis)
      ],

      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.7,
          opacityTo: 0.3
        }
      },

      markers: {
        size: [4, 4, 5, 5]
      },

      xaxis: {
        categories,
        title: { text: "Category" }
      },

      yaxis: [
        {
          title: { text: "Rooms" },
          min: 0,
          max: 450,
        },
        {
          opposite: true,
          max: 450,
          title: { text: "Occupancy %" }
        }
      ],

      tooltip: {
        shared: true,
        intersect: false,
        custom: ({ dataPointIndex }) => {
          const row = roomData[dataPointIndex];
          return `
            <div style="padding:10px;">
              <strong>${row.category}</strong><br/>
              Total Rooms: ${row.total}<br/>
              Occupied: ${row.occupied}<br/>
              Vacant: ${row.vacant}<br/>
              Occupancy: ${row.occupancy}%
            </div>
          `;
        }
      },

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
    type="area"
    height="450"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref, watch } from "vue";
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "StackedAreaMixed",
  components: { apexchart: VueApexCharts },
  props: {
    chartData: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const series = ref([]);
    const chartOptions = ref({});

    const buildChart = (data) => {
      const categories = data.map(r => r.category);

      series.value = [
        { name: "Vacant Rooms", type: "area", data: data.map(r => r.vacant) },
        { name: "Occupied Rooms", type: "area", data: data.map(r => r.occupied) },
        { name: "Total Rooms", type: "line", data: data.map(r => r.total) },
        { name: "Occupancy %", type: "line", data: data.map(r => r.occupancy) }
      ];

      chartOptions.value = {
        chart: { type: "area", stacked: true, toolbar: { show: true },zoom: { enabled: false } },
        stroke: { curve: "smooth", width: [2, 2, 3, 3] },
        dataLabels: { enabled: false },
        colors: ["#FEB019", "#00E396", "#008FFB", "#775DD0"],
        fill: { type: "gradient", gradient: { opacityFrom: 0.7, opacityTo: 0.3 } },
        markers: { size: [4, 4, 5, 5] },
        xaxis: { categories, title: { text: "Category" } },
        yaxis: [
          { title: { text: "Rooms" }, min: 0, max: 450 },
          { opposite: true, max: 450, title: { text: "Occupancy %" } }
        ],
        tooltip: {
          shared: true,
          intersect: false,
          custom: ({ dataPointIndex }) => {
            const row = data[dataPointIndex];
            return `
              <div style="padding:10px;">
                <strong>${row.category}</strong><br/>
                Total Rooms: ${row.total}<br/>
                Occupied: ${row.occupied}<br/>
                Vacant: ${row.vacant}<br/>
                Occupancy: ${row.occupancy}%
              </div>
            `;
          }
        },
        legend: { position: "bottom" }
      };
    };

    // Build chart initially
    buildChart(props.chartData);

    // Watch for prop changes
    watch(() => props.chartData, (newData) => {
      buildChart(newData);
    });

    return { series, chartOptions };
  }
};
</script>
