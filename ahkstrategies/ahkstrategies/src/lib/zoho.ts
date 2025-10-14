import { env } from 'process';

interface ZohoResponse {
  data: any[];
  message: string;
  code: string;
}

/**
 * Send a record to a Zoho CRM module.
 *
 * @param endpoint Path to the module endpoint (e.g. `/crm/v2/Leads`).
 * @param record The record data to send.
 */
async function sendRecord(endpoint: string, record: Record<string, any>) {
  const baseUrl = env.ZOHO_BASE_URL;
  const token = env.ZOHO_ACCESS_TOKEN;
  if (!baseUrl || !token) {
    throw new Error('Zoho configuration missing');
  }
  const url = `${baseUrl}${endpoint}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: [record] })
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Zoho API error: ${response.status} ${errorText}`);
  }
  const json: ZohoResponse = await response.json();
  return json;
}

export async function createLead(fields: Record<string, any>) {
  const endpoint = process.env.ZOHO_LEADS_ENDPOINT || '/crm/v2/Leads';
  return sendRecord(endpoint, fields);
}

export async function createPartner(fields: Record<string, any>) {
  const endpoint = process.env.ZOHO_PARTNERS_ENDPOINT || '/crm/v2/Contacts';
  return sendRecord(endpoint, fields);
}