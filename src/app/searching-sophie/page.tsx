import { PersonaShell } from "@/components/funnel/persona-shell";
import { personas } from "@/lib/personas";

export default function SearchingSophiePage() {
  return <PersonaShell persona={personas.sophie} />;
}
