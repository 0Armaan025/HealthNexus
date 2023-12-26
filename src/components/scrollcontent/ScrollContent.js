import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollContent = ({ children }) => {
  const contentRef = useRef(null);
  const { inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [inView]);

  return (
    <motion.div
      ref={contentRef}
      className="scroll-content"
      initial={{ y: 300}}
      animate={{ y:30 }}
      transition={{ duration: 5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollContent;