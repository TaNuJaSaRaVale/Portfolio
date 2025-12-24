import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -4 }}
      className="
        group bg-white
        border border-[#E7DED3]/60
        rounded-[1.5rem]
        p-5 md:p-6
        flex flex-col h-full
        shadow-[0_3px_16px_-10px_rgba(212,163,115,0.1)]
        hover:shadow-[0_16px_36px_-18px_rgba(212,163,115,0.2)]
        transition-all duration-300
      "
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-[#2B2B2B] group-hover:text-[#D4A373] transition-colors duration-300">
          {project.title}
        </h3>

        <div className="p-1.5 rounded-md bg-[#F8F4EE] text-[#D4A373]/60 group-hover:text-[#D4A373] transition-colors">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#4B5563] leading-relaxed mb-5 flex-grow font-light text-sm md:text-base">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((item, index) => (
          <span
            key={index}
            className="
              text-[11px] font-semibold uppercase tracking-wider
              px-3 py-1 rounded-full
              bg-[#F8F4EE] text-[#6B7280]
              border border-transparent
              group-hover:border-[#E7DED3]
              transition-all duration-300
            "
          >
            {item}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#F8F4EE]">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              text-xs font-semibold tracking-widest uppercase
              text-[#D4A373]
              group/link
            "
          >
            <span>View</span>
            <span className="w-6 h-px bg-[#D4A373] transition-all duration-300 group-hover/link:w-10"></span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
