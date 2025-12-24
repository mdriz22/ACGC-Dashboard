<!-- <template>
  <div ref="chart" style="width: 100%; height: 600px;"></div>
</template>

<script>
import * as echarts from "echarts";
import scoresData from "@/data/maintenance/safety_and_environment.js";
import { onMounted, ref } from "vue";

export default {
  name: "ScoresChart",
  setup() {
    const chart = ref(null);

    onMounted(() => {
      const myChart = echarts.init(chart.value);

      const option = {
        color: ['#5070dd', '#b6d634', '#505372'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'cross' },
          formatter: function(params) {
            let tooltip = params[0].name + "<br/>";
            params.forEach(item => {
              tooltip += `${item.seriesName}: ${item.value}`;
              if (item.seriesName === "Satisfactory Rating") tooltip += "%";
              tooltip += "<br/>";
            });
            return tooltip;
          }
        },
        legend: { data: ['Applicable','Actual','Satisfactory Rating'] },
        xAxis: { type: 'category', data: scoresData.categories },
        yAxis: [
          { type: 'value', name: 'Scores', position: 'left' },
          { type: 'value', name: 'Percentage', position: 'right', min: 0, max: 100 }
        ],
        series: [
          { name: 'Applicable', type: 'bar', data: scoresData.applicable },
          { name: 'Actual', type: 'bar', data: scoresData.actual },
          { name: 'Satisfactory Rating', type: 'line', yAxisIndex: 1, data: scoresData.percentage }
        ]
      };

      myChart.setOption(option);
      window.addEventListener("resize", () => myChart.resize());
    });

    return { chart };
  }
};
</script> -->


<!-- <template>
  <div ref="chart" style="width: 100%; height: 600px;"></div>
</template>

<script>
import * as echarts from "echarts";
import scoresData from "@/data/maintenance/safety_and_environment.js";
import { onMounted, ref } from "vue";

export default {
  name: "ScoresChart",
  setup() {
    const chart = ref(null);

    onMounted(() => {
      const myChart = echarts.init(chart.value);

      const option = {
        color: ['#5070dd', '#b6d634', '#505372'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'cross' },
          formatter: function(params) {
            let tooltip = params[0].name + "<br/>";
            params.forEach(item => {
              tooltip += `${item.seriesName}: ${item.value}`;
              if (item.seriesName === "Satisfactory Rating") tooltip += "%";
              tooltip += "<br/>";
            });
            return tooltip;
          }
        },
        legend: { data: ['Applicable','Actual','Satisfactory Rating'] },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: { show: true },
            restore: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] }
          }
        },
        xAxis: { type: 'category', data: scoresData.categories },
        yAxis: [
          { type: 'value', name: 'Scores', position: 'left' },
          { type: 'value', name: 'Percentage', position: 'right', min: 0, max: 100 }
        ],
        series: [
          { name: 'Applicable', type: 'bar', data: scoresData.applicable },
          { name: 'Actual', type: 'bar', data: scoresData.actual },
          { name: 'Satisfactory Rating', type: 'line', yAxisIndex: 1, data: scoresData.percentage }
        ]
      };

      myChart.setOption(option);
      window.addEventListener("resize", () => myChart.resize());
    });

    return { chart };
  }
};
</script> -->


<template>
  <apexchart
    type="line"
    height="600"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
import scoresData from "@/data/maintenance/safety_and_environment.js";

export default {
  name: "ScoresChartApex",
  components: { apexchart: VueApexCharts },
  setup() {
    const series = ref([
      {
        name: "Applicable",
        type: "column",
        data: scoresData.applicable
      },
      {
        name: "Actual",
        type: "column",
        data: scoresData.actual
      },
      {
        name: "Satisfactory Rating",
        type: "line",
        data: scoresData.percentage
      }
    ]);

    const chartOptions = ref({
      chart: {
        height: 600,
        type: "line",
        stacked: false,
      

         zoom: { enabled: false },
        toolbar: { show: true }
      },
      stroke: {
        width: [0, 0, 3]
      },
      plotOptions: {
        bar: {
          columnWidth: "40%"
        }
      },
      colors: ["#5070dd", "#b6d634", "#505372"],
      dataLabels: {
        enabled: true,
        formatter: (val, opts) => {
          if (opts.seriesIndex === 2) return val + "%";
          return val;
        }
      },
      xaxis: {
        categories: scoresData.categories,
        labels: {
    style: {
      fontSize: '9px'  
    }
  }
      },
      yaxis: [
        {
          title: { text: "Scores" }
        },
        {
          opposite: true,
          title: { text: "Percentage" },
          min: 0,
          max: 100
        }
      ],

      legend: {
            position: "bottom",
            horizontalAlign: "center",
            offsetY: 40,
            floating: false,  
            itemMargin: {
                horizontal: 10,         
                vertical: 5             
            }, 
            markers: {
                width: 12,
                height: 12,
                radius: 2,
            },  
        },

//     legend: {
//   position: "bottom",
//   horizontalAlign: "center",
//   floating: false,
//   offsetY: 0,
//   markers: {
//     width: 10,
//     height: 10
//   },
//   itemMargin: {
//     horizontal: 20,
//     vertical: 0
//   },
//   fontSize: "12px"
// },


      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: (val, { seriesIndex }) =>
            seriesIndex === 2 ? val + "%" : val
        }
      }
    });

    return { series, chartOptions };
  }
};
</script>

<style>

/* .apexcharts-legend {
  width: 100% !important;
  display: flex !important;
  justify-content: center !important;
  flex-wrap: nowrap !important;
}

.apexcharts-legend-series {
  white-space: nowrap !important;
} */


</style>