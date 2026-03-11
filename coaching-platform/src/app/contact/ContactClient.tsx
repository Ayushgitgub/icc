"use client";

import { useMemo, useState } from "react";
import { PageShell } from "@/components/PageShell";
import { siteConfig } from "@/lib/site";

export function ContactClient() {
  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "loading" }
    | { type: "success" }
    | { type: "error"; message: string }
  >({ type: "idle" });

  const whatsappLink = useMemo(() => {
    const msg = encodeURIComponent(
      "Hi! I’d like to enquire about courses and a demo class."
    );
    const phone = siteConfig.whatsapp.replace(/[^\d]/g, "");
    return `https://wa.me/${phone}?text=${msg}`;
  }, []);

  async function onSubmit(formData: FormData) {
    setStatus({ type: "loading" });
    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      source: "contact-page",
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(body?.error || "Failed to submit inquiry");
      }
      setStatus({ type: "success" });
    } catch (e) {
      setStatus({
        type: "error",
        message: e instanceof Error ? e.message : "Something went wrong",
      });
    }
  }

  return (
    <PageShell
      title="Contact"
      subtitle="Send an inquiry, call us, or message on WhatsApp. We’ll respond quickly."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-black/10 p-6 dark:border-white/15 md:col-span-2">
          <div className="text-lg font-semibold">Inquiry form</div>
          <form
            className="mt-4 grid gap-3"
            action={(fd) => {
              void onSubmit(fd);
            }}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                name="name"
                required
                placeholder="Your name"
                className="h-11 rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-black/10 dark:border-white/15 dark:bg-black dark:focus:ring-white/15"
              />
              <input
                name="phone"
                required
                placeholder="Phone number"
                className="h-11 rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-black/10 dark:border-white/15 dark:bg-black dark:focus:ring-white/15"
              />
            </div>
            <input
              name="email"
              placeholder="Email (optional)"
              className="h-11 rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-black/10 dark:border-white/15 dark:bg-black dark:focus:ring-white/15"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="What are you preparing for? Preferred mode (online/offline/hybrid)?"
              className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10 dark:border-white/15 dark:bg-black dark:focus:ring-white/15"
            />

            <button
              disabled={status.type === "loading"}
              className="mt-1 inline-flex h-11 items-center justify-center rounded-full bg-black px-5 text-sm font-semibold text-white hover:bg-zinc-800 disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              {status.type === "loading" ? "Submitting..." : "Submit Inquiry"}
            </button>

            {status.type === "success" ? (
              <div className="rounded-2xl bg-green-50 p-3 text-sm text-green-900 dark:bg-green-500/10 dark:text-green-200">
                Thanks! Your inquiry was submitted. We’ll contact you soon.
              </div>
            ) : null}
            {status.type === "error" ? (
              <div className="rounded-2xl bg-red-50 p-3 text-sm text-red-900 dark:bg-red-500/10 dark:text-red-200">
                {status.message}
              </div>
            ) : null}
          </form>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-black/10 p-6 dark:border-white/15">
            <div className="text-lg font-semibold">Call / WhatsApp</div>
            <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              <div>{siteConfig.phone}</div>
              <div>{siteConfig.email}</div>
              <div className="mt-2">
                <a
                  className="inline-flex items-center justify-center rounded-full border border-black/15 px-4 py-2 text-sm font-semibold hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 p-6 dark:border-white/15">
            <div className="text-lg font-semibold">Visit</div>
            <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              {siteConfig.address}
            </div>
            <div className="mt-4 rounded-2xl bg-zinc-50 p-4 text-xs text-zinc-600 dark:bg-white/5 dark:text-zinc-300">
              Map integration (Google Maps) can be added in the next step.
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

