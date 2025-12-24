import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ title, skills, delay }) => {
  // Logic to split the string into an array for badge rendering
  const skillList = skills.split(", ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ y: -5 }}
      className="bg-white border border-[#E7DED3]/60 rounded-3xl p-8 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(212,163,115,0.12)] transition-all duration-300"
    >
      <h3 className="text-xl font-bold text-[#2B2B2B] mb-5 flex items-center gap-3">
        <span className="w-1.5 h-6 bg-[#D4A373] rounded-full"></span>
        {title}
      </h3>
      
      <div className="flex flex-wrap gap-2">
        {skillList.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-1.5 bg-[#F8F4EE] text-[#4B5563] text-sm font-medium rounded-full border border-[#E7DED3]/40 hover:border-[#D4A373] hover:text-[#D4A373] transition-colors duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

function Skills() {
  return (
    <section id="skills" className="bg-[#F8F4EE] py-32 selection:bg-[#D4A373]/30">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading Area */}
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#D4A373] font-bold tracking-[0.2em] uppercase text-sm mb-3"
          >
            Capabilities
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-[#2B2B2B]"
          >
            Technical Expertise
          </motion.h2>
          <div className="h-1.5 w-20 bg-[#D4A373] mt-6 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <SkillCard 
            title="Programming Languages" 
            skills="C++, JavaScript, Python" 
            delay={0.1}
          />
          <SkillCard 
            title="Web Development" 
            skills="HTML, CSS, React, Tailwind CSS, Firebase" 
            delay={0.2}
          />
          <SkillCard 
            title="AI / Machine Learning" 
            skills="Machine learning fundamentals, data preprocessing, basic NLP, model evaluation" 
            delay={0.3}
          />
          <SkillCard 
            title="Core Computer Science" 
            skills="Data Structures & Algorithms, OOP, problem solving" 
            delay={0.4}
          />
          <SkillCard 
            title="Tools & Platforms" 
            skills="Git, GitHub, VS Code, Postman, OpenAI API, Scikit-learn" 
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;