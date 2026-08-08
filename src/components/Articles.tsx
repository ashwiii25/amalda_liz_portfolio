import { motion } from 'motion/react';
import { memo } from 'react';
import SectionHeader from './SectionHeader';

const articles = [
  {
    title: "The perfect debut: Amalda Liz",
    source: "Deccan Chronicle",
    url: "https://www.deccanchronicle.com/entertainment/mollywood/280516/the-perfect-debut-amalda-liz.html"
  },
  {
    title: "Bramayugam star Amalda Liz says many still believe she is a newcomer in this industry",
    source: "OTT Play",
    url: "https://www.ottplay.com/interview/bramayugam-star-amalda-liz-says-many-still-believe-she-is-a-newcomer-in-this-industry-exclusive/58d2320585708"
  },
  {
    title: "Chat with actress Amalda Liz",
    source: "Media One",
    url: "https://www.mediaoneonline.com/entertainment/chat-with-actress-amalda-liz-246069"
  }
];

const Articles = memo(function Articles() {
  return (
    <section className="px-4 md:px-8 lg:px-[40px] py-[80px] md:py-[140px] bg-[#f9f9f9]" id="articles">
      <div className="max-w-[1200px] mx-auto w-full">
        <SectionHeader number="04" title="News & Articles" />
        
        <div className="mt-16 md:mt-24 flex flex-col border-t border-black/10">
          {articles.map((article, index) => (
            <motion.a 
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group block border-b border-black/10 py-8 md:py-12 hover:bg-white transition-colors duration-500 px-4 -mx-4 md:px-8 md:-mx-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <h3 className="text-[20px] md:text-[28px] font-medium tracking-tight leading-[1.3] text-black max-w-[800px] group-hover:text-gray-600 transition-colors duration-300">
                  {article.title}
                </h3>
                
                <div className="flex items-center gap-6">
                  <span className="text-[12px] font-bold tracking-[0.2em] text-black/40 uppercase">
                    {article.source}
                  </span>
                  
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-300">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:rotate-45 transition-transform duration-300">
                      <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Articles;
