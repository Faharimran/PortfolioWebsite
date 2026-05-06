import { TESTIMONIALS } from "../constants"
import {motion} from "framer-motion"
import {GlassCard} from "./card/GlassCard"
const TestimonialsTest = () => {
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
        <GlassCard component={TESTIMONIALS.map((testimonial, index) => (
            <motion.div key={index} className="relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/10" custom={index} initial= "hidden" whileInView= "visible" variants = {childVariants}>
                <div className="flex flex-items-center mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" loading="lazy"/>
                    <div>
                        <h2 className="text-lg font-semibold">{testimonial.name}</h2>
                        <p className="text-sm font-light">{testimonial.title}</p>
                    </div>
                </div>
                <p className="leading-relaxed">{testimonial.feedback}</p>
            </motion.div>
        ))}></GlassCard>
    )
    
}

