import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionTitle, CTABanner } from "@/components/SectionComponents";
import { Award, BookOpen, Clock, ArrowRight, Download } from "lucide-react";
import trainingBg from "@/assets/training-bg.jpg";

export const Route = createFileRoute("/cpsd")({
  head: () => ({
    meta: [
      { title: "CPSD — Professional Training — Sumo Institute of Technology" },
      { name: "description", content: "Center for Professional Skills Development. Certificate and diploma programs in Data Analysis, Project Management, Digital Marketing, IT, and more." },
      { property: "og:title", content: "CPSD — Professional Training at SIT" },
      { property: "og:description", content: "Upskill with industry-recognized certificate and diploma programs." },
    ],
  }),
  component: CPSDPage,
});

const certificates = [
  { title: "Computer Applications", duration: "3 Months", desc: "Microsoft Office suite, basic networking, internet skills, and computer maintenance." },
  { title: "Data Analysis with Excel", duration: "3 Months", desc: "Advanced Excel, pivot tables, data visualization, statistical analysis, and dashboarding." },
  { title: "Project Management", duration: "4 Months", desc: "Planning, scheduling, risk management, Agile/Scrum methodologies, and team leadership." },
  { title: "Monitoring & Evaluation", duration: "3 Months", desc: "Program design, M&E frameworks, data collection methods, and impact assessment." },
  { title: "Digital Marketing", duration: "3 Months", desc: "SEO, social media marketing, content strategy, Google Ads, and analytics." },
];

const diplomas = [
  { title: "Diploma in Data Science", duration: "2 Years", desc: "Python, statistics, machine learning, data wrangling, and visualization tools." },
  { title: "Diploma in Project Management", duration: "2 Years", desc: "Advanced project planning, PMP preparation, leadership, and stakeholder management." },
  { title: "Diploma in Business Administration", duration: "2 Years", desc: "Management principles, accounting, marketing, human resources, and entrepreneurship." },
  { title: "Diploma in Information Technology", duration: "2 Years", desc: "Networking, systems administration, database management, and web development." },
];

function CPSDPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={trainingBg} alt="CPSD Training" className="w-full h-full object-cover" width={1920} height={800} loading="lazy" />
          <div className="absolute inset-0 bg-secondary/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 gold-gradient text-secondary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
            <Award className="w-4 h-4" /> CPSD
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-secondary-foreground">
            Center for <span className="gold-text-gradient">Professional Skills</span> Development
          </h1>
          <p className="text-secondary-foreground/70 text-lg mt-6 max-w-2xl">
            Accelerate your career with industry-recognized certificate and diploma programs. Flexible schedules designed for working professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link to="/admissions" className="gold-gradient text-secondary font-[family-name:var(--font-heading)] font-bold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all tracking-wider uppercase text-center">
              Apply Now
            </Link>
            <button className="border-2 border-gold/50 text-secondary-foreground font-semibold px-8 py-3.5 rounded-lg hover:bg-gold/10 transition-all inline-flex items-center justify-center gap-2">
              <Download className="w-4 h-4" /> Download Form
            </button>
          </div>
        </div>
      </section>

      {/* About CPSD */}
      <Section>
        <SectionTitle subtitle="Bridging the gap between education and employment through practical, industry-aligned training.">About CPSD</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Clock, title: "Flexible Schedules", desc: "Evening, weekend, and intensive formats to fit your lifestyle." },
            { icon: Award, title: "Industry Certifications", desc: "Earn credentials recognized by employers across industries." },
            { icon: BookOpen, title: "Practical Training", desc: "Hands-on projects and real-world case studies in every course." },
          ].map((f) => (
            <div key={f.title} className="bg-card border border-border rounded-2xl p-6 text-center">
              <f.icon className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="font-[family-name:var(--font-heading)] font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Certificate Programs */}
      <Section dark>
        <SectionTitle light subtitle="Short, focused programs to build specific professional skills.">Certificate Programs</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div key={cert.title} className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-6 hover:border-gold/30 transition-all">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-secondary-foreground">{cert.title}</h3>
              <span className="text-gold text-sm font-medium">{cert.duration}</span>
              <p className="text-secondary-foreground/60 text-sm mt-3">{cert.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Diploma Programs */}
      <Section>
        <SectionTitle subtitle="In-depth programs for comprehensive career preparation.">Diploma Programs</SectionTitle>
        <div className="grid sm:grid-cols-2 gap-6">
          {diplomas.map((dip) => (
            <div key={dip.title} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-gold/20 transition-all">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">{dip.title}</h3>
              <span className="inline-flex items-center gap-1 text-gold text-sm font-medium mt-1">
                <Clock className="w-4 h-4" /> {dip.duration}
              </span>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{dip.desc}</p>
              <Link to="/admissions" className="inline-flex items-center gap-1 text-gold-dark text-sm font-semibold mt-4 hover:gap-2 transition-all">
                Apply <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner title="Invest in Your Career" description="Enroll in a CPSD program today and gain the skills employers are looking for." />
    </>
  );
}
