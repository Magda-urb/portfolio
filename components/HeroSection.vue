<template>
  <section id="hero" class="relative overflow-hidden bg-hero text-0 min-h-viewport">
    <!-- soft vignette -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute inset-0 bg-black/35" />
      <div
          class="absolute -top-40 left-1/2 h-[700px] w-[1400px] -translate-x-1/2 rounded-full bg-black/25 blur-3xl"
      />
    </div>

    <div class="hero-frame px-6 sm:px-10 lg:px-16 pt-28 md:pt-32">
      <div class="relative z-10 flex items-center gap-6">
        <h1 class="font-console font-bold tracking-tight text-hero-h1">
          Hello World
        </h1>

        <img :src="vectorSrc" alt="" class="hero-icon shrink-0" loading="eager" />
      </div>

      <h2 class="relative z-10 font-exo text-1 text-hero-h2">
        I’m Magdalena, creative
      </h2>

      <div class="relative z-10 mt-4 flex font-console">
        <div class="flex items-baseline gap-4 text-hero-code font-bold leading-none">
          <span class="brace">&#123;&#123;</span>
          <span class="text-accent">Fullstack Developer</span>
          <span class="brace">&#125;&#125;</span>
        </div>
      </div>

      <div class="relative z-40 mt-8">
        <ButtonComponent label="Let's talk" icon="arrow_forward" variant="primary" to="contact" />
      </div>

      <div class="relative -mt-[7.25rem] z-30 flex justify-center">
        <div class="relative w-[520px] max-w-[85vw]">
          <div class="pointer-events-none absolute -inset-6 rounded-[48px] bg-black/25 blur-2xl" />
          <img :src="meSrc" alt="Portrait" class="relative h-auto object-contain" loading="lazy" />
        </div>
      </div>

      <div class="pointer-events-none absolute left-0 right-0 bottom-0 hairline" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { withBase } from "ufo"

const vectorSrc = withBase("/Vector.svg")
const meSrc = withBase("/me.png")
</script>
