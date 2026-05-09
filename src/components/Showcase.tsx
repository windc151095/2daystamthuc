import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { motion } from 'motion/react';

interface ShowcaseItem {
  id: string;
  imageUrl: string;
  title: string;
  description?: string;
}

export const Showcase: React.FC = () => {
  const [items, setItems] = useState<ShowcaseItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'showcase'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ShowcaseItem[];
      setItems(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading || items.length === 0) return null;

  return (
    <section className="showcase-section rv">
      <div className="container">
        <div className="section-header">
          <div className="s-label" style={{ justifyContent: 'center' }}>THỰC HÀNH ỨNG DỤNG</div>
          <h2>Bài Tập Chuyển Hóa<br /><em>Giá trị thực chứng trong từng khoảnh khắc</em></h2>
          <div className="orn form-orn-fix">
            <div className="orn-line"></div>☼<div className="orn-line"></div>
          </div>
        </div>
        
        <div className="showcase-slider">
          {items.map((item) => (
            <motion.div 
              key={item.id} 
              className="showcase-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="showcase-image-wrapper">
                <img src={item.imageUrl} alt={item.title} loading="lazy" />
              </div>
              <div className="showcase-info">
                <h3>{item.title}</h3>
                {item.description && <p>{item.description}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
