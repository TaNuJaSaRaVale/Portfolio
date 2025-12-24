import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="min-h-[90vh] flex items-start pt-28 bg-[#F8F4EE] selection:bg-[#D4A373]/30">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="
            bg-white border border-[#E7DED3]/60
            rounded-[2.25rem]
            px-8 py-16 md:px-20 md:py-24
            shadow-[0_12px_45px_-18px_rgba(212,163,115,0.12)]
            relative overflow-hidden
          "
        >
          {/* Decorative Accent */}
          <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-72 h-72 bg-[#D4A373]/5 rounded-full blur-3xl" />

          {/* CONTENT WRAPPER */}
          <div className="max-w-3xl">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="
                text-5xl md:text-7xl
                font-bold tracking-tight leading-[1.1]
                text-[#2B2B2B]
              "
            >
              Hi, I’m{" "}
              <span className="text-[#D4A373] inline-block">
                Tanuja
              </span>
            </motion.h1>

            {/* UPDATED INTRO TEXT */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="
                mt-8
                text-lg md:text-xl
                text-[#4B5563]
                leading-relaxed
              "
            >
              I work at the intersection of{" "}
              <span className="font-medium text-[#2B2B2B]">
                Artificial Intelligence
              </span>
              ,{" "}
              <span className="font-medium text-[#2B2B2B]">
                Machine Learning
              </span>
              , and software development — building things, breaking them, and
              learning along the way. I didn’t start with a fixed roadmap, just
              curiosity, and over time that curiosity led me to machine
              learning, full-stack development, and the joy of solving problems
              through code.
            </motion.p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#9CA3AF]">
              <span>AIML</span>
              <span className="text-[#D4A373]/40">•</span>
              <span>Machine Learning</span>
              <span className="text-[#D4A373]/40">•</span>
              <span>Web Development</span>
              <span className="text-[#D4A373]/40">•</span>
              <span>DSA</span>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <a
                href="/Tanuja_Saravale_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-md:inline-flex inline-flex items-center gap-3
                  px-9 py-4
                  bg-[#D4A373] text-white
                  font-semibold
                  rounded-full
                  transition-all duration-300
                  hover:bg-[#C58B5A]
                  hover:shadow-lg hover:shadow-[#D4A373]/30
                  active:scale-95
                "
              >
                <span>View Resume</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
