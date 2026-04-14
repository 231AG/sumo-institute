import { T as jsxRuntimeExports } from "./worker-entry-Bu4Pg02i.js";
import { c as createLucideIcon, L as Link } from "./router-DKis6J_3.js";
import { S as Section, a as SectionTitle } from "./SectionComponents-CPAmhvzB.js";
import { D as Download } from "./download-DLEPDf_C.js";
import { C as CircleCheckBig } from "./circle-check-big-BEoY3Cjo.js";
import { A as ArrowRight } from "./arrow-right-B9F94bAp.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode);
function AdmissionsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "dark-gradient text-secondary-foreground section-padding", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold text-sm font-semibold uppercase tracking-widest", children: "Admissions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mt-4", children: [
        "Begin Your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text-gradient", children: "Journey" }),
        " at SIT"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-foreground/70 text-lg mt-6 max-w-2xl", children: "We're looking for motivated students ready to make an impact. Here's everything you need to know about applying." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#apply-form", className: "gold-gradient text-secondary font-[family-name:var(--font-heading)] font-bold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all tracking-wider uppercase text-center", children: "Apply Now" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "border-2 border-gold/50 text-secondary-foreground font-semibold px-8 py-3.5 rounded-lg hover:bg-gold/10 transition-all inline-flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
          " Download Forms"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { subtitle: "General requirements for admission to SIT programs.", children: "Admission Requirements" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-[family-name:var(--font-heading)] text-xl font-bold mb-4", children: "Degree Programs (BSc)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: ["High school diploma or equivalent", "Minimum GPA of 2.5 (program-specific)", "Credits in Mathematics (all programs)", "Credits in Physics (Engineering & Networking)", "English proficiency certificate", "Two recommendation letters", "Personal statement of purpose"].map((req) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-muted-foreground text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-gold shrink-0 mt-0.5" }),
            req
          ] }, req)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-[family-name:var(--font-heading)] text-xl font-bold mb-4", children: "Diploma & Certificate Programs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: ["High school diploma (Diploma programs)", "Basic computer literacy (Certificate programs)", "Valid identification document", "Completed application form", "Application fee payment"].map((req) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-muted-foreground text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-gold shrink-0 mt-0.5" }),
            req
          ] }, req)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { dark: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { light: true, subtitle: "Follow these steps to complete your application.", children: "Application Process" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [{
        step: "01",
        title: "Submit Application",
        desc: "Fill out the online application form or download and submit a paper form."
      }, {
        step: "02",
        title: "Upload Documents",
        desc: "Attach your transcripts, ID, recommendation letters, and personal statement."
      }, {
        step: "03",
        title: "Pay Application Fee",
        desc: "Complete the non-refundable application fee payment online or at our office."
      }, {
        step: "04",
        title: "Receive Decision",
        desc: "Admissions decisions are communicated within 2–4 weeks via email."
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-[family-name:var(--font-heading)] text-4xl font-extrabold gold-text-gradient", children: s.step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-[family-name:var(--font-heading)] font-semibold text-secondary-foreground mt-3 mb-2", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-foreground/60 text-sm", children: s.desc })
      ] }, s.step)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { subtitle: "Investing in your future.", children: "Tuition & Fees" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
        type: "Degree Programs",
        fee: "Contact Admissions",
        note: "Tuition varies by program. Financial aid and scholarships available."
      }, {
        type: "Diploma Programs",
        fee: "Contact Admissions",
        note: "2-year program fees. Installment payment plans available."
      }, {
        type: "Certificate Courses",
        fee: "Contact Admissions",
        note: "Short course fees. Group discounts for organizations."
      }].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-[family-name:var(--font-heading)] font-bold", children: t.type }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-[family-name:var(--font-heading)] font-bold gold-text-gradient mt-3", children: t.fee }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-2", children: t.note })
      ] }, t.type)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "apply-form", className: "gold-gradient", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-12 h-12 text-secondary mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-[family-name:var(--font-heading)] text-3xl font-bold text-secondary mb-4", children: "Ready to Apply?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary/80 mb-8", children: "Start your online application now or contact our admissions office for assistance." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "bg-secondary text-secondary-foreground font-[family-name:var(--font-heading)] font-semibold px-8 py-3.5 rounded-lg hover:bg-secondary/90 transition-all inline-flex items-center justify-center gap-2", children: [
        "Contact Admissions ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] }) })
    ] }) })
  ] });
}
export {
  AdmissionsPage as component
};
