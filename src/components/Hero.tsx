import React from 'react';
import { Gift, Compass, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';

export function Hero() {
  const handleHeroGiftClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { x, y },
      colors: ['#b8860b', '#ffd700']
    });
  };

  return (
    <section className="hero">
      <motion.span 
        className="hero-lotus"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', damping: 10 }}
      >
        <Gift size={52} />
      </motion.span>
      <div className="hero-program-badge">
        <span className="badge-icon">☼</span>
        <span>HÀNH LÀ TĂNG HIỂU BIẾT - NĂNG LỰC THẬT - BÀI HỌC SÂU SẮC MỖI NGÀY</span>
      </div>
      <h1 className="hero-title">Sử dụng <span className="text-highlight">Tâm Thức</span><br />đạt đến quyết định và hành động<br />chính xác</h1>
      <p className="hero-sub" style={{ maxWidth: '800px', margin: '0 auto 40px', fontWeight: 600, letterSpacing: '0.05em' }}>
        trong BẢN THÂN - GIA ĐÌNH - SỰ NGHIỆP
      </p>
      <div className="hero-cta-group">
        <div className="hero-cta">
          <a href="#dang-ky" className="btn-hero" onClick={handleHeroGiftClick}>
            <motion.span
              whileHover={{ rotate: 15, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              style={{ display: 'inline-flex', marginRight: '8px', verticalAlign: 'middle' }}
            >
              <Gift size={16} />
            </motion.span>
            <span className="ghi-danh-text">GHI DANH NHẬN TÀI LIỆU HỌC TẬP</span>
          </a>
        </div>
        <div className="hero-cta">
          <Link to="/ve-song-sang-suot" className="btn-hero-secondary" style={{ cursor: 'pointer', border: '1px solid var(--sun-main)' }}>
            <Smartphone size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
            <span className="ghi-danh-text">Về Sống Sáng Suốt</span>
          </Link>
        </div>
        <div className="hero-cta">
          <a href="#chan-doan" className="btn-hero-secondary">
            <Compass size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
            <span className="ghi-danh-text">Khám phá thêm bên trong bạn</span>
          </a>
        </div>
      </div>
      <div className="hero-waves">
        <div className="wave wave-1">
          <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,40 C320,100 480,-20 800,40 C1120,100 1280,0 1440,40 L1440,100 L0,100 Z" fill="var(--white)" fillOpacity="0.3" />
          </svg>
        </div>
        <div className="wave wave-2">
          <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z" fill="var(--white)" fillOpacity="0.5" />
          </svg>
        </div>
        <div className="wave wave-3">
          <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,60 C320,110 560,10 880,60 C1200,110 1320,40 1440,60 L1440,100 L0,100 Z" fill="var(--white)" />
          </svg>
        </div>
      </div>
    </section>
  );
}
