import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('photo') as File;

    // TODO: Implement live photo upload logic
    // 1. Validate file type and size
    // 2. Upload to Cloudinary
    // 3. Store URL in database
    // 4. Run face detection/verification

    return NextResponse.json(
      { message: 'Photo uploaded successfully', photoUrl: 'placeholder' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to upload photo' },
      { status: 500 }
    );
  }
}
