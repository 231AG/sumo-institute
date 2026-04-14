import { T as jsxRuntimeExports } from "./worker-entry-Bu4Pg02i.js";
import { S as Section } from "./SectionComponents-CPAmhvzB.js";
import { C as Calendar } from "./calendar-DJs1e7Ps.js";
import { A as ArrowRight } from "./arrow-right-B9F94bAp.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-DKis6J_3.js";
const newsItems = [{
  date: "Mar 15, 2025",
  category: "Admissions",
  title: "SIT Opens Applications for 2025/2026 Academic Year",
  desc: "Prospective students can now apply for all degree and diploma programs. Early applicants receive priority consideration. Visit our admissions page to get started."
}, {
  date: "Mar 1, 2025",
  category: "Event",
  title: "Annual SIT Tech Summit — Call for Speakers",
  desc: "Submit your proposal to present at the 2025 SIT Tech Summit. Topics include AI, cybersecurity, data science, and sustainable technology."
}, {
  date: "Feb 28, 2025",
  category: "Research",
  title: "INSURED Publishes Groundbreaking Research on AI in Agriculture",
  desc: "New findings from INSURED researchers demonstrate how artificial intelligence can improve crop disease detection accuracy by 40%."
}, {
  date: "Feb 20, 2025",
  category: "Partnership",
  title: "SIT Signs MOU with Global Tech University Alliance",
  desc: "New partnership enables student exchange programs, joint research initiatives, and shared access to cutting-edge facilities."
}, {
  date: "Feb 10, 2025",
  category: "CPSD",
  title: "CPSD Launches New Digital Marketing Certificate",
  desc: "Industry-aligned short course designed for marketing professionals looking to master SEO, social media, and digital advertising."
}, {
  date: "Jan 25, 2025",
  category: "Achievement",
  title: "SIT Students Win National Hackathon",
  desc: "A team of BSc Data Science and Cyber Security students won first place at the National Innovation Hackathon with their AI-powered health solution."
}, {
  date: "Jan 15, 2025",
  category: "Academic",
  title: "New BSc Cyber Security Curriculum Launched",
  desc: "Updated curriculum includes ethical hacking labs, cloud security modules, and industry certification preparation."
}, {
  date: "Dec 20, 2024",
  category: "Community",
  title: "SIT Hosts Annual Graduation Ceremony",
  desc: "Over 200 graduates received their degrees and diplomas at the 2024 graduation ceremony attended by industry leaders and government officials."
}];
function NewsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "dark-gradient text-secondary-foreground section-padding", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold text-sm font-semibold uppercase tracking-widest", children: "Stay Updated" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mt-4", children: [
        "News & ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text-gradient", children: "Events" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-foreground/70 text-lg mt-6 max-w-2xl", children: "The latest announcements, research breakthroughs, events, and achievements from across the SIT community." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: newsItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-gold/20 transition-all group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold px-3 py-1 rounded-full bg-gold/15 text-gold-dark", children: item.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-muted-foreground text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
          " ",
          item.date
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-[family-name:var(--font-heading)] text-lg font-bold text-foreground group-hover:text-gold-dark transition-colors", children: item.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-2 leading-relaxed", children: item.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-gold-dark text-sm font-semibold mt-4 group-hover:gap-2 transition-all", children: [
        "Read More ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }, item.title)) }) })
  ] });
}
export {
  NewsPage as component
};
