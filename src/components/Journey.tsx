export function Journey() {
  return (
    <section className="journey">
      <div className="container">
        <div className="rv" style={{ textAlign: 'center' }}>
          <div className="s-label" style={{ justifyContent: 'center' }}>Hành Trình 2 Ngày</div>
          <h2>Chuyển Dịch Tâm Thức<br /><em>Kiến Tạo Vận Mệnh</em></h2>
          <div className="orn" style={{ justifyContent: 'center', maxWidth: '280px', margin: '20px auto' }}>
            <div className="orn-line"></div>❧<div className="orn-line"></div>
          </div>
          <p className="lead" style={{ margin: '0 auto' }}>Không phải thêm kiến thức. Không phải động lực nhất thời. Đây là công cụ khoa học để bạn tự tay sắp xếp lại tâm trí của chính mình.</p>
        </div>
        <div className="days-grid">
          <div className="day-card rvL" style={{ transitionDelay: '.1s' }}>
            <div className="day-head">
              <div className="day-n">01</div>
              <div>
                <div className="day-meta-tag">Ngày Đầu Tiên</div>
                <div className="day-meta-name">Phân Biệt Rõ Tâm Thức và Vô Thức</div>
              </div>
            </div>
            <div className="day-body">
              <div className="day-row"><div className="day-dot"></div><p><strong>Bóc trần sự thật:</strong> Giải phẫu lý do tại sao bạn hành xử nóng giận, sợ hãi, trì hoãn — ngay cả khi biết là sai.</p></div>
              <div className="day-row"><div className="day-dot"></div><p><strong>Nhận diện "Giặc nội tâm":</strong> Nhìn thấu những ảo giác, ngụy biện đang đánh lừa não bộ của bạn mỗi ngày.</p></div>
              <div className="day-row"><div className="day-dot"></div><p><strong>Thức tỉnh:</strong> Đo lường chính xác bạn đang ở đâu trong 9 Cảnh Giới của đời người.</p></div>
            </div>
          </div>
          <div className="day-card rvR" style={{ transitionDelay: '.2s' }}>
            <div className="day-head">
              <div className="day-n">02</div>
              <div>
                <div className="day-meta-tag">Ngày Thứ Hai</div>
                <div className="day-meta-name">Ứng Dụng Tâm Thức vào Thực Tiễn</div>
              </div>
            </div>
            <div className="day-body">
              <div className="day-row"><div className="day-dot"></div><p><strong>Từ lý thuyết đến thực chiến:</strong> "Bộ Dò, Bộ Cảm" để tự hóa giải những cơn giận dữ ngay lập tức.</p></div>
              <div className="day-row"><div className="day-dot"></div><p><strong>Chữa lành mối quan hệ:</strong> Dùng "Vòng Tròn Hạnh Phúc" để rã đông hôn nhân, kết nối lại với con cái.</p></div>
              <div className="day-row"><div className="day-dot"></div><p><strong>Khai thông dòng tiền:</strong> Đặt lại "Trụ Ánh Sáng" để ra quyết định bằng trí tuệ thay vì bản năng.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
