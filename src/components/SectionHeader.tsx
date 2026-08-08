import { motion } from 'motion/react';
import { memo } from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
  theme?: 'light' | 'dark';
}

const SectionHeader = memo(function SectionHeader({ number, title, theme = 'light' }: SectionHeaderProps) {
  const textColor = theme === 'dark' ? 'text-[#888]' : 'text-brand-gray-text';
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`flex justify-between items-center mb-[40px] md:mb-[64px] lg:mb-[80px] text-[14px] md:text-[16px] font-medium tracking-[-0.03em] ${textColor}`}
    >
      <span>{number}</span>
      <span>( {title} )</span>
      <span className="hidden sm:inline">© 2026</span>
    </motion.div>
  );
});

export default SectionHeader;
