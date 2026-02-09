<template>
  <span
      :class="iconClass"
      :style="iconStyle"
      aria-hidden="true"
  >
    {{ name }}
  </span>
</template>

<script setup lang="ts">
type SetName = "icons" | "symbols-rounded"

const props = withDefaults(
    defineProps<{
      name: string
      size?: number
      class?: string
      set?: SetName
      fill?: 0 | 1
      weight?: number
      grade?: number
      opsz?: number
    }>(),
    {
      size: 18,
      class: "",
      set: "icons",
      fill: 0,
      weight: 400,
      grade: 0,
      opsz: 24,
    }
)

const iconClass = computed(() => {
  const base = "inline-flex leading-none align-middle select-none"
  const family =
      props.set === "symbols-rounded"
          ? "material-symbols-rounded"
          : "material-icons"

  return [base, family, props.class].filter(Boolean).join(" ")
})

const iconStyle = computed(() => {
  const style: Record<string, string> = {
    fontSize: `${props.size}px`,
    lineHeight: "1",
  }
  if (props.set === "symbols-rounded") {
    style.fontVariationSettings =
        `"FILL" ${props.fill}, "wght" ${props.weight}, "GRAD" ${props.grade}, "opsz" ${props.opsz}`
  }

  return style
})
</script>
