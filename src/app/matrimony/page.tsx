"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Shield, Users, Video, MessageSquare, Lock, Heart, Star, ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const features = [
  {
    icon: Check,
    title: "100% Halal & Sharia Compliant",
    description: "Every aspect follows Islamic principles and guidelines"
  },
  {
    icon: Shield,
    title: "Verified Profiles Only",
    description: "ID verification and live photo authentication required"
  },
  {
    icon: Users,
    title: "Wali Involvement Required",
    description: "Female profiles require guardian approval and supervision"
  },
  {
    icon: Video,
    title: "Chaperoned Video Calls",
    description: "Three-party video calls with wali supervision"
  },
  {
    icon: MessageSquare,
    title: "Monitored Conversations",
    description: "All chats include wali for proper Islamic conduct"
  },
  {
    icon: Lock,
    title: "Privacy & Security First",
    description: "Your data is encrypted and protected at all times"
  }
];

const steps = [
  {
    number: "1",
    title: "Sign Up & Verify",
    description: "Create your account and complete identity verification",
    icon: CheckCircle2
  },
  {
    number: "2",
    title: "Create Profile",
    description: "Build your detailed halal profile with Islamic values",
    icon: Users
  },
  {
    number: "3",
    title: "Browse Matches",
    description: "View verified profiles that align with your preferences",
    icon: Heart
  },
  {
    number: "4",
    title: "Connect with Family",
    description: "Wali approves and joins all communications",
    icon: Shield
  },
  {
    number: "5",
    title: "Get Married!",
    description: "Complete your deen with your perfect halal match",
    icon: Heart
  }
];

const testimonials = [
  {
    name: "Muhammed & Khadija",
    location: "London, UK",
    image: "👨‍👩‍👧",
    story: "Alhamdulillah! We found each other through Saliheen. The wali involvement made our families comfortable from day one. Married for 2 years now with a beautiful daughter.",
    rating: 5
  },
  {
    name: "Abu Bakr & Zaynab",
    location: "New York, USA",
    image: "👨‍👩‍👦",
    story: "The verification process gave us confidence. No fake profiles, all serious people looking for marriage. Found my perfect match in 3 months!",
    rating: 5
  },
  {
    name: "Ibrahim & Manal",
    location: "Dubai, UAE",
    image: "👨‍👩‍👧‍👦",
    story: "Being able to involve our families from the beginning was crucial. The platform made it easy and comfortable. Highly recommend to everyone!",
    rating: 5
  }
];

const faqs = [
  {
    q: "Is this platform really halal?",
    a: "Yes, absolutely. We follow strict Islamic guidelines with wali involvement, no private conversations, and complete transparency."
  },
  {
    q: "How does wali involvement work?",
    a: "For female users, a wali (guardian) must be added to the account. They approve all matches and participate in all communications including chats and video calls."
  },
  {
    q: "What is your verification process?",
    a: "All users must submit a live photo and government ID. Our team manually reviews each submission to ensure authenticity."
  },
  {
    q: "Can I browse profiles for free?",
    a: "You can create a profile for free, but browsing and messaging requires a subscription. We offer affordable plans starting at $9.99/month."
  },
  {
    q: "How long does verification take?",
    a: "Verification typically takes 24-48 hours. Once approved, you can immediately start browsing and connecting."
  },
  {
    q: "What makes you different from other matrimonial sites?",
    a: "We require wali involvement for females, verify all profiles, monitor conversations, and have zero tolerance for haram activities. Marriage, not dating."
  }
];

const pricingPlans = [
  {
    name: "Silver",
    price: "$9.99",
    period: "/month",
    features: [
      "Browse verified profiles",
      "Send unlimited interests",
      "Basic chat with wali",
      "Email support",
      "Profile visibility"
    ],
    highlighted: false
  },
  {
    name: "Gold",
    price: "$19.99",
    period: "/month",
    features: [
      "Everything in Silver",
      "Video calls with wali",
      "Priority support",
      "Advanced filters",
      "Read receipts",
      "Highlighted profile"
    ],
    highlighted: true
  },
  {
    name: "Platinum",
    price: "$199",
    period: "/lifetime",
    features: [
      "Everything in Gold",
      "Lifetime access",
      "No recurring fees",
      "VIP support",
      "Profile boost",
      "Early access to features"
    ],
    highlighted: false
  }
];

