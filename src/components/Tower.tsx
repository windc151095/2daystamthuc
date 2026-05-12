import { useState } from 'react';
import { WavesTransition } from './WavesTransition';

const TOWER_DATA = [
  {
    id: 8,
    name: 'Tâm Thức',
    region: 'Vùng Ánh Sáng',
    description: 'Tầng 8 - Tâm Thức (Quý trọng và Lan tỏa sự sống): Hành xử bằng tình yêu thương vô bờ và lòng từ bi. Họ coi việc cưu mang, giáo dục và cải hóa vận mệnh cho người khác là một mệnh lệnh, một sứ mệnh không ngừng nghỉ. Luôn ứng cảnh với thái độ thư thái, tươi cười, vô thường tĩnh tại và tràn đầy nhựa sống.',
    className: 't8'
  },
  {
    id: 7,
    name: 'Giao Thức',
    region: 'Vùng Ánh Sáng',
    description: 'Tầng 7 - Giao Thức (Giao thoa và Hưởng thụ tâm hồn): Sống thấu tình đạt lý, trọng tình trọng nghĩa. Tâm - thể - trí được hòa hợp, giúp họ luôn giữ được sự điềm tĩnh, nhẹ nhàng, khiêm tốn và biết dùng sự hiểu biết để làm đẹp môi trường sống cùng các mối quan hệ xung quanh.',
    className: 't7'
  },
  {
    id: 6,
    name: 'Duy Thức',
    region: 'Vùng Ánh Sáng',
    description: 'Tầng 6 - Duy Thức (Duy lý trí và Mở rộng vấn đề): Hành xử dựa trên tư duy, lý luận sắc bén và có trật tự. Họ luôn nghiên cứu sâu sắc, đọc nhiều, nghe nhiều, biết mở rộng vấn đề để phản biện đa chiều và kiểm chứng thông tin kỹ lưỡng trước khi hành động.',
    className: 't6'
  },
  {
    id: 5,
    name: 'Ý Thức',
    region: 'Vùng Mong Manh',
    description: 'Tầng 5 - Ý Thức (Gián đoạn và Nền tảng): Bắt đầu hiểu được tầm quan trọng của tri thức và muốn học hỏi nghiêm túc, nhưng độ kiên trì thấp. Khả năng kiểm soát cảm xúc chưa bền vững, nếu va chạm đến cái tôi hoặc gặp khó khăn, ý thức sẽ bị gián đoạn, dễ sinh ra ngông cuồng, ngạo mạn hoặc bất chấp.',
    className: 't5'
  },
  {
    id: 4,
    name: 'Nhận Thức',
    region: 'Vùng Mong Manh',
    description: 'Tầng 4 - Nhận Thức (Nông cạn và Cảm tính): Hành xử hoàn toàn dựa vào cảm xúc, "lúc vui thì đón nhận mà lúc buồn thì đóng băng luôn". Điểm sáng trong tư duy còn rời rạc, quan điểm dễ bị lôi kéo, ba phải và bất nhất trong lời nói lẫn hành động.',
    className: 't4'
  },
  {
    id: 3,
    name: 'Vô Thức',
    region: 'Vùng Hủy Diệt',
    description: 'Tầng 3 - Vô Thức (Vô minh và Vô tâm): Đặc trưng bởi sự lười biếng, ngại va chạm tri thức và hay bàn lùi. Người ở tầng này thường bảo thủ, bướng bỉnh, lảng tránh trách nhiệm, thích ôn nghèo kể khổ, than thân trách phận và hóng hớt thị phi.',
    className: 't3'
  },
  {
    id: 2,
    name: 'Tưởng Thức',
    region: 'Vùng Hủy Diệt',
    description: 'Tầng 2 - Tưởng Thức (Hoang tưởng và Suy tưởng): Nổi bật với tính cách luôn nghĩ mình là nhất, tự thổi phồng bản thân và thần thánh hóa những việc mình làm. Họ sống trong ảo giác, hay "bốc phét" dù chưa thực chứng, luôn tìm cách ngụy biện và bao biện hoàn hảo cho lỗi sai của mình.',
    className: 't2'
  },
  {
    id: 1,
    name: 'Tà Thức',
    region: 'Vùng Hủy Diệt',
    description: 'Tầng 1 - Tà Thức (Tinh quái và Tiểu xảo): Đặc trưng bởi sự gian manh, đê hèn và thủ đoạn. Người ở tầng này thường mượn ánh sáng thiện lành làm vỏ bọc để che đậy hành vi xấu xa, trục lợi cá nhân và áp chế kẻ yếu thế. Họ khôn vặt, hay đổ lỗi và không bao giờ nhận trách nhiệm về mình.',
    className: 't1'
  }
];

