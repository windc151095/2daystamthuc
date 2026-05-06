import { WavesTransition } from './WavesTransition';

export function Diagnosis() {
  return (
    <section className="diag">
      <div className="container">
        <div className="rv" style={{ textAlign: 'center' }}>
          <div className="s-label" style={{ justifyContent: 'center' }}>Nhận Diện Cảnh Khổ</div>
          <h2>Bạn đang <em>sống</em>…<br />hay chỉ đang tồn tại?</h2>
          <div className="orn" style={{ justifyContent: 'center', maxWidth: '300px', margin: '20px auto' }}>
            <div className="orn-line"></div>☸<div className="orn-line"></div>
          </div>
          <p className="lead" style={{ margin: '0 auto' }}>Hãy đọc thật chậm ba trạng thái dưới đây. Nếu bạn thấy mình trong đó — đó không phải sự yếu đuối. Đó là sự trung thực đầu tiên dẫn đến thay đổi.</p>
        </div>
        <div className="pain-grid">
          <div className="pain-card rv" style={{ transitionDelay: '.1s' }}>
            <span className="pain-icon">🌪️</span>
            <h3>Mất Kiểm Soát Cảm Xúc</h3>
            <p>Bạn dễ nổi nóng với người thân yêu nhất, đưa ra quyết định sai lầm lúc tức giận, rồi chìm trong ân hận và dằn vặt mãi không thôi.</p>
          </div>
          <div className="pain-card rv" style={{ transitionDelay: '.2s' }}>
            <span className="pain-icon">🥀</span>
            <h3>Nỗ Lực Sai Cũi, Sai Đường</h3>
            <p>Làm việc 14 tiếng mỗi ngày, gồng gánh trách nhiệm, nhưng dòng tiền vẫn đứt gãy. Bạn đang dùng cực nhọc của thể xác để lấp liếm sự lười biếng của trí tuệ.</p>
          </div>
          <div className="pain-card rv" style={{ transitionDelay: '.3s' }}>
            <span className="pain-icon">🌫️</span>
            <h3>Rỗng Tuếch Nội Tâm</h3>
            <p>Có nhà, có xe, có gia đình… nhưng sâu thẳm bên trong là khoảng không vô định. Không biết mình sống vì điều gì. Cô đơn ngay giữa đám đông.</p>
          </div>
        </div>
        <div className="pain-quote rv" style={{ transitionDelay: '.15s' }}>
          <p>Đó chính là <strong>Vô Thức</strong> — con quái vật âm thầm rút cạn sinh khí, tàn phá các mối quan hệ và ví tiền của bạn mỗi ngày. Đã đến lúc bạn phải <strong>tỉnh giấc</strong>.</p>
        </div>
      </div>
      <WavesTransition color="var(--warm-bg)" />
    </section>
  );
}
