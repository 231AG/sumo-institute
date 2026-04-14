import { T as jsxRuntimeExports } from "./worker-entry-Bu4Pg02i.js";
import { L as Link } from "./router-DKis6J_3.js";
import { S as Section, a as SectionTitle, C as CTABanner } from "./SectionComponents-CPAmhvzB.js";
import { A as Award } from "./award-CG71MDLy.js";
import { D as Download } from "./download-DLEPDf_C.js";
import { C as Clock } from "./clock-BKnSFOSf.js";
import { B as BookOpen } from "./book-open-CEAsIgyH.js";
import { A as ArrowRight } from "./arrow-right-B9F94bAp.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const trainingBg = "/231Ag/sumo-institute/assets/training-bg-Dg4zqKSp.jpg";
const certificates = [{
  title: "Computer Applications",
  duration: "3 Months",
  desc: "Microsoft Office suite, basic networking, internet skills, and computer maintenance."
}, {
  title: "Data Analysis with Excel",
  duration: "3 Months",
  desc: "Advanced Excel, pivot tables, data visualization, statistical analysis, and dashboarding."
}, {
  title: "Project Management",
  duration: "4 Months",
  desc: "Planning, scheduling, risk management, Agile/Scrum methodologies, and team leadership."
}, {
  title: "Monitoring & Evaluation",
  duration: "3 Months",
  desc: "Program design, M&E frameworks, data collection methods, and impact assessment."
}, {
  title: "Digital Marketing",
  duration: "3 Months",
  desc: "SEO, social media marketing, content strategy, Google Ads, and analytics."
}];
const diplomas = [{
  title: "Diploma in Data Science",
  duration: "2 Years",
  desc: "Python, statistics, machine learning, data wrangling, and visualization tools."
}, {
  title: "Diploma in Project Management",
  duration: "2 Years",
  desc: "Advanced project planning, PMP preparation, leadership, and stakeholder management."
}, {
  title: "Diploma in Business Administration",
  duration: "2 Years",
  desc: "Management principles, accounting, marketing, human resources, and entrepreneurship."
}, {
  title: "Diploma in Information Technology",
  duration: "2 Years",
  desc: "Networking, systems administration, database management, and web development."
}];
function CPSDPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[50vh] flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: trainingBg, alt: "CPSD Training", className: "w-full h-full object-cover", width: 1920, height: 800, loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-secondary/85" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 gold-gradient text-secondary rounded-full px-4 py-1.5 text-sm font-semibold mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4" }),
          " CPSD"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-secondary-foreground", children: [
          "Center for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text-gradient", children: "Professional Skills" }),
          " Development"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-foreground/70 text-lg mt-6 max-w-2xl", children: "Accelerate your career with industry-recognized certificate and diploma programs. Flexible schedules designed for working professionals." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admissions", className: "gold-gradient text-secondary font-[family-name:var(--font-heading)] font-bold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all tracking-wider uppercase text-center", children: "Apply Now" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "border-2 border-gold/50 text-secondary-foreground font-semibold px-8 py-3.5 rounded-lg hover:bg-gold/10 transition-all inline-flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
            " Download Form"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { subtitle: "Bridging the gap between education and employment through practical, industry-aligned training.", children: "About CPSD" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
        icon: Clock,
        title: "Flexible Schedules",
        desc: "Evening, weekend, and intensive formats to fit your lifestyle."
      }, {
        icon: Award,
        title: "Industry Certifications",
        desc: "Earn credentials recognized by employers across industries."
      }, {
        icon: BookOpen,
        title: "Practical Training",
        desc: "Hands-on projects and real-world case studies in every course."
      }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-10 h-10 text-gold mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-[family-name:var(--font-heading)] font-semibold mb-2", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: f.desc })
      ] }, f.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { dark: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { light: true, subtitle: "Short, focused programs to build specific professional skills.", children: "Certificate Programs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: certificates.map((cert) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-6 hover:border-gold/30 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-[family-name:var(--font-heading)] font-bold text-secondary-foreground", children: cert.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold text-sm font-medium", children: cert.duration }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-foreground/60 text-sm mt-3", children: cert.desc })
      ] }, cert.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { subtitle: "In-depth programs for comprehensive career preparation.", children: "Diploma Programs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-6", children: diplomas.map((dip) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-gold/20 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-[family-name:var(--font-heading)] text-xl font-bold", children: dip.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-gold text-sm font-medium mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
          " ",
          dip.duration
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-3 leading-relaxed", children: dip.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admissions", className: "inline-flex items-center gap-1 text-gold-dark text-sm font-semibold mt-4 hover:gap-2 transition-all", children: [
          "Apply ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] }, dip.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTABanner, { title: "Invest in Your Career", description: "Enroll in a CPSD program today and gain the skills employers are looking for." })
  ] });
}
export {
  CPSDPage as component
};
