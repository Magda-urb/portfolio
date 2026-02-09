<template>
  <div class="ambient-bg" aria-hidden="true">
    <span class="blob blob-a" />
    <span class="blob blob-b" />
    <span class="blob blob-c" />
    <span class="blob blob-d" />
    <span class="grain-layer" />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.ambient-bg {
  position: fixed;
  inset: 0;
  z-index: -1;           
  pointer-events: none;
  overflow: hidden;
}

.blob {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 9999px;
  filter: blur(110px);
  opacity: 0.4;
  will-change: transform;
  background: var(--accent-10);
}

.blob-a {
  top: -140px;
  left: -120px;
  animation: driftA 11s var(--ease-out) infinite alternate;
}

.blob-b {
  top: 15%;
  right: -220px;
  width: 500px;
  height: 500px;
  opacity: 0.2;
  animation: driftB 12s var(--ease-out) infinite alternate;
}

.blob-c {
  bottom: -220px;
  left: 18%;
  width: 400px;
  height: 400px;
  opacity: 0.2;
  animation: driftC 10s var(--ease-out) infinite alternate;
}

.blob-d {
  bottom: 10%;
  right: 10%;
  width: 450px;
  height: 450px;
  opacity: 0.3;
  animation: driftD 13s var(--ease-out) infinite alternate;
}

.grain-layer {
  position: absolute;
  inset: 0;
  opacity: 0.06;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E");
}

@keyframes driftA {
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  50%  { transform: translate3d(140px, 80px, 0) scale(1.08); }
  100% { transform: translate3d(80px, 180px, 0) scale(0.98); }
}

@keyframes driftB {
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  50%  { transform: translate3d(-160px, 120px, 0) scale(1.06); }
  100% { transform: translate3d(-220px, -40px, 0) scale(0.97); }
}

@keyframes driftC {
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  50%  { transform: translate3d(120px, -140px, 0) scale(1.05); }
  100% { transform: translate3d(-40px, -220px, 0) scale(0.98); }
}

@keyframes driftD {
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  50%  { transform: translate3d(-80px, -120px, 0) scale(1.08); }
  100% { transform: translate3d(60px, -40px, 0) scale(0.98); }
}
</style>
