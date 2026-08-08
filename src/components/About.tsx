import { motion } from 'motion/react';
import { memo } from 'react';
import SectionHeader from './SectionHeader';

const About = memo(function About() {
  return (
    <section className="px-4 md:px-8 lg:px-[40px] py-[80px] md:py-[120px] lg:py-[160px] max-w-[1440px] mx-auto w-full flex flex-col" id="about">
      <SectionHeader number="01" title="About Me" />
      
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mt-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          className="w-full lg:w-[40%] aspect-[3/4] bg-brand-gray-light rounded-[16px] overflow-hidden"
        >
          <img 
            src="/img/1.jpg" 
            alt="Amalda Liz Joseph" 
            className="w-full h-full object-cover" 
            loading="lazy" 
            decoding="async" 
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 200, damping: 30, delay: 0.2 }}
          className="w-full lg:w-[60%] flex flex-col gap-8 justify-center"
        >
          <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-semibold tracking-[-0.03em] leading-tight text-brand-black">
            Hello! I'm Amalda Liz Joseph.
          </h2>
          
          <div className="text-[18px] md:text-[20px] text-brand-gray-text leading-relaxed flex flex-col gap-6">
            <p>
              I am an Indian actor and model from Wayanad, Kerala. Since making my acting debut in 2016, I have been passionate about bringing meaningful characters to life on screen. I primarily work in the Malayalam film industry while also exploring opportunities in Telugu cinema.
            </p>
            <p>
              Alongside acting, I am a trained Bharatanatyam dancer, which has greatly influenced my artistic journey by enhancing my expression, grace, and stage presence. Before becoming an actor, I established myself in the modeling industry, where I was a finalist in the Miss Kerala 2009 beauty pageant and earned the title of Miss Confident Face in South Indian Model Hunt 2010.
            </p>
            <p>
              I believe every role is an opportunity to connect with audiences through authentic storytelling. Whether through acting, modeling, or dance, I strive to keep learning, growing, and contributing meaningful work to the entertainment industry.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="px-6 py-3 bg-brand-gray-light rounded-full text-[14px] md:text-[16px] font-medium text-brand-black border border-[#e5e5e5]">
              Actor & Model
            </div>
            <div className="px-6 py-3 bg-brand-gray-light rounded-full text-[14px] md:text-[16px] font-medium text-brand-black border border-[#e5e5e5]">
              Bharatanatyam Dancer
            </div>
            <div className="px-6 py-3 bg-brand-gray-light rounded-full text-[14px] md:text-[16px] font-medium text-brand-black border border-[#e5e5e5]">
              Engineering Graduate
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default About;
