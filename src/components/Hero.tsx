import { BookOpenText, Compass } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero">
      <div className="ring"></div><div className="ring"></div><div className="ring"></div><div className="ring"></div><div className="ring"></div>
      <span className="hero-lotus"><BookOpenText size={52} /></span>
      <p className="hero-eyebrow">ZOOM thực hành ứng dụng · Hệ tri thức nền tảng SỐNG SÁNG SUỐT</p>
      <h1 className="hero-title">Tại sao bạn nỗ lực rất nhiều,<br />nhưng bình an và thịnh vượng<br />vẫn <em>từ chối bạn?</em></h1>
      <p className="hero-sub">02 Ngày hiểu chỉnh bạn - Sự khác biệt: Tâm thức và Vô thức</p>
      <p className="hero-desc">
        <strong>Đừng để vô thức làm chủ cuộc đời và tương lai của bạn</strong>
      </p>
      <div className="hero-cta-group">
        <div className="hero-cta">
          <a href="#dang-ky" className="btn-hero">
            <BookOpenText size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
            <span className="ghi-danh-text">GHI DANH NHẬN VÉ VIP MIỄN PHÍ</span>
          </a>
        </div>
        <div className="hero-cta">
          <a href="#chan-doan" className="btn-hero-secondary">
            <Compass size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
            <span className="ghi-danh-text">KHÁM PHÁ THÊM BÊN TRONG BẠN</span>
          </a>
        </div>
      </div>
      <span className="hero-note">Zoom kín · Giới hạn 100 chỗ · Dành cho người thực sự khao khát thay đổi</span>
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
