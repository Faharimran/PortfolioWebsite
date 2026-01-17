
const OpinionsCard = ({ image, name, title, feedback }) => {

    return (
        <div>
            <div className="flex flex-items-center mb-4">
                <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" loading="lazy" />
                <div>
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <p className="text-sm font-light">{title}</p>
                </div>
            </div>
            <p className="leading-relaxed">{feedback}</p>
        </div>
    )
}

export default OpinionsCard