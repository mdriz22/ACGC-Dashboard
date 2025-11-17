<template>
  <!-- Tabs -->
  <div class="bg-white flex flex-nowrap gap-2 justify-center overflow-x-auto items-center">
    <button @click="activeTab='Management KPI'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Management KPI' }">
      Management KPI
    </button @click="activeTab">
    <p>|</p>
    <button @click="activeTab='Man Power Trends'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Man Power Trends' }">
      Man Power Trends
    </button @click="activeTab">
    <p>|</p>
    <button @click="activeTab='Saudization'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Saudization' }">
      Saudization
    </button @click="activeTab">
  </div>
  <!-- Charts -->
   
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'Management KPI',
    };
  }
};
</script>
