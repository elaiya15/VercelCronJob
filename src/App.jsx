import React from 'react';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Vite React Frontend with Vercel Ping API</h1>
      <p>This is a minimal React app deployed on Vercel.</p>
      <p>The backend ping happens in the <code>/api/ping</code> serverless function.</p>
      <p>Check your Vercel logs for ping details.</p>
    </div>
  );
}
