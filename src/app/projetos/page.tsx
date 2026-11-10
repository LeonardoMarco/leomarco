import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioProjects } from "@/data/projects";
import { publicAsset } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Projetos | Leonardo Marco",
  description:
    "Portfólio de sites e aplicações: Calculadora de Pace, Stoque Fácil e Estantinha.",
};

export default function ProjectsPage() {
  return (
    <section className="projects-page" aria-labelledby="projects-title">
      <p className="projects-kicker">PROJETOS</p>
      <h1 id="projects-title">Projetos em destaque.</h1>
      <p className="projects-intro">
        Uma seleção de sites e aplicações com propostas diferentes. Abra cada
        projeto para conhecer a solução, as funcionalidades e as tecnologias.
      </p>

      <div className="projects-list">
        {portfolioProjects.map((project, index) => (
          <Link
            className="project-card"
            href={`/projetos/${project.slug}`}
            key={project.slug}
            aria-label={`Conhecer o projeto ${project.name}`}
          >
            <div
              className={`project-card-image${project.slug === "calculadora-de-pace" ? " project-card-image--pace" : ""}`}
            >
              <Image
                src={publicAsset(project.image.src)}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                sizes="(max-width: 660px) calc(100vw - 40px), 620px"
              />
            </div>
            <div className="project-card-copy">
              <p className="project-card-meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {project.category}
              </p>
              <div className="project-card-heading">
                <h2>{project.name}</h2>
                <ArrowUpRight size={22} aria-hidden="true" />
              </div>
              <p>{project.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
