import { AnimatePresence, motion } from "framer-motion";

export const SectionAnimation = ({
  isVisible,
  children,
}: {
  isVisible: boolean;
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0.85 }}
          animate={{ opacity: 1 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
