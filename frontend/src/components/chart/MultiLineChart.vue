<template>
  <apexchart
   v-if="series.length"
    type="line"
    height="420"
    :options="chartOptions"
    :series="series"
  />
  <div v-else class="text-center mt-5 text-gray-500">
      No data available for selected filters.
    </div>
</template>

<script>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
import pmCmWrData from "@/data/maintenance/monthwise_overall_pmi_cm_wr.js";

export default {
  props: {
    chartData: {
      type: Array,
      required: true
    }
  },
  components: { apexchart: VueApexCharts },

  setup(props) {

    console.log(ref(props.chartData))
    
     const series = ref([
      {
        name: "PM",
        type: "line",
        data: props.chartData.map(item => item.PM),
      },
      {
        name: "CM",
        type: "line",
        data: props.chartData.map(item => item.CM),
      },
      {
        name: "WR",
        type: "line",
        data: props.chartData.map(item => item.WR),
      },
    ]);

    const categories = ref(props.chartData.map(item => item.month));



    

   

    // const series = ref([
    //   {
    //     name: "PM",
    //     type: "line",
    //     data: pmCmWrData.map(item => item.PM)
    //   },
    //   {
    //     name: "CM",
    //     type: "line",
    //     data: pmCmWrData.map(item => item.CM)
    //   },
    //   {
    //     name: "WR",
    //     type: "line",
    //     data: pmCmWrData.map(item => item.WR)
    //   }
    // ]);

    const chartOptions = ref({
      chart: {
        type: "line",
        zoom: { enabled: false },
        toolbar: { show: true }
      },

      colors: ["#008FFB", "#FEB019", "#00E396"],

      stroke: {
        curve: "smooth",
        width: 3
      },

      markers: {
        size: 5
      },

      xaxis: {
        categories,
        title: { text: "Month" }
      },

      yaxis: [
        {
          title: { text: "PM" },
          labels: { style: { colors: "#008FFB" }},
        },
        {
          opposite: true,
          title: { text: "CM" },
          labels: { style: { colors: "#FEB019" }},
        },
        {
          opposite: true,
          title: { text: "WR" },
          labels: { style: { colors: "#00E396" }},
        }
      ],

      tooltip: {
        shared: true,
        intersect: false,
      },

      legend: {
        position: "bottom"
      }
    });

    return { series, chartOptions };
  }
};
</script>
