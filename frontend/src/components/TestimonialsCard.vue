<template>
  <div class="rounded-xl border-2 border-t-gray-100 pl-5 pt-5 pb-3 w-10/12 shadow-lg hover:cursor-pointer">
    <!-- Testimonials Detail -->
    <div class="flex gap-5" @click="showRatingDetails = !showRatingDetails">
      <div class="h-14 w-14 mt-1">
        <img src="../assets/icons/default-user-image.jpg" class="rounded-full" />
      </div>
      <div>
        <h2 class="font-semibold">{{ testimonialsCardData.resident_name }}</h2>
        <p class="text-gray-500 font-medium text-sm">{{ testimonialsCardData.room_no }}</p>
        <Rating v-if="!showRatingDetails" :modelValue="averageRating" readonly />
      </div>
    </div>
    <!-- Rating Details -->
    <div v-show="showRatingDetails" class="pl-2 mt-2">
      <hr class="my-3" />
      <div class="mt-2"
        v-for="(value, key) in testimonialsCardData.ratings" :key="key"
      >
        <p class="text-sm text-black font-medium">{{ formatKey(key) }}</p>
        <Rating class="pl-3 mt-1" :modelValue="ratingValue(value)" readonly />
      </div>
    </div>
  </div>
</template>

<script>
import Rating from "@/components/Rating.vue";

export default {
  name: "TestimonialsCard",
  components: { Rating },

  props: {
    testimonialsCardData: Object,
  },

  data() {
    return {
      showRatingDetails: false,
    };
  },

  methods: {
    ratingValue(text) {
      const map = {
        Excellent: 5,
        VeryGood: 4,
        Good: 3,
        Fair: 2,
        Poor: 1
      };
      return map[text] ?? 0;
    },

    formatKey(key) {
      return key.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    }
  },

  computed: {
    averageRating() {
      const ratings = this.testimonialsCardData.ratings;

      const values = Object.values(ratings).map(r => this.ratingValue(r));

      const sum = values.reduce((a, b) => a + b, 0);

      return values.length ? sum / values.length : 0;
    }
  }
};
</script>
