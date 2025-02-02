import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "./animations";

type FadeInOrderProps = {
  children: React.ReactNode;
};

export function FadeInOrder({ children }: FadeInOrderProps) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeDownChild({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>{children}</motion.div>
  );
}
