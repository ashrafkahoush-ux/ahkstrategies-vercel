import { NextResponse } from 'next/server';
import { createPartner } from '../../../../lib/zoho';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const record = {
      First_Name: data.Name?.split(' ')[0] || data.Name,
      Last_Name: data.Name?.split(' ').slice(1).join(' ') || '',
      Email: data.Email,
      Company: data.Company,
      Title: data.Type,
      Description: data.Description
    };
    await createPartner(record);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}