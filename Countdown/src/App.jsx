import React, { useState, useEffect } from 'react';
import TimeUnit from './TimeUnit';
import './styles/variables.css';
import './styles/global.css';
import './styles/animations.css';
import './App.css';

export default function App() {
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date('2026-04-08T10:00:00').getTime();
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff <= 0) return { h: 0, m: 0, s: 0 };
      return {
        h: Math.floor(diff / (1000 * 60 * 60)),
        m: Math.floor((diff / (1000 * 60)) % 60),
        s: Math.floor((diff / 1000) % 60)
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      const left = calculateTimeLeft();
      setTimeLeft(left);
      if (left.h === 0 && left.m === 0 && left.s === 0) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-page page-enter">
      <div className="star-overlay" />
      <div className="countdown-content">
        <div className="countdown-header fade-in-up">
          <div className="hero__cobrand">
            <img src="/sponsor-logos/white anchor 4.svg" alt="Anchor by Panasonic" className="hero__cobrand-logo" />
            <p className="hero__powered-by hero__powered-by--after-logo">presents</p>
          </div>

          <h1 className="hero__title" style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', marginBottom: '0' }}>
            <span className="hero__title-equi">EQUI</span>
            <span className="hero__title-nox">N</span>
            <img src="/equinoxkaO.png" alt="O" className="hero__title-o" />
            <span className="hero__title-nox">X</span>
          </h1>
          <h2 className="hero__title__h2" style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', marginBottom: '2rem' }}>
            <span className="hero__title-equi">20</span>
            <span className="hero__title-nox">26</span>
          </h2>
        </div>

        <h3 className="countdown-subtitle fade-in-up" style={{ animationDelay: '0.2s' }}>TIME TILL REVIEW 2</h3>

        <div className="countdown-grid fade-in-up" style={{ animationDelay: '0.4s' }}>
          <TimeUnit value={timeLeft.h} label="HOURS" />
          <div className="countdown-separator">:</div>
          <TimeUnit value={timeLeft.m} label="MINUTES" />
          <div className="countdown-separator">:</div>
          <TimeUnit value={timeLeft.s} label="SECONDS" />
        </div>
      </div>

      <div className="countdown-footer-wrapper">
        <p className="countdown-footer fade-in-up" style={{ animationDelay: '0.6s' }}>
          Override the Ordinary
        </p>
      </div>
    </div>
  );
}
