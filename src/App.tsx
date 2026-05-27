/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState, FormEvent } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { Gift, User, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion, useAnimation, AnimatePresence } from 'motion/react';
import './index.css';

import { Hero } from './components/Hero';
import { Diagnosis } from './components/Diagnosis';
import { Tower } from './components/Tower';
import { MindsetComparison } from './components/MindsetComparison';
import { Fit } from './components/Fit';
import { FAQ } from './components/FAQ';
import { FormSection } from './components/FormSection';
import { Admin } from './components/Admin';
import { AboutApp } from './components/AboutApp';

function Home() {
  const [navPadding, setNavPadding] = useState('16px 40px');
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();

    const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (username === 'tamthucsss' && password === 'sss6868') {
      sessionStorage.setItem('admin_auth', 'true');
      setShowLogin(false);
      navigate('/admin');
    } else {
      setError('Sai tài khoản hoặc mật khẩu');
    }
  };

  const giftControls = useAnimation();

  const handleGiftClick = (e: React.MouseEvent) => {
    // Confetti burst
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { x, y },
      colors: ['#b8860b', '#ffd700', '#ffffff', '#f4e6d4']
    });

    // Animation for the gift icon
    giftControls.start({
      rotate: [0, -10, 10, -10, 10, 0],
      scale: [1, 1.2, 1],
      transition: { duration: 0.5 }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 640;
      const hPad = isMobile ? '20px' : '40px';
      setNavPadding(window.scrollY > 60 ? `10px ${hPad}` : `16px ${hPad}`);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('.rv,.rvL,.rvR');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { 
        if (e.isIntersecting) { 
          e.target.classList.add('in'); 
          io.unobserve(e.target); 
        } 
      });
    }, { threshold: 0.1 });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    if (!ctx) return;
    let W = window.innerWidth;
    let H = window.innerHeight;
    
    const resize = () => {
      W = cvs.width = window.innerWidth;
      H = cvs.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const palettes = [
      'hsla(45,85%,75%,',  /* Soft gold */
      'hsla(50,90%,80%,',  /* Bolder yellow */
      'hsla(40,70%,65%,',  /* Amber/Warm gold */
      'hsla(60,100%,90%,', /* White-ish yellow */
      'hsla(55,60%,85%,'   /* Pale sunlight */
    ];

    class Pt {
      x = 0; y = 0; r = 0; vy = 0; vx = 0; life = 0; decay = 0; col = '';
      constructor(init: boolean) { this.reset(init); }
      reset(init: boolean) {
        this.x = rand(0, W);
        this.y = init ? rand(0, H) : H + 6;
        this.r = rand(0.5, 2.2);
        this.vy = rand(-0.08, -0.32);
        this.vx = rand(-0.06, 0.06);
        this.life = rand(0.3, 1);
        this.decay = rand(0.0006, 0.002);
        this.col = palettes[Math.floor(Math.random() * palettes.length)];
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        this.life -= this.decay;
        if (this.life <= 0 || this.y < -5) this.reset(false);
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath(); 
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.col + this.life + ')'; 
        ctx.fill();
      }
    }

    const pts: Pt[] = [];
    for (let i = 0; i < 100; i++) pts.push(new Pt(true));
    
    let animationId: number;
    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => { p.update(); p.draw(); });
      animationId = requestAnimationFrame(loop);
    };
    loop();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}></div>
      <canvas id="cvs" ref={canvasRef}></canvas>

      <nav id="navbar" style={{ padding: navPadding }}>
        <div className="nav-logo-group">
          <div className="nav-logo">Sống · Sáng · Suốt</div>
          <div className="nav-slogan">Suốt ngày sống – Suốt ngày sáng – Suốt đời sống – Suốt đời sáng</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative' }}>
          <Link to="/ve-song-sang-suot" className="nav-cta">
            <span className="ghi-danh-text">VỀ SỐNG SÁNG SUỐT</span>
          </Link>
        </div>
      </nav>

      <Hero />
      <Diagnosis />
      <Tower />
      <MindsetComparison />
      <Fit />
      <FormSection />
      <FAQ />

      <footer>
        <p>© 2025 <span>Sống Sáng Suốt</span> &nbsp;·&nbsp; Rèn Tâm – Sáng Trí – Vững Bước &nbsp;·&nbsp; Chuyển Dịch Tâm Thức – Kiến Tạo Cuộc Đời</p>
      </footer>
    </>
  );
}

const pageTransitionVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" } }
};

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/admin" element={<PageTransition><Admin /></PageTransition>} />
        <Route path="/ve-song-sang-suot" element={<PageTransition><AboutApp /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
