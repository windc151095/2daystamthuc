import { WavesTransition } from './WavesTransition';

export function Journey() {
  return (
    <section className="comp-section">
      <div className="container overflow-visible">
        <div className="comp-grid">
          {/* Card: Vô Thức */}
          <div className="comp-card vothuc rvL">
            <div className="comp-head">
              <div className="comp-title">
                <span className="dot">●</span> 
                Sống Từ Vô Thức
              </div>
              <div className="comp-subtitle">Chế độ mặc định — 95% thời gian</div>
            </div>
            <div className="comp-list">
              <div className="comp-item">
                <span className="icon minus">—</span>
                <p>Phản ứng theo thói quen cũ, không chọn lựa</p>
              </div>
              <div className="comp-item">
                <span className="icon minus">—</span>
                <p>Cảm xúc điều khiển hành vi mà không hay</p>
              </div>
              <div className="comp-item">
                <span className="icon minus">—</span>
                <p>Tìm người ngoài để đổ lỗi hoặc cứu vớt</p>
              </div>
              <div className="comp-item">
                <span className="icon minus">—</span>
                <p>Lặp lại các vòng lặp mà không hiểu tại sao</p>
              </div>
              <div className="comp-item">
                <span className="icon minus">—</span>
                <p>Tri thức học được không áp dụng được vào thực tế</p>
              </div>
              <div className="comp-item">
                <span className="icon minus">—</span>
                <p>Sống theo kịch bản người khác viết cho mình</p>
              </div>
            </div>
          </div>

          {/* VS Circle */}
          <div className="vs-circle-wrap rv">
            <div className="vs-circle">VS</div>
          </div>

          {/* Card: Tâm Thức */}
          <div className="comp-card tamthuc rvR">
            <div className="comp-head">
              <div className="comp-title">
                <span className="star">✦</span>
                Sống Từ Tâm Thức
              </div>
              <div className="comp-subtitle">Trạng thái được chọn — có thể học được</div>
            </div>
            <div className="comp-list">
              <div className="comp-item">
                <span className="icon plus">+</span>
                <p>Quan sát rồi chọn phản ứng — không bị kéo đi</p>
              </div>
              <div className="comp-item">
                <span className="icon plus">+</span>
                <p>Cảm xúc là thông tin, không phải vũ khí</p>
              </div>
              <div className="comp-item">
                <span className="icon plus">+</span>
                <p>Nhận trách nhiệm về trải nghiệm của mình</p>
              </div>
              <div className="comp-item">
                <span className="icon plus">+</span>
                <p>Nhìn thấy vòng lặp — và bước ra khỏi nó</p>
              </div>
              <div className="comp-item">
                <span className="icon plus">+</span>
                <p>Tri thức được thực hành ngay, tạo thói quen mới</p>
              </div>
              <div className="comp-item">
                <span className="icon plus">+</span>
                <p>Tự viết kịch bản cuộc đời theo giá trị cốt lõi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WavesTransition color="var(--warm-bg)" />
    </section>
  );
}
