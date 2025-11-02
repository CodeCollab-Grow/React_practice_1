import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.09 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black text-white py-10 px-6 flex flex-col items-center justify-center space-y-4"
    >
      <h2 className="text-3xl font-bold text-blue-400">HeadFones </h2>
      <p className="text-gray-400 text-center max-w-md">
        Experience premium sound and unmatched comfort. Your music, your vibe,
        your world.
      </p>
      <div className="flex space-x-6 text-gray-300">
        <a href="#" className="hover:text-blue-400">
          Instagram
        </a>
        <a href="#" className="hover:text-blue-400">
          Twitter
        </a>
        <a href="#" className="hover:text-blue-400">
          Facebook
        </a>
      </div>
      <p className="text-gray-500 text-sm mt-4">
        © 2025 HeadFones. All rights reserved.
      </p>
    </motion.footer>
  );
}
