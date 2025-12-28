<template>
  <apexchart
    type="bar"
    height="700"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref } from "vue";
import dataFile from "@/data/maintenance/safety_training_on.js"; 

export default {
  name: "TrainingScoreChart",
   props: {
    chartData: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const series = ref([
      {
        name: "Applicable",
        data: props.chartData[0].applicable,
        dataLabels: { enabled: false } 
      },
      {
        name: "Actual",
        data: props.chartData[0].actual,
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            const pct = props.chartData[0].percent[opts.dataPointIndex];
            return pct !== null && pct !== undefined ? `${val} (${pct}%)` : val;
          },
          style: { colors: ["#000"] },
          offsetX: 10
        }
      }
    ]);

    const chartOptions = ref({
      chart: {
        stacked: false,
        toolbar: { show: true },
        zoom: { enabled: false }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          borderRadius: 6,
          barHeight: "75%"
        }
      },
      xaxis: {
        categories: props.chartData[0].topics
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center"
      },
      colors: ["#008FFB", "#00E396"],
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: (val, opts) => {
            if (opts.seriesIndex === 1) {
              const pct = props.chartData[0].percent[opts.dataPointIndex];
              return pct !== null ? `${val} (${pct}%)` : val;
            }
            return val;
          }
        }
      },
      grid: {
        borderColor: "#e7e7e7",
        row: { colors: ["#f3f3f3", "transparent"], opacity: 0.5 }
      }
    });

    return { series, chartOptions };
  }
};
</script>

