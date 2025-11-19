<template>
  <!-- Tabs -->
  <!-- <div class="bg-white flex flex-nowrap gap-2 justify-center overflow-x-auto items-center">
    <button @click="activeTab='Maintenance'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Maintenance' }">
      Maintenance
    </button @click="activeTab">
    <p>|</p>
    <button @click="activeTab='Job Planning'" class="font-semibold w-full text-sm text-center h-8 pt-1 px-2"
      :class="{'border-b-2 border-b-[#fba800] bg-[#fefdec]': activeTab === 'Job Planning' }">
      Job Planning
    </button @click="activeTab">
  </div> -->
  
  <!-- Charts -->
  <div class="bg-white h-[83.5vh]">
    <!-- Feedback -->
    

    <!-- Testimonials -->
    <div class="relative">
      <!-- Testimonials Header -->
      <div class="flex justify-center items-center">
        <img src="../assets/icons/award-ceremony-left.png" class="h-40" />
        <div class="flex flex-col items-center gap-3">
          <h1 class="text-5xl font-semibold">Our Happy <span class="bg-gradient-to-t from-[#fd2b94] via-[#fba800] to-[#fd2b94] bg-clip-text text-transparent">Residents</span></h1>
          <p class="text-gray-400 font-medoum text-xl">See how our residents are rated us</p>
        </div>
        <img src="../assets/icons/award-ceremony-right.png" class="h-40" />
      </div>
    </div>
    <!-- Testimonials Card -->
    <div class="masonry ml-14">
      <TestimonialsCard
        v-for="(data, index) in testimonialsData"
        :key="index"
        :testimonialsCardData="data"
      />
    </div>
  </div>
</template>

<script>
import TestimonialsCard from '@/components/TestimonialsCard.vue';
import testimonialsData from '@/data/maintenance/testimonials.js';

export default {
  data() {
    return {
      activeTab: 'Maintenance',
      testimonialsData
    };
  },
  components: { TestimonialsCard }
};
</script>

<style scoped>
.masonry {
  columns: 3;               /* number of columns */
  column-gap: 10px;         /* spacing */
}

.masonry > * {
  break-inside: avoid;      /* important */
  margin-bottom: 24px;
}
</style>