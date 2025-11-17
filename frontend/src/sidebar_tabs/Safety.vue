<template>
  <!-- Tabs -->
  <div class="bg-white flex flex-nowrap gap-2 justify-center overflow-x-auto items-center">
    <button @click="activeTab='Summary'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Summary' }">
      Summary
    </button @click="activeTab">
    <p>|</p>
    <button @click="activeTab='Safety'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Safety' }">
      Safety
    </button @click="activeTab">
    <p>|</p>
    <button @click="activeTab='Safety Training'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Safety Training' }">
      Safety Training
    </button @click="activeTab">
  </div>
  <!-- Charts -->
   
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'Summary',
    };
  }
};
</script>
