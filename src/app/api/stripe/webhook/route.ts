import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      return NextResponse.json({ error: 'No signature' }, { status: 400 });
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    // TODO: Handle different Stripe events
    switch (event.type) {
      case 'checkout.session.completed':
        // Handle successful subscription
        break;
      case 'customer.subscription.updated':
        // Handle subscription updates
        break;
      case 'customer.subscription.deleted':
        // Handle subscription cancellation
        break;
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Webhook error' },
      { status: 400 }
    );
  }
}
