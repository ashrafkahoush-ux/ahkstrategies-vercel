import { NextResponse } from 'next/server';
import { createLead } from '../../../../lib/zoho';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // Map fields to Zoho record keys. Adjust names according to your CRM schema.
    const record = {
      First_Name: data.Name?.split(' ')[0] || data.Name,
      Last_Name: data.Name?.split(' ').slice(1).join(' ') || '',
      Email: data.Email,
      Phone: data.Phone,
      Company: data.Company,
      Description: data.Description
    };
    await createLead(record);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}