import { TESTIMONIALS } from "../constants"
import {GlassCard} from "./card/GlassCard"
import {motion} from "framer-motion"
const TestimonialTest = () => {
    
  return (
    <section className="px-6 py-10 min-h-screen" id="testimonials">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">My Opinions </h1>
        {/* <div className="h-1 w-20 bg-white mb-8"></div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{TESTIMONIALS.map((testimonial, index) => (
            <GlassCard key={index}  custom={index} >
                <div className="flex flex-items-center mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" loading="lazy"/>
                    <div>
                        <h2 className="text-lg font-semibold">{testimonial.name}</h2>
                        <p className="text-sm font-light">{testimonial.title}</p>
                    </div>
                </div>
                <p className="leading-relaxed">{testimonial.feedback}</p>
            </GlassCard>
        ))}</div>
    </section>
  )
}

export default TestimonialTest