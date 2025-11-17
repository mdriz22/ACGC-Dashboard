<template>
  <!-- Tabs -->
  <div class="bg-white flex flex-nowrap gap-2 justify-center overflow-x-auto items-center">
    <button @click="activeTab='Energy'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Energy' }">
      Energy
    </button @click="activeTab">
    <p>|</p>
    <button @click="activeTab='Water'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Water' }">
      Water
    </button @click="activeTab">
    <p>|</p>
    <button @click="activeTab='Waste'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Waste' }">
      Waste
    </button @click="activeTab">
  </div>
  <!-- Charts -->
   
</template>

<script>
import ApexCharts from 'apexcharts';

export default {
  data() {
    return {
      activeTab: 'Energy',
    };
  }
};
</script>
