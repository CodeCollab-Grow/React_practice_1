import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav className="fixed top-0 left-0 w-full bg-transparent text-white h-[10vh] flex items-center justify-between px-8 z-50">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl font-semibold text-2xl bg-black p-3 rounded-md"
      >
        {"{ HeadFones }"}
      </motion.div>
      <motion.ul
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex space-x-8"
      >
        <li className="group relative text-xl p-5 cursor-pointer overflow-hidden transition-all duration-300 ease-out">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            About
          </span>
          <span
            className="absolute inset-0 bg-black scale-0 origin-center
                     transition-transform duration-300 ease-out rounded-lg
                     group-hover:scale-100"
          ></span>
        </li>

        <li className="group relative text-xl p-5 cursor-pointer overflow-hidden transition-all duration-300 ease-out">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            Products
          </span>
          <span
            className="absolute inset-0 bg-black scale-0 origin-center
                     transition-transform duration-300 ease-out rounded-lg
                     group-hover:scale-100"
          ></span>
        </li>

        <li className="group relative text-xl p-5 cursor-pointer overflow-hidden transition-all duration-300 ease-out">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            My Cart
          </span>
          <span
            className="absolute inset-0 bg-black scale-0 origin-center
                     transition-transform duration-300 ease-out rounded-lg
                     group-hover:scale-100"
          ></span>
        </li>
      </motion.ul>
    </motion.nav>
  );
}
