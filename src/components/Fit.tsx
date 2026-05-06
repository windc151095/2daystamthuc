import { WavesTransition } from './WavesTransition';

export function Fit() {
  return (
    <section className="fit">
      <div className="container">
        <div className="rv" style={{ textAlign: 'center' }}>
          <div className="s-label" style={{ justifyContent: 'center' }}>Ai Nên Tham Gia?</div>
          <h2>Sự kiện này <em>dành cho bạn</em> — hay không?</h2>
          <div className="orn" style={{ justifyContent: 'center', maxWidth: '280px', margin: '20px auto' }}>
            <div className="orn-line"></div>☯<div className="orn-line"></div>
          </div>
        </div>
        <div className="fit-grid">
          <div className="fit-block fit-yes rvL" style={{ transitionDelay: '.1s' }}>
            <h3>✓ Dành cho bạn</h3>
            <ul>
              <li>Đã mệt mỏi với những lớp học hô hào năng lượng sáo rỗng</li>
              <li>Cần công cụ khoa học, logic để tự giải phẫu tâm trí</li>
              <li>Sẵn sàng đối diện sự thật dù đôi khi không dễ chịu</li>
              <li>Muốn thay đổi thực sự — không chỉ cảm thấy tốt hơn tạm thời</li>
            </ul>
          </div>
          <div className="fit-block fit-no rvR" style={{ transitionDelay: '.2s' }}>
            <h3>– Không dành cho bạn</h3>
            <ul>
              <li>Chỉ muốn tìm "phép màu" làm giàu sau 1 đêm</li>
              <li>Không sẵn sàng đối diện với những sự thật xấu xí của bản thân</li>
              <li>Đến chỉ để xem cho biết, không có ý định thực hành</li>
              <li>Nghĩ rằng vấn đề của mình hoàn toàn do người khác gây ra</li>
            </ul>
          </div>
        </div>
      </div>
      <WavesTransition color="var(--sun-main)" />
    </section>
  );
}
