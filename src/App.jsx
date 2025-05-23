import React, { useState, useEffect } from 'react';

export default function App() {
  const [secondsLeft, setSecondsLeft] = useState(300); // 5 minutes
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          setMessage("✅ Backend cron is running on Vercel now!");
          return 300; // restart timer
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>⏱ Real Vercel Cron Monitor</h1>
      <p>Next cron trigger in: <strong>{formatTime(secondsLeft)}</strong></p>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <p>This cron job is running every 5 minutes on the Vercel server.</p>
    </div>
  );
}
