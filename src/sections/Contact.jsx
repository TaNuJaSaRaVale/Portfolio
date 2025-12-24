import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";

const ContactLink = ({ icon: Icon, title, value, href }) => (
  <motion.a
    href={href}
    target={href.startsWith("http") ? "_blank" : "_self"}
    rel="noopener noreferrer"
    className="
      flex items-center gap-5 p-4 rounded-2xl
      bg-white/60 border border-transparent
      hover:border-[#D4A373]/30 hover:bg-white
      transition-all duration-300 group
    "
  >
    <div className="w-12 h-12 rounded-xl bg-[#F8F4EE] flex items-center justify-center text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-white transition-colors duration-300 shadow-sm">
      <Icon className="text-xl" />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] uppercase tracking-[0.2em] text-[#A3A3A3] font-bold">
        {title}
      </span>
      <span className="text-[#2B2B2B] font-medium group-hover:text-[#D4A373] transition-colors">
        {value}
      </span>
    </div>
  </motion.a>
);

function Contact() {
  return (
    <section
      id="contact"
      className="
        scroll-mt-32
        bg-[#F8F4EE]
        pt-36 pb-28
        selection:bg-[#D4A373]/30
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D4A373] font-bold tracking-[0.2em] uppercase text-xs mb-4"
          >
            Get In Touch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#2B2B2B]"
          >
            Let's build <span className="text-[#D4A373]">together.</span>
          </motion.h2>

          <div className="h-1 w-20 bg-[#D4A373] mt-6 rounded-full"></div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">

          {/* LEFT */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-[#4B5563] text-lg leading-relaxed font-light">
              I’m currently looking for{" "}
              <span className="text-[#2B2B2B] font-semibold">
                internship opportunities
              </span>{" "}
              and meaningful collaborations. Whether you have a question or just
              want to say hi, my inbox is always open.
            </p>

            <div className="grid grid-cols-1 gap-4">
              <ContactLink
                icon={FaEnvelope}
                title="Email Me"
                value="saravaletanuja18@gmail.com"
                href="mailto:saravaletanuja18@gmail.com"
              />
              <ContactLink
                icon={FaLinkedin}
                title="LinkedIn"
                value="in/tanuja-saravale"
                href="https://www.linkedin.com/in/tanuja-saravale/"
              />
             
            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative p-8 md:p-12 bg-white border border-[#E7DED3]/60 rounded-[2rem] shadow-[0_20px_40px_-16px_rgba(212,163,115,0.14)] overflow-hidden group">

              {/* Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D4A373]/5 rounded-full blur-3xl group-hover:bg-[#D4A373]/10 transition-colors duration-500" />

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2B2B2B] mb-5">
                  Ready to start a conversation?
                </h3>

                <p className="text-[#6B7280] text-lg mb-10 leading-relaxed">
                  I'm always interested in technical discussions, real-world
                  engineering projects, and the future of AI/ML. Let's make
                  something impactful.
                </p>

                <motion.a
                  href="mailto:saravaletanuja18@gmail.com"
                  whileHover={{ x: 4 }}
                  className="
                    inline-flex items-center gap-4 px-8 py-4
                    bg-[#D4A373] text-white font-bold
                    rounded-full shadow-md shadow-[#D4A373]/20
                    hover:bg-[#C58B5A] transition-all duration-300
                  "
                >
                  Send a direct message
                  <FaArrowRight className="text-sm" />
                </motion.a>

                <div className="mt-10 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white bg-[#F8F4EE] flex items-center justify-center"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4A373]/40" />
                      </div>
                    ))}
                  </div>

                  <p className="text-xs font-bold text-[#A3A3A3] uppercase tracking-widest">
                    Available for new projects
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
