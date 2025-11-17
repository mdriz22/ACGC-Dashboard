<template>

  <div v-if="indicatorData>0" class="flex items-center text-green-600 text-sm font-semibold mb-1">
    ▲{{ indicatorData }}%
  </div>
  <div v-else class="flex items-center text-red-600 text-sm font-semibold mb-1">
    ▼{{ indicatorData }}%
  </div>
</template>

<script>
export default {
  name: "GrowthIndicator",

  props: {
    indicatorData: {
      type: Number,
      required: true
    }
  }
};
</script>
