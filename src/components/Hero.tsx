import { motion } from 'motion/react';
import { memo } from 'react';

const Hero = memo(function Hero() {
  return (
    <section className="sticky top-0 w-full h-[100dvh] overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/hero.png" 
          alt="Fashion portrait with red background" 
          className="w-full h-full object-cover opacity-90 object-top"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        {/* Optional overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
      </div>

      {/* Middle Content */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-[40px] pointer-events-none pb-[10vh]">
        {/* Left Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col text-[20px] md:text-[24px] lg:text-[28px] font-bold leading-[1.1] tracking-[-0.03em] pointer-events-auto mt-[40vh] md:mt-0"
        >
          <span>Actor</span>
        </motion.div>

        {/* Right Side */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-[300px] md:max-w-[400px] lg:max-w-[460px] text-left md:text-right pointer-events-auto mt-8 md:mt-0"
        >
          <p className="text-[18px] md:text-[20px] lg:text-[24px] font-bold leading-[1.1] tracking-[-0.02em] text-balance">
            Model
          </p>
        </motion.div>
      </div>

      {/* Bottom Text */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-4 left-0 w-full px-4 md:px-8 lg:px-[40px] flex flex-col pointer-events-none"
      >
        <div className="w-full flex leading-[0.85] md:leading-[0.8]">
           <span className="text-[12vw] font-extrabold tracking-[-0.04em] text-white/95 whitespace-nowrap">AMALDA LIZ</span>
        </div>
      </motion.div>
    </section>
  );
});

export default Hero;
