// src/components/ui/FadeInUp.jsx
import { motion } from "framer-motion"

const FadeInUp = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.3 }} // triggers once when 30% is visible
    >
      {children}
    </motion.div>
  )
}

export default FadeInUp
