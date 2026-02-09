<template>
  <Teleport to="body">
    <div
        v-if="open"
        class="fixed inset-0 z-[9999]"
        role="dialog"
        aria-modal="true"
        @keydown.esc.prevent.stop="close"
    >
      <div class="absolute inset-0 bg-black/70" @click="close" />
      
      <div class="absolute inset-0 flex items-center justify-center p-3 sm:p-6">
        <div
            class="relative w-full max-w-6xl rounded-2xl border border-soft bg-surface-1 backdrop-blur-xl overflow-hidden"
            @click.stop
        >
          <div
              class="pointer-events-none absolute -inset-16 opacity-60"
              style="background: radial-gradient(900px circle at 20% 10%, var(--accent-10), transparent 55%);"
          />
          <div class="relative z-10 flex items-center justify-between px-4 sm:px-6 py-3 border-b border-soft">
            <div class="min-w-0">
              <div class="text-0 font-semibold truncate">{{ title || "Preview" }}</div>
              <div class="text-3 text-xs mt-0.5">{{ index + 1 }} / {{ images.length }}</div>
            </div>

            <div class="flex items-center gap-2">
              <button type="button" class="btn-cta btn-cta--secondary px-4 py-2" @click="prev" aria-label="Previous">
                <span class="material-icons text-[18px] leading-none">chevron_left</span>
              </button>
              <button type="button" class="btn-cta btn-cta--secondary px-4 py-2" @click="next" aria-label="Next">
                <span class="material-icons text-[18px] leading-none">chevron_right</span>
              </button>
              <button type="button" class="btn-cta btn-cta--secondary px-4 py-2" @click="close" aria-label="Close">
                <span class="material-icons text-[18px] leading-none">close</span>
              </button>
            </div>
          </div>
          
          <div
              class="relative z-10 p-3 sm:p-6 select-none"
              @pointerdown="onPointerDown"
              @pointermove="onPointerMove"
              @pointerup="onPointerUp"
              @pointercancel="onPointerUp"
          >
            <div class="relative rounded-xl border border-soft bg-black/20 overflow-hidden">
              <NuxtImg
                  v-if="images[index]"
                  :src="images[index]"
                  class="w-full h-[60vh] sm:h-[70vh] object-contain"
                  :alt="title ? `${title} screenshot ${index + 1}` : `Screenshot ${index + 1}`"
                  sizes="100vw sm:90vw md:1000px"
                  loading="eager"
              />
            </div>

            <div v-if="images.length > 1" class="mt-4 flex gap-2 overflow-x-auto pb-1">
              <button
                  v-for="(src, i) in images"
                  :key="src + i"
                  type="button"
                  class="shrink-0 rounded-lg border border-soft overflow-hidden"
                  :class="i === index ? 'border-accent' : 'hover:border-line'"
                  @click="go(i)"
                  :aria-label="`Go to image ${i + 1}`"
              >
                <NuxtImg :src="src" class="h-14 w-24 object-cover" alt="" loading="lazy" />
              </button>
            </div>
          </div>

          <div class="relative z-10 px-4 sm:px-6 pb-4 text-3 text-xs">
            Tip: use ← → or swipe, ESC to close
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue"

const props = withDefaults(
    defineProps<{
      modelValue: boolean
      images: string[]
      title?: string
      startIndex?: number
    }>(),
    { title: undefined, startIndex: 0 }
)

const emit = defineEmits<{
  (e: "update:modelValue", v: boolean): void
  (e: "change", index: number): void
}>()

const open = computed(() => props.modelValue)
const index = ref(Math.min(Math.max(props.startIndex ?? 0, 0), Math.max(props.images.length - 1, 0)))

watch(
    () => props.startIndex,
    (v) => {
      if (typeof v === "number") index.value = Math.min(Math.max(v, 0), Math.max(props.images.length - 1, 0))
    }
)

watch(index, (i) => emit("change", i))

function close() {
  emit("update:modelValue", false)
}

function next() {
  if (!props.images.length) return
  index.value = (index.value + 1) % props.images.length
}

function prev() {
  if (!props.images.length) return
  index.value = (index.value - 1 + props.images.length) % props.images.length
}

function go(i: number) {
  index.value = i
}

function onKeydown(e: KeyboardEvent) {
  if (!open.value) return
  if (e.key === "ArrowRight") next()
  if (e.key === "ArrowLeft") prev()
}

function lockBodyScroll(lock: boolean) {
  if (!import.meta.client) return

  const docEl = document.documentElement
  const body = document.body
  if (!docEl || !body) return

  docEl.style.overflow = lock ? "hidden" : ""
  body.style.overflow = lock ? "hidden" : ""
}

watch(
    () => open.value,
    (v) => lockBodyScroll(v),
    { immediate: false } 
)

onMounted(() => {
  lockBodyScroll(open.value)
})

onBeforeUnmount(() => {
  lockBodyScroll(false)
})

const startX = ref<number | null>(null)
const dx = ref(0)

function onPointerDown(e: PointerEvent) {
  startX.value = e.clientX
  dx.value = 0
}

function onPointerMove(e: PointerEvent) {
  if (startX.value == null) return
  dx.value = e.clientX - startX.value
}

function onPointerUp() {
  if (startX.value == null) return
  const threshold = 55
  if (dx.value <= -threshold) next()
  else if (dx.value >= threshold) prev()
  startX.value = null
  dx.value = 0
}
</script>
