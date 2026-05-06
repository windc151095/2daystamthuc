import { useState, useEffect, FormEvent } from 'react';
import { db, auth, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, query, orderBy, getDocs, doc, updateDoc, getDoc, setDoc } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { LogOut, Save, RefreshCw, ChevronRight, User, Phone, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  phone: string;
  createdAt: any;
}

export function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFirebaseAuthed, setIsFirebaseAuthed] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [zaloLink, setZaloLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('admin_auth');
    if (sessionAuth === 'true') {
      setIsLoggedIn(true);
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email === 'congnguyen151095@gmail.com') {
        setIsFirebaseAuthed(true);
        if (sessionStorage.getItem('admin_auth') === 'true') {
          fetchData();
        }
      } else {
        setIsFirebaseAuthed(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (username === 'tamthucsss' && password === 'sss6868') {
      setIsLoggedIn(true);
      sessionStorage.setItem('admin_auth', 'true');
      if (isFirebaseAuthed) fetchData();
    } else {
      setError('Sai tài khoản hoặc mật khẩu');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error(err);
      setError('Đăng nhập Google thất bại');
    }
  };

  const handleLogout = async () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('admin_auth');
    await signOut(auth);
  };

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      // Fetch Leads
      const leadsQuery = query(collection(db, 'leads'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(leadsQuery);
      const leadsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Lead[];
      setLeads(leadsData);

      // Fetch Zalo Link
      const settingsRef = doc(db, 'settings', 'config');
      const settingsSnap = await getDoc(settingsRef);
      if (settingsSnap.exists()) {
        setZaloLink(settingsSnap.data().zaloLink || '');
      } else {
        setZaloLink('#');
      }
    } catch (err: any) {
      console.error(err);
      if (err.message && err.message.includes('permissions')) {
        setError('Tài khoản Google của bạn không có quyền truy cập dữ liệu này.');
      } else {
        setError('Không thể tải dữ liệu. Vui lòng thử lại.');
      }
    } finally {
      setLoading(false);
    }
  };

  const updateZaloLink = async () => {
    if (!isFirebaseAuthed) {
      setError('Bạn cần xác thực Google với email congnguyen151095@gmail.com để cập nhật.');
      return;
    }
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const settingsRef = doc(db, 'settings', 'config');
      await setDoc(settingsRef, { zaloLink }, { merge: true });
      setSuccess('Cập nhật link Zalo thành công!');
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'settings/config');
    } finally {
      setLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-login-page">
        <div className="login-card">
          <h2>Quản Trị Hệ Thống</h2>
          <p>Hệ Sinh Thái Sống Sáng Suốt</p>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Tài khoản</label>
              <input 
                type="text" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
                placeholder="Nhập username..."
                style={{ width: '100%', marginBottom: '15px' }}
              />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>
              <input 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                placeholder="Nhập password..."
                style={{ width: '100%', marginBottom: '15px' }}
              />
            </div>
            {error && <p className="error-msg">{error}</p>}
            <button type="submit" className="btn-login">VÀO TRANG QUẢN TRỊ</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="admin-logo">SSS ADMIN</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {!isFirebaseAuthed ? (
            <button onClick={handleGoogleSignIn} className="btn-save" style={{ background: '#4285F4', fontSize: '12px' }}>
              XÁC THỰC GOOGLE (EMAIL)
            </button>
          ) : (
            <div style={{ color: '#2e7d32', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <ShieldCheck size={16} /> Đã xác thực: {auth.currentUser?.email}
            </div>
          )}
          <button onClick={handleLogout} className="btn-logout">
            <LogOut size={18} /> Đăng xuất
          </button>
        </div>
      </header>

      <main className="admin-content">
        {!isFirebaseAuthed && (
          <div className="settings-card" style={{ marginBottom: '20px', borderLeft: '4px solid #f44336' }}>
            <p style={{ color: '#f44336', margin: 0 }}>
              <strong>Lưu ý:</strong> Bạn cần bấm nút <strong>"Xác thực Google"</strong> ở trên và đăng nhập đúng email <code>congnguyen151095@gmail.com</code> để có quyền xem danh sách và sửa link Zalo.
            </p>
          </div>
        )}

        <section className="admin-section">
          <div className="section-header">
            <h3>Cấu Hình Hệ Thống</h3>
          </div>
          <div className="settings-card">
            <div className="setting-item">
              <label>Đường link Group Zalo</label>
              <div className="input-with-btn">
                <input 
                  type="text" 
                  value={zaloLink} 
                  onChange={e => setZaloLink(e.target.value)} 
                  placeholder="https://zalo.me/..."
                />
                <button onClick={updateZaloLink} disabled={loading || !isFirebaseAuthed} className="btn-save">
                  {loading ? <RefreshCw size={18} className="spin" /> : <Save size={18} />} Lưu
                </button>
              </div>
              {success && <p className="success-msg">{success}</p>}
            </div>
          </div>
        </section>

        <section className="admin-section">
          <div className="section-header">
            <h3>Danh Sách Ghi Danh ({leads.length})</h3>
            <button onClick={fetchData} disabled={!isFirebaseAuthed} className="btn-icon-text">
               <RefreshCw size={16} /> Làm mới
            </button>
          </div>
          
          <div className="leads-table-container">
            <table className="leads-table">
              <thead>
                <tr>
                  <th>Ngày</th>
                  <th>Họ và Tên</th>
                  <th>Số Zalo</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {leads.length > 0 ? leads.map(lead => (
                  <tr key={lead.id}>
                    <td>
                      <div className="cell-content">
                        <Calendar size={14} />
                        {lead.createdAt?.toDate ? lead.createdAt.toDate().toLocaleDateString('vi-VN') : 'N/A'}
                      </div>
                    </td>
                    <td>
                      <div className="cell-content">
                        <User size={14} />
                        {lead.name}
                      </div>
                    </td>
                    <td>
                      <div className="cell-content">
                        <Phone size={14} />
                        {lead.phone}
                      </div>
                    </td>
                    <td>
                      <a href={`https://zalo.me/${lead.phone}`} target="_blank" rel="noreferrer" className="btn-table-action">
                        Nhắn Zalo <ExternalLink size={12} />
                      </a>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={4} style={{ textAlign: 'center', padding: '40px' }}>
                      {!isFirebaseAuthed ? 'Vui lòng xác thực Google để xem danh sách.' : 'Chưa có danh sách ghi danh.'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
