import { T as jsxRuntimeExports } from "./worker-entry-Bu4Pg02i.js";
import { L as Link } from "./router-DKis6J_3.js";
function Section({ children, className = "", dark = false, id }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id, className: `section-padding ${dark ? "bg-secondary text-secondary-foreground" : "bg-background"} ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children }) });
}
function SectionTitle({ children, subtitle, light = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold ${light ? "text-secondary-foreground" : "text-foreground"}`, children }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-3 text-lg max-w-2xl ${light ? "text-secondary-foreground/60" : "text-muted-foreground"}`, children: subtitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1 gold-gradient rounded-full mt-4" })
  ] });
}
function CTABanner({ title, description, buttonText = "Apply Now", to = "/admissions" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gold-gradient", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-secondary mb-4", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary/80 text-lg max-w-2xl mx-auto mb-8", children: description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to,
        className: "inline-flex items-center justify-center bg-secondary text-secondary-foreground font-[family-name:var(--font-heading)] font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-secondary/90 transition-all tracking-wide uppercase",
        children: buttonText
      }
    )
  ] }) });
}
export {
  CTABanner as C,
  Section as S,
  SectionTitle as a
};
