"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Mail, Phone, Eye, EyeOff, AlertCircle } from "lucide-react";

// Email/Password Schema
const emailSignupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and privacy policy"
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type EmailSignupForm = z.infer<typeof emailSignupSchema>;

// Password strength calculator
const calculatePasswordStrength = (password: string) => {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[^a-zA-Z0-9]/.test(password)) strength++;
  return strength;
};

const getStrengthLabel = (strength: number) => {
  if (strength <= 1) return { label: "Weak", color: "text-red-500", bg: "bg-red-500" };
  if (strength <= 3) return { label: "Medium", color: "text-yellow-500", bg: "bg-yellow-500" };
  return { label: "Strong", color: "text-green-500", bg: "bg-green-500" };
};

export default function SignupPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("email");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  
  // Phone OTP states
  const [phoneStep, setPhoneStep] = useState<"input" | "verify">("input");
  const [otp, setOtp] = useState("");
  const [phoneData, setPhoneData] = useState({ countryCode: "+1", phoneNumber: "" });

  // Email form
  const emailForm = useForm<EmailSignupForm>({
    resolver: zodResolver(emailSignupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    }
  });

  const handleEmailSignup = async (data: EmailSignupForm) => {
    try {
      setIsLoading(true);
      setError("");

      // Register user
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Signup failed");
      }

      // Auto sign in after successful signup
      const signInResult = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (signInResult?.error) {
        throw new Error("Account created but login failed. Please login manually.");
      }

      // Redirect to onboarding
      router.push("/onboarding/shahada");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendOTP = async () => {
    try {
      setIsLoading(true);
      setError("");

      const response = await fetch("/api/auth/phone/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumber: `${phoneData.countryCode}${phoneData.phoneNumber}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send OTP");
      }

      setPhoneStep("verify");
    } catch (err: any) {
      setError(err.message || "Failed to send OTP");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      setIsLoading(true);
      setError("");

      const response = await fetch("/api/auth/phone/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumber: `${phoneData.countryCode}${phoneData.phoneNumber}`,
          otp,
        }),
      });

      if (!response.ok) {
        throw new Error("Invalid OTP");
      }

      router.push("/onboarding/shahada");
    } catch (err: any) {
      setError(err.message || "OTP verification failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setIsLoading(true);
    await signIn("google", { callbackUrl: "/onboarding/shahada" });
  };

  const watchPassword = emailForm.watch("password");

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-rose-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f43f5e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="border-2 shadow-xl backdrop-blur-sm bg-gray-100/10">
          <CardHeader className="text-center space-y-2">
            <div className="flex justify-center mb-4">
              <div className="text-6xl">🕌</div>
            </div>
            <CardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
              Create Account
            </CardTitle>
            <CardDescription className="text-base text-gray-900">
              Join thousands of Muslims finding their halal match
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="email" className="text-xs sm:text-sm text-gray-900">
                  <Mail className="w-4 h-4 mr-1" />
                  Email
                </TabsTrigger>
                <TabsTrigger value="phone" className="text-xs sm:text-sm text-gray-900">
                  <Phone className="w-4 h-4 mr-1" />
                  Phone
                </TabsTrigger>
                <TabsTrigger value="google" className="text-xs sm:text-sm text-gray-900">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </TabsTrigger>
              </TabsList>

              {/* Email/Password Tab */}
              <TabsContent value="email" className="space-y-4 text-gray-900">
                <form onSubmit={emailForm.handleSubmit(handleEmailSignup)} className="space-y-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      {...emailForm.register("name")}
                    />
                    {emailForm.formState.errors.name && (
                      <p className="text-sm text-red-500">{emailForm.formState.errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      {...emailForm.register("email")}
                    />
                    {emailForm.formState.errors.email && (
                      <p className="text-sm text-red-500">{emailForm.formState.errors.email.message}</p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <Label htmlFor="password">Password *</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        {...emailForm.register("password", {
                          onChange: (e) => setPasswordStrength(calculatePasswordStrength(e.target.value))
                        })}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    
                    {/* Password Strength Indicator */}
                    {watchPassword && (
                      <div className="space-y-1">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`h-1 flex-1 rounded ${
                                i < passwordStrength ? getStrengthLabel(passwordStrength).bg : "bg-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                        <p className={`text-xs ${getStrengthLabel(passwordStrength).color}`}>
                          {getStrengthLabel(passwordStrength).label}
                        </p>
                      </div>
                    )}
                    
                    {emailForm.formState.errors.password && (
                      <p className="text-sm text-red-500">{emailForm.formState.errors.password.message}</p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Re-enter your password"
                        {...emailForm.register("confirmPassword")}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {emailForm.formState.errors.confirmPassword && (
                      <p className="text-sm text-red-500">{emailForm.formState.errors.confirmPassword.message}</p>
                    )}
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      className="mt-1"
                      {...emailForm.register("agreeToTerms")}
                    />
                    <Label htmlFor="agreeToTerms" className="text-sm font-normal cursor-pointer">
                      I agree to the{" "}
                      <Link href="/terms" className="text-rose-600 hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-rose-600 hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                  {emailForm.formState.errors.agreeToTerms && (
                    <p className="text-sm text-red-500">{emailForm.formState.errors.agreeToTerms.message}</p>
                  )}

                  {/* Error Message */}
                  {error && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </Button>
                </form>
              </TabsContent>

              {/* Phone Tab */}
              <TabsContent value="phone" className="space-y-4">
                {phoneStep === "input" ? (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-900">Phone Number *</Label>
                      <div className="flex gap-2">
                        <select
                          value={phoneData.countryCode}
                          onChange={(e) => setPhoneData({ ...phoneData, countryCode: e.target.value })}
                          className="px-3 py-2 border rounded-md w-24 text-gray-800"
                        >
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+92">🇵🇰 +92</option>
                          <option value="+971">🇦🇪 +971</option>
                          <option value="+966">🇸🇦 +966</option>
                          <option value="+91">🇮🇳 +91</option>
                          <option value="+60">🇲🇾 +60</option>
                          <option value="+62">🇮🇩 +62</option>
                        </select>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="12345 67890"
                          value={phoneData.phoneNumber}
                          onChange={(e) => setPhoneData({ ...phoneData, phoneNumber: e.target.value })}
                          className="flex-1 text-gray-800"
                        />
                      </div>
                    </div>

                    {error && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

                    <Button
                      onClick={handleSendOTP}
                      className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"
                      disabled={isLoading || !phoneData.phoneNumber}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending OTP...
                        </>
                      ) : (
                        "Send OTP"
                      )}
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="otp">Enter OTP *</Label>
                      <Input
                        id="otp"
                        type="text"
                        placeholder="123456"
                        maxLength={6}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                        className="text-center text-2xl tracking-widest"
                      />
                      <p className="text-sm text-gray-500">
                        OTP sent to {phoneData.countryCode} {phoneData.phoneNumber}
                      </p>
                    </div>

                    {error && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

                    <div className="space-y-2">
                      <Button
                        onClick={handleVerifyOTP}
                        className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"
                        disabled={isLoading || otp.length !== 6}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Verifying...
                          </>
                        ) : (
                          "Verify & Create Account"
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setPhoneStep("input")}
                        className="w-full"
                        disabled={isLoading}
                      >
                        Change Number
                      </Button>
                    </div>
                  </>
                )}
              </TabsContent>

              {/* Google Tab */}
              <TabsContent value="google" className="space-y-4">
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🔐</div>
                  <p className="text-gray-600 mb-6">
                    Sign up quickly and securely with your Google account
                  </p>
                  
                  {error && (
                    <Alert variant="destructive" className="mb-4">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button
                    onClick={handleGoogleSignup}
                    variant="outline"
                    className="w-full border-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Continue with Google
                      </>
                    )}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-rose-600 hover:underline font-semibold">
                Login here
              </Link>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
