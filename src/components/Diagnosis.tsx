import { WavesTransition } from './WavesTransition';

export function Diagnosis() {
  const painpoints = [
    {
      icon: "⚡",
      title: "Mất Năng Lượng Không Rõ Lý Do",
      desc: "Một câu nói làm mình tụt năng lượng. Ngày qua ngày cứ cảm giác bị kéo đi mà không biết về đâu. Làm mọi thứ bằng cảm tính.",
      insight: "Vô thức đang tiêu tốn 90% năng lượng của bạn"
    },
    {
      icon: "💔",
      title: "Mối Quan Hệ Đứt Gãy",
      desc: "Nói chuyện với nhau mà như không nghe. Hay cãi nhau vì những điều nhỏ. Xa cách dần dù vẫn ở cùng nhà, cùng môi trường làm việc. Không hiểu tại sao.",
      insight: "Hai vô thức đang 'chiến' với nhau, không phải hai người"
    },
    {
      icon: "🌀",
      title: "Quyết Định Sai Rồi Lại Sai",
      desc: "Chọn sai người, chọn sai việc, hay do dự quá lâu. Cảm giác như không có \"la bàn\" nội tâm để định hướng.",
      insight: "Thiếu tâm thức giảm độ nhạy bén, trực trào nỗi lo sợ, thiếu sự quyết đoán"
    },
    {
      icon: "🔁",
      title: "Lặp Lại Vòng Lặp Không Lối Ra",
      desc: "Biết rõ cần thay đổi nhưng vẫn làm y như cũ. Đã học nhiều, đọc nhiều nhưng không áp dụng được. Hiểu mà vẫn không làm được.",
      insight: "Học nhiều nhưng không thể ứng biến linh hoạt tình huống xảy đến bất ngờ"
    },
    {
      icon: "😤",
      title: "Cảm Xúc Bùng Phát Mất Kiểm Soát",
      desc: "Tức giận quá mức với những chuyện nhỏ. Hay lo lắng không có lý do rõ ràng. Cảm xúc làm chủ thay vì bạn làm chủ cảm xúc.",
      insight: "Vùng ký ức tổn thương ùa về làm vô thức trực trào cảm xúc"
    },
    {
      icon: "🤷",
      title: "Không Biết Mình Thực Sự Muốn Gì",
      desc: "Làm việc vì áp lực, sống vì kỳ vọng người khác. Chưa từng thật sự hỏi: mình muốn gì? Mình là ai ngoài vai trò xã hội?",
      insight: "Tâm thức dẫn ánh sáng,con đường thấy rõ tương lai"
    }
  ];

  return (
    <section className="diag" id="chan-doan">
      <div className="container">
        <div className="rv" style={{ textAlign: 'center' }}>
          <div className="s-label" style={{ justifyContent: 'center' }}>BẠN CÓ ĐANG GẶP ĐIỀU NÀY?</div>
          <h2>Nếu <span className="text-highlight">Vô Thức</span> Làm Chủ Cuộc Đời</h2>
          <div className="orn" style={{ justifyContent: 'center', maxWidth: '300px', margin: '20px auto' }}>
            <div className="orn-line"></div>✦<div className="orn-line"></div>
          </div>
          <p className="lead" style={{ margin: '0 auto', maxWidth: '800px' }}>
            Phần lớn chúng ta sống và phản ứng theo vô thức — Hãy đọc thật chậm 06 biểu hiện dưới đây
          </p>
        </div>
        <div className="pain-grid six-cards">
          {painpoints.map((p, idx) => (
            <div key={idx} className="pain-card rv" style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}>
              <span className="pain-icon">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="pain-insight">
                <span className="arrow">→</span> {p.insight}
              </div>
            </div>
          ))}
        </div>
        <div className="pain-quote rv" style={{ transitionDelay: '.15s', textAlign: 'center' }}>
          <p>Đó chính là <strong>Vô Thức</strong> — con quái vật âm thầm rút cạn sinh khí, tàn phá các mối quan hệ và ví tiền của bạn mỗi ngày. Đã đến lúc bạn phải <strong>tỉnh giấc</strong>.</p>
        </div>
        <div className="rv" style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="#dang-ky" className="btn-secondary" style={{ display: 'inline-block' }}>
            <span className="ghi-danh-text">NHẬN CÔNG THỨC DỊCH CHUYỂN</span>
          </a>
        </div>
      </div>
      <WavesTransition color="var(--warm-bg)" />
    </section>
  );
}
