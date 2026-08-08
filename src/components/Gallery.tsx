import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { memo, useEffect, useState, useRef, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const galleryImages = [
  "1.jpg",
  "486597987_18504407620001647_5061690996218006696_n.jpg",
  "588705306_18556085314001647_8809674788878632676_n.jpg",
  "655917308_18071971847228302_1605029674054466369_n.jpg",
  "669752234_18165537220418334_1913399036588578401_n.webp",
  "Amalda-Liz-walking-the-ramp-in-a-fashion-show.jpg",
  "images (1).jpg",
  "images (2).jpg",
  "images (3).jpg",
  "images (4).jpg",
  "images.jpg"
];

const GalleryItem = memo(({ img, index, onClick }: { img: string, index: number, onClick: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "200px" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="break-inside-avoid relative overflow-hidden bg-[#f0f0f0] group cursor-zoom-in mb-4 sm:mb-6 lg:mb-8"
      onClick={onClick}
    >
      <motion.div className="w-full h-full relative" style={{ y, scale: 1.15 }}>
        <img 
          src={`/img/${encodeURI(img)}`} 
          alt={`Gallery image ${index + 1}`}
          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]"
          loading={index < 4 ? "eager" : "lazy"}
          fetchPriority={index < 4 ? "high" : "auto"}
          decoding="async"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 flex items-center justify-center pointer-events-none">
        <span className="opacity-0 group-hover:opacity-100 text-white font-medium tracking-[0.3em] uppercase text-xs transition-opacity duration-700 drop-shadow-md">
          Enlarge
        </span>
      </div>
    </motion.div>
  );
});

const Gallery = memo(function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex]);

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => 
      prev !== null ? (prev === 0 ? galleryImages.length - 1 : prev - 1) : null
    );
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => 
      prev !== null ? (prev === galleryImages.length - 1 ? 0 : prev + 1) : null
    );
  };

  return (
    <>
      <Helmet>
        <title>Gallery | Amalda Liz</title>
        <meta name="description" content="Explore the portfolio archive of Amalda Liz, featuring editorial photography and runway moments." />
        <meta property="og:title" content="Gallery | Amalda Liz" />
        <meta property="og:description" content="Explore the portfolio archive of Amalda Liz, featuring editorial photography and runway moments." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="bg-[#fafafa] min-h-screen text-black">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pt-32 pb-24 px-4 md:px-8 lg:px-[40px]"
        >
          <div className="max-w-[1400px] mx-auto w-full">
            {/* Header */}
            <div className="flex flex-col mb-20 md:mb-32">
              <Link to="/" className="inline-flex items-center gap-3 text-[12px] font-bold tracking-[0.2em] text-black/40 hover:text-black uppercase transition-colors mb-12 self-start">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Return Home
              </Link>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-end">
                <div className="lg:col-span-7">
                  <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] tracking-tighter leading-[0.85] font-bold text-black uppercase">
                    Portfolio <br/> Archive.
                  </h1>
                </div>
                <div className="lg:col-span-5 lg:pb-4">
                  <p className="text-[16px] md:text-[20px] text-gray-500 max-w-md font-light leading-[1.6]">
                    A curated chronological collection of editorial photography, runway moments, and defining commercial highlights.
                  </p>
                </div>
              </div>
            </div>

            {/* Masonry-style Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 lg:gap-8">
              {galleryImages.map((img, index) => (
                <GalleryItem 
                  key={index} 
                  img={img} 
                  index={index} 
                  onClick={() => setSelectedImageIndex(index)} 
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-md"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-black/50 hover:text-black transition-colors z-[110] p-4 bg-black/5 rounded-full hover:bg-black/10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex(null);
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Navigation Controls */}
            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-black/30 hover:text-black transition-colors p-4 z-[110] bg-black/0 hover:bg-black/5 rounded-full"
              onClick={handlePrev}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-black/30 hover:text-black transition-colors p-4 z-[110] bg-black/0 hover:bg-black/5 rounded-full"
              onClick={handleNext}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            {/* Image Container */}
            <div 
              className="relative w-full h-full max-w-6xl mx-auto p-4 md:p-12 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                src={`/img/${encodeURI(galleryImages[selectedImageIndex])}`}
                alt={`Gallery image ${selectedImageIndex + 1} full view`}
                className="max-w-full max-h-full object-contain drop-shadow-2xl"
                loading="eager"
                fetchPriority="high"
                decoding="sync"
              />
              
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-black/40 text-[11px] tracking-[0.3em] font-bold uppercase">
                {String(selectedImageIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

export default Gallery;
