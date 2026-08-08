import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, memo, ReactNode } from 'react';
import { Instagram, Facebook, Film, AtSign } from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', icon: <Instagram size={36} strokeWidth={2} />, href: 'https://www.instagram.com/amaldaliz/?hl=en' },
  { name: 'Facebook', icon: <Facebook size={36} strokeWidth={2} />, href: 'https://www.facebook.com/amaldalizjoseph/' },
  { name: 'IMDb', icon: <Film size={36} strokeWidth={2} />, href: 'https://www.imdb.com/name/nm8166766/' },
  { name: 'Threads', icon: <AtSign size={36} strokeWidth={2} />, href: 'https://www.threads.com/@amaldaliz' },
];

const renderSocialLink = (link: { name: string; icon: ReactNode; href: string }) => (
  <motion.a 
    key={link.name}
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-white rounded-full p-2 -m-2 text-[#ddd] hover:text-brand-white transition-colors duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    aria-label={link.name}
  >
    {link.icon}
  </motion.a>
);

const Footer = memo(function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <footer ref={containerRef} className="relative bg-brand-black text-brand-white px-4 md:px-8 lg:px-[40px] pt-[60px] md:pt-[80px] lg:pt-[120px] pb-[32px] md:pb-[40px] overflow-hidden" id="contact">
      {/* Subtle Backdrop Lettering */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full flex justify-center">
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.22, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[20vw] font-bold text-transparent uppercase whitespace-nowrap leading-none tracking-tighter [-webkit-text-stroke:2px_white]"
        >
          Contact
        </motion.span>
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-[1360px] mx-auto w-full flex flex-col gap-[80px] lg:gap-[120px]"
      >
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-12">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="text-[40px] sm:text-[52px] md:text-[90px] lg:text-[140px] font-semibold leading-[0.95] md:leading-[0.9] tracking-[-0.04em] max-w-[1100px] text-balance"
          >
            Let’s make something<br className="hidden sm:block" /> amazing together.
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6 lg:pt-4 shrink-0"
          >
            <div className="text-[#999] uppercase text-[12px] tracking-[0.2em] font-extrabold">Socials</div>
            <div className="flex flex-wrap items-center gap-8">
              {socialLinks.map(renderSocialLink)}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-10 md:gap-y-12 border-t border-[#333] pt-[40px] md:pt-[64px] text-[14px] md:text-[16px] font-medium tracking-[-0.03em]"
        >
          <div className="col-span-2 flex flex-col justify-end order-last lg:order-first mt-8 lg:mt-0">
            <div className="text-[#888]">Amalda Liz © 2026</div>
          </div>
          <div className="flex flex-col lg:items-end col-span-2 md:col-span-1">
            <motion.a 
              href="#"
              className="relative group w-fit text-[#888] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-white rounded-sm p-1 -m-1 text-[14px] md:text-[16px]"
              whileHover="hover"
              whileTap="tap"
            >
              <span className="group-hover:text-brand-white transition-colors duration-300">Back to top</span>
              <motion.div 
                className="absolute left-1 right-1 bottom-[2px] h-[1px] bg-brand-white origin-left"
                initial={{ scaleX: 0 }}
                variants={{ hover: { scaleX: 1 } }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
});

export default Footer;
