import { useState } from 'react';

export function FormSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!name.trim() || !phone.trim()) {
      alert('Bạn vui lòng điền đầy đủ họ tên và số Zalo nhé 🙏');
      return;
    }
    setFormSubmitted(true);
    document.getElementById('dang-ky')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="form-sec" id="dang-ky">
      <div className="form-wave-top">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,35 C360,70 720,0 1080,35 C1260,52 1380,28 1440,35 L1440,0 L0,0 Z" fill="#D0EFEF" />
        </svg>
      </div>
      <div className="container" style={{ paddingTop: '60px' }}>
        <div className="rv" style={{ textAlign: 'center' }}>
          <div className="s-label" style={{ justifyContent: 'center' }}>Ghi Danh Ngay Hôm Nay</div>
          <h2>Cánh cửa tỉnh thức đang mở.<br /><em>Bạn chọn bước vào?</em></h2>
          <div className="orn" style={{ justifyContent: 'center', maxWidth: '280px', margin: '18px auto' }}>
            <div className="orn-line"></div>🪷<div className="orn-line"></div>
          </div>
          <p className="lead" style={{ margin: '0 auto' }}>Hay quay lại với sự bế tắc cũ — đó là lựa chọn của bạn.</p>
        </div>
        <div className="form-shell rv" style={{ transitionDelay: '.15s' }}>
          {!formSubmitted ? (
            <div>
              <div className="form-group">
                <label>Họ và Tên</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nhập họ tên của bạn…" autoComplete="name" />
              </div>
              <div className="form-group">
                <label>Số Zalo · Nhận Vé &amp; Tài Liệu</label>
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Số điện thoại Zalo của bạn…" autoComplete="tel" />
              </div>
              <button className="btn-submit" onClick={handleSubmit}>
                🪷 Tôi Muốn Tham Gia — Gửi Vé Cho Tôi
              </button>
              <p className="form-trust">🔒 Thông tin được bảo mật 100% · Chỉ dùng để cấp quyền truy cập lớp học</p>
            </div>
          ) : (
            <div className="thankyou" style={{ display: 'block' }}>
              <div className="ty-icon">🙏</div>
              <h3>Chúc Mừng Bạn Đã Ghi Danh!</h3>
              <p>Vé Zoom, ID và Mật khẩu sẽ <strong>chỉ được phát trong Group Zalo kín</strong>.<br />
                Tặng kèm: Ebook <em>"Bản đồ Tâm Thức"</em> để bạn đọc trước.<br /><br />
                Hãy bấm vào nút bên dưới để vào Group nhận vé ngay!</p>
              <a href="#" className="btn-zalo">💬 Vào Group Zalo Nhận Vé Ngay</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
