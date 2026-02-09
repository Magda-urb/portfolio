<template>
  <section id="stack" class="relative py-9 mt-24 scroll-mt-24"">
    <div
        class="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style="background: var(--accent-10);"
    />
    <div
        class="absolute bottom-0 left-[-120px] w-[520px] h-[520px] rounded-full blur-[140px] pointer-events-none"
        style="background: var(--accent-10);"
    />

    <div class="relative max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
      <HeaderComponent
          text="Stack"
          subtitle="Modern technologies and tools I use to build high-performance, scalable applications."
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="(c, i) in categories"
            :key="i"
            class="group relative p-8 rounded-2xl bg-surface-1 backdrop-blur-sm border border-soft
                 hover:border-accent transition-all duration-500 overflow-hidden"
        >
          <div
              class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              style="background: radial-gradient(900px circle at 20% 10%, var(--accent-10), transparent 60%);"
          />

          <div class="relative">
            <div class="flex items-center gap-4 mb-6">
              <div
                  class="p-3 rounded-xl bg-accent-10 border border-soft text-accent
                       group-hover:scale-110 transition-transform duration-300"
              >
                <component :is="c.icon" class="w-6 h-6" />
              </div>

              <h3 class="text-0 text-2xl font-bold">
                {{ c.title }}
              </h3>
            </div>

            <div class="flex flex-wrap gap-3">
              <div
                  v-for="(item, j) in c.items"
                  :key="j"
                  class="px-4 py-2 rounded-full bg-surface-2 border border-soft text-2 text-sm font-medium
                       hover:border-accent hover:text-0 transition-all duration-300 cursor-default"
              >
                {{ item }}
              </div>
            </div>
          </div>
          
          <div
              class="pointer-events-none absolute top-2 right-2 w-4 h-4 border-r border-t rounded-tr-lg
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style="border-color: rgba(106, 242, 151, 0.35);"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Component } from "vue"
import HeaderComponent from "~/components/HeaderComponent.vue"

/* SVG icons (light + consistent) */
const IconCode = {
  props: { class: { type: String, default: "" } },
  template: `<svg :class="class" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M8 9l-4 3 4 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 9l4 3-4 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14 6l-4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
} as Component

const IconDb = {
  props: { class: { type: String, default: "" } },
  template: `<svg :class="class" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="7" ry="3" stroke="currentColor" stroke-width="2"/>
    <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" stroke="currentColor" stroke-width="2"/>
    <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" stroke="currentColor" stroke-width="2"/>
  </svg>`,
} as Component

const IconCloud = {
  props: { class: { type: String, default: "" } },
  template: `<svg :class="class" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 18h10a4 4 0 0 0 .5-7.97A5 5 0 0 0 7.2 9.2 3.5 3.5 0 0 0 7 18Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  </svg>`,
} as Component

const IconWrench = {
  props: { class: { type: String, default: "" } },
  template: `<svg :class="class" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M21 7a6 6 0 0 1-8 5.66L7 18.66 5.34 17l6-6A6 6 0 1 1 21 7Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  </svg>`,
} as Component

const categories = [
  { title: "Frontend", icon: IconCode, items: ["Vue 3", "Nuxt 3", "TypeScript", "Tailwind CSS", "Pinia", "Vite"] },
  { title: "Backend", icon: IconDb, items: ["C#", ".NET Core", ".NET 8", "Entity Framework", "MS SQL Server", "PostgreSQL"] },
  { title: "Tools", icon: IconWrench, items: ["Git", "VS Code", "Visual Studio", "JetBarins Rider", "Figma",] },
]

const noiseDataUrl =
    "data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"
</script>
