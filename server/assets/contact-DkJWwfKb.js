import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-Bu4Pg02i.js";
import { S as Section, a as SectionTitle } from "./SectionComponents-CPAmhvzB.js";
import { c as createLucideIcon, M as MapPin, P as Phone, a as Mail } from "./router-DKis6J_3.js";
import { C as Clock } from "./clock-BKnSFOSf.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
function ContactPage() {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "dark-gradient text-secondary-foreground section-padding", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold text-sm font-semibold uppercase tracking-widest", children: "Get in Touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mt-4", children: [
        "Contact ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text-gradient", children: "Us" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary-foreground/70 text-lg mt-6 max-w-2xl", children: "Have questions? We'd love to hear from you. Reach out and our team will respond promptly." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { children: "Contact Information" }),
        [{
          icon: MapPin,
          label: "Address",
          value: "Sumo Institute of Technology\nMain Campus, Technology Drive"
        }, {
          icon: Phone,
          label: "Phone",
          value: "+231 (778) 747-451\n+231 (778) 747-451"
        }, {
          icon: Mail,
          label: "Email",
          value: "info@sit.edu\nadmissions@sit.edu"
        }, {
          icon: Clock,
          label: "Office Hours",
          value: "Monday – Friday: 8:00 AM – 5:00 PM\nSaturday: 9:00 AM – 1:00 PM"
        }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg gold-gradient flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-5 h-5 text-secondary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-sm", children: item.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm whitespace-pre-line", children: item.value })
          ] })
        ] }, item.label))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { subtitle: "Fill out the form and we'll get back to you within 24 hours.", children: "Send Us a Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-1.5", children: "Full Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, maxLength: 100, value: formData.name, onChange: (e) => setFormData({
                ...formData,
                name: e.target.value
              }), className: "w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring", placeholder: "Your name" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-1.5", children: "Email Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, maxLength: 255, value: formData.email, onChange: (e) => setFormData({
                ...formData,
                email: e.target.value
              }), className: "w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring", placeholder: "you@email.com" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-1.5", children: "Subject" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: formData.subject, onChange: (e) => setFormData({
              ...formData,
              subject: e.target.value
            }), className: "w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring", required: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a subject" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "admissions", children: "Admissions Inquiry" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "programs", children: "Program Information" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cpsd", children: "CPSD Training" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "research", children: "Research / INSURED" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "general", children: "General Inquiry" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-1.5", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, maxLength: 1e3, rows: 5, value: formData.message, onChange: (e) => setFormData({
              ...formData,
              message: e.target.value
            }), className: "w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none", placeholder: "Your message..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "gold-gradient text-secondary font-[family-name:var(--font-heading)] font-semibold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all inline-flex items-center gap-2 tracking-wide", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
            " Send Message"
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  ContactPage as component
};
