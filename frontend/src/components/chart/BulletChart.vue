
<template>
  <apexchart
    type="scatter"
    height="400"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref } from "vue";
import dataFile from "@/data/maintenance/manpower_summary.js";

export default {
  name: "ManpowerDotChartCustomTooltip",

  props: {
    chartData: {
      type: Array,
      required: true
    }
  },
  setup(props) {

    
    
    const series = ref([
      {
        name: "Indicative",
        data: props.chartData[0].indicative.map((val, i) => [val, i])
      },
      {
        name: "Actual",
        data: props.chartData[0].actual.map((val, i) => [val, i])
      }
    ]);


   

   
      

    const chartOptions = ref({
      chart: {
        type: "scatter",
        toolbar: { show: true },
        zoom: { enabled: false }
      },
      colors: ["#008FFB", "#00E396"],
      xaxis: {
        title: { text: "Staff Count" },
        min: 0,
        max: Math.max(...props.chartData[0].indicative, ...props.chartData[0].actual) * 1.2
      },
      yaxis: {
        labels: {
          formatter: (val) => props.chartData[0].functions[val],
          style: { fontSize: "14px" }
        },
        min: -0.5,
        max: props.chartData[0].functions.length - 0.5
      },
      markers: { size: 20 },
      tooltip: {
        shared: true,
        intersect: false,

       
         custom: function({ seriesIndex, dataPointIndex, w }) {
    const funcName = props.chartData[0].functions[dataPointIndex];
    const value = w.config.series[seriesIndex].data[dataPointIndex][0];
    const seriesName = w.config.series[seriesIndex].name;

    return `<div style="padding:5px;">
              <strong>${seriesName}</strong>: ${value}<br/>
              Function: ${funcName}
            </div>`;
  }

     


      },
      legend: {
        position: "bottom",
        horizontalAlign: "center"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: { colors: ["#f3f3f3", "transparent"], opacity: 0.5 }
      }
    });
    
 
    return { series, chartOptions };
  }
  }


</script>
