import { T as jsxRuntimeExports } from "./worker-entry-Bu4Pg02i.js";
import { L as Link } from "./router-DKis6J_3.js";
import { S as Section, C as CTABanner } from "./SectionComponents-CPAmhvzB.js";
import { C as Clock } from "./clock-BKnSFOSf.js";
import { B as BookOpen } from "./book-open-CEAsIgyH.js";
import { C as CircleCheckBig } from "./circle-check-big-BEoY3Cjo.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const programs = [{
  title: "BSc Networking",
  duration: "4 Years",
  desc: "Master the design, implementation, and management of computer networks. Learn enterprise networking, cloud infrastructure, network security, and wireless technologies with hands-on lab experience.",
  requirements: ["High school diploma with credits in Mathematics and Physics", "Minimum GPA of 2.5", "English proficiency"]
}, {
  title: "BSc Data Science",
  duration: "4 Years",
  desc: "Develop expertise in statistical analysis, machine learning, data visualization, and big data technologies. Work with real datasets and industry tools to extract actionable insights.",
  requirements: ["High school diploma with credits in Mathematics", "Minimum GPA of 2.5", "Basic computer literacy"]
}, {
  title: "BSc Cyber Security",
  duration: "4 Years",
  desc: "Learn to protect organizations from cyber threats. Cover ethical hacking, digital forensics, cryptography, security operations, and compliance frameworks.",
  requirements: ["High school diploma with credits in Mathematics", "Minimum GPA of 2.5", "Aptitude for problem-solving"]
}, {
  title: "BSc Management Information Systems",
  duration: "4 Years",
  desc: "Bridge the gap between business and technology. Study database management, systems analysis, IT governance, ERP systems, and digital transformation strategies.",
  requirements: ["High school diploma", "Minimum GPA of 2.5", "Interest in business and technology"]
}, {
  title: "BSc Telecommunication Engineering",
  duration: "4 Years",
  desc: "Design and manage modern telecommunication systems. Study signal processing, mobile networks, fiber optics, satellite communications, and IoT infrastructure.",
  requirements: ["High school diploma with credits in Mathematics and Physics", "Minimum GPA of 2.8", "Strong analytical skills"]
}, {
  title: "BSc Project Management",
  duration: "4 Years",
  desc: "Gain skills in planning, executing, and managing complex technology projects. Study Agile, Scrum, risk management, budgeting, and stakeholder communication.",
  requirements: ["High school diploma", "Minimum GPA of 2.5", "Leadership potential"]
}];
function ProgramsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "dark-gradient text-secondary-foreground section-padding", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold text-sm font-semibold uppercase tracking-widest", children: "Academic Programs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mt-4", children: [
        "Degree ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text-gradient", children: "Programs" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-foreground/70 text-lg mt-6 max-w-2xl", children: "Six accredited BSc programs designed to prepare you for a successful career in technology and management." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: programs.map((prog) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-gold/20 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-start gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground", children: prog.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-gold text-sm font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
            " ",
            prog.duration
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-muted-foreground text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4" }),
            " Full Time"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 leading-relaxed", children: prog.desc })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:w-80 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-[family-name:var(--font-heading)] font-semibold text-sm text-foreground mb-3", children: "Admission Requirements" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: prog.requirements.map((req) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-gold shrink-0 mt-0.5" }),
          req
        ] }, req)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admissions", className: "inline-flex items-center justify-center w-full gold-gradient text-secondary font-semibold text-sm px-4 py-2.5 rounded-lg mt-4 hover:brightness-110 transition-all", children: "Apply for This Program" })
      ] })
    ] }) }, prog.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTABanner, { title: "Start Your Academic Journey", description: "Applications are open. Take the first step towards a rewarding career in technology." })
  ] });
}
export {
  ProgramsPage as component
};
