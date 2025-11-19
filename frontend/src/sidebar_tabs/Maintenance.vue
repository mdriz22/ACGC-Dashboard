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
  <div class="bg-white h-[83.5vh] overflow-auto">
    <!-- Feedback -->
    <div>
      <h1 class="text-3xl font-semibold text-center mt-5">Feedback - <span class="bg-gradient-to-t from-[#fd2b94] via-[#fba800] to-[#fd2b94] bg-clip-text text-transparent">Weekwise</span></h1>
      <div class="flex m-5 gap-3">
        <div
          @click="activeFeedbackType = 'Service'"
          class="w-40 cursor-pointer text-center border py-1 rounded-lg font-medium"
          :class="{'border-2 border-[#fba800] bg-[#fefdec]': activeFeedbackType === 'Service' }"
        >
          Service
        </div>
        <div
          @click="activeFeedbackType = 'Quality'"
          class="w-40 cursor-pointer text-center border py-1 rounded-lg font-medium"
          :class="{'border-2 border-[#fba800] bg-[#fefdec]': activeFeedbackType === 'Quality' }"
        >
          Quality
        </div>
      </div>
    </div>
    
    <div class="flex gap-5 justify-center">
      <div v-if="activeFeedbackType=='Service'" class="flex flex-col gap-4 bg-[#f5f8ff] w-full">
        <MultiLineChart :chartData="serviceFeedbackData"/>
      </div>
      <div v-if="activeFeedbackType=='Quality'" class="flex flex-col gap-4 bg-[#f5f8ff] w-full">
        <MultiLineChart :chartData="qualityFeedBackData"/>
      </div>
    </div>

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

    <!-- Meals -->
    <div>
      <h1 class="text-3xl font-semibold text-center mt-5">Feedback - <span class="bg-gradient-to-t from-[#fd2b94] via-[#fba800] to-[#fd2b94] bg-clip-text text-transparent">Weekwise</span></h1>
      <div class="flex m-5 gap-3">
        <div
          @click="activeFeedbackType = 'Service'"
          class="w-40 cursor-pointer text-center border py-1 rounded-lg font-medium"
          :class="{'border-2 border-[#fba800] bg-[#fefdec]': activeFeedbackType === 'Service' }"
        >
          Service
        </div>
        <div
          @click="activeFeedbackType = 'Quality'"
          class="w-40 cursor-pointer text-center border py-1 rounded-lg font-medium"
          :class="{'border-2 border-[#fba800] bg-[#fefdec]': activeFeedbackType === 'Quality' }"
        >
          Quality
        </div>
      </div>
    </div>
    
    <div class="flex gap-5 justify-center">
      <div v-if="activeFeedbackType=='Service'" class="flex flex-col gap-4 bg-[#f5f8ff] w-full">
        <MultiLineChart :chartData="serviceFeedbackData"/>
      </div>
      <div v-if="activeFeedbackType=='Quality'" class="flex flex-col gap-4 bg-[#f5f8ff] w-full">
        <MultiLineChart :chartData="qualityFeedBackData"/>
      </div>
    </div>
  </div>
</template>

<script>
import TestimonialsCard from '@/components/TestimonialsCard.vue';
import MultiLineChart from '@/components/chart/MultiLineChart.vue';

import testimonialsData from '@/data/maintenance/testimonials.js';
import serviceFeedbackData from '@/data/maintenance/service_feedback';
import qualityFeedBackData from '@/data/maintenance/quality_feedback';

export default {
  data() {
    return {
      activeTab: 'Maintenance',
      activeFeedbackType: 'Service',
      testimonialsData,
      serviceFeedbackData,
      qualityFeedBackData
    };
  },
  components: { TestimonialsCard, MultiLineChart }
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