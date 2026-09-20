type IconProps = { size?: number };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconEnvelope({ size = 22 }: IconProps) {
  return (
    <svg {...base} width={size} height={size}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </svg>
  );
}

export function IconTag({ size = 22 }: IconProps) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M12 3H5a2 2 0 0 0-2 2v7l9.5 9.5a2 2 0 0 0 2.8 0l6.2-6.2a2 2 0 0 0 0-2.8L12 3Z" />
      <circle cx="8" cy="8" r="1.3" />
    </svg>
  );
}

export function IconCard({ size = 22 }: IconProps) {
  return (
    <svg {...base} width={size} height={size}>
      <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
      <path d="M7 9.5h6M7 13h4" />
      <path d="M14.5 15.5 16.3 17.3 20 13.5" />
    </svg>
  );
}

export function IconRibbon({ size = 22 }: IconProps) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M12 12c-2-3-6-4-8-2s0 6 3 6 4-2 5-4Z" />
      <path d="M12 12c2-3 6-4 8-2s0 6-3 6-4-2-5-4Z" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconArrow({ size = 16 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} strokeWidth={1.6}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconInstagram({ size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} strokeWidth={1.5}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconTiktok({ size = 20 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} strokeWidth={1.5}>
      <path d="M14 4v10.5a3.5 3.5 0 1 1-3-3.46" />
      <path d="M14 4c.7 2.2 2.4 3.7 4.6 4" />
    </svg>
  );
}

export function IconGlobe({ size = 22 }: IconProps) {
  return (
    <svg {...base} width={size} height={size}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  );
}

export function IconClock({ size = 22 }: IconProps) {
  return (
    <svg {...base} width={size} height={size}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </svg>
  );
}

export function IconMapPin({ size = 22 }: IconProps) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function IconCheckCircle({ size = 22 }: IconProps) {
  return (
    <svg {...base} width={size} height={size}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.2 12.3 2.5 2.5 5.1-5.6" />
    </svg>
  );
}

export function IconGift({ size = 22 }: IconProps) {
  return (
    <svg {...base} width={size} height={size}>
      <rect x="3.5" y="9.5" width="17" height="11" rx="1.5" />
      <path d="M2.5 9.5h19M12 9.5V21" />
      <path d="M12 9.5S10.8 4 8.4 4a2.2 2.2 0 0 0 0 5.5M12 9.5S13.2 4 15.6 4a2.2 2.2 0 0 1 0 5.5" />
    </svg>
  );
}

export function IconCamera({ size = 22 }: IconProps) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M3 8.5h3.2L8 6h8l1.8 2.5H21v11H3v-11Z" />
      <circle cx="12" cy="13.5" r="3.4" />
    </svg>
  );
}

export function IconQr({ size = 22 }: IconProps) {
  return (
    <svg {...base} width={size} height={size}>
      <rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1" />
      <rect x="14" y="3.5" width="6.5" height="6.5" rx="1" />
      <rect x="3.5" y="14" width="6.5" height="6.5" rx="1" />
      <path d="M14 14h3v3h-3zM20.5 14v3M17.5 20.5h3M14 20.5h.01" />
    </svg>
  );
}

export function IconPhone({ size = 22 }: IconProps) {
  return (
    <svg {...base} width={size} height={size}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 5.5h3M11 18.5h2" />
    </svg>
  );
}

export function IconUsers({ size = 22 }: IconProps) {
  return (
    <svg {...base} width={size} height={size}>
      <circle cx="9.5" cy="8.5" r="3.2" />
      <path d="M3.5 19.5c.6-3.2 3-5 6-5s5.4 1.8 6 5" />
      <path d="M16 6.1a3.2 3.2 0 0 1 0 5.9M17.2 14.9c2.1.5 3.5 2.1 3.9 4.6" />
    </svg>
  );
}

export function IconSparkle({ size = 22 }: IconProps) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M12 3.5c.9 4 2.6 5.7 6.5 6.5-3.9.8-5.6 2.5-6.5 6.5-.9-4-2.6-5.7-6.5-6.5 3.9-.8 5.6-2.5 6.5-6.5Z" />
      <path d="M18.5 16.5c.4 1.7 1.1 2.4 2.8 2.8-1.7.4-2.4 1.1-2.8 2.8-.4-1.7-1.1-2.4-2.8-2.8 1.7-.4 2.4-1.1 2.8-2.8Z" />
    </svg>
  );
}

export function IconHeart({ size = 22 }: IconProps) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M12 20.3S3.8 15.2 3.8 9.5A4.3 4.3 0 0 1 12 7.4a4.3 4.3 0 0 1 8.2 2.1c0 5.7-8.2 10.8-8.2 10.8Z" />
    </svg>
  );
}

export function IconBed({ size = 22 }: IconProps) {
  return (
    <svg {...base} width={size} height={size}>
      <path d="M3 19v-9M3 13h18v6M21 19v-5.5a2.5 2.5 0 0 0-2.5-2.5H11v3" />
      <circle cx="7" cy="10" r="1.8" />
    </svg>
  );
}

export function IconChevronDown({ size = 18 }: IconProps) {
  return (
    <svg {...base} width={size} height={size} strokeWidth={1.6}>
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}
