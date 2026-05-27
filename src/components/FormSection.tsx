import { useState, useEffect } from 'react';
import { Gift } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

export function FormSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [zaloLink, setZaloLink] = useState('#');
  const [showAppLinks, setShowAppLinks] = useState(false);

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
      const newLeadRef = doc(collection(db, 'leads'));
      await setDoc(newLeadRef, {
        name: name.trim(),
        phone: phone.trim().replace(/\s/g, ''),
        createdAt: serverTimestamp()
      });
      setFormSubmitted(true);
      document.getElementById('dang-ky')?.scrollIntoView({ behavior: 'smooth' });
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback for debugging
      alert('Có lỗi xảy ra khi gửi thông tin. Vui lòng kiểm tra lại kết nối mạng.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="form-sec" id="dang-ky">
      <div className="container form-container-fix">
        <div className="rv text-center">
          <div className="s-label" style={{ justifyContent: 'center' }}>
            <span className="ghi-danh-text">Ghi Danh Miễn Phí</span>
          </div>
          <h2>Cánh cửa tâm thức đang mở.<br /><em>Bạn chọn bước vào?</em></h2>
          <div className="orn form-orn-fix">
            <div className="orn-line"></div>
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Gift size={20} />
            </motion.div>
            <div className="orn-line"></div>
          </div>
          <p className="lead" style={{ margin: '0 auto' }}>Hay quay lại với sự bế tắc cũ — đó là lựa chọn của bạn.</p>
        </div>
        <div className="form-shell rv" style={{ transitionDelay: '.15s' }}>
          {!formSubmitted ? (
            <div>
              <div className="form-header-fix">
                <h3 className="form-title-fix">
                  Đăng Ký Trải Nghiệm
                </h3>
                <p className="form-subtitle-fix">
                  Nhận tài liệu và ZOOM hướng dẫn học - thực hành
                </p>
              </div>

              <div className="form-group">
                <label>Họ và Tên</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nhập họ tên của bạn…" autoComplete="name" disabled={submitting} />
              </div>
              <div className="form-group">
                <label>Số Zalo · Nhận quà &amp; Tài Liệu học tập</label>
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Số điện thoại Zalo của bạn…" autoComplete="tel" disabled={submitting} />
              </div>
              <button className="btn-submit" onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                confetti({
                  particleCount: 100,
                  spread: 60,
                  origin: { x: (rect.left + rect.width / 2) / window.innerWidth, y: (rect.top + rect.height / 2) / window.innerHeight }
                });
                handleSubmit();
              }} disabled={submitting}>
                <motion.span
                  animate={submitting ? { rotate: 360 } : {}}
                  transition={submitting ? { repeat: Infinity, duration: 1, ease: 'linear' } : {}}
                  style={{ display: 'inline-flex', verticalAlign: 'middle', marginRight: '8px' }}
                >
                  <Gift size={14} />
                </motion.span>
                <span className="ghi-danh-text">{submitting ? 'ĐANG XỬ LÝ...' : 'XÁC NHẬN GHI DANH MIỄN PHÍ'}</span>
              </button>
              <p className="form-trust">🔒 Thông tin được bảo mật 100% · Chỉ dùng để cấp quyền truy cập lớp học</p>
            </div>
          ) : (
            <div className="thankyou" style={{ display: 'block' }}>
              <div className="ty-icon">🙏</div>
              <h3>Chúc Mừng Bạn Đã Ghi Danh!</h3>
              <p>Cảm ơn bạn đã tin tưởng Sống Sáng Suốt.<br /><br />
                Trong 24h tới, chúng tôi sẽ liên hệ để gửi tài khoản trải nghiệm app 30 ngày và thông tin chương trình ZOOM 2 ngày về tâm thức.<br /><br />
                Tham gia Group Zalo để nhận hướng dẫn và tài liệu học tập chi tiết.</p>
              <a href={zaloLink} target="_blank" rel="noreferrer" className="btn-zalo" style={{ marginBottom: '24px' }}>💬 Vào Group Zalo Nhận Vé Ngay</a>

              {!showAppLinks ? (
                <div>
                  <button onClick={() => setShowAppLinks(true)} className="btn-app-download">
                    📱 Tải App Sống Sáng Suốt
                  </button>
                </div>
              ) : (
                <div className="app-store-links">
                  <p style={{ margin: '0 0 16px 0', fontSize: '15px', color: 'var(--ink)' }}>Chọn nền tảng tải app Sống Sáng Suốt:</p>
                  <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="https://apps.apple.com/us/app/sống-sáng-suốt/id6738382979" target="_blank" rel="noreferrer" className="btn-store apple">
                      <svg viewBox="0 0 384 512" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                      App Store
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.app365hanhnguyen.hanhnguyen&hl=vi" target="_blank" rel="noreferrer" className="btn-store google">
                      <svg viewBox="0 0 512 512" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                      Google Play
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
