import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaKaggle } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import { profiles } from "../data/profiles";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  kaggle: FaKaggle,
  leetcode: SiLeetcode,
  codeforces: SiCodeforces,
  codechef: SiCodechef,
};

const ProfileCard = ({ profile, index }) => {
  const Icon = iconMap[profile.type];

  return (
    <motion.a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.05, 
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] // Custom cubic-bezier for "premium" feel
      }}
      whileHover={{ y: -8 }}
      className="
        group relative flex items-center gap-5 p-5 md:p-6
        bg-white border border-[#E7DED3]/50 rounded-[2rem]
        transition-all duration-500
        hover:shadow-[0_22px_50px_-15px_rgba(212,163,115,0.2)]
        hover:border-[#D4A373]/40
      "
    >
      {/* Subtle Inner Glow on Hover */}
      <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(212,163,115,0.05)]" />

      {/* Icon Wrapper: Squircle Shape */}
      <div className="
        relative z-10 flex shrink-0 items-center justify-center 
        w-16 h-16 md:w-18 md:h-18 
        rounded-2xl bg-[#F8F4EE] 
        text-[#D4A373]/80 
        group-hover:bg-[#D4A373] group-hover:text-white 
        group-hover:rotate-6
        transition-all duration-500 ease-out
      ">
        <Icon className="text-3xl" />
      </div>

      {/* Profile Details */}
      <div className="relative z-10 flex-1">
        <h3 className="text-lg md:text-xl font-bold text-[#2B2B2B] group-hover:text-[#D4A373] transition-colors duration-300">
          {profile.name}
        </h3>
        
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#A3A3A3] group-hover:text-[#D4A373]/80 transition-colors">
            Connect
          </span>
          <motion.div 
            className="h-px w-0 bg-[#D4A373]/40 group-hover:w-8 transition-all duration-500"
          />
          <svg 
            className="w-4 h-4 text-[#D4A373] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
};

function Profiles() {
  return (
    <section id="profiles" className="bg-[#F8F4EE] py-24 md:py-36 selection:bg-[#D4A373]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Modern Header Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-[#D4A373]/10 text-[#D4A373] font-bold tracking-widest uppercase text-[10px] mb-6"
            >
              Presence
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-[#2B2B2B] tracking-tight"
            >
              My <br className="hidden md:block" /> <span className="text-[#D4A373]">Profiles</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#6B7280] text-lg md:text-xl max-w-sm font-light leading-relaxed"
          >
            A collection of platforms where I solve problems, contribute to open source, and learn.
          </motion.p>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} profile={profile} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Profiles;