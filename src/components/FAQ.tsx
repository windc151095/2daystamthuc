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
      question: "1. Tôi chưa hiểu gì về tâm thức, tôi có ứng dụng được nó không?",
      answer: "Hệ tri thức đã đóng gói thành bộ công thức dễ hành, dễ ứng dụng vào cuộc sống. Những điều làm bạn mắc kẹt bên trong từ lâu bạn đã từng đi tìm lời giải thâm chí giải đi giải lại rất nhiều nhưng chưa có kết quả. Hãy trải nghiệm công thức ở đây và chính bạn sẽ tìm thấy lời giải chính xác nhất cho chính sự mắc kẹt trong tâm bạn."
    },
    {
      question: "2. Đây có phải là khóa thiền, coaching hay không?",
      answer: "Đây không phải khóa thiền hay coaching thông thường. Trọng tâm là hiểu cơ chế vô thức → tâm thức, và thực hành ứng dụng trực tiếp vào bản thân, gia đình, công việc. Học xong là dùng được ngay — không phải học để biết."
    },
    {
      question: "3. Học phí là bao nhiêu?",
      answer: "Kiếm tiền đã khó một nhưng tiêu tiền thì khó gấp 100 lần. Một ngày chỉ cần một tích tắc tiêu cho thói quen, cái sai, cái ngu của bản thân thì nó kinh khủng hơn vậy nhiều. Nhưng lấy một phần rất nhỏ trong cái sai đó của bạn và bù đắp bằng chính sự tận tâm đến cùng để giúp bạn có được công thức thực hành và giải thoát cái sai. Điều đó tiết kiệm được thời gian, công sức, tiền bạc và tương lai của bạn phải không?"
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
