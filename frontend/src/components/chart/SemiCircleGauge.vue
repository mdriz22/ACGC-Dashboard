<template>
  <div>
    <apexchart
      type="radialBar"
      height="300"
      :options="chartOptions"
      :series="series"
    />

    <div class="text-center mt-2 text-gray-700 font-semibold">
      Saudi National / total : {{ saudi }} / {{ total }}  
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import { ref } from "vue";

export default {
  name: "ManpowerRadial",
  components: { apexchart: VueApexCharts },

  setup() {
    const total = 154;
    const saudi = 10;
    const percentage = ((saudi / total) * 100).toFixed(2); 

    const series = ref([Number(percentage)]);

    const chartOptions = ref({
      chart: {
        type: "radialBar",
        offsetY: -20,
        sparkline: { enabled: true }
      },

      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5,
            dropShadow: {
              enabled: true,
              top: 2,
              color: "#444",
              opacity: 1,
              blur: 2
            }
          },
          dataLabels: {
            name: { show: false },
            value: {
              offsetY: -2,
              fontSize: "22px",
              formatter: () => percentage + "%"
            }
          }
        }
      },

      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91]
        }
      },

      labels: ["Saudization %"]
    });

    return { series, chartOptions, total, saudi };
  }
};
</script>

<style>

</style>
