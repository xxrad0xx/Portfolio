import { Container } from "@/components/ui/Container";
import { getContent } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { locale } = useI18n();
  const { site } = getContent(locale);
  const suffix =
    locale === "es" ? "Todos los derechos reservados." : "All rights reserved.";

  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <Container>
        <p className="text-sm text-[var(--color-muted)]">
          © 2026 {site.name}. {suffix}
        </p>
      </Container>
    </footer>
  );
}
