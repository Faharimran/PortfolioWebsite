import {motion} from "framer-motion"

const GlassCard = ({ children, className = "", index}) => {
    const childVariants = {
        hidden : {
            opacity: 0, y:50
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition : {
                duration: 0.8,
                delay: i * 0.5,
            }
        })
    }
  return (
    <motion.div key={index} className={`relative rounded-lg p-8 h-full w-fit backdrop-blur-3xl bg-stone-500/10 ${className}`} custom={index} initial= "hidden" whileInView= "visible" variants = {childVariants}>
      {children}
    </motion.div>
  );
};

export default GlassCard;
