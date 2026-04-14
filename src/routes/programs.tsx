import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionTitle, CTABanner } from "@/components/SectionComponents";
import { Clock, BookOpen, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Sumo Institute of Technology" },
      { name: "description", content: "Explore SIT's BSc degree programs in Networking, Data Science, Cyber Security, MIS, Telecom Engineering, and Project Management." },
      { property: "og:title", content: "Academic Programs — SIT" },
      { property: "og:description", content: "Accredited BSc degree programs in technology and management disciplines." },
    ],
  }),
  component: ProgramsPage,
});

const programs = [
  {
    title: "BSc Networking",
    duration: "4 Years",
    desc: "Master the design, implementation, and management of computer networks. Learn enterprise networking, cloud infrastructure, network security, and wireless technologies with hands-on lab experience.",
    requirements: ["High school diploma with credits in Mathematics and Physics", "Minimum GPA of 2.5", "English proficiency"],
  },
  {
    title: "BSc Data Science",
    duration: "4 Years",
    desc: "Develop expertise in statistical analysis, machine learning, data visualization, and big data technologies. Work with real datasets and industry tools to extract actionable insights.",
    requirements: ["High school diploma with credits in Mathematics", "Minimum GPA of 2.5", "Basic computer literacy"],
  },
  {
    title: "BSc Cyber Security",
    duration: "4 Years",
    desc: "Learn to protect organizations from cyber threats. Cover ethical hacking, digital forensics, cryptography, security operations, and compliance frameworks.",
    requirements: ["High school diploma with credits in Mathematics", "Minimum GPA of 2.5", "Aptitude for problem-solving"],
  },
  {
    title: "BSc Management Information Systems",
    duration: "4 Years",
    desc: "Bridge the gap between business and technology. Study database management, systems analysis, IT governance, ERP systems, and digital transformation strategies.",
    requirements: ["High school diploma", "Minimum GPA of 2.5", "Interest in business and technology"],
  },
  {
    title: "BSc Telecommunication Engineering",
    duration: "4 Years",
    desc: "Design and manage modern telecommunication systems. Study signal processing, mobile networks, fiber optics, satellite communications, and IoT infrastructure.",
    requirements: ["High school diploma with credits in Mathematics and Physics", "Minimum GPA of 2.8", "Strong analytical skills"],
  },
  {
    title: "BSc Project Management",
    duration: "4 Years",
    desc: "Gain skills in planning, executing, and managing complex technology projects. Study Agile, Scrum, risk management, budgeting, and stakeholder communication.",
    requirements: ["High school diploma", "Minimum GPA of 2.5", "Leadership potential"],
  },
];

function ProgramsPage() {
  return (
    <>
      <section className="dark-gradient text-secondary-foreground section-padding">
        <div className="max-w-7xl mx-auto">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Academic Programs</span>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mt-4">
            Degree <span className="gold-text-gradient">Programs</span>
          </h1>
          <p className="text-secondary-foreground/70 text-lg mt-6 max-w-2xl">
            Six accredited BSc programs designed to prepare you for a successful career in technology and management.
          </p>
        </div>
      </section>

      <Section>
        <div className="space-y-8">
          {programs.map((prog) => (
            <div key={prog.title} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-gold/20 transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">{prog.title}</h2>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="inline-flex items-center gap-1 text-gold text-sm font-medium">
                      <Clock className="w-4 h-4" /> {prog.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground text-sm">
                      <BookOpen className="w-4 h-4" /> Full Time
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-4 leading-relaxed">{prog.desc}</p>
                </div>
                <div className="lg:w-80 shrink-0">
                  <h4 className="font-[family-name:var(--font-heading)] font-semibold text-sm text-foreground mb-3">Admission Requirements</h4>
                  <ul className="space-y-2">
                    {prog.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                  <Link to="/admissions" className="inline-flex items-center justify-center w-full gold-gradient text-secondary font-semibold text-sm px-4 py-2.5 rounded-lg mt-4 hover:brightness-110 transition-all">
                    Apply for This Program
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner title="Start Your Academic Journey" description="Applications are open. Take the first step towards a rewarding career in technology." />
    </>
  );
}
