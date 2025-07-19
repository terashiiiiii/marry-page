import React, { useState, useEffect } from 'react';
import './DoorAnimation.css';

const DoorAnimation = ({ onFinished }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000); // 2秒後にアニメーション開始

    const finishTimer = setTimeout(() => {
      onFinished();
    }, 3000); // 3秒後にコンポーネントを完全に非表示にする

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onFinished]);

  return (
    <div className={`door-animation ${!visible ? 'fade-out' : ''}`}>
      <div className="door-content">
        <p className="text-2xl font-display">Ryo Terashima</p>
        <p className="text-2xl font-display">Haruka Mizukoshi</p>
        <p className="text-2xl font-display">Presents</p>
        <p className="text-4xl font-display mt-4">Wedding Party!</p>
        <p className="text-2xl font-display mt-4">2025 / 12 / 13</p>
      </div>
    </div>
  );
};

export default DoorAnimation;