const UC_DATA = [
  {
    id: 1,
    name: 'Theo thói quen',
    region: 'Vùng Hủy Diệt',
    description: 'Hành vi lặp lại hàng ngày thiếu kiểm soát của ý thức. Biết cần phải thay đổi nhưng thói quen cũ vẫn lôi kéo và trì hoãn.',
    className: 'uc1'
  },
  {
    id: 2,
    name: 'Thấy bình thường',
    region: 'Vùng Hủy Diệt',
    description: 'Coi thói xấu và sự trì trệ là hiển nhiên, không muốn thay đổi. Coi những mâu thuẫn hay khó khăn là chuyện bình thường, phớt lờ việc giải quyết.',
    className: 'uc2'
  },
  {
    id: 3,
    name: 'Không biết mình vô thức',
    region: 'Vùng Hủy Diệt',
    description: 'Mất khả năng tự nhận thức, cảm biến tê liệt dẫn đến vô cảm. Làm việc thiếu trách nhiệm nhưng không tự nhận thức được lỗi của mình, để mặc mọi chuyện trôi đi.',
    className: 'uc3'
  },
  {
    id: 4,
    name: 'Tự thấy mình to (Cái tôi)',
    region: 'Vùng Hủy Diệt',
    description: 'Sự cố chấp, tự mãn, luôn cho mình là đúng. Thường xuyên áp đặt ý kiến lên người khác, không chịu lắng nghe vì tự thấy mình là nhất.',
    className: 'uc4'
  },
  {
    id: 5,
    name: 'Không thích học hỏi',
    region: 'Vùng Hủy Diệt',
    description: 'Từ chối tri thức mới, ngại thay đổi, thích hưởng thụ thụ động. Từ chối tiếp nhận cách làm mới vì lười biếng và bảo thủ với thói quen cũ.',
    className: 'uc5'
  },
  {
    id: 6,
    name: 'Năng lượng ù lì',
    region: 'Vùng Hủy Diệt',
    description: 'Trạng thái trì trệ, lười biếng, thiếu sức sống. Cảm thấy uể oải, không có động lực để thực hiện bất kỳ mục tiêu nào đã đề ra.',
    className: 'uc6'
  },
  {
    id: 7,
    name: 'Dạng "Ba phải"',
    region: 'Vùng Hủy Diệt',
    description: 'Sống không lập trường, lươn lẹo, "gió chiều nào che chiều nấy". Khi mắc lỗi thường tìm cách lươn lẹo, đổ lỗi cho hoàn cảnh hoặc người khác.',
    className: 'uc7'
  },
  {
    id: 8,
    name: 'Lưỡi trước não (Nói phét)',
    region: 'Vùng Hủy Diệt',
    description: 'Nói mà không nghĩ, hứa suông hoặc nói sai sự thật. Hứa việc chưa biết có làm được không chỉ để lấy lòng hoặc che đậy, não chưa hề tính toán lộ trình.',
    className: 'uc8'
  },
  {
    id: 9,
    name: 'Không biết ngày mai & Mất nhân cách',
    region: 'Vùng Hủy Diệt',
    description: 'Sống vị kỷ, chỉ biết hiện tại, bỏ mặc tương lai. Tổng hợp của "Cục - Cùn - Cụt - Chơ". Nổi cáu và nói cùn khi bị góp ý, sống buông thả, không còn lòng tự trọng.',
    className: 'uc9'
  }
];

