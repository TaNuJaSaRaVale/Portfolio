import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#F8F4EE] py-32 selection:bg-[#D4A373]/30 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <p className="text-[#D4A373] font-bold tracking-[0.2em] uppercase text-sm mb-3">
              Get to know me
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-[#2B2B2B] leading-tight">
              About <br />
              <span className="text-[#D4A373]">MySelf</span>
            </h2>
            <div className="h-1.5 w-20 bg-[#D4A373] mt-8 rounded-full"></div>

            {/* Quick Info */}
            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-[#E7DED3] flex items-center justify-center text-[#D4A373]">
                  🎓
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#A3A3A3] font-bold">
                    Education
                  </p>
                  <p className="text-[#4B5563] font-medium">
                    B.Tech in AIML
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-[#E7DED3] flex items-center justify-center text-[#D4A373]">
                  📍
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#A3A3A3] font-bold">
                    Location
                  </p>
                  <p className="text-[#4B5563] font-medium">
                    Sangli, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 bg-white border border-[#E7DED3]/60 rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_-20px_rgba(212,163,115,0.1)]"
          >
            <div className="space-y-8">

              {/* Paragraph 1 */}
              <p className="text-xl md:text-2xl text-[#4B5563] leading-relaxed font-light">
                I’m a B.Tech student specializing in{" "}
                <span className="text-[#2B2B2B] font-semibold">
                  Artificial Intelligence and Machine Learning
                </span>
                , and I enjoy learning by building things and figuring them out
                along the way. I didn’t start with everything planned out — I
                explored different areas, followed my curiosity, and slowly
                found myself enjoying the mix of problem solving, machine
                learning, and software development.
              </p>

              {/* Paragraph 2 */}
              <p className="text-[#6B7280] leading-relaxed">
                I like working on projects that turn ideas into something
                usable. Building an SMS spam classifier and creating web
                applications taught me that good code is not just about results,
                but also about clarity, structure, and how people interact with
                what you build. These experiences helped me appreciate clean
                design and thoughtful implementation.
              </p>

              {/* Paragraph 3 */}
              <p className="text-[#6B7280] leading-relaxed">
                Alongside development, I regularly practice{" "}
                <span className="text-[#2B2B2B] font-medium">
                  data structures and problem solving
                </span>
                , as it helps me think more clearly and approach challenges in a
                structured way. At the moment, I’m looking for internship
                opportunities where I can learn from real-world engineering
                problems, strengthen my fundamentals, and grow through hands-on
                experience.
              </p>

              {/* Paragraph 4 */}
              <p className="text-[#6B7280] leading-relaxed">
                I believe in learning consistently, staying curious, and
                improving a little every day, and I’m excited to see where this
                journey takes me.
              </p>

              {/* Sign-off */}
              <div className="pt-8 flex items-center gap-4 text-[#D4A373]">
                <div className="h-px flex-1 bg-[#E7DED3]"></div>
                <span className="font-serif italic text-lg">
                  Learning by building, one step at a time.
                </span>
                <div className="h-px flex-1 bg-[#E7DED3]"></div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
