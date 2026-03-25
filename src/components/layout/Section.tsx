import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type Props = {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-[4.75rem] py-20 sm:scroll-mt-8 sm:py-24 lg:py-28 ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
