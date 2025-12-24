<template>
  <apexchart
    type="line"
    height="500"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref } from "vue";
import dataFile from "@/data/maintenance/sewage_water_consumption.js";

export default {
  name: "SteplineChart",
  setup() {
    const series = ref([
      {
        name: "Sewage Water Consumption (Litres)",
        data: dataFile.capacities
      }
    ]);

    const chartOptions = ref({

      chart: {
        toolbar: { show: true },
        zoom: { enabled: false }
      },


      stroke: { curve: "stepline", width: 3, colors: ["#FF5733"] },

      markers: { size: 0 },

      xaxis: { categories: dataFile.dates },

      grid: { borderColor: "#ddd" },

      
    });

    return { series, chartOptions };
  }
};
</script>
