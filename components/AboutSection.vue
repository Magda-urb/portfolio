<template>
  <section id="about" class="relative py-1 mt-24 scroll-mt-24"">
    <div class="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none">
      <div class="absolute inset-0" :style="{ backgroundImage: `url('${noiseDataUrl}')` }" />
    </div>

    <div class="relative max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
        <HeaderComponent text="About me" subtitle="A developer who cares about both code and UX."></HeaderComponent>
      <div class="space-y-6">
        <p class="text-2 text-lg leading-relaxed">
          I'm a Full-Stack Developer who bridges the gap between beautiful interfaces and robust backend systems.
          With expertise in Vue 3, Nuxt 3, and .NET/C#, I create web applications that are both performant and delightful to use.
        </p>
        <p class="text-2 text-lg leading-relaxed">
          Let's build something amazing together.
        </p>
      </div>
      <div class="mt-12">
        <HightlightComponent />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const noiseDataUrl =
    "data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"
</script>
