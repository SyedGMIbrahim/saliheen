"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  {
    id: 1,
    title: "Faith",
    icon: "🕌",
    description: "Strengthen your faith with authentic Islamic resources",
    features: [
      "Qur'an",
      "Tafsir",
      "Hadith",
      "Salah times",
      "Qibla",
      "Courses",
      "Dawah"
    ],
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-white dark:bg-slate-800/50"
  },
  {
    id: 2,
    title: "Community",
    icon: "🤝",
    description: "Build meaningful connections within the Muslim community",
    features: [
      "Halal Matrimony (Live)",
      "Counselling",
      "Motivation"
    ],
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-white dark:bg-slate-800/50"
  },
  {
    id: 3,
    title: "Economy",
    icon: "💼",
    description: "Halal economic solutions for the Muslim community",
    features: [
      "Jobs",
      "Marketplace",
      "Loans (Qard Hasan)",
      "Charity"
    ],
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-white dark:bg-slate-800/50"
  },
  {
    id: 4,
    title: "Education",
    icon: "📚",
    description: "Enhance your Islamic knowledge and daily practice",
    features: [
      "Courses",
      "Islamic knowledge",
      "Daily reminders"
    ],
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-white dark:bg-slate-800/50"
  },
  {
    id: 5,
    title: "Ethical Ads",
    icon: "✅",
    description: "Halal businesses and ethical advertising",
    features: [
      "Halal businesses",
      "Halal ads (no music and women) only"
    ],
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-white dark:bg-slate-800/50"
  },
  {
    id: 6,
    title: "Engagement",
    icon: "💬",
    description: "Stay connected and engaged with the community",
    features: [
      "Motivation",
      "Social sharing",
      "Q&A with scholars"
    ],
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-white dark:bg-slate-800/50"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8, delay: 0.3 }}
              className="inline-block mb-6"
            >
              <span className="text-6xl">🕌</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              Saliheen
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 max-w-3xl mx-auto mb-4"
            >
              Solving the problems Muslims face in the modern world
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium"
            >
              Through the way of the Salaf
            </motion.p>
            

          </motion.div>
        </div>
      </motion.section>

      {/* Live Announcement Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full animate-pulse animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8 }}
              className="inline-block mb-4"
            >
              <span className="text-6xl">💍</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4"
            >
              <span className="text-white font-bold text-sm uppercase tracking-wide">🎉 Now Live!</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Halal Matrimony is Now Live!
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Find your life partner the halal way. With wali supervision, Islamic values, and verified profiles - start your journey towards a blessed marriage today.
            </p>
            
            <div className="flex justify-center">
              <motion.a
                href="/matrimony"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-white text-rose-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Explore Halal Matrimony
                <span>→</span>
              </motion.a>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Wali Supervised</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Verified Profiles</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Islamic Values</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Upcoming Features
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Comprehensive solutions for every aspect of Muslim life, built on authentic Islamic principles
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group h-full flex"
            >
              <div
                className={`relative flex flex-col h-full w-full p-8 rounded-2xl ${category.bgColor} border border-slate-200 dark:border-slate-700 transition-all duration-300 ${
                  hoveredCard === category.id
                    ? "shadow-2xl scale-[1.02] border-emerald-400 dark:border-emerald-600"
                    : "shadow-md hover:shadow-xl hover:border-emerald-300 dark:hover:border-emerald-700"
                }`}
              >
                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  animate={{
                    rotate: hoveredCard === category.id ? [0, -10, 10, -10, 0] : 0,
                    scale: hoveredCard === category.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 flex items-center justify-center text-4xl"
                >
                  {category.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm leading-relaxed">
                  {category.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 flex-grow mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">
                    Features:
                  </p>
                  {category.id === 1 ? (
                    // Two-column layout for Faith card
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-2.5">
                      {category.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                          className="flex items-center text-slate-700 dark:text-slate-200"
                        >
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3 flex-shrink-0`} />
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    // Single column layout for other cards
                    <ul className="space-y-2.5">
                      {category.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                          className="flex items-center text-slate-700 dark:text-slate-200"
                        >
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3`} />
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Coming Soon Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-auto pt-4"
                >
                  <span className={`inline-block px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r ${category.color} text-white shadow-md`}>
                    Coming Soon
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-center shadow-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Join Us on This Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-emerald-50 mb-8"
          >
            Be part of a platform that serves the Muslim community with authentic Islamic values
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Stay Updated
          </motion.button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2025 Saliheen. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
            Built with ❤️ for the Muslim Ummah
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
