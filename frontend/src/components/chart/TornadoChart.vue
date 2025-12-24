
<template>
  <apexchart
    height="450"
    type="bar"
    :options="chartOptions"
    :series="series"
  />
</template>

<script setup>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
import wrData from "@/data/maintenance/wr_overall_schedule.js";


const percentageLabels = wrData.percentage.map(p => p + "%");

const series = ref([
  {
    name: "Scheduled",
    data: wrData.scheduled.map(v => -v)
  },
  {
    name: "Accomplished",
    data: wrData.accomplished
  },

  {
    name: "% Completed",
    data: wrData.scheduled.map(v => null) 
  }
  
]);

const chartOptions = ref({
  chart: {
    type: "bar",
    stacked: true,
    toolbar: { show: true }
  },

  title: {
    text: "",
    align: "center",
    style: { fontSize: "20px", fontWeight: "bold" }
  },

  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "70%"
    }
  },

  xaxis: {
    categories: wrData.subjects,
    labels: {
      formatter: (value) => Math.abs(value)
    }
  },

  tooltip: {
    y: {
      formatter: (value) => Math.abs(value)
    }
  },

  colors: ["#2980b9", "#27ae60", "#f39c12"], 

  legend: {
    position: "bottom"
  },

  dataLabels: {
    enabled: true,
    formatter: function (val, { dataPointIndex, seriesIndex }) {
      if (seriesIndex === 0 || seriesIndex === 1) {
        return Math.abs(val); 
      }
    },
    style: {
      fontSize: "12px",
      fontWeight: "bold"
    }
  },




annotations: {
  yaxis: wrData.subjects.map((subject, index) => ({
    y: subject,  
    borderColor: 'transparent',
    label: {
      text: wrData.percentage[index] + "%",
      style: {
        fontSize: '12px',
        fontWeight: 'bold',
        background: '#f39c12',
        color: '#000',
        padding: { left: 8, right: 8, top: 4, bottom: 4 },
        borderRadius: 6,
      },
      position: 'right'
    }
  }))
}







});
</script>
