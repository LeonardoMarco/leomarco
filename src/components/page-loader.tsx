"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function PageLoader() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);
  const startedByNavigation = useRef(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const start = (event: MouseEvent) => {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        !(event.target instanceof Element)
      ) {
        return;
      }

      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link || link.download || (link.target && link.target !== "_self")) {
        return;
      }

      const destination = new URL(link.href, window.location.href);
      if (
        destination.origin !== window.location.origin ||
        (destination.pathname === window.location.pathname &&
          destination.search === window.location.search)
      ) {
        return;
      }

      startedByNavigation.current = true;
      setCycle((current) => current + 1);
    };

    const startOnHistory = () => {
      startedByNavigation.current = true;
      setCycle((current) => current + 1);
    };

    document.addEventListener("click", start, true);
    window.addEventListener("popstate", startOnHistory);
    return () => {
      document.removeEventListener("click", start, true);
      window.removeEventListener("popstate", startOnHistory);
    };
  }, []);

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;

    if (!startedByNavigation.current) {
      setCycle((current) => current + 1);
    }
    startedByNavigation.current = false;
  }, [pathname]);

  return (
    <div
      className={`page-loader${cycle > 0 ? " page-loader--navigation" : ""}`}
      key={cycle}
      aria-hidden="true"
    >
      <svg className="page-loader-mark" viewBox="0 0 100 100" fill="none">
        <circle className="page-loader-track" cx="50" cy="50" r="44" />
        <circle className="page-loader-progress" cx="50" cy="50" r="44" />
        <path
          d="M24 19v34h20"
          transform="translate(14 14)"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinejoin="round"
        />
        <circle cx="67" cy="66" r="5" fill="var(--accent)" />
      </svg>
    </div>
  );
}
