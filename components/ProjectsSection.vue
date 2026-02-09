<template>
  <section
      id="projects"
      class="relative py-15 mt-24 scroll-mt-24"
  >
    <div class="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none">
      <div class="absolute inset-0" :style="{ backgroundImage: `url('${noiseDataUrl}')` }" />
    </div>
    <div
        class="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style="background: var(--accent-10);"
    />

    <div class="relative max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
      <HeaderComponent text="Recent work" subtitle="See what I've been up to lately." />
      <ProjectsCarousel :items="projects" />

    </div>
  </section>
</template>

<script setup lang="ts">
import HeaderComponent from "~/components/HeaderComponent.vue"

type Project = {
  id: string
  title: string
  problem: string
  solution: string
  tags: string[]
  featured?: boolean
  cover?: string
  shots?: string[]
}

const projects: Project[] = [
  {
    id: "1",
    title: "Visitor Management",
    problem: "Visitor logs were maintained manually, with no standardized process for legal document acceptance and auditability.",
    solution: "Developed a digital visitor management system with check-in/check-out tracking, policy acceptance workflows, and PDF-based signature handling for compliance.",
    tags: ["Vue 3", "TypeScript", "C#", ".NET", "PDF Signing", "PostgreSQL", "Mobile", "Tablet"],
   // cover: "/projects/1/cover.png",
    shots: ["/projects/1/screen-1.png"]
  },
  {
    id: "2",
    title: "e-Instructions",
    problem: "Paper-based work instructions made it difficult to verify who reviewed required procedures and when.",
    solution: "Implemented a digital PDF instruction module with competency tests, acknowledgment paths, and reporting for full traceability.",
    tags: ["Vue 3", "C#", ".NET", "PDF", "Mobile", "Tablet"],
   // cover: "/projects/2/cover.png",
    shots: ["/projects/2/screen-1.png"]
  },
  {
    id: "3",
    title: "CMMS",
    problem: "Maintenance and HSE requests were handled across disconnected channels, increasing response times and reducing process visibility.",
    solution: "Built a CMMS module for ticket management, priority handling, activity history, and approval workflows in one centralized system.",
    tags: ["Vue 3", "TypeScript", "Clean Architecture", "EF Core", "Mobile", "Tablet"],
   // cover: "/projects/3/cover.png",
    shots: ["/projects/3/screen-1.png", "/projects/3/screen-2.png"]
  },
  {
    id: "4",
    title: "Pharmacy Optimization Platform",
    problem: "A leading pharmacy chain relied on manual, fragmented workflows for drug pricing updates, custom orders, and supplier returns, causing delays, stock inefficiencies, and financial risk during reimbursement and price changes.",
    solution: "Built a Central + Pharmacy platform with real-time SignalR sync, MongoDB, and rule-based automation for pricing, orders, and returns—aligning branch actions with central decisions and speeding up execution.",
    tags: ["Vue 3", "TypeScript", "C#", ".NET", "SignalR", "MongoDB", "Healthcare", "Automation"],
   // cover: "/projects/4/cover.png",
    shots: ["/projects/4/screen-1.png", "/projects/4/screen-2.png", "/projects/4/screen-3.png"]
  },
  {
    id: "5",
    title: "Production Buffer Management",
    problem:
        "Lack of visibility and control over materials between the warehouse and the production line leads to bottlenecks and downtime risk.",
    solution:
        "Built a scalable module for managing production buffers (WMS-class) to track quantities and locations and help eliminate bottlenecks in the warehouse–production handoff.",
    tags: ["C#", ".NET", "Java Script", "Production", "WMS", "Logistics"],
   // cover: "/projects/5/cover.png",
    shots: [
      "/projects/5/screen-1.png",
      "/projects/5/screen-2.png",
      "/projects/5/screen-3.png",
    ],
  }

]

const featured = computed(() => projects.filter((p) => p.featured))
const rest = computed(() => projects.filter((p) => !p.featured))

const noiseDataUrl =
    "data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"
</script>
