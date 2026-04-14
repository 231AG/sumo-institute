import { T as jsxRuntimeExports } from "./worker-entry-Bu4Pg02i.js";
import { S as Section, a as SectionTitle, C as CTABanner } from "./SectionComponents-CPAmhvzB.js";
import { F as FlaskConical } from "./flask-conical-BZ-isjyG.js";
import { c as createLucideIcon } from "./router-DKis6J_3.js";
import { G as Globe, U as Users } from "./users-Dh-x1VlF.js";
import { B as BookOpen } from "./book-open-CEAsIgyH.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
];
const Database = createLucideIcon("database", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
];
const Leaf = createLucideIcon("leaf", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);
const researchBg = "/231Ag/sumo-institute/assets/research-bg-Dw_t11gb.jpg";
function InsuredPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[50vh] flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: researchBg, alt: "Research Network", className: "w-full h-full object-cover", width: 1920, height: 800, loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-secondary/70" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 gold-gradient text-secondary rounded-full px-4 py-1.5 text-sm font-semibold mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-4 h-4" }),
          " INSURED"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-secondary-foreground", children: [
          "Institute of Sustainable ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text-gradient", children: "Research & Development" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-foreground/70 text-lg mt-6 max-w-2xl", children: "Advancing knowledge and driving innovation through interdisciplinary research that addresses real-world challenges." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { subtitle: "INSURED is SIT's research arm, dedicated to producing impactful research that contributes to sustainable development.", children: "About INSURED" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed max-w-3xl", children: "Established to bridge the gap between academic research and practical application, INSURED brings together researchers, industry partners, and community stakeholders to address pressing challenges in technology, agriculture, sustainability, and development. Our research outputs inform policy, improve practices, and create new opportunities for growth." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { dark: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { light: true, subtitle: "Our research spans five key areas of strategic importance.", children: "Research Areas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: [{
        icon: Database,
        title: "Data Science",
        desc: "Machine learning, AI applications, big data analytics, and predictive modeling for development."
      }, {
        icon: Leaf,
        title: "Sustainability",
        desc: "Green technology, renewable energy systems, environmental conservation, and climate change mitigation."
      }, {
        icon: Globe,
        title: "Agriculture",
        desc: "Precision farming, food security, agri-tech innovation, and sustainable agricultural practices."
      }, {
        icon: TrendingUp,
        title: "Supply Chain",
        desc: "Logistics optimization, digital supply chains, blockchain applications, and trade facilitation."
      }, {
        icon: BookOpen,
        title: "Development Studies",
        desc: "Socio-economic development, policy analysis, governance, and community empowerment research."
      }].map((area) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-8 hover:border-gold/30 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(area.icon, { className: "w-10 h-10 text-gold mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-[family-name:var(--font-heading)] text-lg font-bold text-secondary-foreground", children: area.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-foreground/60 text-sm mt-2 leading-relaxed", children: area.desc })
      ] }, area.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { subtitle: "Selected ongoing and completed research projects.", children: "Research Projects" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [{
        title: "AI-Powered Crop Disease Detection",
        status: "Ongoing",
        year: "2024–Present",
        desc: "Developing machine learning models to detect crop diseases from smartphone images."
      }, {
        title: "Urban Mobility Data Analytics",
        status: "Ongoing",
        year: "2024–Present",
        desc: "Analyzing transportation patterns to improve urban planning and reduce congestion."
      }, {
        title: "Blockchain for Agricultural Supply Chains",
        status: "Completed",
        year: "2023–2024",
        desc: "Implemented blockchain-based traceability for smallholder farmers."
      }, {
        title: "Renewable Energy Adoption Study",
        status: "Completed",
        year: "2022–2023",
        desc: "Assessed barriers to solar energy adoption in rural communities."
      }].map((proj) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4 hover:border-gold/20 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-[family-name:var(--font-heading)] font-semibold", children: proj.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: proj.desc })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: proj.year }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-semibold px-3 py-1 rounded-full ${proj.status === "Ongoing" ? "bg-gold/20 text-gold-dark" : "bg-muted text-muted-foreground"}`, children: proj.status })
        ] })
      ] }, proj.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { dark: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { light: true, children: "Publications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: ['"Machine Learning Applications in Sub-Saharan Agriculture" — Journal of AI & Development, 2024', `"Blockchain-Enabled Traceability in Agricultural Supply Chains" — Int'l Supply Chain Review, 2024`, '"Solar Energy Adoption Barriers in Rural Africa" — Energy Policy Journal, 2023'].map((pub) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-secondary-foreground/70 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4 text-gold shrink-0 mt-0.5" }),
          pub
        ] }, pub)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { light: true, children: "Partnerships" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: [{
          name: "African Development Research Network",
          desc: "Collaborative research funding and knowledge exchange."
        }, {
          name: "Global Tech University Alliance",
          desc: "Joint programs, faculty exchange, and shared research infrastructure."
        }, {
          name: "National Agricultural Research Council",
          desc: "Applied research partnerships in food security and agri-tech."
        }].map((partner) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-gold mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-secondary-foreground text-sm", children: partner.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-foreground/60 text-xs mt-1", children: partner.desc })
        ] }, partner.name)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTABanner, { title: "Collaborate with INSURED", description: "Partner with us on research projects that make a real difference.", buttonText: "Contact Us", to: "/contact" })
  ] });
}
export {
  InsuredPage as component
};
