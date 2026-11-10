import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlinkingFace } from "@/components/blinking-face";
import { profile } from "@/data/profile";
import { publicAsset } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Sobre | Leonardo Marco",
  description:
    "Conheça Leonardo Marco, engenheiro de software em Belo Horizonte.",
};

export default function AboutPage() {
  return (
    <section className="about-page" aria-labelledby="about-title">
      <p className="about-kicker">
        SOBRE MIM
        <BlinkingFace expression="grin" />
      </p>
      <h1 id="about-title">Tecnologia é feita por pessoas.</h1>
      <p className="about-subtitle">Um pouco da minha história</p>

      <div className="about-story">
        <div className="about-copy">
          <p>Sou engenheiro de software, com experiência como tech lead.</p>
          <p>
            Minha trajetória reúne desenvolvimento de software, colaboração e
            liderança técnica. Você pode conhecer minhas experiências na{" "}
            <Link href="/trajetoria">página de trajetória</Link>.
          </p>
        </div>
        <Image
          className="about-photo"
          src={publicAsset("/images/leonardo-marco.png")}
          alt="Retrato de Leonardo Marco"
          width={400}
          height={400}
          sizes="(max-width: 720px) 220px, 190px"
        />
      </div>

      <dl className="about-facts">
        <div>
          <dt>Base</dt>
          <dd>Belo Horizonte, MG</dd>
        </div>
        <div>
          <dt>Atuação</dt>
          <dd>Back-end e liderança técnica</dd>
        </div>
        <div>
          <dt>Formação</dt>
          <dd>
            {profile.education.degree} - {profile.education.shortName}
          </dd>
        </div>
      </dl>

      <a
        className="about-link"
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        Mais sobre mim no LinkedIn <ArrowUpRight size={16} />
        <span className="sr-only"> (abre em nova aba)</span>
      </a>
    </section>
  );
}