export default function MatrimonyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl">🕌</span>
            <span className="text-2xl font-bold text-rose-600">Saliheen</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-rose-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-rose-600 transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-rose-600 transition-colors">Pricing</a>
            <Link href="/login" className="text-gray-700 hover:text-rose-600 transition-colors">Login</Link>
          </nav>
          
          <Link href="/signup">
            <Button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white">
              Sign Up Free
            </Button>
          </Link>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50 py-20 md:py-32">
        {/* Animated Floating Hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl opacity-20"
              initial={{ 
                y: "100vh", 
                x: `${Math.random() * 100}%`,
                rotate: 0,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{ 
                y: "-20vh",
                rotate: 360,
                x: `${Math.random() * 100}%`
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            >
              {i % 3 === 0 ? "💕" : i % 3 === 1 ? "💖" : "💗"}
            </motion.div>
          ))}
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/2 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 30, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        {/* Islamic Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f43f5e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 text-sm">
              ✨ Trusted by 10,000+ Muslims Worldwide
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Halal Match</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
              The Islamic Way to Find Your Life Partner - With Family Involvement, 
              Complete Transparency, and Sharia Compliance
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white text-lg px-8 py-6">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Button
                size="lg"
                variant="outline"
                className="border-rose-500 hover:from-rose-600 hover:to-pink-700 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-lg px-8 py-6"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                How It Works
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-rose-500" />
                <span>100% Halal</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-rose-500" />
                <span>Verified Profiles</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-rose-500" />
                <span>Wali Supervised</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white relative overflow-hidden">
        {/* Subtle Sparkle Animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-rose-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Saliheen?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A platform built on Islamic values with features designed for halal matrimony
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow border-2 border-transparent hover:border-rose-400 bg-gradient-to-br from-pink-100 to-rose-200">
                  <CardHeader>
                    <div className="w-14 h-14 bg-pink-50 rounded-full flex items-center justify-center mb-4">
                      <feature.icon className="w-7 h-7 text-rose-500" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-pink-50 to-white relative overflow-hidden">
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your journey to finding your halal match in 5 simple steps
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-center gap-8">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  
                  <Card className="flex-1 hover:shadow-xl transition-shadow bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-rose-500" />
                        </div>
                        <CardTitle className="text-2xl text-gray-900">{step.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-lg">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Saliheen</span> is Different
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're not just another matrimonial site. We're a platform built on Islamic principles 
                with a singular focus: helping you complete half your deen.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: CheckCircle2, text: "Endorsed by Islamic scholars and Imams" },
                  { icon: Shield, text: "Zero tolerance for haram activities" },
                  { icon: Heart, text: "Focused on marriage, not dating" },
                  { icon: Users, text: "Family-centric approach with wali involvement" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-rose-500" />
                    </div>
                    <p className="text-lg text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 rounded-2xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-6">Our Promise</h3>
                <div className="space-y-4 text-lg">
                  <p>✓ Complete privacy and data protection</p>
                  <p>✓ Manual verification of every profile</p>
                  <p>✓ No fake profiles or scammers</p>
                  <p>✓ Islamic scholars on advisory board</p>
                  <p>✓ Responsive 24/7 support team</p>
                  <p>✓ Success stories across 50+ countries</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-white relative overflow-hidden">
        {/* Love Confetti Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: -20,
              }}
              animate={{
                y: ["0vh", "110vh"],
                rotate: [0, 360],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 8 + 10,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "linear"
              }}
            >
              {["💝", "💕", "💖", "💗", "💓", "💞"][Math.floor(Math.random() * 6)]}
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Alhamdulillah! Thousands of Muslims have found their perfect match
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow bg-white">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-5xl">{testimonial.image}</div>
                      <div>
                        <CardTitle className="text-lg text-gray-900">{testimonial.name}</CardTitle>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-rose-400 text-rose-400" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 italic">&quot;{testimonial.story}&quot;</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Simple, Affordable <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that works best for you. All plans include verification and wali features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full relative bg-gradient-to-br from-pink-100 to-rose-300 hover:bg-gradient-to-br hover:from-pink-100 hover:to-rose-400 hover:shadow-2xl ${plan.highlighted ? 'border-2 border-rose-400 shadow-2xl scale-105' : ''}`}>
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-2 text-gray-900">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-rose-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/signup">
                      <Button 
                        className={`w-full ${plan.highlighted ? 'bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card 
                  className="cursor-pointer hover:shadow-md transition-shadow bg-gradient-to-br from-pink-200 to-rose-100"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-gray-900">{faq.q}</CardTitle>
                      <ArrowRight className={`w-5 h-5 text-rose-500 transition-transform ${openFaq === index ? 'rotate-90' : ''}`} />
                    </div>
                  </CardHeader>
                  {openFaq === index && (
                    <CardContent>
                      <p className="text-gray-600">{faq.a}</p>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white relative overflow-hidden">
        {/* Animated Rings */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 border-4 border-white rounded-full"
              style={{
                width: 100 + i * 100,
                height: 100 + i * 100,
                marginLeft: -(50 + i * 50),
                marginTop: -(50 + i * 50),
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Radial Pulse */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-white rounded-full"
          style={{
            marginLeft: -192,
            marginTop: -192,
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90">
              Join thousands of Muslims who have found their halal match. 
              Start your journey today - it's free to sign up!
            </p>
            <Link href="/signup">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-pink-50 text-lg px-12 py-6">
                Start Your Journey Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <p className="mt-6 text-sm opacity-75">
              No credit card required • Free to sign up • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🕌</span>
                <span className="text-2xl font-bold">Saliheen</span>
              </div>
              <p className="text-gray-400">
                The halal way to find your life partner with complete family involvement.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-rose-400 transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-rose-400 transition-colors">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-rose-400 transition-colors">Careers</Link></li>
                <li><Link href="/blog" className="hover:text-rose-400 transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-rose-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-rose-400 transition-colors">Terms of Service</Link></li>
                <li><Link href="/refund" className="hover:text-rose-400 transition-colors">Refund Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-rose-400 transition-colors">Help Center</Link></li>
                <li><Link href="/safety" className="hover:text-rose-400 transition-colors">Safety Tips</Link></li>
                <li><Link href="/faqs" className="hover:text-rose-400 transition-colors">FAQs</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Saliheen. All rights reserved. Made with ❤️ for the Muslim Ummah
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
