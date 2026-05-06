export function Hero() {
  return (
    <section className="hero">
      <div className="ring"></div><div className="ring"></div><div className="ring"></div><div className="ring"></div><div className="ring"></div>
      <span className="hero-lotus">🪷</span>
      <p className="hero-eyebrow">Sự Kiện Trực Tuyến Đặc Biệt · Hệ Sinh Thái Sống Sáng Suốt</p>
      <h1 className="hero-title">Tại sao bạn nỗ lực rất nhiều,<br />nhưng bình an và thịnh vượng<br />vẫn <em>từ chối bạn?</em></h1>
      <p className="hero-sub">02 Ngày Khai Mở Tâm Trí · Sự Khác Biệt: Tâm Thức &amp; Vô Thức</p>
      <p className="hero-desc">
        Bạn không lười biếng. Bạn không kém cỏi.<br />
        Sự bế tắc, sự lạnh nhạt và những đêm trằn trọc<br />
        chỉ đến từ một nguyên nhân duy nhất:<br />
        <strong>Bạn đang để cuộc đời bị điều khiển bởi Vô Thức.</strong>
      </p>
      <div className="hero-cta">
        <a href="#dang-ky" className="btn-hero">🪷 Ghi Danh Nhận Vé VIP Miễn Phí</a>
        <span className="hero-note">Zoom kín · Giới hạn 100 chỗ · Dành cho người thực sự khao khát thay đổi</span>
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
