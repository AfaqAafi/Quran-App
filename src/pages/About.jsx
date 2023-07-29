import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex items-center mx-auto container sm:px-12 px-4  py-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-3xl font-bold mb-10 text-center text-[#0C134F]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          About Us ):
        </motion.h1>
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-2 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="basis-[50%]">
            <p className="text-lg mb-4">
              QuranWorld is a platform designed to provide a seamless experience
              for reading, listening, and exploring the Holy Quran. Our goal is
              to make the Quran accessible to people from all walks of life,
              allowing them to engage with the sacred text in a meaningful way.
            </p>
            <p className="text-lg mb-4">
              With QuranWorld, you can explore various translations of the
              Quran, listen to beautiful recitations from different reciters,
              and dive deep into the meanings of the verses. Our platform is
              designed to cater to the needs of both beginners and advanced
              users, providing a user-friendly interface and powerful features.
            </p>
            <p className="text-lg mb-4">
              We believe that the Quran is a timeless and universal source of
              guidance, and QuranWorld is dedicated to bringing its wisdom and
              beauty to the fingertips of millions around the world. We strive
              to create an inclusive and enriching experience for all users,
              fostering a deeper connection with the Quran and promoting its
              teachings of peace, love, and understanding.
            </p>
            <p className="text-lg mb-4">
              Thank you for choosing QuranWorld as your companion in your
              Quranic journey. We are constantly working to improve and enhance
              the platform, so your feedback and suggestions are invaluable to
              us. Feel free to reach out to us with any inquiries or feedback
              you may have.
            </p>
            <p className="text-lg mb-4">
              May the blessings and guidance of the Quran be with you on your
              path of knowledge and enlightenment.
            </p>
          </div>
          <motion.div
            className="basis-[50%]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <img
              className="w-full h-full rounded object-cover"
              src="https://images.pexels.com/photos/7249183/pexels-photo-7249183.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="imag"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Link
            to="/send_feedback"
            className="text-[19px] px-6 py-2 border border-[#0C134F] duration-300 hover:bg-[#0C134F] hover:text-white"
          >
            Send Feedback
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
