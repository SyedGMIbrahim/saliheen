import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phone } = body;

    // TODO: Implement OTP sending logic with Twilio
    // 1. Validate phone number
    // 2. Generate OTP
    // 3. Store OTP in database with expiry
    // 4. Send OTP via Twilio

    return NextResponse.json(
      { message: 'OTP sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send OTP' },
      { status: 500 }
    );
  }
}
