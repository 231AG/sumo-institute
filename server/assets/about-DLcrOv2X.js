import { T as jsxRuntimeExports } from "./worker-entry-Bu4Pg02i.js";
import { c as createLucideIcon, L as Link } from "./router-DKis6J_3.js";
import { S as Section, a as SectionTitle, C as CTABanner } from "./SectionComponents-CPAmhvzB.js";
import { A as Award } from "./award-CG71MDLy.js";
import { U as Users, G as Globe } from "./users-Dh-x1VlF.js";
import { B as BookOpen } from "./book-open-CEAsIgyH.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode);
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "dark-gradient text-secondary-foreground section-padding", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold text-sm font-semibold uppercase tracking-widest", children: "About Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mt-4", children: [
        "Shaping the Future of ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text-gradient", children: "Technology Education" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-foreground/70 text-lg mt-6 leading-relaxed", children: "Sumo Institute of Technology (SIT) is a premier institution dedicated to providing world-class technology education. We combine academic rigor with practical skills development to produce graduates who are ready to lead and innovate." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-10 h-10 text-gold mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-[family-name:var(--font-heading)] text-2xl font-bold mb-4", children: "Our Mission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "To provide accessible, industry-relevant technology education that empowers students with practical skills, critical thinking, and the innovative mindset needed to drive sustainable development across Africa and beyond." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-10 h-10 text-gold mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-[family-name:var(--font-heading)] text-2xl font-bold mb-4", children: "Our Vision" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "To be Africa's leading technology institution, recognized globally for producing skilled graduates, groundbreaking research, and meaningful community impact through innovation and excellence." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { dark: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { light: true, subtitle: "The principles that guide everything we do.", children: "Our Core Values" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [{
        icon: Award,
        title: "Excellence",
        desc: "We pursue the highest standards in education, research, and service."
      }, {
        icon: Users,
        title: "Inclusivity",
        desc: "We welcome diverse perspectives and create equitable opportunities."
      }, {
        icon: BookOpen,
        title: "Innovation",
        desc: "We foster creativity and embrace emerging technologies."
      }, {
        icon: Globe,
        title: "Impact",
        desc: "We measure success by our contribution to society and development."
      }].map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(val.icon, { className: "w-10 h-10 text-gold mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-[family-name:var(--font-heading)] font-semibold text-secondary-foreground mb-2", children: val.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-foreground/60 text-sm", children: val.desc })
      ] }, val.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { subtitle: "SIT operates through three specialized units.", children: "Our Structure" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [{
        title: "SIT — Degree Programs",
        desc: "The academic core offering BSc degrees in six technology disciplines. Our programs are accredited, industry-aligned, and designed to produce job-ready graduates.",
        to: "/programs"
      }, {
        title: "INSURED — Research",
        desc: "The Institute of Sustainable Research and Development drives cutting-edge research in data science, sustainability, agriculture, and supply chain management.",
        to: "/insured"
      }, {
        title: "CPSD — Training",
        desc: "The Center for Professional Skills Development offers certificate and diploma programs for professionals seeking to upskill or change careers.",
        to: "/cpsd"
      }].map((unit) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: unit.to, className: "group bg-card border border-border rounded-2xl p-8 hover:border-gold/30 hover:shadow-lg transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-[family-name:var(--font-heading)] text-lg font-bold mb-3 group-hover:text-gold-dark transition-colors", children: unit.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: unit.desc })
      ] }, unit.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTABanner, { title: "Join the SIT Community", description: "Be part of a vibrant learning community that's shaping the future of technology in Africa." })
  ] });
}
export {
  AboutPage as component
};
