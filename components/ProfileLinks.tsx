import {
  ExternalLink,
  GraduationCap,
  Linkedin,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { profileLinks, type ProfileLinkIcon } from "@/lib/cv-data";

const linkIcons: Record<ProfileLinkIcon, LucideIcon> = {
  scholar: GraduationCap,
  icpc: Trophy,
  linkedin: Linkedin,
};

const buttonClass =
  "inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-text transition-colors hover:border-accent/40 hover:text-accent";

export function ProfileLinkButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {profileLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          {link.label}
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        </a>
      ))}
    </div>
  );
}

export function ProfileLinkSidebarItems() {
  return (
    <>
      {profileLinks.map((link) => {
        const Icon = linkIcons[link.icon];
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 transition-colors hover:text-accent"
          >
            <Icon className="h-4 w-4 shrink-0 text-accent/70" />
            <span>{link.label}</span>
          </a>
        );
      })}
    </>
  );
}
