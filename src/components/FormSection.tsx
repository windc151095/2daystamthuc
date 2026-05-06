import { useState, useEffect } from 'react';
import { BookOpenText } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';

export function FormSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [zaloLink, setZaloLink] = useState('#');

  useEffect(() => {
    const fetchZaloLink = async () => {
      try {
        const settingsSnap = await getDoc(doc(db, 'settings', 'config'));
        if (settingsSnap.exists()) {
          setZaloLink(settingsSnap.data().zaloLink || '#');
        }
      } catch (err) {
        console.error("Error fetching Zalo link:", err);
      }
    };
    fetchZaloLink();
  }, []);

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim()) {
      alert('Bạn vui lòng điền đầy đủ họ tên và số Zalo nhé 🙏');
      return;
    }
    
    setSubmitting(true);
    try {
      await addDoc(collection(db, 'leads'), {
        name: name.trim(),
        phone: phone.trim(),
        createdAt: new Date().toISOString()
      });
      setFormSubmitted(true);
      document.getElementById('dang-ky')?.scrollIntoView({ behavior: 'smooth' });
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, 'leads');
      alert('Có lỗi xảy ra, vui lòng thử lại sau.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="form-sec" id="dang-ky">
      <div className="container" style={{ paddingTop: '60px' }}>
        <div className="rv" style={{ textAlign: 'center' }}>
          <div className="s-label" style={{ justifyContent: 'center' }}>
            <span className="ghi-danh-text">Ghi Danh Miễn Phí</span>
          </div>
          <h2>Cánh cửa tỉnh thức đang mở.<br /><em>Bạn chọn bước vào?</em></h2>
          <div className="orn" style={{ justifyContent: 'center', maxWidth: '280px', margin: '18px auto' }}>
            <div className="orn-line"></div>
            <BookOpenText size={20} />
            <div className="orn-line"></div>
          </div>
          <p className="lead" style={{ margin: '0 auto' }}>Hay quay lại với sự bế tắc cũ — đó là lựa chọn của bạn.</p>
        </div>
        <div className="form-shell rv" style={{ transitionDelay: '.15s' }}>
          {!formSubmitted ? (
            <div>
              <div className="form-group">
                <label>Họ và Tên</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nhập họ tên của bạn…" autoComplete="name" disabled={submitting} />
              </div>
              <div className="form-group">
                <label>Số Zalo · Nhận Vé &amp; Tài Liệu</label>
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Số điện thoại Zalo của bạn…" autoComplete="tel" disabled={submitting} />
              </div>
              <button className="btn-submit" onClick={handleSubmit} disabled={submitting}>
                <BookOpenText size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
                <span className="ghi-danh-text">{submitting ? 'ĐANG XỬ LÝ...' : 'XÁC NHẬN GHI DANH MIỄN PHÍ'}</span>
              </button>
              <p className="form-trust">🔒 Thông tin được bảo mật 100% · Chỉ dùng để cấp quyền truy cập lớp học</p>
            </div>
          ) : (
            <div className="thankyou" style={{ display: 'block' }}>
              <div className="ty-icon">🙏</div>
              <h3>Chúc Mừng Bạn Đã Ghi Danh!</h3>
              <p>Vé Zoom, ID và Mật khẩu sẽ <strong>chỉ được phát trong Group Zalo kín</strong>.<br />
                Tặng kèm: Ebook <em>"Bản đồ Tâm Thức"</em> để bạn đọc trước.<br /><br />
                Hãy bấm vào nút bên dưới để vào Group nhận vé ngay!</p>
              <a href={zaloLink} target="_blank" rel="noreferrer" className="btn-zalo">💬 Vào Group Zalo Nhận Vé Ngay</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
