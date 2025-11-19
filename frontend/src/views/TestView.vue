<template>
  <!-- gradient shadow wrapper -->
  <div class="relative">
  <div class="flex gap-5 border-2 border-[#ffcba4] rounded-xl p-5 bg-white relative z-10">
    <div class="h-14 w-14 mt-1">
      <img src="../assets/icons/default-user-image.jpg" class="rounded-full" />
    </div>
    <div>
      <h2 class="font-semibold">Resident Name</h2>
      <p class="text-gray-500 font-medium text-sm">Room Number</p>
      <Rating />
    </div>
  </div>

  <!-- gradient shadow -->
  <div class="absolute inset-0 rounded-xl blur-xl opacity-70 
              bg-gradient-to-br from-[#fba800] via-[#fd2b94] to-[#fba800]">
  </div>
</div>

</template>


<script>
import Rating from '@/components/Rating.vue';

export default {
  name: "TestimonialsCard",
  components: { Rating },
};
</script>

<style>
.gradient-shadow {
  box-shadow: 0px 5px 25px 5px #fba80080,
              0px 10px 45px 10px #fd2b9480;
}</style>