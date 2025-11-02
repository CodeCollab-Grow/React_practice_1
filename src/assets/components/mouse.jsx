import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function MouseMask() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const maskImage = useMotionTemplate`
    radial-gradient(
      120px at ${mouseX}px ${mouseY}px,
      transparent 0%,
      black 100%
    )
  `;

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
      className="relative w-[450px] h-[280px] overflow-hidden rounded-xl border border-gray-700 cursor-none"
    >
      {/* Background content */}
      <img
        src="../Zeb-Duke-pic10-removebg-preview.png"
        alt="background"
        className="w-full h-full object-cover"
      />

      {/* Mask */}
      <motion.div
        className="absolute inset-0 bg-black/70 pointer-events-none"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
      />
    </div>
  );
}
