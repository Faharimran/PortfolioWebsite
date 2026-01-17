import LabelText from "../titleText/LabelText"


const DetailForm = () => {
    return (
        <div >
            <h1 className="text-4xl font-semibold text-center mb-8">
                Inquiry
            </h1>

            <form className="space-y-6">
                {/* First & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                        <LabelText title="First Name" />
                        <input
                            type="text"
                            className="w-full rounded-lg backdrop-blur-3xl bg-stone-500/10 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30"
                        />
                    </div>
      
                    <div>
                        <LabelText title="Last Name" />
                        <input
                            type="text"
                            className="w-full rounded-lg backdrop-blur-3xl bg-stone-500/10  px-4 py-3 outline-none focus:ring-2 focus:ring-white/30"
                        />
                    </div>
                </div>

                {/* Email */}
                <div>
                    <LabelText title="Email Address" />
                    <input
                        type="email"
                        className="w-full rounded-lg backdrop-blur-3xl bg-stone-500/10 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30"
                    />
                </div>

                {/* Message */}
                <div>
                   <LabelText title="Message" />
                    <textarea
                        rows="5"
                        className="w-full rounded-lg backdrop-blur-3xl bg-stone-100/10 px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-white/30"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full mt-4 rounded-xl bg-[#8b83c8] opacity-70 py-4 font-medium text-lg hover:bg-[#9b93da] hover:opacity-100 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default DetailForm