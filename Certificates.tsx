import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import certBe10x from "@assets/cert-be10x.jpg_1779285488416.jpeg";

const certificates = [
  {
    title: "AI Tools & Automation Workshop",
    issuer: "be10x",
    description:
      "Developed hands-on expertise using advanced AI tools to automate workflows, optimize productivity, and boost technical efficiency.",
    image: certBe10x,
    tags: ["AI Tools", "Automation", "ChatGPT", "Productivity"],
    date: "December 28, 2025",
    accentColor: "text-violet-400",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/20",
    glowColor: "from-violet-500/10",
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-[0.2em] mb-3">05 — Certificates</p>
          <div className="flex items-end gap-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Completed Courses</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent mb-3" />
          </div>
          <p className="text-slate-400 mt-4 text-lg">
            Verified credentials that complement my engineering and software skill set.
          </p>
        </motion.div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-slate-600 transition-all duration-300 cursor-default flex flex-col"
            >
              {/* Hover glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl bg-gradient-to-br ${cert.glowColor} to-transparent`}
                style={{ filter: "blur(40px)", transform: "scale(0.8)" }}
              />

              {/* Certificate image thumbnail */}
              <div className="relative w-full h-44 overflow-hidden border-b border-slate-800 bg-slate-950 flex-shrink-0">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

                {/* Issuer badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-lg ${cert.accentBg} border ${cert.accentBorder} ${cert.accentColor} backdrop-blur-sm`}>
                    {cert.issuer}
                  </span>
                </div>

                {/* Expand icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-lg bg-slate-900/80 border border-slate-700 flex items-center justify-center backdrop-blur-sm">
                    <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="relative z-10 flex flex-col flex-grow p-7">
                {/* Icon + date row */}
                <div className="flex justify-between items-center mb-5">
                  <div className={`w-10 h-10 rounded-xl ${cert.accentBg} border ${cert.accentBorder} flex items-center justify-center`}>
                    <Award className={`w-5 h-5 ${cert.accentColor}`} />
                  </div>
                  <span className="text-xs font-mono text-slate-500">{cert.date}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-white transition-colors leading-snug">
                  {cert.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {cert.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-slate-500 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/60 hover:border-slate-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
