import { NextResponse } from "next/server";
import twilio from "twilio";
import { prisma } from "@/lib/prisma";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(req: Request) {
  try {
    const { phoneNumber, code, name } = await req.json();

    console.log("Verifying OTP:", { phoneNumber, code, name });

    // Verify OTP
    const verificationCheck = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID!)
      .verificationChecks
      .create({ to: phoneNumber, code });

    console.log("Verification result:", verificationCheck.status);

    if (verificationCheck.status !== "approved") {
      console.log("OTP not approved:", verificationCheck);
      return NextResponse.json(
        { error: "Invalid OTP" },
        { status: 400 }
      );
    }

    // Create or find user
    let user = await prisma.user.findUnique({
      where: { phoneNumber }
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          name,
          phoneNumber,
          authProvider: "PHONE",
          phoneVerified: true,
        }
      });
    }

    return NextResponse.json({ 
      success: true,
      userId: user.id 
    });
  } catch (error) {
    console.error("OTP verification error:", error);
    return NextResponse.json(
      { error: "Verification failed" },
      { status: 500 }
    );
  }
}
