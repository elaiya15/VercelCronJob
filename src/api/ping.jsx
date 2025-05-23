export const config = {
  schedule: '*/1 * * * *' // Run every 5 minutes UTC
};

const urlsToPing = [
  'https://driving-school-projects-backend.onrender.com',
  'https://your-render-backend2.onrender.com',
  // add your backend URLs here
];

export default async function handler(req, res) {
  for (const url of urlsToPing) {
    try {
      const response = await fetch(url);
      console.log(`[SUCCESS] Pinged ${url} - Status: ${response.status}`);
    } catch (error) {
      console.log(`[ERROR] Failed to ping ${url} - Error: ${error.message}`);
    }
  }
  res.status(200).send('Ping sequence completed.');
}
