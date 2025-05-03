import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, role, portfolioSize } = body;

    // Validate the data
    if (!name || !email || !company || !role || !portfolioSize) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Here you would typically:
    // 1. Send an email notification to your sales team
    // 2. Store the lead in your CRM
    // 3. Schedule a follow-up task

    // For now, we'll just simulate success
    console.log('Demo request:', { name, email, company, role, portfolioSize });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Demo request error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
