<template>
  <!-- Tabs Section -->
  <div class="bg-white flex flex-nowrap gap-2 justify-center overflow-x-auto items-center">
    <button @click="activeTab='Overall'" class="font-semibold w-full text-sm text-center h-8 pt-0.5 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Overall' }">
      Overall
    </button>
    <p>|</p>
    <button @click="activeTab='Maintenance'" class="font-semibold w-full text-sm text-center h-8 pt-0.5 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Maintenance' }">
      Maintenance
    </button>
    <p>|</p>
    <button @click="activeTab='HR'" class="font-semibold w-full text-sm text-center h-8 pt-0.5 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'HR' }">
      HR
    </button @click="activeTab='SHE'">
    <p>|</p>
    <button @click="activeTab" class="font-semibold w-full text-sm text-center h-8 pt-0.5 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'SHE' }">
      SHE
    </button @click="activeTab='Customer SLA/Warehousing'">
    <p>|</p>
    <button @click="activeTab" class="font-semibold w-full text-sm text-center h-8 pt-0.5 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Customer SLA/Warehousing' }">
      Customer SLA
    </button>
    <p>|</p>
    <button @click="activeTab" class="font-semibold w-full text-sm text-center h-8 pt-0.5 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Customer SLA/Warehousing' }">
      Warehousing
    </button>
  </div>
  <!-- Charts Section -->
  <div class="mt-4 bg-white">
    <p class="text-gray-400 text-xs font-medium text-right p-5">Compared to: 8/2/2019 - 8/31/2019</p>
    <!-- Overall -->
    <div v-if="activeTab==='Overall'" class="bg-white p-5 grid grid-cols-3 gap-4">
      <PercentageCard v-for="(data, index) in overallData" :key="index" :percentageCardData="data" />
    </div>
    <!-- Maintenance -->
    <div v-if="activeTab==='Maintenance'" class="bg-white p-5 gap-4 w-full flex">
      <div class="flex flex-col gap-4  w-1/2">
        <PercentageCard v-for="(data, index) in maintenanceData" :key="index" :percentageCardData="data" />
      </div>
      <!-- <div class="flex flex-col gap-4 bg-[#f5f8ff] w-1/2">
        <MultiSeriesChart />
      </div> -->
    </div>
  </div>
</template>

<script>
import PercentageCard from '@/components/PercentageCard.vue';
import MultiSeriesChart from '@/components/chart/MultiSeriesChart.vue';
import overallData from '@/data/management/overall.js';
import maintenanceData from '@/data/management/maintenance.js';

export default {
  name: 'Management',
  components: { PercentageCard, MultiSeriesChart },
  data() {
    return {
      activeTab: 'Overall',
      overallData,
      maintenanceData,
    };
  }
};
</script>
