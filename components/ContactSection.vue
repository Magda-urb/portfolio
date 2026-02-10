<template>
  <section id="contact" class="relative py-8 mt-24 scroll-mt-24 mb-5"">
    <div class="relative max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
      <HeaderComponent
          text="Contact"
          subtitle="Got an idea? Let’s turn it into something real."
      />

      <div class="grid lg:grid-cols-2 gap-10">
        <div>
          <form class="space-y-3" @submit.prevent="handleSubmit">
            <div>
              <label for="name" class="block text-sm font-semibold mb-3 text-[var(--text-2)]">
                Name
              </label>
              <input
                  id="name"
                  v-model="form.name"
                  required
                  class="form-field"
                  placeholder="John Doe"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-semibold mb-3 text-[var(--text-2)]">
                Email
              </label>
              <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="form-field"
                  placeholder="john@example.com"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-semibold mb-3 text-[var(--text-2)]">
                Message
              </label>
              <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  required
                  class="form-field resize-none"
                  placeholder="Tell me about your project..."
              />
            </div>
            <p v-if="status === 'success'" class="text-sm text-[var(--accent)]">
              Thanks! I’ll get back to you soon.
            </p>
            <p v-else-if="status === 'error'" class="text-sm text-red-400">
              Oops — something went wrong. Please try again.
            </p>
            <ButtonComponent
                type="submit"
                :disabled="status === 'sending' || status === 'success'"
                :label="
    status === 'sending'
      ? 'Sending...'
      : status === 'success'
        ? 'Message Sent!'
        : status === 'error'
          ? 'Try again'
          : 'Send Message'
  "
                :icon="
    status === 'sending'
      ? 'hourglass_top'
      : status === 'success'
        ? 'check'
        : status === 'error'
          ? 'refresh'
          : 'arrow_forward'
  "
                variant="primary"
            />

          </form>
        </div>

        <div class="space-y-4">
          <div class="contact-card">
            <div class="contact-card__head">
              <div>
                <div class="contact-card__title">Quick Links</div>
                <div class="contact-card__subtitle">Find me online or grab my CV.</div>
              </div>

              <div class="availability-pill">
                <span class="availability-dot" />
                Say hi
              </div>
            </div>

            <div class="quick-links">
              <a
                  href="https://www.linkedin.com/in/magdalena-urba%C5%84czyk-51b2649a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="quick-link"
              >
                <div class="quick-link__icon-wrap">
                  <svg class="quick-link__icon" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 21h4V9H3v12ZM9 9h3.8v1.7h.05c.53-.95 1.82-1.95 3.75-1.95C20.7 8.75 21 11.1 21 14.15V21h-4v-6.1c0-1.45-.03-3.3-2.01-3.3-2.01 0-2.32 1.57-2.32 3.19V21H9V9Z"
                    />
                  </svg>
                </div>

                <div class="quick-link__meta">
                  <div class="quick-link__label">LinkedIn</div>
                  <div class="quick-link__value">Magdalena Urbańczyk</div>
                </div>
                <GIconComponent name="open_in_new" />
              </a>

              <a href="./cv.pdf" target="_blank" rel="noopener noreferrer" class="quick-link">
                <div class="quick-link__icon-wrap">
                  <svg class="quick-link__icon" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M14 3v4a2 2 0 0 0 2 2h4"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M8 13h8M8 17h6"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                  </svg>
                </div>

                <div class="quick-link__meta">
                  <div class="quick-link__label">CV / Resume</div>
                  <div class="quick-link__value">Download PDF</div>
                </div>
                <GIconComponent name="download" />
              </a>

              <a href="mailto:magdalena.bonisch@gmail.com" class="quick-link">
                <div class="quick-link__icon-wrap">
                  <svg class="quick-link__icon" viewBox="0 0 24 24" fill="none">
                    <path d="M4 6h16v12H4V6Z" stroke="currentColor" stroke-width="2" />
                    <path
                        d="M4 7l8 6 8-6"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div class="quick-link__meta">
                  <div class="quick-link__label">Email</div>
                  <div class="quick-link__value">magdalena.bonisch@gmail.com</div>
                </div>

                <GIconComponent name="mail" />
              </a>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>

    <div
        class="pointer-events-none absolute inset-0 opacity-[0.015] mix-blend-overlay"
        :style="{ backgroundImage: `url('${noiseDataUrl}')` }"
    />
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"

const form = reactive({ name: "", email: "", message: "" })
const status = ref<"idle" | "sending" | "success" | "error">("idle")
const WEB3_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string

async function handleSubmit() {
  if (status.value === "sending") return

  try {
    status.value = "sending"

    const payload = {
      access_key: WEB3_KEY,
      subject: `Portfolio contact — ${form.name}`,
      from_name: form.name,
      email: form.email,
      message: form.message,
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    const data = await res.json()

    if (!res.ok || data?.success !== true) {
      throw new Error(data?.message || "Send failed")
    }

    status.value = "success"
    
    form.name = ""
    form.email = ""
    form.message = ""

    setTimeout(() => (status.value = "idle"), 2500)
  } catch (e) {
    status.value = "error"
    setTimeout(() => (status.value = "idle"), 3000)
  }
}


const noiseDataUrl =
    "data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"
</script>
