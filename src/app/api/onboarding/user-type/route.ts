import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userType } = body; // 'male', 'female', 'wali'

    // TODO: Implement user type selection logic
    // 1. Validate user type
    // 2. Update user profile with type
    // 3. Return next step in onboarding

    return NextResponse.json(
      { message: 'User type updated', userType },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update user type' },
      { status: 500 }
    );
  }
}
