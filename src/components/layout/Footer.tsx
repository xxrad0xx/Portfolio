import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <Container>
        <p className="text-sm text-[var(--color-muted)]">
          © 2026 Raul Ortiz - UX Developer. Todos los derechos reservados
        </p>
      </Container>
    </footer>
  );
}
