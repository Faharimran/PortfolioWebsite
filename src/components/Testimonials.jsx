import { TESTIMONIALS } from "../constants"
import GlassCard from "./card/GlassCard"
import OpinionsCard from "./card/OpinionsCard"
const Testimonials = () => {
    
  return (
    <section className="px-6 py-10 min-h-screen" id="testimonials">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">My Opinions </h1>
        {/* <div className="h-1 w-20 bg-white mb-8"></div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{TESTIMONIALS.map((testimonial, index) => (
            <GlassCard key={index} custom={index} >
                <OpinionsCard image={testimonial.image} name={testimonial.name} title={testimonial.title} feedback={testimonial.feedback}/>
            </GlassCard>
        ))}</div>
    </section>
  )
}

export default Testimonials