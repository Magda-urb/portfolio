<template>
  <button :type="type" :disabled="disabled" :class="rootClass" @click="onClick">
    <span>{{ label }}</span>

    <span
        v-if="icon"
        class="material-icons text-[18px] leading-none group-hover:translate-x-1 transition-transform duration-300"
        aria-hidden="true"
    >
      {{ icon }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue"

type Variant = "primary" | "secondary"
type BtnType = "button" | "submit" | "reset"

const props = withDefaults(
    defineProps<{
      label?: string
      icon?: string
      variant?: Variant
      to?: string
      type?: BtnType
      disabled?: boolean
    }>(),
    {
      label: "Let’s talk",
      icon: "arrow_forward",
      variant: "primary",
      to: undefined,
      type: "button",
      disabled: false,
    }
)

const emit = defineEmits<{ (e: "click", ev: MouseEvent): void }>()

const rootClass = computed(() => {
  return [
    "group",
    "btn-cta",
    props.variant === "secondary" ? "btn-cta--secondary" : "btn-cta--primary",
    props.disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
  ].join(" ")
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

function onClick(ev: MouseEvent) {
  if (props.disabled) return
  if (props.to) scrollToSection(props.to)
  emit("click", ev)
}
</script>
