import { WavesTransition } from './WavesTransition';

export function Tower() {
  return (
    <section className="tower-sec">
      <div className="container">
        <div className="rv text-center">
          <div className="s-label" style={{ justifyContent: 'center' }}>Bản Đồ Tâm Thức</div>
          <h2>Tháp Ánh Sáng<br /><em>Bạn đang ở tầng nào?</em></h2>
          <div className="orn form-orn-fix">
            <div className="orn-line"></div>✦<div className="orn-line"></div>
          </div>
          <p className="lead mx-auto">8 tầng tâm thức — Nhìn thật rõ sự chuyển động tâm của bạn và điều chỉnh ngay lập tức từng hành vi, lời nói, suy nghĩ thông qua tháp ánh sáng</p>
        </div>
        <div className="tower-wrap rv" style={{ transitionDelay: '.2s' }}>
          <div className="tier t8">Tâm Thức <span className="tier-n">8</span></div>
          <div className="tier t7">Giao Thức <span className="tier-n">7</span></div>
          <div className="tier t6">Duy Thức <span className="tier-n">6</span></div>
          <div className="z-tag zL" style={{ width: '100%' }}>↑ Vùng Ánh Sáng</div>
          <div style={{ height: '10px' }}></div>
          <div className="tier t5">Ý Thức <span className="tier-n">5</span></div>
          <div className="tier t4">Nhận Thức <span className="tier-n">4</span></div>
          <div className="z-tag zF" style={{ width: '64%' }}>↑ Vùng Mong Manh</div>
          <div style={{ height: '24px' }}></div>
          <div className="tier t3">Vô Thức <span className="tier-n">3</span></div>
          <div className="tier t2">Tưởng Thức <span className="tier-n">2</span></div>
          <div className="tier t1">Tà Thức <span className="tier-n">1</span></div>
          <div className="z-tag zD" style={{ width: '100%' }}>↑ Vùng Hủy Diệt</div>
        </div>
      </div>
      <WavesTransition color="var(--cream-btn)" />
    </section>
  );
}
