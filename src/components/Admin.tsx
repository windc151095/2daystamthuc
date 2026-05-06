import { useState, useEffect, FormEvent } from 'react';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, query, orderBy, getDocs, doc, getDoc, setDoc } from 'firebase/firestore';
import { LogOut, Save, RefreshCw, User, Phone, Calendar, ExternalLink } from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  phone: string;
  createdAt: any;
}

export function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      fetchData();
    }
  }, []);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (username === 'tamthucsss' && password === 'sss6868') {
      setIsLoggedIn(true);
      sessionStorage.setItem('admin_auth', 'true');
      fetchData();
    } else {
      setError('Sai tài khoản hoặc mật khẩu');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('admin_auth');
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
      setError('Không thể tải dữ liệu. Vui lòng kiểm tra lại kết nối mạng.');
    } finally {
      setLoading(false);
    }
  };

  const updateZaloLink = async () => {
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
        <button onClick={handleLogout} className="btn-logout">
          <LogOut size={18} /> Đăng xuất
        </button>
      </header>

      <main className="admin-content">
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
                <button onClick={updateZaloLink} disabled={loading} className="btn-save">
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
            <button onClick={fetchData} className="btn-icon-text">
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
                      Chưa có danh sách ghi danh.
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
