import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
    className: 'uc1',
    examples: {
      self: 'Thức khuya lướt điện thoại vô định hoặc cắn móng tay mỗi khi lo lắng mà không nhận ra.',
      family: 'Luôn để bát đũa bẩn qua đêm hoặc quên không chào hỏi khi đi làm về vì coi đó là thói quen hiển nhiên.',
      career: 'Vừa ngồi vào bàn làm việc đã mở mạng xã hội hoặc trả lời email một cách máy móc trước khi giải quyết việc chính.'
    }
  },
  {
    id: 2,
    name: 'Thấy bình thường',
    region: 'Vùng Hủy Diệt',
    description: 'Coi thói xấu và sự trì trệ là hiển nhiên, không muốn thay đổi. Coi những mâu thuẫn hay khó khăn là chuyện bình thường, phớt lờ việc giải quyết.',
    className: 'uc2',
    examples: {
      self: 'Chấp nhận việc cơ thể thừa cân, lười vận động và coi đó là trạng thái "ai cũng vậy".',
      family: 'Coi việc vợ chồng không trò chuyện, con cái chỉ dán mắt vào Ipad trong bữa cơm là điều "hiển nhiên ở thời đại này".',
      career: 'Thấy lỗi sai trong báo cáo nhưng mặc kệ vì cho rằng "một chút sai sót nhỏ không ảnh hưởng đến ai".'
    }
  },
  {
    id: 3,
    name: 'Không biết mình vô thức',
    region: 'Vùng Hủy Diệt',
    description: 'Mất khả năng tự nhận thức, cảm biến tê liệt dẫn đến vô cảm. Làm việc thiếu trách nhiệm nhưng không tự nhận thức được lỗi của mình, để mặc mọi chuyện trôi đi.',
    className: 'uc3',
    examples: {
      self: 'Nghĩ mình là người thân thiện nhưng thực tế luôn dùng giọng điệu gắt gỏng khi giao tiếp (vùng mù của nhận thức).',
      family: 'Tin rằng mình đang hy sinh vì gia đình nhưng thực chất đang áp đặt và kiểm soát con cái một cách thái quá.',
      career: 'Tự nhận mình là nhân viên trách nhiệm nhưng thực tế thường xuyên đẩy việc khó cho đồng nghiệp mà không hề hay biết.'
    }
  },
  {
    id: 4,
    name: 'Tự thấy mình to (Cái tôi)',
    region: 'Vùng Hủy Diệt',
    description: 'Sự cố chấp, tự mãn, luôn cho mình là đúng. Thường xuyên áp đặt ý kiến lên người khác, không chịu lắng nghe vì tự thấy mình là nhất.',
    className: 'uc4',
    examples: {
      self: 'Từ chối mọi lời góp ý về lối sống vì tin rằng mình "đủ trải đời" và luôn đúng.',
      family: 'Bắt con cái phải theo đuổi ước mơ dang dở của mình vì cho rằng "bố mẹ luôn biết điều gì tốt nhất".',
      career: 'Coi thường ý kiến của đồng nghiệp trẻ hơn vì tự phụ về thâm niên và kinh nghiệm cũ của bản thân.'
    }
  },
  {
    id: 5,
    name: 'Không thích học hỏi',
    region: 'Vùng Hủy Diệt',
    description: 'Từ chối tri thức mới, ngại thay đổi, thích hưởng thụ thụ động. Từ chối tiếp nhận cách làm mới vì lười biếng và bảo thủ với thói quen cũ.',
    className: 'uc5',
    examples: {
      self: 'Chọn mua sắm, xem phim thay vì đầu tư thời gian và tiền bạc vào một khóa học phát triển tư duy.',
      family: 'Né tránh việc đọc sách về tâm lý giáo dục con cái vì cho rằng "trời sinh voi trời sinh cỏ".',
      career: 'Từ chối làm quen với công nghệ hoặc phần mềm mới vì lười thay đổi quy trình làm việc đã cũ.'
    }
  },
  {
    id: 6,
    name: 'Năng lượng ù lì',
    region: 'Vùng Hủy Diệt',
    description: 'Trạng thái trì trệ, lười biếng, thiếu sức sống. Cảm thấy uể oải, không có động lực để thực hiện bất kỳ mục tiêu nào đã đề ra.',
    className: 'uc6',
    examples: {
      self: 'Luôn cảm thấy mệt mỏi, trì hoãn việc tập thể dục dù đã lên kế hoạch nhiều lần.',
      family: 'Chỉ muốn nằm một chỗ sau khi đi làm về, không muốn tham gia bất kỳ hoạt động gắn kết nào với người thân.',
      career: 'Làm việc cầm chừng, thiếu sáng kiến, chỉ mong hết giờ để về và lẩn tránh các dự án đòi hỏi sự đổi mới.'
    }
  },
  {
    id: 7,
    name: 'Dạng "Ba phải"',
    region: 'Vùng Hủy Diệt',
    description: 'Sống không lập trường, lươn lẹo, "gió chiều nào che chiều nấy". Khi mắc lỗi thường tìm cách lươn lẹo, đổ lỗi cho hoàn cảnh hoặc người khác.',
    className: 'uc7',
    examples: {
      self: 'Thay đổi quan điểm cá nhân liên tục tùy theo đám đông đang nói chuyện cùng để được yêu thích.',
      family: 'Không dám đứng ra bảo vệ vợ/chồng trước mặt bố mẹ (hoặc ngược lại), luôn chọn cách "gió chiều nào che chiều nấy".',
      career: 'Luôn đồng ý với mọi quyết định của sếp dù biết sai, sau đó lại than vãn với đồng nghiệp sau lưng.'
    }
  },
  {
    id: 8,
    name: 'Lưỡi trước não (Nói phét)',
    region: 'Vùng Hủy Diệt',
    description: 'Nói mà không nghĩ, hứa suông hoặc nói sai sự thật. Hứa việc chưa biết có làm được không chỉ để lấy lòng hoặc che đậy, não chưa hề tính toán lộ trình.',
    className: 'uc8',
    examples: {
      self: 'Tự vẽ ra một cuộc sống hào nhoáng trên mạng xã hội khác xa với thực tế nghèo nàn của bản thân.',
      family: 'Hứa với con sẽ đưa đi chơi hoặc hứa với bạn đời sẽ sửa đổi tật xấu nhưng không bao giờ thực hiện.',
      career: 'Phóng đại kết quả công việc trong các buổi họp hoặc nhận vơ công lao của tập thể về mình để thăng tiến.'
    }
  },
  {
    id: 9,
    name: 'Không biết ngày mai & Mất nhân cách',
    region: 'Vùng Hủy Diệt',
    description: 'Sống vị kỷ, chỉ biết hiện tại, bỏ mặc tương lai. Tổng hợp của "Cục - Cùn - Cụt - Chơ". Nổi cáu và nói cùn khi bị góp ý, sống buông thả, không còn lòng tự trọng.',
    className: 'uc9',
    examples: {
      self: 'Tiêu hết số tiền tiết kiệm vào các cuộc nhậu nhẹt hoặc món đồ xa xỉ mà không có quỹ dự phòng y tế.',
      family: 'Bỏ bê việc giáo dục đạo đức cho con cái, chỉ tập trung vào việc thỏa mãn nhu cầu vật chất tức thời.',
      career: 'Chấp nhận làm những việc phạm pháp hoặc thiếu đạo đức để đạt lợi nhuận nhanh, mặc kệ hậu quả lâu dài cho sự nghiệp.'
    }
  }
];

