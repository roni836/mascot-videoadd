import type { IncomingMessage, ServerResponse } from 'http';
import type { NextApiRequest, NextApiResponse } from 'next';

// Use fetch from node-fetch if not available globally
let fetchFn: typeof fetch;
try {
  fetchFn = fetch;
} catch {
  fetchFn = require('node-fetch');
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, businessName, whatYouSell, brandTone } = req.body;
  if (!email || !name) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.ECOMAIL_API_KEY;
  const listId = process.env.ECOMAIL_LIST_ID;
  if (!apiKey || !listId) {
    return res.status(500).json({ error: 'Server misconfiguration' });
  }

  const payload = {
    subscriber_data: {
      email,
      name,
    },
    custom_fields: {
      NAZOV_FIRMY: businessName || '',
      CO_PREDAVATE: whatYouSell || '',
      TON_ZNACKY: brandTone || '',
    },
    update_existing: true,
    resubscribe: true,
  };

  try {
    const response = await fetchFn(`https://api2.ecomailapp.cz/lists/${listId}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'key': apiKey,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      return res.status(500).json({ error: error.message || 'Ecomail API error' });
    }

    return res.status(200).json({ success: true });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Unknown error' });
  }
} 