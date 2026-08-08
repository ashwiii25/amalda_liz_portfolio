import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { motion, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';

const Works = lazy(() => import('./components/Works'));
const Modelling = lazy(() => import('./components/Modelling'));
const Articles = lazy(() => import('./components/Articles'));
const About = lazy(() => import('./components/About'));
const Footer = lazy(() => import('./components/Footer'));
const Gallery = lazy(() => import('./components/Gallery'));

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
  >
    <Helmet>
      <title>Amalda Liz | Portfolio</title>
      <meta name="description" content="Portfolio of Amalda Liz, showcasing her work in modeling and film." />
      <meta property="og:title" content="Amalda Liz | Portfolio" />
      <meta property="og:description" content="Portfolio of Amalda Liz, showcasing her work in modeling and film." />
      <meta property="og:type" content="website" />
    </Helmet>
    <main className="relative">
      <Hero />
      <div className="relative z-10 bg-white w-full">
        <Suspense fallback={<div className="h-20" />}>
          <About />
          <Works />
          <Modelling />
          <Articles />
        </Suspense>
      </div>
    </main>
    <Suspense fallback={<div className="h-20" />}>
      <div className="relative z-10">
        <Footer />
      </div>
    </Suspense>
  </motion.div>
);

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white font-sans">
      <Navbar />
      <AnimatePresence mode="wait">
        {/* @ts-expect-error React 19 key prop issue with react-router-dom Routes */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Suspense fallback={<div className="min-h-screen bg-white" />}><Gallery /></Suspense>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
