"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/lib/cv-data";

export default function Avatar() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <span className="flex h-full w-full items-center justify-center font-display text-2xl font-bold text-accent">
        MR
      </span>
    );
  }

  return (
    <Image
      src="/logo.png"
      alt={profile.name}
      width={88}
      height={88}
      className="h-full w-full object-cover"
      onError={() => setImgError(true)}
      priority
    />
  );
}