export function Tower() {
  const [activeTierId, setActiveTierId] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'light' | 'unconscious'>('light');

  const activeData = viewMode === 'light' ? TOWER_DATA : UC_DATA;
  const activeTier = activeData.find(t => t.id === activeTierId);

  const toggleView = () => {
    setViewMode(prev => prev === 'light' ? 'unconscious' : 'light');
    setActiveTierId(null);
  };

  return (
    <section className="tower-sec" id="thap-anh-sang">
      <div className="container">
        <div className="rv text-center">
          <div className="s-label" style={{ justifyContent: 'center' }}>
            {viewMode === 'light' ? 'Bản Đồ Tâm Thức' : 'Vùng Hủy Diệt'}
          </div>
          <h2>
            {viewMode === 'light' ? (
              <>Tháp Ánh Sáng<br /><em>Bạn đang ở tầng nào?</em></>
            ) : (
              <>9 Cấp Độ Của<br /><em>Vô Thức</em></>
            )}
          </h2>
          <div className="orn form-orn-fix">
            <div className="orn-line"></div>☼<div className="orn-line"></div>
          </div>
          <p className="lead mx-auto">
            {viewMode === 'light' 
              ? '8 tầng tâm thức — Nhấn hoặc di chuột vào từng tầng để nhìn thật rõ sự chuyển động tâm của bạn và điều chỉnh ngay lập tức.'
              : 'Sự chìm đắm trong vô thức diễn ra qua nhiều mức độ khác nhau. Nhận diện rõ để biết mình đang ở đâu và tìm cách thoát khỏi bóng tối của thói quen.'
            }
          </p>

          <div style={{ marginTop: '24px' }}>
            <button 
              onClick={toggleView}
              className="view-toggle-btn"
            >
              {viewMode === 'light' ? 'Xem Thêm 9 Cấp Độ Của Vô Thức' : 'Quay Lại Tháp Ánh Sáng'}
            </button>
          </div>
        </div>

        <div className="tower-wrap rv" style={{ transitionDelay: '.2s' }} onMouseLeave={() => setActiveTierId(null)}>
          {activeData.map((tier) => (
            <div key={tier.id} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {viewMode === 'light' && tier.id === 8 && <div className="z-tag zL" style={{ width: '100%' }}>↑ Vùng Ánh Sáng</div>}
              {viewMode === 'light' && tier.id === 5 && <>
                <div style={{ height: '10px' }}></div>
                <div className="z-tag zF" style={{ width: '64%' }}>↑ Vùng Mong Manh</div>
              </>}
              {viewMode === 'light' && tier.id === 3 && <>
                <div style={{ height: '24px' }}></div>
                <div className="z-tag zD" style={{ width: '100%' }}>↑ Vùng Hủy Diệt</div>
              </>}

              {viewMode === 'unconscious' && tier.id === 1 && <div className="z-tag zD" style={{ width: '100%' }}>↓ Đi Sâu Vào Vô Thức</div>}
              
              <div 
                className={`tier ${tier.className} ${activeTierId === tier.id ? 'active' : ''} ${activeTierId !== null && activeTierId !== tier.id ? 'dimmed' : ''}`}
                onMouseEnter={() => setActiveTierId(tier.id)}
                onClick={() => setActiveTierId(tier.id)}
              >
                {tier.name} <span className="tier-n">{tier.id}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="rv" style={{ transitionDelay: '.4s' }}>
          {activeTier ? (
            <div className="tower-details-panel">
              <div className="tower-details-title">
                {activeTier.name} <span className="region">{activeTier.region}</span>
              </div>
              <div className="tower-details-desc">
                {activeTier.description}
              </div>
            </div>
          ) : (
            <div className="tower-details-placeholder">
              Hãy chọn một tầng tháp để xem chi tiết
            </div>
          )}
        </div>
      </div>
      <WavesTransition color="var(--cream-btn)" />
    </section>
  );
}