const EXAMPLE_DATA = [
  {
    id: 1,
    name: 'Tà thức',
    region: 'Vùng Hủy Diệt',
    description: 'Bóp méo sự thật: Không tìm cách sửa lỗi mà tìm cách che giấu, hạ bệ, đổ tội.\n\nBạn có thể nói xấu Nam, đẩy hết trách nhiệm cho Nam, hoặc bịa lý do với khách hàng như: "hệ thống lỗi", "virus", "mất điện".\n\n- Cốt lõi: Không giải quyết vấn đề, chỉ bảo vệ cái tôi bằng sự gian dối.\n- Hậu quả: Mất uy tín, mất niềm tin, làm bối cảnh tối thêm.',
    className: 't1'
  },
  {
    id: 2,
    name: 'Tưởng thức',
    region: 'Vùng Hủy Diệt',
    description: 'Tự diễn trong sợ hãi: Tâm trí bắt đầu vẽ ra hàng loạt kịch bản xấu: "Chết rồi, chắc bị đuổi việc." "Sếp sẽ ghét mình." "Khách hàng hủy hợp đồng mất."\n\nThực tế chưa chắc đã sụp đổ, nhưng trong đầu đã tự tạo ra một cơn bão.\n\n- Cốt lõi: Bị nỗi sợ kéo đi.\n- Hậu quả: Mất bình tĩnh, mất năng lượng, không còn đủ sáng để hành động.',
    className: 't2'
  },
  {
    id: 3,
    name: 'Vô thức',
    region: 'Vùng Hủy Diệt',
    description: 'Đổ lỗi và phản ứng bản năng: Cái tôi trỗi dậy. Bạn quát Nam, đập bàn, thanh minh với sếp: "Lỗi là của Nam, tôi không liên quan." Bạn phản ứng để tự vệ, không phải để giải quyết.\n\n- Cốt lõi: Bị cái tôi điều khiển.\n- Hậu quả: Nam sụp hơn, sếp giận hơn, đội nhóm rối hơn.',
    className: 't3'
  },
  {
    id: 4,
    name: 'Nhận thức',
    region: 'Vùng Mong Manh',
    description: 'Bắt đầu thấy mình sai: Bạn bắt đầu giật mình: "Mình đang nóng." "Mình đang đổ lỗi." "Mình cũng đang góp phần làm bối cảnh nặng hơn."\n\nĐây là lúc ánh sáng bắt đầu xuất hiện, nhưng nội lực chưa đủ mạnh. Biết mình sai, nhưng trong lòng vẫn còn ấm ức, khó chịu.\n\n- Cốt lõi: Đã thấy vấn đề trong chính mình.\n- Hạn chế: Thấy được nhưng chưa chuyển hóa được.',
    className: 't4'
  },
  {
    id: 5,
    name: 'Ý thức',
    region: 'Vùng Mong Manh',
    description: 'Muốn sửa nhưng còn gồng: Bạn tự nhắc mình: "Không được nổi nóng." "Phải bình tĩnh." "Phải lo giải pháp."\n\nNhưng bên trong vẫn căng. Mặt còn nặng, lòng còn bực, năng lượng chưa thật sự thông.\n\n- Cốt lõi: Đã muốn làm chủ bối cảnh.\n- Hạn chế: Vẫn đang kìm nén, chưa thật sự tự do.',
    className: 't5'
  },
  {
    id: 6,
    name: 'Duy thức',
    region: 'Vùng Ánh Sáng',
    description: 'Nhìn ra nguyên nhân sâu: Bạn bắt đầu nhìn vấn đề bằng kinh nghiệm và chiều sâu:\nNam sai, nhưng không chỉ Nam sai. Lỗi còn nằm ở quy trình backup, kiểm tra dữ liệu, phân quyền, giám sát trước giờ G.\n\nBạn cũng thấy cơn giận của mình đến từ sĩ diện, nỗi sợ và cái tôi bị chạm.\n\n- Cốt lõi: Nhìn được nguyên nhân — hệ quả.\n- Giá trị: Không chỉ xử lý ngọn, bắt đầu thấy gốc.',
    className: 't6'
  },
  {
    id: 7,
    name: 'Giao thức',
    region: 'Vùng Ánh Sáng',
    description: 'Chuyển hóa bằng hành động đúng: Bạn bắt đầu đóng lại những dòng năng lượng cũ: đổ lỗi, oán trách, hoảng loạn. Đồng thời mở ra dòng mới: bình tĩnh, giao tiếp, giải pháp.\n\nBạn biết cần nói gì với Nam, nói gì với sếp, nói gì với khách hàng.\n\n- Cốt lõi: Biết giao tiếp đúng người, đúng lúc, đúng năng lượng.\n- Giá trị: Bối cảnh bắt đầu được sắp xếp lại.',
    className: 't7'
  },
  {
    id: 8,
    name: 'Tâm thức',
    region: 'Vùng Ánh Sáng',
    description: 'Bình an, sáng rõ, có lực gánh vác: Không bị sự cố kéo chìm, không bị sếp giận hay Nam làm sinh oán. Đứng cao hơn bối cảnh và nhìn sự cố như bài huấn luyện bản lĩnh.\n\nHÀNH XỬ BẰNG TÂM THỨC:\n1. Với Nam — Lấy lại sự bình tĩnh: "Nam, nhìn vào anh. Không được để nỗi sợ làm tê liệt. Em có 15 phút kiểm tra lại backup. Anh sẽ nhận trách nhiệm và giải quyết cùng sếp." (Kéo người sai quay lại trách nhiệm)\n2. Với sếp — Hứng đỡ cơn giận: "Em xin lỗi sếp. Em xin nhận trách nhiệm vì chưa rà soát. Em đã cho rà soát khôi phục và em đã có phương án bù đắp với khách hàng." (Không phản ứng, chuyển hướng sang giải pháp)\n3. Với khách hàng — Nói thật và bù đắp: "Xin lỗi anh/chị vì sự cố chủ quan. Chúng tôi xin dời lịch ký sang sáng mai để làm lại thật hoàn chỉnh và xin tặng thêm gói hỗ trợ ngoài hợp đồng."\n\nĐÍCH ĐẾN:\nNam được kéo lên để học trách nhiệm. Sếp hạ hỏa vì có người gánh vác. Khách hàng nể phục sự trung thực và bản lĩnh của công ty.',
    className: 't8'
  }
];

