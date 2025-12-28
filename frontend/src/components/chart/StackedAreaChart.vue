<template>
  <apexchart
    class="bg-white"
    type="area"
    height="350"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref } from "vue";

export default {
  name: "AreaStackedChart",

  props: {
    chartData: {
      type: Object,   
      required: true
    }
  },

  setup(props) {
    
    const series = ref(props.chartData[0].series);

    const chartOptions = ref({
      chart: {
        type: "area",
        stacked: true,
        background: "transparent",
        height: 350,
        toolbar: { show: true },
         zoom: {
    enabled: false
   }
      },

      colors: ["#FFC300", "#2ECC71"],

      dataLabels: {
        enabled: false
      },

      stroke: {
        curve: "monotoneCubic"
      },

      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8
        }
      },

      legend: {
        position: "bottom",
        horizontalAlign: "center"
      },

      xaxis: {
        categories: props.chartData[0].categories,  
        title: {
          text: "Day of Month"
        }
      },

      yaxis: {
        title: {
          text: "Liters"
        }
      }
    });

    return { series, chartOptions };
  }
};
</script>
