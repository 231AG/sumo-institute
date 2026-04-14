import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionTitle, CTABanner } from "@/components/SectionComponents";
import { Target, Eye, Award, Users, BookOpen, Globe } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sumo Institute of Technology" },
      { name: "description", content: "Learn about SIT's mission, vision, values, and commitment to technology education excellence." },
      { property: "og:title", content: "About Sumo Institute of Technology" },
      { property: "og:description", content: "Our mission, vision, and values driving technology education in Africa." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="dark-gradient text-secondary-foreground section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">About Us</span>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mt-4">
              Shaping the Future of <span className="gold-text-gradient">Technology Education</span>
            </h1>
            <p className="text-secondary-foreground/70 text-lg mt-6 leading-relaxed">
              Sumo Institute of Technology (SIT) is a premier institution dedicated to providing world-class technology education. We combine academic rigor with practical skills development to produce graduates who are ready to lead and innovate.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card border border-border rounded-2xl p-8">
            <Target className="w-10 h-10 text-gold mb-4" />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To provide accessible, industry-relevant technology education that empowers students with practical skills, critical thinking, and the innovative mindset needed to drive sustainable development across Africa and beyond.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8">
            <Eye className="w-10 h-10 text-gold mb-4" />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be Africa's leading technology institution, recognized globally for producing skilled graduates, groundbreaking research, and meaningful community impact through innovation and excellence.
            </p>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section dark>
        <SectionTitle light subtitle="The principles that guide everything we do.">Our Core Values</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Award, title: "Excellence", desc: "We pursue the highest standards in education, research, and service." },
            { icon: Users, title: "Inclusivity", desc: "We welcome diverse perspectives and create equitable opportunities." },
            { icon: BookOpen, title: "Innovation", desc: "We foster creativity and embrace emerging technologies." },
            { icon: Globe, title: "Impact", desc: "We measure success by our contribution to society and development." },
          ].map((val) => (
            <div key={val.title} className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-6 text-center">
              <val.icon className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-secondary-foreground mb-2">{val.title}</h3>
              <p className="text-secondary-foreground/60 text-sm">{val.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Structure */}
      <Section>
        <SectionTitle subtitle="SIT operates through three specialized units.">Our Structure</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "SIT — Degree Programs", desc: "The academic core offering BSc degrees in six technology disciplines. Our programs are accredited, industry-aligned, and designed to produce job-ready graduates.", to: "/programs" as const },
            { title: "INSURED — Research", desc: "The Institute of Sustainable Research and Development drives cutting-edge research in data science, sustainability, agriculture, and supply chain management.", to: "/insured" as const },
            { title: "CPSD — Training", desc: "The Center for Professional Skills Development offers certificate and diploma programs for professionals seeking to upskill or change careers.", to: "/cpsd" as const },
          ].map((unit) => (
            <Link key={unit.title} to={unit.to} className="group bg-card border border-border rounded-2xl p-8 hover:border-gold/30 hover:shadow-lg transition-all">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3 group-hover:text-gold-dark transition-colors">{unit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{unit.desc}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner title="Join the SIT Community" description="Be part of a vibrant learning community that's shaping the future of technology in Africa." />
    </>
  );
}
