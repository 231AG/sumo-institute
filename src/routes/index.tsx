import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { GraduationCap, FlaskConical, Award, BookOpen, Shield, Lightbulb, Users, Clock, ArrowRight, Calendar } from "lucide-react";
import { Section, SectionTitle, CTABanner } from "@/components/SectionComponents";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sumo Institute of Technology — Technology, Skills and Innovation" },
      { name: "description", content: "SIT offers accredited degree programs in Networking, Data Science, Cyber Security, Telecom Engineering & more. Apply now." },
      { property: "og:title", content: "Sumo Institute of Technology" },
      { property: "og:description", content: "Technology, Skills and Innovation for Development. Apply now for degree programs." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="SIT Campus" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-sm font-medium">Now accepting applications for 2025/2026</span>
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-secondary-foreground leading-tight">
            Technology, Skills &{" "}
            <span className="gold-text-gradient">Innovation</span>{" "}
            for Development
          </h1>
          <p className="mt-6 text-lg md:text-xl text-secondary-foreground/70 max-w-2xl mx-auto">
            Building Africa's next generation of technology leaders through world-class education, cutting-edge research, and professional skills development.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/admissions" className="gold-gradient text-secondary font-[family-name:var(--font-heading)] font-bold text-base px-8 py-4 rounded-lg hover:brightness-110 transition-all tracking-wider uppercase shadow-lg">
              Apply Now
            </Link>
            <Link to="/programs" className="border-2 border-gold/50 text-secondary-foreground font-[family-name:var(--font-heading)] font-semibold text-base px-8 py-4 rounded-lg hover:bg-gold/10 transition-all tracking-wide">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* About Short */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle subtitle="A premier technology institution committed to producing skilled graduates who are ready to innovate and lead.">
              About Sumo Institute of Technology
            </SectionTitle>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded with a vision to transform technology education in Africa, SIT combines rigorous academic programs with hands-on practical training. Our curriculum is designed in collaboration with industry leaders to ensure graduates are employment-ready from day one.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-gold-dark font-semibold hover:gap-3 transition-all">
              Learn more about SIT <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "1000+", label: "Students Enrolled" },
              { num: "50+", label: "Expert Faculty" },
              { num: "95%", label: "Employment Rate" },
              { num: "6", label: "Degree Programs" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card border border-border rounded-xl p-6 text-center">
                <span className="font-[family-name:var(--font-heading)] text-3xl font-bold gold-text-gradient">{stat.num}</span>
                <span className="block text-muted-foreground text-sm mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Schools & Centers */}
      <Section dark>
        <SectionTitle light subtitle="Three specialized arms working together to deliver excellence in education, research, and professional development.">
          Our Schools & Centers
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: GraduationCap,
              title: "SIT",
              subtitle: "Degree Programs",
              desc: "Accredited BSc programs in Networking, Data Science, Cyber Security, MIS, Telecom Engineering, and Project Management.",
              to: "/programs" as const,
            },
            {
              icon: FlaskConical,
              title: "INSURED",
              subtitle: "Research & Development",
              desc: "Institute of Sustainable Research and Development — driving innovation in data science, agriculture, sustainability, and more.",
              to: "/insured" as const,
            },
            {
              icon: Award,
              title: "CPSD",
              subtitle: "Professional Training",
              desc: "Center for Professional Skills Development — certificate and diploma programs for career advancement.",
              to: "/cpsd" as const,
            },
          ].map((card) => (
            <Link key={card.title} to={card.to} className="group bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-8 hover:border-gold/40 transition-all duration-300">
              <card.icon className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-secondary-foreground">{card.title}</h3>
              <span className="text-gold text-sm font-medium">{card.subtitle}</span>
              <p className="text-secondary-foreground/60 text-sm mt-3 leading-relaxed">{card.desc}</p>
              <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Programs Overview */}
      <Section>
        <SectionTitle subtitle="From undergraduate degrees to short professional courses, we offer pathways for every career stage.">
          Programs Overview
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: GraduationCap, title: "Degree Programs", desc: "4-year BSc programs with industry partnerships and practical training.", count: "6 Programs", to: "/programs" as const },
            { icon: BookOpen, title: "Diploma Programs", desc: "2-year intensive diplomas in Data Science, IT, Business Admin, and Project Management.", count: "4 Programs", to: "/cpsd" as const },
            { icon: Award, title: "Certificate Courses", desc: "Short professional courses in Computer Applications, Data Analysis, Digital Marketing, and more.", count: "5 Courses", to: "/cpsd" as const },
          ].map((item) => (
            <Link key={item.title} to={item.to} className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-gold/30 transition-all duration-300">
              <item.icon className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{item.desc}</p>
              <span className="inline-block mt-4 text-sm font-semibold gold-text-gradient">{item.count}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why Choose SIT */}
      <Section dark>
        <SectionTitle light subtitle="What sets us apart from other institutions.">
          Why Choose SIT?
        </SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "Practical Skills", desc: "Hands-on labs, real projects, and industry simulations from day one." },
            { icon: Lightbulb, title: "Industry-Focused", desc: "Curriculum designed with input from leading tech companies." },
            { icon: FlaskConical, title: "Research-Driven", desc: "INSURED powers cutting-edge research that feeds into our teaching." },
            { icon: Clock, title: "Flexible Learning", desc: "Evening, weekend, and online options for working professionals." },
          ].map((item) => (
            <div key={item.title} className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-secondary-foreground mb-2">{item.title}</h3>
              <p className="text-secondary-foreground/60 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* News */}
      <Section>
        <div className="flex items-center justify-between mb-12">
          <SectionTitle subtitle="Stay updated with the latest from SIT.">News & Events</SectionTitle>
          <Link to="/news" className="hidden md:inline-flex items-center gap-1 text-gold-dark font-semibold text-sm hover:gap-2 transition-all">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { date: "Mar 15, 2025", title: "SIT Opens Applications for 2025/2026 Academic Year", desc: "Prospective students can now apply for all degree and diploma programs." },
            { date: "Feb 28, 2025", title: "INSURED Publishes Groundbreaking Research on AI in Agriculture", desc: "New findings demonstrate how AI can improve crop yields by 40%." },
            { date: "Feb 10, 2025", title: "CPSD Launches New Digital Marketing Certificate", desc: "Industry-aligned short course designed for marketing professionals." },
          ].map((news) => (
            <div key={news.title} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all group">
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {news.date}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-foreground group-hover:text-gold-dark transition-colors">{news.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{news.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to Start Your Journey?"
        description="Join thousands of students who have launched successful careers in technology. Applications are now open."
      />
    </>
  );
}
