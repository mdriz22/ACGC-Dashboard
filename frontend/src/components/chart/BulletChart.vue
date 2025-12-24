<!-- <template>
  <apexchart
    type="rangeBar"
    height="400"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref } from "vue";
import dataFile from "@/data/maintenance/manpower_summary.js";

export default {
  name: "ManpowerBulletChart",
  setup() {
    // Prepare series for the rangeBar (bullet chart)
    const indicativeSeries = dataFile.indicative.map(val => [0, val]);
    const actualSeries = dataFile.actual.map(val => [val, val]); // marker

    const series = ref([
      {
        name: "Indicative",
        data: indicativeSeries
      },
      {
        name: "Actual",
        data: actualSeries
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
          barHeight: "50%",
          borderRadius: 6
        }
      },
      colors: ["#008FFB", "#00E396"], // Blue = target, Green = actual
      dataLabels: {
        enabled: true,
        formatter: (val, opts) => {
          if (opts.seriesIndex === 1) {
            const actual = dataFile.actual[opts.dataPointIndex];
            const target = dataFile.indicative[opts.dataPointIndex];
            const pct = Math.round((actual / target) * 100);
            return `${actual} (${pct}%)`;
          }
          return "";
        },
        style: { colors: ["#000"] },
        offsetX: 10
      },
      xaxis: {
        categories: dataFile.functions,
        min: 0,
        max: Math.max(...dataFile.indicative) * 1.2
      },
      legend: {
        position: "top",
        horizontalAlign: "center"
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: (val, opts) => {
            if (opts.seriesIndex === 1) {
              const actual = dataFile.actual[opts.dataPointIndex];
              const target = dataFile.indicative[opts.dataPointIndex];
              const pct = Math.round((actual / target) * 100);
              return `${actual} (${pct}%)`;
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
</script> -->



<!-- <template>
  <apexchart
    type="bar"
    height="400"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref } from "vue";
import dataFile from "@/data/maintenance/manpower_summary.js";

export default {
  name: "ManpowerBarChart",
  setup() {
    const series = ref([
      {
        name: "Indicative",
        data: dataFile.indicative
      },
      {
        name: "Actual",
        data: dataFile.actual
      }
    ]);

    const chartOptions = ref({
      chart: {
        type: "bar",
        stacked: false,
        toolbar: { show: true },
        zoom: { enabled: false }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "50%",
          borderRadius: 6
        }
      },
      dataLabels: {
        enabled: true
      },
      colors: ["#008FFB", "#00E396"],
      xaxis: {
        categories: dataFile.functions,
        min: 0,
        max: Math.max(...dataFile.indicative, ...dataFile.actual) * 1.2
      },
      legend: {
        position: "top",
        horizontalAlign: "center"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: { colors: ["#f3f3f3", "transparent"], opacity: 0.5 }
      }
    });

    return { series, chartOptions };
  }
};
</script> -->



<!-- <template>
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
  name: "ManpowerDotChart",
  setup() {
    // Convert data into [x, y] points for scatter chart
    // x = staff count, y = index of function
    const series = ref([
      {
        name: "Indicative",
        data: dataFile.indicative.map((val, i) => [val, i])
      },
      {
        name: "Actual",
        data: dataFile.actual.map((val, i) => [val, i])
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
        max: Math.max(...dataFile.indicative, ...dataFile.actual) * 1.2
      },
      yaxis: {
        labels: {
          formatter: (val) => dataFile.functions[val],
          style: { fontSize: "14px" }
        },
        min: -0.5,
        max: dataFile.functions.length - 0.5,
      },
      markers: {
        size: 22
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: (val) => val
        },
        x: {
          formatter: (val) => val
        }
      },
      grid: {
        borderColor: "#e7e7e7",
        row: { colors: ["#f3f3f3", "transparent"], opacity: 0.5 }
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center"
      }
    });

    return { series, chartOptions };
  }
};
</script> -->


<!-- <template>
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
  name: "ManpowerDotChart",
  setup() {
    const series = ref([
      {
        name: "Indicative",
        data: dataFile.indicative.map((val, i) => [val, i])
      },
      {
        name: "Actual",
        data: dataFile.actual.map((val, i) => [val, i])
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
        max: Math.max(...dataFile.indicative, ...dataFile.actual) * 1.2
      },
      yaxis: {
        labels: {
          formatter: (val) => dataFile.functions[val],
          style: { fontSize: "14px" }
        },
        min: -0.5,
        max: dataFile.functions.length - 0.5,
      },
      markers: { size: 22 },
      tooltip: {
        shared: true,
        intersect: false,
        custom: function({ seriesIndex, dataPointIndex, w }) {
          const funcName = dataFile.functions[dataPointIndex];
          const value = w.globals.series[seriesIndex][dataPointIndex][0]; 
          console.log(w.globals)
          const seriesName = w.globals.seriesNames[seriesIndex];
          return `<div style="padding:5px;">
                    <strong>${seriesName}</strong> : ${value}<br/>
                    Function: ${funcName}
                  </div>`;
        }
      },
      grid: {
        borderColor: "#e7e7e7",
        row: { colors: ["#f3f3f3", "transparent"], opacity: 0.5 }
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center"
      }
    });

    return { series, chartOptions };
  }
};
</script> -->


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
  setup() {
    const series = ref([
      {
        name: "Indicative",
        data: dataFile.indicative.map((val, i) => [val, i])
      },
      {
        name: "Actual",
        data: dataFile.actual.map((val, i) => [val, i])
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
        max: Math.max(...dataFile.indicative, ...dataFile.actual) * 1.2
      },
      yaxis: {
        labels: {
          formatter: (val) => dataFile.functions[val],
          style: { fontSize: "14px" }
        },
        min: -0.5,
        max: dataFile.functions.length - 0.5
      },
      markers: { size: 20 },
      tooltip: {
        shared: true,
        intersect: false,

       
         custom: function({ seriesIndex, dataPointIndex, w }) {
    const funcName = dataFile.functions[dataPointIndex];
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
};
</script>
