export const config = {
  schedule: '*/5 * * * *' // Every 5 minutes (UTC)
};

const urlsToPing = [
  'https://driving-school-projects-backend.onrender.com',
  // 'https://your-render-backend2.onrender.com',
];

export default async function handler(req, res) {
  const results = [];

  for (const url of urlsToPing) {
    const start = Date.now();
    try {
      const response = await fetch(url);
      const duration = Date.now() - start;
      results.push({
        url,
        status: response.status,
        durationMs: duration,
        success: true
      });
      console.log(`[SUCCESS] ${url} - ${response.status} - ${duration}ms`);
    } catch (err) {
      const duration = Date.now() - start;
      results.push({
        url,
        error: err.message,
        durationMs: duration,
        success: false
      });
      console.log(`[ERROR] ${url} - ${err.message} - ${duration}ms`);
    }
  }

  res.status(200).json({
    message: 'Ping completed',
    timestamp: new Date().toISOString(),
    results
  });
}
