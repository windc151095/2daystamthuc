import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, query, orderBy, getDocs, doc, getDoc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { LogOut, Save, RefreshCw, User, Phone, Calendar, ExternalLink, Edit, Trash2, X, MessageSquare, CheckCircle2 } from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  phone: string;
  createdAt: any;
  status?: 'new' | 'contacted' | 'potential' | 'joined';
  notes?: string;
  history?: string[];
}

export function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [zaloLink, setZaloLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editStatus, setEditStatus] = useState<Lead['status']>('new');
  const [editNotes, setEditNotes] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('admin_auth');
    if (sessionAuth === 'true') {
      setIsLoggedIn(true);
      fetchData();
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    navigate('/');
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

  const openEditModal = (lead: Lead) => {
    setSelectedLead(lead);
    setEditStatus(lead.status || 'new');
    setEditNotes(lead.notes || '');
    setIsEditModalOpen(true);
    setError('');
    setSuccess('');
  };

  const handleUpdateLead = async () => {
    if (!selectedLead) return;
    setLoading(true);
    setError('');
    try {
      const leadRef = doc(db, 'leads', selectedLead.id);
      const historyEntry = `${new Date().toLocaleString('vi-VN')}: Cập nhật trạng thái thành ${editStatus}`;
      const newHistory = [...(selectedLead.history || []), historyEntry];
      
      await updateDoc(leadRef, {
        status: editStatus,
        notes: editNotes,
        history: newHistory
      });
      
      setIsEditModalOpen(false);
      fetchData();
      setSuccess('Cập nhật thông tin thành công!');
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `leads/${selectedLead.id}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa lượt ghi danh này?')) return;
    setLoading(true);
    try {
      await deleteDoc(doc(db, 'leads', id));
      fetchData();
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `leads/${id}`);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'contacted': return '#2196f3';
      case 'potential': return '#ff9800';
      case 'joined': return '#4caf50';
      default: return '#9e9e9e';
    }
  };

  const getStatusText = (status?: string) => {
    switch (status) {
      case 'contacted': return 'Đã liên hệ';
      case 'potential': return 'Tiềm năng';
      case 'joined': return 'Đã vào lớp';
      default: return 'Mới';
    }
  };

  if (!isLoggedIn) {
    return null;
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
                  <th>Trạng thái</th>
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
                      <span className="status-badge" style={{ backgroundColor: getStatusColor(lead.status) }}>
                        {getStatusText(lead.status)}
                      </span>
                    </td>
                    <td>
                      <div className="action-row">
                        <button onClick={() => openEditModal(lead)} className="btn-action-icon edit" title="Chỉnh sửa">
                          <Edit size={16} />
                        </button>
                        <a href={`https://zalo.me/${lead.phone}`} target="_blank" rel="noreferrer" className="btn-action-icon zalo" title="Nhắn Zalo">
                          <ExternalLink size={16} />
                        </a>
                        <button onClick={() => handleDeleteLead(lead.id)} className="btn-action-icon delete" title="Xóa">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={5} style={{ textAlign: 'center', padding: '40px' }}>
                      Chưa có danh sách ghi danh.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {isEditModalOpen && selectedLead && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Quản lý: {selectedLead.name}</h3>
              <button onClick={() => setIsEditModalOpen(false)} className="close-btn"><X size={20} /></button>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <label>Trạng thái</label>
                <div className="status-options">
                  {(['new', 'contacted', 'potential', 'joined'] as const).map(s => (
                    <button 
                      key={s} 
                      className={`status-opt ${editStatus === s ? 'active' : ''}`}
                      onClick={() => setEditStatus(s)}
                    >
                      {getStatusText(s)}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="modal-section">
                <label>Ghi chú / Nhật ký</label>
                <textarea 
                  value={editNotes} 
                  onChange={e => setEditNotes(e.target.value)}
                  placeholder="Nhập ghi chú chi tiết về khách hàng này..."
                  rows={4}
                />
              </div>

              {selectedLead.history && selectedLead.history.length > 0 && (
                <div className="modal-section">
                  <label>Lịch sử tương tác</label>
                  <div className="history-list">
                    {selectedLead.history.map((item, idx) => (
                      <div key={idx} className="history-item">
                        <MessageSquare size={12} /> {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button 
                className="btn-save" 
                onClick={handleUpdateLead}
                disabled={loading}
              >
                {loading ? <RefreshCw size={18} className="spin" /> : <CheckCircle2 size={18} />} CẬP NHẬT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
