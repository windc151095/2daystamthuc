import React from 'react';

export const MindsetComparison: React.FC = () => {
  return (
    <section className="mindset-sec" id="mindset-comparison">
      <div className="container">
        <div className="rv text-center">
          <div className="s-label" style={{ justifyContent: 'center' }}>LỰA CHỌN CỦA BẠN</div>
          <h2>Bạn Chọn Sống <em>Vô Thức</em> Hay <em>Tâm Thức?</em></h2>
          <div className="orn form-orn-fix">
            <div className="orn-line"></div>☯<div className="orn-line"></div>
          </div>
        </div>

        <div className="vs-sec rv" style={{ transitionDelay: '.2s' }}>
          <div className="vs-container">
            <div className="vs-card vs-left">
              <div className="vs-header">
                <span className="vs-icon-main">●</span>
                <div className="vs-titles">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <h3>Sống Vô Thức</h3>
                    <a href="#faq" style={{ padding: '4px 12px', fontSize: '11px', borderRadius: '4px', background: 'var(--ink-soft)', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>CHỌN</a>
                  </div>
                  <p>Sống theo bản năng, nhân sinh quan hình thành</p>
                </div>
              </div>
              <ul className="vs-list">
                <li><span className="vs-item-icon">-</span> Phản ứng ngay không kiểm soát khi cảnh đến</li>
                <li><span className="vs-item-icon">-</span> Tức tối, bực bội — trí thông minh giảm, chỉ số ngu tăng</li>
                <li><span className="vs-item-icon">-</span> Làm việc chỉ để hoàn thành, không đặt tâm vào</li>
                <li><span className="vs-item-icon">-</span> Hay quên, vô tâm, không để ý, không tạo giá trị</li>
                <li><span className="vs-item-icon">-</span> Trao quyền điều khiển cảm xúc cho người ngoài</li>
                <li><span className="vs-item-icon">-</span> Phản bội cam kết với chính mình — trì hoãn mãi mãi</li>
              </ul>
            </div>

            <div className="vs-card vs-right">
              <div className="vs-header">
                <span className="vs-icon-main">✦</span>
                <div className="vs-titles">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <h3>Sống Tâm Thức</h3>
                    <a href="#dang-ky" style={{ padding: '4px 12px', fontSize: '11px', borderRadius: '4px', background: 'var(--sun-main)', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>CHỌN</a>
                  </div>
                  <p>Phải học, phải thực hành — không tự nhiên mà có</p>
                </div>
              </div>
              <ul className="vs-list">
                <li><span className="vs-item-icon">+</span> Tĩnh tâm lại, giải quyết tâm mình trước khi giải quyết cảnh</li>
                <li><span className="vs-item-icon">+</span> Trong lúc sáng suốt, tỉnh thức mới đi xử lý việc</li>
                <li><span className="vs-item-icon">+</span> Đặt tâm thật vào từng việc — tạo ra giá trị khác biệt</li>
                <li><span className="vs-item-icon">+</span> Biết ơn cả những tình huống khó — vì nó dạy mình nâng cấp</li>
                <li><span className="vs-item-icon">+</span> Làm chủ cảm xúc — hạnh phúc không phụ thuộc người ngoài</li>
                <li><span className="vs-item-icon">+</span> Giải quyết việc xong — mặt tươi, lòng nhẹ, khách hàng vui</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
