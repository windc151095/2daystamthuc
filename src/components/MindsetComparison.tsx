import React from 'react';

export const MindsetComparison: React.FC = () => {
  return (
    <section className="mindset-sec" id="mindset-comparison">
      <div className="container">
        <div className="rv text-center">
          <div className="s-label" style={{ justifyContent: 'center' }}>LỰA CHỌN CỦA BẠN</div>
          <h2>Bạn Muốn Sống <em>Vô Thức</em> Hay <em>Tâm Thức?</em></h2>
          <div className="orn form-orn-fix">
            <div className="orn-line"></div>✦<div className="orn-line"></div>
          </div>
        </div>

        <div className="vs-sec rv" style={{ transitionDelay: '.2s' }}>
          <div className="vs-container">
            <div className="vs-card vs-left">
              <div className="vs-header">
                <span className="vs-icon-main">●</span>
                <div className="vs-titles">
                  <h3>Sống Từ Vô Thức</h3>
                  <p>Chế độ mặc định — chảy ra trước mọi tình huống</p>
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
                  <h3>Sống Từ Tâm Thức</h3>
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
