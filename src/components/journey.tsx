"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { experiences, profile } from "@/data/profile";

export function Journey() {
  const timelineRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const element = timelineRef.current;
    if (
      !element ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const items = element.querySelectorAll<HTMLElement>(".journey-item");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    items.forEach((item) => observer.observe(item));
    element.classList.add("is-animated");

    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const bounds = element.getBoundingClientRect();
      const marker = window.innerHeight * 0.58;
      const progress = Math.max(
        0,
        Math.min(1, (marker - bounds.top) / bounds.height),
      );
      element.style.setProperty("--timeline-progress", String(progress));
    };
    const scheduleProgress = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", scheduleProgress, { passive: true });
    window.addEventListener("resize", scheduleProgress);
    const resizeObserver =
      "ResizeObserver" in window ? new ResizeObserver(scheduleProgress) : null;
    resizeObserver?.observe(element);

    return () => {
      observer.disconnect();
      resizeObserver?.disconnect();
      window.removeEventListener("scroll", scheduleProgress);
      window.removeEventListener("resize", scheduleProgress);
      if (frame) window.cancelAnimationFrame(frame);
      element.classList.remove("is-animated");
      element.style.removeProperty("--timeline-progress");
    };
  }, []);

  return (
    <section className="journey-section" aria-labelledby="journey-title">
      <p className="journey-kicker">TRAJETÓRIA</p>
      <h1 id="journey-title">Minha trajetória.</h1>
      <div className="journey-intro">
        <p>
          Da experiência mais recente ao início da carreira. Role para
          acompanhar cada etapa.
        </p>
      </div>

      <ol
        className="journey-timeline"
        ref={timelineRef}
        aria-label="Experiências profissionais em ordem cronológica inversa"
      >
        {experiences.map((experience, index) => (
          <li className="journey-item" key={experience.id}>
            <span className="journey-node" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <article className="journey-entry">
              <p className="journey-type">Experiência</p>
              <h2>{experience.company}</h2>
              <div className="journey-roles">
                {experience.roles.map((role) => (
                  <section className="journey-role" key={role.title}>
                    <h3>{role.title}</h3>
                    <p className="journey-meta">{role.period}</p>
                    {role.summary && (
                      <p className="journey-description">{role.summary}</p>
                    )}
                    {role.highlights && (
                      <ul className="journey-highlights">
                        {role.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                    {role.stack && (
                      <p className="journey-stack">
                        <span>Stack</span> {role.stack}
                      </p>
                    )}
                  </section>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
      <a
        className="journey-more"
        href={profile.linkedin + "details/experience/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver experiência profissional <ArrowUpRight size={16} />
        <span className="sr-only"> (abre em nova aba)</span>
      </a>
    </section>
  );
}
