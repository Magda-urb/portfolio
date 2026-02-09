<template>
  <nav
      :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-[var(--surface-0)]/80 backdrop-blur-xl border-b border-white/5'
        : 'bg-transparent',
    ]"
  >
    <div class="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
      <div class="flex items-center justify-between h-20">
        <button
            type="button"
            class="flex items-center gap-3 focus:outline-none"
            @click="scrollToSection('hero')"
            aria-label="Go to top"
        >
          <span class="text-0 text-2xl font-dawning">M</span>
          <GIconComponent name="favorite" class="text-accent" :size="20" />
        </button>

        <div class="hidden md:flex items-center gap-8">
          <button
              v-for="item in items"
              :key="item.to"
              type="button"
              class="text-2 hover:text-0 text-sm font-medium transition-colors relative group"
              @click="scrollToSection(item.to)"
          >
            {{ item.label }}
            <span
                class="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300"
            />
          </button>
        </div>

        <a href="./cv.pdf" class="inline-flex">
          <ButtonComponent label="Download Resume" icon="download" variant="secondary" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue"

const items = [
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Stack", to: "stack" },
  { label: "Contact", to: "contact" },
] as const

const isScrolled = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll)
})

function scrollToSection(id: string) {
  const tryScroll = (attempt = 0) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      return
    }
    if (attempt < 8) requestAnimationFrame(() => tryScroll(attempt + 1))
  }

  tryScroll()
}
</script>
