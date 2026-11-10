import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getPortfolioProject, portfolioProjects } from "@/data/projects";
import { publicAsset } from "@/lib/paths";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) return {};

  return {
    title: `${project.name} | Projetos de Leonardo Marco`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) notFound();

  return (
    <article className="project-detail">
      <Link className="project-back" href="/projetos">
        <ArrowLeft size={16} aria-hidden="true" /> Todos os projetos
      </Link>
      <p className="projects-kicker">{project.category}</p>
      <h1>{project.name}</h1>
      <p className="project-detail-lead">{project.summary}</p>

      <div className="project-detail-image">
        <Image
          src={publicAsset(project.image.src)}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="(max-width: 660px) calc(100vw - 40px), 620px"
          priority
        />
      </div>

      <section
        className="project-detail-section"
        aria-labelledby="project-about"
      >
        <h2 id="project-about">O projeto</h2>
        {project.overview.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section
        className="project-detail-section"
        aria-labelledby="project-features"
      >
        <h2 id="project-features">O que ele oferece</h2>
        <div className="project-feature-list">
          {project.features.map((feature, index) => (
            <div className="project-feature" key={feature.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="project-detail-section"
        aria-labelledby="project-technology"
      >
        <h2 id="project-technology">Tecnologias</h2>
        <p>{project.technology}</p>
      </section>

      <a
        className="project-visit"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visitar o projeto <ArrowUpRight size={17} aria-hidden="true" />
        <span className="sr-only"> (abre em nova aba)</span>
      </a>
    </article>
  );
}
