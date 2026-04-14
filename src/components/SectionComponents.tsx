import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export function Section({ children, className = "", dark = false, id }: SectionProps) {
  return (
    <section id={id} className={`section-padding ${dark ? "bg-secondary text-secondary-foreground" : "bg-background"} ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

export function SectionTitle({ children, subtitle, light = false }: { children: ReactNode; subtitle?: string; light?: boolean }) {
  return (
    <div className="mb-12">
      <h2 className={`font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold ${light ? "text-secondary-foreground" : "text-foreground"}`}>
        {children}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-lg max-w-2xl ${light ? "text-secondary-foreground/60" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
      <div className="w-16 h-1 gold-gradient rounded-full mt-4" />
    </div>
  );
}

export function CTABanner({ title, description, buttonText = "Apply Now", to = "/admissions" }: { title: string; description: string; buttonText?: string; to?: string }) {
  return (
    <section className="gold-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-secondary mb-4">{title}</h2>
        <p className="text-secondary/80 text-lg max-w-2xl mx-auto mb-8">{description}</p>
        <Link
          to={to}
          className="inline-flex items-center justify-center bg-secondary text-secondary-foreground font-[family-name:var(--font-heading)] font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-secondary/90 transition-all tracking-wide uppercase"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
