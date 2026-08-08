import { motion, useScroll, useTransform } from 'motion/react';
import { memo, useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';

const modellingImages = [
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "57110283.avif",
  "images.jpg",
  "thumb.avif"
];

const achievements = [
  {
    year: "2009",
    title: "Miss Kerala Finalist",
    description: "Finalist in the Miss Kerala pageant, securing the 'Miss Beautiful Hair' title in a sub-contest."
  },
  {
    year: "2010",
    title: "South Indian Model Hunt",
    description: "Participated in the beauty pageant and won the 'Miss Confident Face' title."
  },
  {
    year: "Runway",
    title: "Fashion Shows",
    description: "Worked as a model in various fashion shows, including the prestigious Kochi International Fashion Week."
  },
  {
    year: "Commercial",
    title: "Print Campaigns",
    description: "Featured in print advertisements for brands such as Kingfisher, Fabindia, Silpaa, Pranaah, Palam Silks, and Linen Burgoyne."
  },
  {
    year: "Editorial",
    title: "Professional Photoshoots",
    description: "Featured in various high-profile professional photoshoots, including the Kingfisher Calendar."
  }
];

const EditorialBlock = ({ achievement, image, index }: { achievement: any, image: string, index: number, key?: number | string }) => {
  const isEven = index % 2 === 0;
  const imageRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  
  return (
    <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:items-start gap-10 md:gap-16 lg:gap-24 mb-20 md:mb-32`}>
      {/* Image Side */}
      <div className={`w-full md:w-1/2 flex ${isEven ? 'justify-start md:justify-end' : 'justify-start md:justify-start'}`}>
        <motion.div 
          ref={imageRef}
          initial={{ opacity: 0, clipPath: 'inset(8% 0 8% 0)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0% 0)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-full ${isEven ? 'max-w-[400px] aspect-[4/5]' : 'max-w-[460px] aspect-[3/4] md:mt-16'} bg-[#f5f5f5] overflow-hidden`}
        >
          <motion.img
            style={{ y }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={`/modelling/${image}`}
            alt={achievement.title}
            className="absolute -top-[5%] -bottom-[5%] left-0 right-0 w-full h-[110%] object-cover origin-center"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
      
      {/* Text Side */}
      <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:pt-32' : 'md:pt-24'}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[380px]"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[11px] font-bold tracking-[0.2em] text-black/40 uppercase">
              {achievement.year}
            </span>
            <div className="w-12 h-[1px] bg-black/10" />
          </div>
          <h4 className="text-[22px] md:text-[28px] font-medium tracking-tight mb-5 leading-[1.3] text-black">
            {achievement.title}
          </h4>
          <p className="text-gray-500 text-[15px] md:text-[16px] leading-[1.8] font-light">
            {achievement.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const Modelling = memo(function Modelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="px-4 md:px-8 lg:px-[40px] py-[80px] md:py-[140px] bg-white overflow-hidden" id="modelling" ref={containerRef}>
      <div className="max-w-[1200px] mx-auto w-full">
        <SectionHeader number="03" title="Modelling & Career" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-16 mb-20 md:mb-32"
        >
          <p className="text-[18px] md:text-[24px] text-gray-500 max-w-2xl leading-[1.6] font-light">
            A showcase of <span className="text-black font-medium">distinctive looks, editorial fashion,</span> and prestigious commercial modeling campaigns.
          </p>
        </motion.div>
        
        <div className="flex flex-col">
          {achievements.map((achievement, i) => (
            <EditorialBlock 
              key={i} 
              achievement={achievement} 
              image={modellingImages[i]} 
              index={i} 
            />
          ))}
        </div>

        {/* Final Wide Image with subtle parallax */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full mt-16 md:mt-24 relative h-[40vh] md:h-[60vh] overflow-hidden bg-[#f5f5f5] group"
        >
          <Link to="/gallery" className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="relative z-20 overflow-hidden">
               <motion.span 
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.2 }}
                 className="text-white text-[16px] md:text-[20px] font-medium tracking-[0.2em] uppercase flex items-center gap-4"
               >
                 View Gallery
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-2 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                 </svg>
               </motion.span>
            </div>
          </Link>
          <motion.img 
            style={{ y }}
            src={`/modelling/${modellingImages[5]}`}
            className="absolute -top-[15%] left-0 right-0 w-full h-[130%] object-cover object-[50%_20%] group-hover:scale-105 transition-transform duration-700 ease-out"
            alt="Editorial close up"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  );
});

export default Modelling;
