import { motion, AnimatePresence } from 'motion/react';
import { memo, useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'About', href: '/#about' },
  { name: 'Works', href: '/#work' },
  { name: 'Modelling', href: '/#modelling' },
  { name: 'Articles', href: '/#articles' },
];

const Navbar = memo(function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        className="fixed top-0 left-0 w-full z-[60] pointer-events-none"
      >
        <div className="w-full h-[100px] flex items-center px-4 md:px-8 lg:px-[40px]">
          <AnimatePresence>
            {!isScrolled ? (
              <motion.div
                key="full-navbar"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-2 md:grid-cols-3 items-center w-full pointer-events-auto text-white"
              >
                <div className="font-bold text-[20px] md:text-[24px] tracking-tight justify-self-start">
                  <a href="/">Amalda Liz</a>
                </div>
                <div className="hidden md:flex justify-center gap-6 lg:gap-10 font-bold text-[14px] md:text-[16px] tracking-tight">
                  {links.map((link) => (
                    <a key={link.name} href={link.href} className="hover:opacity-70 transition-opacity">
                      {link.name}
                    </a>
                  ))}
                </div>
                <div className="flex justify-end font-bold text-[14px] md:text-[16px] tracking-tight justify-self-end">
                  <a href="/#contact" className="hover:opacity-70 transition-opacity">
                    Contact
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="compact-navbar"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                className="absolute right-4 md:right-8 lg:right-[40px] pointer-events-auto"
              >
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="bg-black text-white p-3 md:p-4 rounded-full shadow-xl hover:scale-105 transition-transform flex items-center justify-center"
                  aria-label="Toggle Menu"
                >
                  <motion.div
                     initial={false}
                     animate={{ rotate: isMenuOpen ? 90 : 0 }}
                     transition={{ duration: 0.3 }}
                  >
                     {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </motion.div>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isScrolled && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[100px] right-4 md:right-8 lg:right-[40px] z-[55] bg-black text-white p-6 rounded-3xl shadow-2xl min-w-[220px]"
          >
            <div className="flex flex-col gap-6">
              <div className="font-bold text-[18px] border-b border-white/20 pb-4">
                <a href="/" onClick={() => setIsMenuOpen(false)}>Amalda Liz</a>
              </div>
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="font-bold text-[16px] hover:text-gray-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="font-bold text-[16px] hover:text-gray-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

export default Navbar;

