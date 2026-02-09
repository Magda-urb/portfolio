<template>
  <div class="mb-8">
    <div class="flex items-baseline gap-3">
      <span class="brace text-hero-code font-console leading-none">&lt;</span>

      <h2 class="text-0 text-5xl md:text-6xl font-bold mb-4 font-console leading-none">
        {{ text }}
        <span class="brace">/&gt;</span>
      </h2>
    </div>
    <p
        v-if="subtitle"
        class="mt-1 text-2 text-base md:text-lg leading-relaxed max-w-[72ch]"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
      text: string
      subtitle?: string
    }>(),
    { subtitle: undefined }
)
</script>
