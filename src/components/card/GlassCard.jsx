import { useRef } from 'react';


const GlassCard = ({ component }) => {
    return (
        <div className="relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/10">{component}</div>

    )
}

export default GlassCard