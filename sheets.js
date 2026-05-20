export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const SHEET_ID = process.env.GOOGLE_SHEET_ID;
  const API_KEY = process.env.GOOGLE_API_KEY;
  const SHEET_NAME = process.env.GOOGLE_SHEET_NAME || 'Sheet1';

  if (!SHEET_ID || !API_KEY) {
    return res.status(500).json({ error: 'Google Sheets not configured' });
  }

  const { row } = req.body;
  if (!row) return res.status(400).json({ error: 'Missing row data' });

  const today = new Date().toLocaleDateString('en-AU');

  const values = [[
    row.status || 'New',
    today,
    row.clientName || '',
    row.clientEmail || '',
    row.guestCount || '',
    row.enquiryType || '',
    row.location || '',
    row.eventDate || '',
    row.feeTotal || '',
    `Template ${row.suggestedTemplate || ''}`,
    today,
    row.followUpDate || '',
    '',  // Email sent 3 weeks before
    '',  // Dress
    row.internalNote || '',
    '',  // Accom
    '',  // Flights booked
  ]];

  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}!A:Q:append?valueInputOption=USER_ENTERED&key=${API_KEY}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ values }),
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(response.status).json({ error: err });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
