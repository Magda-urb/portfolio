<template>
  <div class="relative">
    <div class="absolute -top-12 right-0 flex items-center gap-2">
      <button
          type="button"
          class="btn-cta btn-cta--secondary px-4 py-2"
          @click="prev"
          aria-label="Previous project"
      >
        <span class="material-icons text-[18px] leading-none">chevron_left</span>
      </button>

      <button
          type="button"
          class="btn-cta btn-cta--secondary px-4 py-2"
          @click="next"
          aria-label="Next project"
      >
        <span class="material-icons text-[18px] leading-none">chevron_right</span>
      </button>
    </div>

    <div
        ref="track"
        class="relative flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth
             [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        @scroll.passive="onScroll"
    >
      <article
          v-for="(p, i) in items"
          :key="p.id"
          class="snap-start shrink-0 w-[85%] sm:w-[70%] lg:w-[52%]"
      >
        <div
            class="group relative p-8 rounded-2xl bg-surface-1 backdrop-blur-sm border border-soft
                 hover:border-accent transition-all duration-500 overflow-hidden h-full"
        >
          <div
              class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style="background: radial-gradient(900px circle at 20% 10%, var(--accent-10), transparent 60%);"
          />

          <div class="relative">
            <div class="flex items-center justify-between gap-4 mb-6">
              <h3 class="text-0 text-2xl font-bold leading-tight">
                {{ p.title }}
              </h3>

              <span
                  v-if="p.featured"
                  class="shrink-0 inline-flex items-center px-3 py-1 rounded-full bg-accent-10 border border-accent text-accent text-xs font-semibold"
              >
                Featured
              </span>
            </div>

            <button
                v-if="p.cover"
                type="button"
                class="mb-6 w-full rounded-xl border border-soft bg-black/20 overflow-hidden text-left"
                @click="openShots(p, 0)"
                aria-label="Open screenshots"
            >
              <NuxtImg
                  :src="p.cover"
                  class="w-full h-44 sm:h-52 object-contain bg-black/20"
                  :alt="`${p.title} cover`"
                  loading="lazy"
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 70vw, 52vw"
              />
            </button>

            <div class="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <div class="text-3 text-xs font-semibold uppercase tracking-wider mb-2">Problem</div>
                <p class="text-2 text-sm leading-relaxed">{{ p.problem }}</p>
              </div>
              <div>
                <div class="text-3 text-xs font-semibold uppercase tracking-wider mb-2">Solution</div>
                <p class="text-2 text-sm leading-relaxed">{{ p.solution }}</p>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 mb-6">
              <span
                  v-for="(tag, t) in p.tags"
                  :key="t"
                  class="px-3 py-1.5 bg-surface-2 border border-soft rounded-full text-3 text-xs font-medium"
              >
                {{ tag }}
              </span>
            </div>
<!-- To Be Done
            <button
                type="button"
                class="group/btn inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
                @click="openShots(p, 0)"
            >
              <span>View screens</span>
              <span
                  class="material-icons text-[18px] leading-none group-hover/btn:translate-x-0.5 transition-transform duration-300"
              >
                north_east
              </span>
            </button>
            -->
          </div>

          <div
              class="pointer-events-none absolute top-2 right-2 w-4 h-4 border-r border-t rounded-tr-lg
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style="border-color: rgba(106, 242, 151, 0.35);"
          />
        </div>
      </article>
    </div>
    
    <div class="mt-4 flex items-center justify-center gap-2">
      <button
          v-for="(_, i) in items"
          :key="i"
          type="button"
          class="h-2.5 w-2.5 rounded-full border border-soft transition"
          :class="i === activeIndex ? 'bg-accent border-accent' : 'bg-surface-2 hover:border-line'"
          @click="goTo(i)"
          :aria-label="`Go to project ${i + 1}`"
      />
    </div>
    
    <Lightbox
        v-model="lightboxOpen"
        :images="lightboxImages"
        :title="lightboxTitle"
        :start-index="lightboxStart"
    />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue"
import Lightbox from "~/components/Lightbox.vue"

type Project = {
  id: string
  title: string
  problem: string
  solution: string
  tags: string[]
  featured?: boolean
  cover?: string
  shots?: string[]
}

const props = withDefaults(
    defineProps<{
      items: Project[]
      autoplay?: boolean
      autoplayMs?: number
    }>(),
    {
      autoplay: true,
      autoplayMs: 4500,
    }
)

const track = ref<HTMLDivElement | null>(null)
const activeIndex = ref(0)

/* Lightbox state */
const lightboxOpen = ref(false)
const lightboxImages = ref<string[]>([])
const lightboxTitle = ref("")
const lightboxStart = ref(0)

function openShots(p: Project, start = 0) {
  const imgs = (p.shots && p.shots.length ? p.shots : p.cover ? [p.cover] : [])
  if (!imgs.length) return
  lightboxImages.value = imgs
  lightboxTitle.value = p.title
  lightboxStart.value = Math.max(0, Math.min(start, imgs.length - 1))
  lightboxOpen.value = true
}

const cardWidth = () => {
  const el = track.value
  if (!el) return 0
  const first = el.querySelector<HTMLElement>("article")
  if (!first) return 0
  const gap = parseFloat(getComputedStyle(el).columnGap || getComputedStyle(el).gap || "24") || 24
  return first.getBoundingClientRect().width + gap
}

function goTo(index: number) {
  const el = track.value
  if (!el) return
  activeIndex.value = Math.max(0, Math.min(index, props.items.length - 1))
  el.scrollTo({ left: activeIndex.value * cardWidth(), behavior: "smooth" })
}

function next() {
  if (props.items.length <= 1) return
  goTo((activeIndex.value + 1) % props.items.length)
}

function prev() {
  if (props.items.length <= 1) return
  goTo((activeIndex.value - 1 + props.items.length) % props.items.length)
}

function onScroll() {
  const el = track.value
  if (!el) return
  const w = cardWidth()
  if (!w) return
  activeIndex.value = Math.round(el.scrollLeft / w)
}

/* autoplay */
let timer: number | undefined

function startAutoplay() {
  if (!props.autoplay || props.items.length <= 1) return
  stopAutoplay()
  timer = window.setInterval(() => next(), props.autoplayMs)
}

function stopAutoplay() {
  if (timer) window.clearInterval(timer)
  timer = undefined
}

onMounted(() => {
  startAutoplay()
  const el = track.value
  if (!el) return

  const pause = () => stopAutoplay()
  const resume = () => startAutoplay()

  el.addEventListener("pointerdown", pause, { passive: true })
  el.addEventListener("mouseenter", pause, { passive: true })
  el.addEventListener("mouseleave", resume, { passive: true })

  onBeforeUnmount(() => {
    el.removeEventListener("pointerdown", pause)
    el.removeEventListener("mouseenter", pause)
    el.removeEventListener("mouseleave", resume)
  })
})

onBeforeUnmount(() => stopAutoplay())
</script>
