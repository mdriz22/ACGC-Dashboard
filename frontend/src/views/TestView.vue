<template>
<!-- Testimonials -->
  <div>
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
      <!-- Testimonials Card -->'
      <div class="flex gap-5">
        <div class="w-1/2">
            <TestimonialsCard v-for="(data, index) in testimonialsData" :key="index" :testimonialsCardData="data" />
        </div>
        <div class="mt-14 hidden lg:block">
          <div style="border-left: 2px solid lightgray;height: 60vh;"></div>
      </div>
        <div class="1/2">
          <div>
            <h1 class="text-8xl font-medium">4.4</h1>
          </div>
            <Rating />
        </div>
      </div>
  </div>
</template>

<script>
  import TestimonialsCard from '@/components/TestimonialsCard.vue';
  import testimonialsData from '@/data/maintenance/testimonials.js';
  import Rating from '@/components/Rating.vue';

  export default {
        data() {
            return {
                testimonialsData,
            };
        },
        components: {
            TestimonialsCard,
            Rating,
        }
    };
</script>