import Link from "next/link";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <p className="home-greeting">Olá, prazer!</p>
      <h1 id="home-title">Leonardo Marco</h1>
      <p className="home-role">
        {profile.role} no {profile.company}
      </p>

      <div className="home-copy">
        <p className="home-lead">
          Construo software e ajudo pessoas a construírem juntas.
        </p>
        <p>
          Minha trajetória reúne desenvolvimento de software, colaboração e
          liderança técnica. Você pode conhecer um pouco mais{" "}
          <Link href="/sobre">sobre mim</Link> e explorar minha{" "}
          <Link href="/trajetoria">trajetória</Link>.
        </p>
      </div>
    </section>
  );
}
