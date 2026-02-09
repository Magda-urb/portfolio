<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
      <a href="#top" class="flex items-center gap-2 font-semibold tracking-tight">
        <span class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
          <span class="text-sm">JU</span>
        </span>
        <span class="hidden sm:block">Jakub Urbańczyk</span>
      </a>

      <nav class="hidden md:flex items-center gap-6 text-sm text-zinc-300">
        <a v-for="l in links" :key="l.href" :href="l.href" class="hover:text-white transition">
          {{ l.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium
                 bg-cyan-500/90 hover:bg-cyan-500 text-zinc-950 transition"
        >
          Let’s talk
        </a>

        <button
            class="md:hidden inline-flex items-center justify-center rounded-xl px-3 py-2
                 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
            @click="open = !open"
            aria-label="Open menu"
        >
          <span class="text-sm">{{ open ? "Close" : "Menu" }}</span>
        </button>
      </div>
    </div>

    <div v-if="open" class="md:hidden border-t border-white/10 bg-zinc-950/90">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2">
        <a
            v-for="l in links"
            :key="l.href"
            :href="l.href"
            class="rounded-lg px-3 py-2 text-sm text-zinc-200 hover:bg-white/5"
            @click="open = false"
        >
          {{ l.label }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const open = ref(false)

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
]
</script>
