
import { toast } from "react-toastify";

const TechnicalCard = ({ tech, HandleTechSelect, isAdded }) => {
    const handleAddToStack = () => {
        HandleTechSelect(tech);

        toast.success(`${tech.name} added to your stack!`, {
            position: "top-right",
            autoClose: 2000,
            theme: "light",
        });
    };


    return (
        <div className="relative w-full rounded-2xl p-[2px] overflow-hidden">

            {/* Animated Gradient Border */}
            <div className="
                absolute inset-0
                bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
                bg-[length:300%_300%]
                animate-gradient
            " />

            {/* Card */}
            <div className="
                relative
                w-full
                bg-white
                rounded-[14px]
                p-5
                shadow-sm
                hover:shadow-md
                transition-shadow
                duration-200
                space-y-4
            ">

                {/* Category Badge */}
                <div className="flex justify-between items-center">
                    <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-6 h-6 object-contain"
                    />

                    <span className="bg-sky-50 text-sky-500 text-xs font-medium px-2.5 py-1 rounded-full">
                        {tech.category}
                    </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                        {tech.name}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed">
                        {tech.description}
                    </p>
                </div>

                {/* Type, Level & Rating */}
                <div className="flex items-center justify-between text-xs pt-1">

                    <div className="flex items-center gap-2 text-gray-500">
                        <span className="bg-gray-100 px-2 py-1 rounded text-[11px] font-medium text-gray-600">
                            {tech.type}
                        </span>

                        <span className="text-gray-400">
                            {tech.level}
                        </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-gray-700 font-semibold">
                        <span className="text-amber-400">★</span>
                        <span>{tech.rating}</span>
                    </div>

                </div>

                {/* Button */}
                <button
                    onClick={handleAddToStack}
                    disabled={isAdded(tech)}
                    className={`w-full py-2 rounded-lg font-semibold ${isAdded
                            ? "bg-green-100 text-green-700 "
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                >
                    {isAdded(tech) ? "✓ Added to Stack" : "Add to Stack"}
                </button>

            </div>
        </div>
    );
};

export default TechnicalCard;