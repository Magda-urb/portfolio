<template>
  <footer class="relative py-5 bg-app border-t border-soft">
    <div class="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none">
      <div class="absolute inset-0" :style="{ backgroundImage: `url('${noiseDataUrl}')` }" />
    </div>

    <div class="relative max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="text-center md:text-left">
          <button
              type="button"
              class="inline-flex items-center gap-3 group focus:outline-none"
              @click="scrollToSection('hero')"
              aria-label="Go to top"
          >
    <span class="text-0 text-3xl sm:text-4xl font-dawning leading-none">
      M
    </span>

            <span
                class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent-10 border border-accent
             text-accent transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
                title="Back to top"
            >
      <span class="material-icons text-[18px] leading-none">north</span>
    </span>
          </button>

          <div class="mt-3 flex items-center justify-center md:justify-start gap-2 text-sm">
            <span class="text-2">Full-stack</span>
            <span class="text-3">·</span>
            <span class="text-2">UX-minded</span>
          </div>

          <p class="mt-2 text-3 text-xs">
            © {{ year }} · All rights reserved.
          </p>
        </div>
        
        <div class="text-center md:text-right">
          <div class="inline-flex items-center gap-2 text-sm text-3">
            <span>Built with</span>

            <span
                class="material-icons text-[18px] leading-none text-accent animate-pulse"
                aria-hidden="true"
                title="with love"
            >
              favorite
            </span>

            <span>using</span>
            <span class="text-0 font-medium">Vue 3</span>
            <span class="text-3">&</span>
            <span class="text-accent font-medium">Nuxt</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
const items = ["About", "Projects", "Stack", "Process", "Contact"]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: "smooth", block: "start" })
}

const noiseDataUrl =
    "data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"
</script>
