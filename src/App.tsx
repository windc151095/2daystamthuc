/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { BookOpenText } from 'lucide-react';
import './index.css';

import { Hero } from './components/Hero';
import { Diagnosis } from './components/Diagnosis';
import { StuckPoints } from './components/StuckPoints';
import { Tower } from './components/Tower';
import { Journey } from './components/Journey';
import { Fit } from './components/Fit';
import { FormSection } from './components/FormSection';

export default function App() {
  const [navPadding, setNavPadding] = useState('16px 40px');
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setNavPadding(window.scrollY > 60 ? '10px 40px' : '16px 40px');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        <div className="nav-logo">Sống · Sáng · Suốt</div>
        <a href="#dang-ky" className="nav-cta">
          <BookOpenText size={12} /> <span className="ghi-danh-text">GHI DANH MIỄN PHÍ</span>
        </a>
      </nav>

      <Hero />
      <Diagnosis />
      <StuckPoints />
      <Tower />
      <Journey />
      <Fit />
      <FormSection />

      <footer>
        <p>© 2025 <span>Sống Sáng Suốt</span> &nbsp;·&nbsp; Rèn Tâm – Sáng Trí – Vững Bước &nbsp;·&nbsp; Chuyển Dịch Tâm Thức – Kiến Tạo Cuộc Đời</p>
      </footer>
    </>
  );
}
