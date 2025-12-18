import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string | null;
      image?: string | null;
      userType: string;
      verificationStatus: string;
      subscriptionStatus: string;
      shahadaAccepted: boolean;
      role: string;
    };
  }

  interface User {
    id: string;
    email: string;
    name?: string | null;
    image?: string | null;
    password?: string | null;
    userType: string;
    verificationStatus: string;
    subscriptionStatus: string;
    shahadaAccepted: boolean;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    userType: string;
    verificationStatus: string;
    subscriptionStatus: string;
    shahadaAccepted: boolean;
    role: string;
  }
}
