import { motion, useScroll, useTransform } from 'motion/react';
import { memo, useRef } from 'react';

const works = [
  { file: "2024_bramayugam_yakshi.webp", year: "2024", film: "Bramayugam", character: "Yakshi" },
  { file: "2023_sulaikhamanzil_bathool.webp", year: "2023", film: "Sulaikhamanzil", character: "Bathool" },
  { file: "2022_ottu_lady.jpg", year: "2022", film: "Ottu", character: "Lady" },
  { file: "2020_trance_sheeba.jpg", year: "2020", film: "Trance", character: "Sheeba" },
  { file: "2020_cusoon_sanjana.jpg", year: "2020", film: "C U Soon", character: "Sanjana" },
  { file: "2019_underworld_annie.jpg", year: "2019", film: "Underworld", character: "Annie" },
  { file: "2019_9_divya.webp", year: "2019", film: "9", character: "Divya" },
  { file: "2016_kammattipadam_rosamma.jpg", year: "2016", film: "Kammattipadam", character: "Rosamma" },
];

const getAnimationRanges = (index: number, total: number) => {
  const step = 1 / (total - 1);
  const fadePointPrev = (index - 0.5) * step;
  const fadePointNext = (index + 0.5) * step;
  const crossfadeDuration = step * 0.25;

  let range: number[] = [];
  let opacity: number[] = [];
  let scaleBg: number[] = [];
  let yText: number[] = [];

  if (index === 0) {
    range = [0, fadePointNext - crossfadeDuration, fadePointNext + crossfadeDuration];
    opacity = [1, 1, 0];
    scaleBg = [1, 1, 1.05];
    yText = [0, 0, -40];
  } else if (index === total - 1) {
    range = [fadePointPrev - crossfadeDuration, fadePointPrev + crossfadeDuration, 1];
    opacity = [0, 1, 1];
    scaleBg = [1.05, 1, 1];
    yText = [40, 0, 0];
  } else {
    range = [
      fadePointPrev - crossfadeDuration,
      fadePointPrev + crossfadeDuration,
      fadePointNext - crossfadeDuration,
      fadePointNext + crossfadeDuration
    ];
    opacity = [0, 1, 1, 0];
    scaleBg = [1.05, 1, 1, 1.05];
    yText = [40, 0, 0, -40];
  }

  return { range, opacity, scaleBg, yText };
};

const WorkItem = memo(({ work, index, scrollYProgress, total }: any) => {
  const { range, opacity: opacityRange, scaleBg: scaleRange, yText: yRange } = getAnimationRanges(index, total);

  const opacity = useTransform(scrollYProgress, range, opacityRange);
  const scale = useTransform(scrollYProgress, range, scaleRange);
  const y = useTransform(scrollYProgress, range, yRange);

  return (
    <motion.div style={{ opacity, zIndex: index }} className="absolute inset-0 w-full h-full text-white overflow-hidden pointer-events-none">
      {/* Image */}
      <motion.img 
        style={{ scale }} 
        src={`/works/${work.file}`} 
        className="absolute inset-0 w-full h-full object-cover origin-center" 
        alt={work.film} 
        loading="lazy"
        decoding="async"
      />
      {/* Overlays to ensure text readability */}
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

      {/* Text Content */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 lg:p-20 pointer-events-auto"
      >
        {/* Top Bar */}
        <div className="flex justify-between items-start w-full">
          <div className="font-medium text-xs md:text-sm tracking-[0.3em] text-white/80 uppercase">
             {(index + 1).toString().padStart(2, '0')} — {total.toString().padStart(2, '0')}
          </div>
          <div className="font-medium text-xs md:text-sm tracking-[0.3em] text-white/80 uppercase">
             Selected Works
          </div>
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-8">
          {/* Left Side: Film & Year */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-3 md:mb-6">
              <div className="font-medium text-xs md:text-sm tracking-[0.2em] text-white/70 uppercase">Film</div>
              <div className="w-8 h-[1px] bg-white/30" />
              <div className="font-medium text-xs md:text-sm tracking-[0.2em] text-white/70">{work.year}</div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[90px] xl:text-[120px] tracking-tighter leading-[0.9] font-bold text-white uppercase drop-shadow-lg">
              {work.film}
            </h2>
          </div>
          
          {/* Right Side: Role */}
          <div className="md:text-right pb-1 md:pb-3">
            <div className="font-medium text-xs md:text-sm tracking-[0.2em] text-white/70 mb-2 md:mb-4 uppercase md:justify-end flex items-center gap-4">
              <div className="w-8 h-[1px] bg-white/30 md:hidden" />
              Role
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] tracking-tight leading-none font-medium text-white uppercase drop-shadow-md">
              {work.character}
            </h3>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

const Works = memo(function Works() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-black" style={{ height: `${works.length * 100}vh` }} id="work">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {works.map((work, index) => (
           <WorkItem 
              key={index} 
              work={work} 
              index={index} 
              scrollYProgress={scrollYProgress} 
              total={works.length} 
           />
        ))}
      </div>
    </section>
  );
});

export default Works;
