import type { Metadata } from "next";
import { Journey } from "@/components/journey";

export const metadata: Metadata = {
  title: "Trajetória | Leonardo Marco",
  description:
    "Experiências profissionais de Leonardo Marco, da mais recente à mais antiga.",
};

export default function JourneyPage() {
  return <Journey />;
}
