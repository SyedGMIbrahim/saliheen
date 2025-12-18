# Saliheen - Islamic Matrimonial Platform

## Project Structure

### Route Groups (App Directory)

#### Authentication Routes - `(auth)`
- `/login` - User login page
- `/signup` - User registration page

#### Onboarding Routes - `(onboarding)`
- `/onboarding/user-type` - Select Male/Female/Wali
- `/onboarding/shahada` - Islamic oath confirmation
- `/onboarding/link-wali` - Invite wali (for females)

#### Verification Routes - `(verification)`
- `/verification` - Upload live photo and ID
- `/verification/pending` - Wait for admin approval

#### Subscription Routes - `(subscription)`
- `/pricing` - View and select subscription plans
- `/subscription/success` - Payment confirmation page

#### Profile Routes - `(profile)`
- `/profile/create` - Create detailed user profile
- `/profile/preview` - Preview profile before publishing

#### Main App Routes - `(main)`
- `/dashboard` - User dashboard with activity overview
- `/browse` - Browse opposite gender profiles
- `/profile/[userId]` - View individual profile
- `/interests/received` - View received interests
- `/matches/pending-wali` - Matches awaiting wali approval
- `/matches/active` - Active matches
- `/chat/[matchId]` - Three-party chat (including wali)
- `/video/[callId]` - Three-party video call (including wali)

#### Wali Routes - `(wali)`
- `/wali/pending-matches` - Wali reviews and approves matches

#### Admin Routes - `(admin)`
- `/admin` - Admin dashboard
- `/admin/verifications` - Review user verifications
- `/admin/users` - User management
- `/admin/reports` - Handle user reports

### API Routes

#### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/phone/send-otp` - Send OTP for phone verification
- `POST /api/auth/phone/verify-otp` - Verify phone OTP
- `/api/auth/[...nextauth]` - NextAuth endpoints

#### Onboarding
- `POST /api/onboarding/user-type` - Set user type
- `POST /api/onboarding/shahada` - Confirm shahada
- `POST /api/onboarding/wali-invite` - Invite wali

#### Verification
- `POST /api/verification/upload-live-photo` - Upload live photo
- `POST /api/verification/upload-id` - Upload ID document

#### Profile
- `POST /api/profile/create` - Create/update profile
- `GET /api/profile/[userId]` - Get user profile

#### Browse & Matching
- `GET /api/browse` - Browse profiles
- `POST /api/acceptance/send` - Send interest
- `POST /api/acceptance/respond` - Respond to interest
- `POST /api/match/wali-approve` - Wali approves match

#### Chat & Video
- `GET /api/chat/[matchId]/messages` - Get chat messages
- `POST /api/chat/[matchId]/send` - Send message
- `POST /api/video/create-room` - Create video room
- `POST /api/video/join` - Join video call

#### Payments
- `POST /api/stripe/create-checkout` - Create Stripe checkout
- `POST /api/stripe/webhook` - Handle Stripe webhooks

#### Admin
- `POST /api/admin/verifications/approve` - Approve verification
- `POST /api/admin/verifications/reject` - Reject verification

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **Real-time Chat**: Pusher
- **Video Calls**: Agora
- **SMS/Phone**: Twilio
- **File Storage**: Cloudinary
- **UI Components**: Radix UI, Tailwind CSS
- **Form Handling**: React Hook Form + Zod
- **State Management**: TanStack Query

## Environment Setup

1. Copy `.env.local.example` to `.env.local`
2. Fill in all required environment variables
3. Run `npx prisma generate` to generate Prisma client
4. Run `npx prisma db push` to sync database schema

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Database Schema

See `prisma/schema.prisma` for the complete database schema including:
- User management
- Profile data
- Verification system
- Interest/Match system
- Messaging
- Subscriptions

## Key Features

- ✅ Islamic values-based matching
- ✅ Wali supervision system
- ✅ Identity verification
- ✅ Three-party communication (user + user + wali)
- ✅ Subscription tiers
- ✅ Admin moderation tools
- ✅ Real-time chat and video

## License

All rights reserved © 2025 Saliheen
