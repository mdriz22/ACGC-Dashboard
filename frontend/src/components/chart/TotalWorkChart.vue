<template>
  <apexchart
    type="radialBar"
    height="350"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "RadialBarChart",

  props: {
    chartData: {
      type: Array, 
      required: true
    }
  },

  setup(props) {
    const series = ref([]);
    const chartOptions = ref({});

    const updateChart = () => {
      if (!props.chartData.length) return;

      series.value = props.chartData.map(item => item.value);

      chartOptions.value = {
        chart: {
          height: 350,
          type: "radialBar"
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '16px'
              },
              value: {
                fontSize: '20px',
                formatter: function(val) {
                  return val;
                }
              },
              total: {
                show: true,
                label: 'TOTAL',
                formatter: () => {
                  return props.chartData.reduce((acc, item) => acc + item.value, 0);
                }
              }
            }
          }
        },
        labels: props.chartData.map(item => item.label),
        colors: ['#4F46E5', '#F59E0B', '#10B981', '#EF4444', '#8B5CF6', '#F43F5E', '#3B82F6'],
        legend: {
          position: 'bottom',
          horizontalAlign: 'center'
        }
      };
    };

    watch(() => props.chartData, updateChart, { immediate: true });

    return { series, chartOptions };
  }
};
</script>