export function Tower() {
  const [activeTierId, setActiveTierId] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'light' | 'unconscious' | 'example'>('unconscious');

  const activeData = viewMode === 'light' ? TOWER_DATA : (viewMode === 'example' ? EXAMPLE_DATA : UC_DATA);
  const activeTier = activeData.find(t => t.id === activeTierId);

  const toggleView = (mode: 'light' | 'unconscious' | 'example') => {
    setViewMode(mode);
    setActiveTierId(null);
  };

  return (
    <section className="tower-sec" id="thap-anh-sang">
      <div className="container">
        <div className="rv text-center">
          <div className="s-label" style={{ justifyContent: 'center' }}>
            {viewMode === 'unconscious' ? 'Vùng Hủy Diệt' : 'Bản Đồ Tâm Thức'}
          </div>
          <h2>
            {viewMode === 'light' ? (
              <>Tháp Ánh Sáng<br /><em>Bạn đang ở tầng nào?</em></>
            ) : viewMode === 'example' ? (
              <>Ví Dụ Thực Tiễn<br /><em>Từng Tầng Tâm Thức</em></>
            ) : (
              <>9 Cấp Độ Của<br /><em>Vô Thức</em></>
            )}
          </h2>
          <div className="orn form-orn-fix">
            <div className="orn-line"></div>☼<div className="orn-line"></div>
          </div>
          <p className="lead mx-auto">
            {viewMode === 'light' 
              ? '8 tầng tâm thức — Nhấn vào từng tầng để nhìn thật rõ sự chuyển động tâm của bạn và điều chỉnh ngay lập tức.'
              : viewMode === 'example' ? 'Nhấn vào các tầng để xem cách mỗi tầng phản ứng trước một sự cố mất dữ liệu.' : 'Sự chìm đắm trong vô thức diễn ra qua nhiều mức độ khác nhau. Nhấn vào từng cấp độ để nhận diện rõ mình đang ở đâu và tìm cách thoát khỏi bóng tối của thói quen.'
            }
          </p>
          <div className="click-hint">↓ Bấm vào từng {(viewMode === 'light' || viewMode === 'example') ? 'tầng' : 'cấp độ'} để xem chi tiết ↓</div>

          <div style={{ marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => toggleView('unconscious')}
              className={`view-toggle-btn ${viewMode === 'unconscious' ? 'active-btn' : ''}`}
            >
              9 Cấp Độ Vô Thức
            </button>
            <button 
              onClick={() => toggleView('light')}
              className={`view-toggle-btn ${viewMode === 'light' ? 'active-btn' : ''}`}
            >
              Tháp Ánh Sáng
            </button>
            <button 
              onClick={() => toggleView('example')}
              className={`view-toggle-btn ${viewMode === 'example' ? 'active-btn' : ''}`}
            >
              Khám Phá Ví Dụ
            </button>
          </div>

          {viewMode === 'example' && (
            <div className="example-context-box">
              <strong>TÌNH HUỐNG THỰC TẾ:</strong> Trong một dự án quan trọng, Nam — đồng nghiệp cùng nhóm — sơ suất làm mất file dữ liệu khách hàng lớn ngay trước giờ ký hợp đồng. Sếp nổi giận, cả đội căng thẳng, khách hàng đang chờ. <em>Mỗi người sẽ hành xử ở tầng tâm thức nào khi nghịch cảnh xảy ra?</em>
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={viewMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="tower-wrap rv" 
            style={{ transitionDelay: '.2s' }}
          >
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
                  onClick={() => setActiveTierId(activeTierId === tier.id ? null : tier.id)}
                >
                  {tier.name} <span className="tier-n">{tier.id}</span>
                </div>

                <AnimatePresence>
                  {activeTierId === tier.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden', width: '92%', maxWidth: '520px' }}
                    >
                      <div className="tier-expanded-panel">
                        <div className="tier-expanded-header">
                          <h3 className="tier-expanded-title">{tier.name}</h3>
                          <span className="tier-expanded-region">{tier.region}</span>
                        </div>
                        <div className="tier-expanded-desc">
                          {tier.description}
                          {tier.examples && (
                            <div className="tier-examples">
                              <div className="example-item">
                                <span className="example-label group-self">Bản thân:</span> {tier.examples.self}
                              </div>
                              <div className="example-item">
                                <span className="example-label group-family">Gia đình:</span> {tier.examples.family}
                              </div>
                              <div className="example-item">
                                <span className="example-label group-career">Sự nghiệp:</span> {tier.examples.career}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <WavesTransition color="var(--cream-btn)" />
    </section>
  );
}
