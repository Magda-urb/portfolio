<template>
  <section id="process" class="relative py-32">

    <div class="relative max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
      <div class="mb-16">
        <h2 class="text-white text-5xl md:text-6xl font-bold mb-4">Process</h2>
        <div class="w-24 h-1 bg-[#6af297]" />
        <p class="text-white/60 text-lg mt-6 max-w-2xl">
          A proven workflow that ensures quality, efficiency, and successful project delivery
        </p>
      </div>

      <!-- Desktop -->
      <div class="hidden lg:block">
        <div class="relative">
          <div class="absolute top-20 left-0 right-0 h-0.5 bg-white/10">
            <div class="absolute inset-0 bg-gradient-to-r from-[#6af297] via-white to-[#6af297] opacity-30" />
          </div>

          <div class="grid grid-cols-4 gap-8">
            <div v-for="(s, i) in steps" :key="i" class="relative">
              <div class="relative z-10 w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-sm border border-white/20 flex items-center justify-center group hover:border-[#6af297]/50 transition-all duration-500">
                <div class="absolute inset-0 bg-gradient-to-br from-[#6af297]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <span class="relative text-5xl font-bold text-white/80 group-hover:text-[#6af297] transition-colors duration-300">
                  {{ s.number }}
                </span>
              </div>

              <div class="text-center">
                <h3 class="text-white text-xl font-bold mb-4">{{ s.title }}</h3>
                <p class="text-white/60 text-sm leading-relaxed">{{ s.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="lg:hidden space-y-12">
        <div v-for="(s, i) in steps" :key="i" class="relative flex gap-6">
          <div v-if="i < steps.length - 1" class="absolute left-16 top-32 bottom-0 w-0.5 bg-white/10">
            <div class="absolute inset-0 bg-gradient-to-b from-[#6af297] to-white opacity-30" />
          </div>

          <div class="relative z-10 flex-shrink-0 w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <span class="text-4xl font-bold text-white/80">{{ s.number }}</span>
          </div>

          <div class="flex-1 pt-4">
            <h3 class="text-white text-2xl font-bold mb-4">{{ s.title }}</h3>
            <p class="text-white/60 leading-relaxed">{{ s.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  { number: "01", title: "Discovery", description: "Understanding your vision, goals, and requirements through detailed consultation and research." },
  { number: "02", title: "Design & Plan", description: "Creating architecture blueprints, wireframes, and technical specifications aligned with best practices." },
  { number: "03", title: "Develop & Test", description: "Building robust solutions with clean code, continuous integration, and comprehensive testing." },
  { number: "04", title: "Deploy & Support", description: "Seamless deployment to production with ongoing monitoring, optimization, and maintenance." },
]

const noiseDataUrl =
    "data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"
</script>
