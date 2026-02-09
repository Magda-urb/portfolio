<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div
        v-for="(item, index) in highlights"
        :key="item.title"
        class="group relative p-6 rounded-2xl bg-surface-1 backdrop-blur-xl border border-soft hover:border-line transition-all duration-300 hover:scale-[1.02]"
        :style="{ animationDelay: `${index * 0.08}s` }"
    >
      <div
          class="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style="background: radial-gradient(800px circle at 20% 10%, var(--accent-10), transparent 45%);"
      />

      <div class="relative z-10 space-y-3">
        <div
            class="w-12 h-12 rounded-xl border border-soft bg-surface-2 flex items-center justify-center
                 group-hover:scale-110 transition-transform duration-300"
        >
          <GIconComponent :name="item.icon" class="text-accent" :size="22" />
        </div>

        <h3 class="text-lg font-semibold text-0">
          {{ item.title }}
        </h3>

        <p class="text-sm text-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
      
      <div
          class="pointer-events-none absolute top-2 right-2 w-4 h-4 border-r border-t border-accent/40 rounded-tr-lg
               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
type Highlight = {
  title: string
  description: string
  icon: string
}

const highlights: Highlight[] = [
  {
    title: "High-performance architecture",
    description: "Focused on Core Web Vitals, fast rendering, and scalable structure.",
    icon: "bolt",
  },
  {
    title: "Clean code & best practices",
    description: "Readable naming, consistent patterns, and maintainable architecture.",
    icon: "code",
  },
  {
    title: "Excellent developer experience",
    description: "Strong typing, automation, and tooling that speeds up delivery.",
    icon: "construction",
  },
  {
    title: "User-centric design approach",
    description: "UX-first mindset with 5+ years of experience building web apps.",
    icon: "sentiment_satisfied",
  },
]
</script>
