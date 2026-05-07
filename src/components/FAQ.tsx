import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button 
        className={`faq-question ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown 
          className={`faq-icon ${isOpen ? 'rotate-180' : ''}`} 
          size={20}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="faq-answer-wrap"
          >
            <div className="faq-answer">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "1. Tôi chưa biết gì về tâm thức, có theo kịp không?",
      answer: "Hoàn toàn phù hợp cho người mới bắt đầu. Hệ tri thức đã đóng gói thành bộ công thức dễ hành, dễ ứng dụng vào cuộc sống. Điều duy nhất bạn cần mang theo là sự tò mò và sẵn sàng trải nghiệm."
    },
    {
      question: "2. Đây có phải là khóa thiền, coaching hay không?",
      answer: "Đây không phải khóa thiền hay coaching thông thường. Trọng tâm là hiểu cơ chế vô thức → tâm thức, và thực hành ứng dụng trực tiếp vào bản thân, gia đình, công việc. Học xong là dùng được ngay — không phải học để biết."
    },
    {
      question: "3. Học phí là bao nhiêu?",
      answer: "Đây là một hành trình, có môi trường, những người bạn khát học, lấy hệ tri thức gốc là sợi dây kết nối để cùng nhau rèn luyện và tăng trưởng. Hãy hỏi thêm người bạn HDV của bạn để biết thêm về lộ trình học tập nhé."
    }
  ];

  return (
    <section className="faq-sec" id="faq">
      <div className="container">
        <div className="rv text-center">
          <div className="s-label" style={{ justifyContent: 'center' }}>CÂU HỎI THƯỜNG GẶP</div>
          <h2>Bạn Đang <em>Thắc Mắc?</em></h2>
          <div className="orn form-orn-fix">
            <div className="orn-line"></div>✦<div className="orn-line"></div>
          </div>
        </div>
        
        <div className="faq-list rv" style={{ transitionDelay: '.2s' }}>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};
