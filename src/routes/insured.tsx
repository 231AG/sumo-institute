import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionTitle, CTABanner } from "@/components/SectionComponents";
import { FlaskConical, Leaf, Database, TrendingUp, Globe, BookOpen, Users, ExternalLink } from "lucide-react";
import researchBg from "@/assets/research-bg.jpg";

export const Route = createFileRoute("/insured")({
  head: () => ({
    meta: [
      { title: "INSURED — Research & Development — Sumo Institute of Technology" },
      { name: "description", content: "Institute of Sustainable Research and Development. Research in Data Science, Sustainability, Agriculture, Supply Chain, and Development Studies." },
      { property: "og:title", content: "INSURED — Research at SIT" },
      { property: "og:description", content: "Driving innovation through research in data science, sustainability, and development." },
    ],
  }),
  component: InsuredPage,
});

function InsuredPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={researchBg} alt="Research Network" className="w-full h-full object-cover" width={1920} height={800} loading="lazy" />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 gold-gradient text-secondary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
            <FlaskConical className="w-4 h-4" /> INSURED
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-secondary-foreground">
            Institute of Sustainable <span className="gold-text-gradient">Research & Development</span>
          </h1>
          <p className="text-secondary-foreground/70 text-lg mt-6 max-w-2xl">
            Advancing knowledge and driving innovation through interdisciplinary research that addresses real-world challenges.
          </p>
        </div>
      </section>

      {/* About */}
      <Section>
        <SectionTitle subtitle="INSURED is SIT's research arm, dedicated to producing impactful research that contributes to sustainable development.">About INSURED</SectionTitle>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          Established to bridge the gap between academic research and practical application, INSURED brings together researchers, industry partners, and community stakeholders to address pressing challenges in technology, agriculture, sustainability, and development. Our research outputs inform policy, improve practices, and create new opportunities for growth.
        </p>
      </Section>

      {/* Research Areas */}
      <Section dark>
        <SectionTitle light subtitle="Our research spans five key areas of strategic importance.">Research Areas</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Database, title: "Data Science", desc: "Machine learning, AI applications, big data analytics, and predictive modeling for development." },
            { icon: Leaf, title: "Sustainability", desc: "Green technology, renewable energy systems, environmental conservation, and climate change mitigation." },
            { icon: Globe, title: "Agriculture", desc: "Precision farming, food security, agri-tech innovation, and sustainable agricultural practices." },
            { icon: TrendingUp, title: "Supply Chain", desc: "Logistics optimization, digital supply chains, blockchain applications, and trade facilitation." },
            { icon: BookOpen, title: "Development Studies", desc: "Socio-economic development, policy analysis, governance, and community empowerment research." },
          ].map((area) => (
            <div key={area.title} className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-8 hover:border-gold/30 transition-all">
              <area.icon className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-secondary-foreground">{area.title}</h3>
              <p className="text-secondary-foreground/60 text-sm mt-2 leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section>
        <SectionTitle subtitle="Selected ongoing and completed research projects.">Research Projects</SectionTitle>
        <div className="space-y-4">
          {[
            { title: "AI-Powered Crop Disease Detection", status: "Ongoing", year: "2024–Present", desc: "Developing machine learning models to detect crop diseases from smartphone images." },
            { title: "Urban Mobility Data Analytics", status: "Ongoing", year: "2024–Present", desc: "Analyzing transportation patterns to improve urban planning and reduce congestion." },
            { title: "Blockchain for Agricultural Supply Chains", status: "Completed", year: "2023–2024", desc: "Implemented blockchain-based traceability for smallholder farmers." },
            { title: "Renewable Energy Adoption Study", status: "Completed", year: "2022–2023", desc: "Assessed barriers to solar energy adoption in rural communities." },
          ].map((proj) => (
            <div key={proj.title} className="bg-card border border-border rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4 hover:border-gold/20 transition-all">
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold">{proj.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{proj.desc}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-muted-foreground text-sm">{proj.year}</span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${proj.status === "Ongoing" ? "bg-gold/20 text-gold-dark" : "bg-muted text-muted-foreground"}`}>
                  {proj.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Publications & Partnerships */}
      <Section dark>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <SectionTitle light>Publications</SectionTitle>
            <ul className="space-y-4">
              {[
                "\"Machine Learning Applications in Sub-Saharan Agriculture\" — Journal of AI & Development, 2024",
                "\"Blockchain-Enabled Traceability in Agricultural Supply Chains\" — Int'l Supply Chain Review, 2024",
                "\"Solar Energy Adoption Barriers in Rural Africa\" — Energy Policy Journal, 2023",
              ].map((pub) => (
                <li key={pub} className="flex items-start gap-3 text-secondary-foreground/70 text-sm">
                  <ExternalLink className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  {pub}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle light>Partnerships</SectionTitle>
            <ul className="space-y-4">
              {[
                { name: "African Development Research Network", desc: "Collaborative research funding and knowledge exchange." },
                { name: "Global Tech University Alliance", desc: "Joint programs, faculty exchange, and shared research infrastructure." },
                { name: "National Agricultural Research Council", desc: "Applied research partnerships in food security and agri-tech." },
              ].map((partner) => (
                <li key={partner.name} className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-xl p-4">
                  <Users className="w-5 h-5 text-gold mb-2" />
                  <h4 className="font-semibold text-secondary-foreground text-sm">{partner.name}</h4>
                  <p className="text-secondary-foreground/60 text-xs mt-1">{partner.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CTABanner title="Collaborate with INSURED" description="Partner with us on research projects that make a real difference." buttonText="Contact Us" to="/contact" />
    </>
  );
}
