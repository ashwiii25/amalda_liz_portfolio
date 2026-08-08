import { motion } from 'motion/react';
import { memo } from 'react';

import SectionHeader from './SectionHeader';

const Testimonial = memo(function Testimonial() {
  return (
    <section className="px-4 md:px-8 lg:px-[40px] py-[80px] md:py-[120px] lg:py-[160px] max-w-[1440px] mx-auto w-full flex flex-col">
      <SectionHeader number="02" title="Testimonials" />

      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center gap-8 md:gap-12">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-brand-gray-light rounded-full overflow-hidden"
        >
          <div className="w-full h-full bg-[#f0f0f0]"></div>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 200, damping: 30, delay: 0.1 }}
          className="text-[24px] sm:text-[34px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.3] md:leading-[1.2] tracking-[-0.04em] text-brand-black text-balance"
        >
          “Working with them was seamless from start to finish. They understood our vision, elevated it with thoughtful design, and delivered results that truly set our brand apart.”
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
          className="flex flex-col gap-1 mt-2 md:mt-4"
        >
          <p className="font-semibold text-[18px] md:text-[20px] tracking-[-0.03em] text-brand-black">Aisha Okafor</p>
          <p className="text-brand-gray-text font-medium text-[14px] md:text-[16px]">Founder</p>
        </motion.div>
      </div>
    </section>
  );
});

export default Testimonial;
