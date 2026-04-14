import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionTitle } from "@/components/SectionComponents";
import { Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Events — Sumo Institute of Technology" },
      { name: "description", content: "Latest news, events, and announcements from Sumo Institute of Technology." },
      { property: "og:title", content: "News & Events — SIT" },
      { property: "og:description", content: "Stay updated with the latest from SIT." },
    ],
  }),
  component: NewsPage,
});

const newsItems = [
  { date: "Mar 15, 2025", category: "Admissions", title: "SIT Opens Applications for 2025/2026 Academic Year", desc: "Prospective students can now apply for all degree and diploma programs. Early applicants receive priority consideration. Visit our admissions page to get started." },
  { date: "Mar 1, 2025", category: "Event", title: "Annual SIT Tech Summit — Call for Speakers", desc: "Submit your proposal to present at the 2025 SIT Tech Summit. Topics include AI, cybersecurity, data science, and sustainable technology." },
  { date: "Feb 28, 2025", category: "Research", title: "INSURED Publishes Groundbreaking Research on AI in Agriculture", desc: "New findings from INSURED researchers demonstrate how artificial intelligence can improve crop disease detection accuracy by 40%." },
  { date: "Feb 20, 2025", category: "Partnership", title: "SIT Signs MOU with Global Tech University Alliance", desc: "New partnership enables student exchange programs, joint research initiatives, and shared access to cutting-edge facilities." },
  { date: "Feb 10, 2025", category: "CPSD", title: "CPSD Launches New Digital Marketing Certificate", desc: "Industry-aligned short course designed for marketing professionals looking to master SEO, social media, and digital advertising." },
  { date: "Jan 25, 2025", category: "Achievement", title: "SIT Students Win National Hackathon", desc: "A team of BSc Data Science and Cyber Security students won first place at the National Innovation Hackathon with their AI-powered health solution." },
  { date: "Jan 15, 2025", category: "Academic", title: "New BSc Cyber Security Curriculum Launched", desc: "Updated curriculum includes ethical hacking labs, cloud security modules, and industry certification preparation." },
  { date: "Dec 20, 2024", category: "Community", title: "SIT Hosts Annual Graduation Ceremony", desc: "Over 200 graduates received their degrees and diplomas at the 2024 graduation ceremony attended by industry leaders and government officials." },
];

function NewsPage() {
  return (
    <>
      <section className="dark-gradient text-secondary-foreground section-padding">
        <div className="max-w-7xl mx-auto">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Stay Updated</span>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mt-4">
            News & <span className="gold-text-gradient">Events</span>
          </h1>
          <p className="text-secondary-foreground/70 text-lg mt-6 max-w-2xl">
            The latest announcements, research breakthroughs, events, and achievements from across the SIT community.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {newsItems.map((item) => (
            <article key={item.title} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-gold/20 transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold/15 text-gold-dark">{item.category}</span>
                <span className="flex items-center gap-1 text-muted-foreground text-xs">
                  <Calendar className="w-3 h-3" /> {item.date}
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-foreground group-hover:text-gold-dark transition-colors">{item.title}</h2>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{item.desc}</p>
              <span className="inline-flex items-center gap-1 text-gold-dark text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
