import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { targetUserId } = body;

    // TODO: Implement interest sending logic
    // 1. Validate both users exist
    // 2. Check if interest already exists
    // 3. Create interest record
    // 4. Send notification to target user

    return NextResponse.json(
      { message: 'Interest sent successfully', interestId: 'placeholder' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send interest' },
      { status: 500 }
    );
  }
}
