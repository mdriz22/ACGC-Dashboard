<!-- Rating.vue -->
<template>
  <div
    class="inline-flex items-center select-none"
    role="slider"
    :aria-valuemin="0"
    :aria-valuemax="max"
    :aria-valuenow="ariaValue"
    :aria-readonly="readonly || undefined"
    tabindex="0"
    @keydown="onKeydown"
    @blur="clearHover"
  >
    <button
      v-for="index in max"
      :key="index"
      type="button"
      :class="['relative p-0 m-0 border-0 bg-transparent', {'cursor-pointer': !readonly}]"
      @mousemove="onStarMousemove($event, index)"
      @mouseleave="clearHover"
      @click="onStarClick($event, index)"
      :aria-label="`Rate ${index} of ${max}`"
      :title="`${index} / ${max}`"
      :disabled="readonly"
    >
      <!-- background star (empty) -->
      <svg
        :width="size"
        :height="size"
        viewBox="0 0 24 24"
        class="block"
        aria-hidden="true"
      >
        <path
          d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.62 12 2 9.19 8.62 2 9.24 7.46 13.97 5.82 21z"
          fill="#E5E7EB"
        />
      </svg>

      <!-- filled star overlay -->
      <div
        class="absolute top-0 left-0 overflow-hidden pointer-events-none"
        :style="{ width: overlayWidth(index) + 'px', height: size + 'px' }"
      >
        <svg
          :width="size"
          :height="size"
          viewBox="0 0 24 24"
          class="block"
          aria-hidden="true"
        >
          <!-- if gradient enabled, use <linearGradient> with unique id -->
          <defs v-if="useGradient">
            <linearGradient :id="gradId" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" :stop-color="gradientFrom" />
              <stop offset="50%" :stop-color="gradientVia" />
              <stop offset="100%" :stop-color="gradientTo" />
            </linearGradient>
          </defs>

          <path
            d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.62 12 2 9.19 8.62 2 9.24 7.46 13.97 5.82 21z"
            :fill="useGradient ? `url(#${gradId})` : fillColor"
          />
        </svg>
      </div>
    </button>

    <!-- optional numeric label -->
    <span v-if="showScore" class="ml-2 text-sm text-gray-700">
      {{ displayValue }} / {{ max }}
    </span>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

/**
 * Props:
 * - modelValue (Number): v-model value
 * - max (Number): number of stars
 * - size (Number): px size of each star (default 24)
 * - readonly (Boolean)
 * - allowHalf (Boolean)
 * - showScore (Boolean)
 * - useGradient (Boolean): if true use gradient in SVG fill
 * - gradientFrom/via/to (String): colors
 * - fillColor (String) fallback color (single-color fill)
 */
const props = defineProps({
  modelValue: { type: Number, default: 0 },
  max: { type: Number, default: 5 },
  size: { type: Number, default: 24 },
  readonly: { type: Boolean, default: false },
  allowHalf: { type: Boolean, default: true },
  showScore: { type: Boolean, default: false },
  useGradient: { type: Boolean, default: true },
  gradientFrom: { type: String, default: '#fbd34d' },
  gradientVia: { type: String, default: '#f9a825' },
  gradientTo: { type: String, default: '#f57f17' },
  fillColor: { type: String, default: '#f97316' }, // fallback single color
})

const emits = defineEmits(['update:modelValue'])

/* reactive hover preview value (null when no hover) */
const hoverValue = ref(null)

/* unique id for gradient so multiple components won't clash */
const gradId = 'g' + Math.random().toString(36).slice(2, 9)

/* computed value to display (hover takes precedence) */
const displayValue = computed(() => {
  return hoverValue.value === null ? roundToAllowed(props.modelValue) : hoverValue.value
})

const ariaValue = computed(() => Number((displayValue.value || 0).toFixed(2)))

/* helper: round to allowed step (0.5 or 1) */
function roundToAllowed(v) {
  if (v == null) return 0
  const step = props.allowHalf ? 0.5 : 1
  return Math.round(v / step) * step
}

/* width in px for overlay of star index */
function overlayWidth(index) {
  // how many full stars before this one?
  const val = displayValue.value
  const starLeft = index - 1
  const remainder = Math.max(0, val - starLeft) // between 0 and 1+
  const clamped = Math.min(1, remainder)
  return Math.round(clamped * props.size)
}

/* event handlers */
function onStarMousemove(event, index) {
  if (props.readonly) return
  if (!props.allowHalf) {
    hoverValue.value = index
    return
  }
  // detect half by x position
  const target = event.currentTarget
  const rect = target.getBoundingClientRect()
  const x = event.clientX - rect.left
  const isHalf = x < rect.width / 2
  hoverValue.value = isHalf ? (index - 0.5) : index
}

function clearHover() {
  hoverValue.value = null
}

function onStarClick(event, index) {
  if (props.readonly) return
  let newValue
  if (!props.allowHalf) {
    newValue = index
  } else {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    newValue = x < rect.width / 2 ? (index - 0.5) : index
  }
  emits('update:modelValue', newValue)
}

/* keyboard support when component is focused */
function onKeydown(e) {
  if (props.readonly) return
  const step = props.allowHalf ? 0.5 : 1
  let cur = props.modelValue || 0

  if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
    e.preventDefault()
    cur = Math.max(0, cur - step)
    emits('update:modelValue', roundToAllowed(cur))
  } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
    e.preventDefault()
    cur = Math.min(props.max, cur + step)
    emits('update:modelValue', roundToAllowed(cur))
  } else if (e.key === 'Home') {
    e.preventDefault()
    emits('update:modelValue', 0)
  } else if (e.key === 'End') {
    e.preventDefault()
    emits('update:modelValue', props.max)
  } else if (e.key === 'Enter' || e.key === ' ') {
    // noop here — clicks handle selection
    e.preventDefault()
  }
}

const useGradient = props.useGradient
const gradientFrom = props.gradientFrom
const gradientVia = props.gradientVia
const gradientTo = props.gradientTo
</script>
