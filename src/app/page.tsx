import Link from "next/link";
import { BlinkingFace } from "@/components/blinking-face";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <p className="home-greeting">
        Olá, prazer!
        <BlinkingFace expression="smile" />
      </p>
      <h1 id="home-title">Leonardo Marco</h1>
      <p className="home-role">
        {profile.role} no {profile.company}
      </p>

      <div className="home-copy">
        <p className="home-lead">
          Gosto de entender como as coisas funcionam, resolver problemas e
          compartilhar o que aprendo.
        </p>
        <p>
          Ao longo da minha carreira, desenvolvi produtos, liderei times e
          ensinei programação. Cada experiência trouxe novos desafios e
          aprendizados. Por aqui, você pode conhecer mais{" "}
          <Link href="/sobre">sobre mim</Link> e os caminhos que percorri na
          minha <Link href="/trajetoria">trajetória</Link>.
        </p>
      </div>
    </section>
  );
}
