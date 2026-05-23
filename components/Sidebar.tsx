"use client";

import { useEffect, useState } from "react";
import Avatar from "@/components/Avatar";
import { Mail, Phone, MapPin, Globe, Menu, X } from "lucide-react";
import { ProfileLinkSidebarItems } from "@/components/ProfileLinks";
import { navSections, profile, SITE_URL } from "@/lib/cv-data";

export default function Sidebar() {
  const [active, setActive] = useState<string>("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const ids = navSections.map((s) => s.id);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const nav = (
    <nav className="flex flex-col gap-0.5" aria-label="CV sections">
      {navSections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={() => setMobileOpen(false)}
          className={`group flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
            active === id
              ? "bg-accent/10 text-accent"
              : "text-muted hover:bg-surface-hover hover:text-text"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              active === id ? "bg-accent" : "bg-border group-hover:bg-muted"
            }`}
          />
          {label}
        </a>
      ))}
    </nav>
  );

  const contacts = (
    <div className="flex flex-col gap-3 border-t border-border-subtle pt-5 text-sm text-muted">
      <a
        href={`mailto:${profile.email}`}
        className="flex items-start gap-2.5 transition-colors hover:text-accent"
      >
        <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent/70" />
        <span className="break-all leading-snug">{profile.email}</span>
      </a>
      <div className="flex items-center gap-2.5">
        <Phone className="h-4 w-4 shrink-0 text-accent/70" />
        <span>{profile.phone}</span>
      </div>
      <a
        href={SITE_URL}
        className="flex items-center gap-2.5 transition-colors hover:text-accent"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Globe className="h-4 w-4 shrink-0 text-accent/70" />
        <span className="truncate">moshiurrahman-cv.vercel.app</span>
      </a>
      <ProfileLinkSidebarItems />
      <div className="flex items-center gap-2.5">
        <MapPin className="h-4 w-4 shrink-0 text-accent/70" />
        <span>{profile.location}</span>
      </div>
    </div>
  );

  const profileBlock = (
    <div className="text-center lg:text-left">
      <div className="relative mx-auto mb-4 h-[88px] w-[88px] lg:mx-0">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-violet opacity-80 blur-md" />
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border-2 border-accent/30 bg-surface">
          <Avatar />
        </div>
      </div>
      <h1 className="font-display text-xl font-bold leading-tight tracking-tight">
        {profile.name}
      </h1>
      <p className="mt-1.5 text-xs font-medium uppercase tracking-widest text-accent">
        {profile.roles.join(" · ")}
      </p>
    </div>
  );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-border-subtle bg-bg/90 px-4 py-3 backdrop-blur-lg lg:hidden">
        <span className="font-display text-sm font-bold">{profile.shortName}</span>
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-muted hover:bg-surface hover:text-text"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-bg/80 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      )}

      <aside
        className={`glass fixed left-0 top-0 z-40 flex h-full w-[min(100%,280px)] flex-col gap-6 overflow-y-auto p-6 pt-20 transition-transform duration-300 lg:sticky lg:z-10 lg:h-screen lg:w-[280px] lg:translate-x-0 lg:pt-8 lg:shadow-none ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {profileBlock}
        {nav}
        {contacts}
      </aside>
    </>
  );
}
