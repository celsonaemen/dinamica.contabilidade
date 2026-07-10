import type { SVGProps } from "react";

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeWidth="1.9"
        d="M20.25 11.94a8.25 8.25 0 0 1-12.16 7.25L3.75 20.3l1.17-4.18A8.25 8.25 0 1 1 20.25 11.94Z"
      />
      <path
        strokeWidth="1.75"
        d="M8.62 8.18c.19-.34.36-.36.56-.36h.44c.18 0 .38.05.5.31l.72 1.7c.08.2.04.38-.08.53l-.36.43c-.13.16-.17.29-.07.47.31.58.78 1.15 1.39 1.66.57.47 1.13.75 1.5.88.18.07.34.04.46-.11l.62-.72c.17-.19.36-.23.6-.13l1.55.73c.25.12.42.2.47.34.06.16.02.72-.19 1.12-.26.5-.96.9-1.44.96-.85.1-1.94-.17-3.5-1.03-2.62-1.45-4.18-3.86-4.31-4.07-.13-.2-.9-1.25-.9-2.33 0-1.06.56-1.65.76-1.88Z"
      />
    </svg>
  );
}
