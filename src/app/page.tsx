"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-all duration-300 px-6 py-12">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-10 max-w-6xl w-full">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4 max-w-xl text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Prakhar Bhatt
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300">
            Creative Web Developer crafting modern, high-performance UIs.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Specializing in Next.js, Tailwind CSS, and visually impactful
            portfolio experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#projects"
              className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="px-5 py-3 border border-gray-400 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          className="p-2 sm:p-4 flex justify-center 
             w-[220px] sm:w-[280px] md:w-[340px] lg:w-[420px]"
        >
          <Image
            src="/pbimg.webp"
            alt="Prakhar Bhatt"
            width={420}
            height={420}
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
