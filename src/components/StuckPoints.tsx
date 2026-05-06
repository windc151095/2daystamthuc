import { useState } from 'react';

const STUCK_DATA = {
  bn: [
    { id: 1, text: "Tự ti" }, { id: 2, text: "Ngại giao tiếp" }, { id: 3, text: "Hay trì hoãn" }, { id: 4, text: "Mê game quá mức" }, { id: 5, text: "Thức khuya thường xuyên" },
    { id: 6, text: "Lười học" }, { id: 7, text: "Luôn nghĩ tiêu cực" }, { id: 8, text: "Không yêu chính mình" }, { id: 9, text: "Sống buông xuôi" }, { id: 10, text: "Không biết mình muốn gì" },
    { id: 11, text: "Nghiện điện thoại" }, { id: 12, text: "Lười vận động" }, { id: 13, text: "Tự trách bản thân" }, { id: 14, text: "Không kiểm soát được cảm xúc" }, { id: 15, text: "Mau nản" },
    { id: 16, text: "Không kiên nhẫn" }, { id: 17, text: "Dễ bị ảnh hưởng bởi người khác" }, { id: 18, text: "Thiếu kỷ luật cá nhân" }, { id: 19, text: "Ham ăn, dễ nghiện đồ ngọt" }, { id: 20, text: "Sống không mục tiêu" }
  ],
  cv: [
    { id: 21, text: "Lười làm việc" }, { id: 22, text: "Thiếu trách nhiệm" }, { id: 23, text: "Không chủ động" }, { id: 24, text: "Làm việc chỉ để đối phó" }, { id: 25, text: "Không có kế hoạch rõ ràng" },
    { id: 26, text: "Hay đổ lỗi" }, { id: 27, text: "Dễ bỏ cuộc" }, { id: 28, text: "Sợ thất bại" }, { id: 29, text: "Làm việc không tập trung" }, { id: 30, text: "Thiếu đam mê" },
    { id: 31, text: "Ngại học cái mới" }, { id: 32, text: "Không tiếp thu góp ý" }, { id: 33, text: "Làm việc không có mục tiêu" }, { id: 34, text: "Thiếu kỹ năng làm việc nhóm" }, { id: 35, text: "Hay lướt mạng khi làm việc" },
    { id: 36, text: "Sợ bị đánh giá" }, { id: 37, text: "Làm việc theo cảm hứng" }, { id: 38, text: "Thiếu kỹ năng giao tiếp công sở" }, { id: 39, text: "Thiếu kỹ năng giải quyết vấn đề" }, { id: 40, text: "Không biết sắp xếp ưu tiên" }
  ],
  gd: [
    { id: 41, text: "Hay giận dỗi" }, { id: 42, text: "Không chia sẻ cảm xúc" }, { id: 43, text: "Không quan tâm tới người thân" }, { id: 44, text: "Ghen tị trong gia đình" }, { id: 45, text: "Không biết lắng nghe" },
    { id: 46, text: "Không thể hiện lòng biết ơn" }, { id: 47, text: "Cảm thấy bị xa cách với người thân" }, { id: 48, text: "Không dành thời gian cho gia đình" }, { id: 49, text: "Hay cãi nhau vì chuyện nhỏ" }, { id: 50, text: "Thiếu kiên nhẫn với người lớn" },
    { id: 51, text: "Không dám nói thật lòng" }, { id: 52, text: "Không hỗ trợ người thân" }, { id: 53, text: "Không cảm thấy được yêu thương" }, { id: 54, text: "Không chủ động tạo tích cực" }, { id: 55, text: "Trả lời cộc lốc, thiếu kết nối" },
    { id: 56, text: "Không đặt gia đình là ưu tiên" }, { id: 57, text: "Sống khép kín, ít giao tiếp" }, { id: 58, text: "Không có sự đồng hành" }, { id: 59, text: "Không có bữa ăn chung gia đình" }, { id: 60, text: "Không nhường nhịn người thân" }
  ]
} as const;

export function StuckPoints() {
  const [activeTab, setActiveTab] = useState<'bn' | 'cv' | 'gd'>('bn');
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  const toggleItem = (id: number) => {
    const newSet = new Set(selectedItems);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedItems(newSet);
  };

  return (
    <section className="stuck-sec">
      <div className="container">
        <div className="rv" style={{ textAlign: 'center' }}>
          <div className="s-label" style={{ justifyContent: 'center' }}>Tự Chẩn Đoán</div>
          <h2>60 Điểm Mắc Kẹt<br /><em>Bạn đang bị trói ở số nào?</em></h2>
          <div className="orn" style={{ justifyContent: 'center', maxWidth: '300px', margin: '20px auto' }}>
            <div className="orn-line"></div>✦<div className="orn-line"></div>
          </div>
          <p className="lead" style={{ margin: '0 auto' }}>Chọn những điểm bạn đang gặp phải. Hãy thành thật với chính mình.</p>
        </div>

        <div className="stuck-tabs rv" style={{ transitionDelay: '.1s' }}>
          <div className={`stuck-tab ${activeTab === 'bn' ? 'active' : ''}`} onClick={() => setActiveTab('bn')}>👤 Bản Thân</div>
          <div className={`stuck-tab ${activeTab === 'cv' ? 'active' : ''}`} onClick={() => setActiveTab('cv')}>💼 Công Việc</div>
          <div className={`stuck-tab ${activeTab === 'gd' ? 'active' : ''}`} onClick={() => setActiveTab('gd')}>👨‍👩‍👧 Gia Đình</div>
        </div>

        <div className="stuck-panel active">
          <div className="stuck-list">
            {STUCK_DATA[activeTab].map(item => (
              <div key={item.id} className={`stuck-item ${selectedItems.has(item.id) ? 'selected' : ''}`} onClick={() => toggleItem(item.id)}>
                <span className="s-num">{item.id.toString().padStart(2, '0')}</span>
                <span className="s-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="stuck-cta rv" style={{ transitionDelay: '.2s' }}>
          <span id="selected-count" style={{ color: selectedItems.size > 0 ? 'var(--teal-main)' : 'var(--text-muted)' }}>
            {selectedItems.size === 0 ? 'Bạn chưa chọn điểm nào — hãy thành thật nhìn vào bản thân' : `✓ Bạn đang mắc kẹt ở ${selectedItems.size} điểm — đây là lúc bắt đầu thay đổi`}
          </span>
          <p>Đã chọn xong? Nhắn mình các con số đó.<br />Mình sẽ gửi tặng bạn <strong>công thức Chuyển Dịch Tâm Thức</strong> phù hợp nhất.</p>
          <a href="#dang-ky" className="nav-cta" style={{ display: 'inline-block', marginTop: '4px' }}>Ghi Danh Nhận Giải Pháp →</a>
        </div>
      </div>
    </section>
  );
}
