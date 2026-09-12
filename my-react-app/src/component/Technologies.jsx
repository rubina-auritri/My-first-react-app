import { use, useState } from "react";
import TechnicalCard from "./TechnicalCard";

const Technologies = ({ TechnologiesPromise }) => {
    const Technicalcourse = use(TechnologiesPromise);

    const [selectedTech, setSelectedTech] = useState([]);

    const HandleTechSelect = (tech) => {
        setSelectedTech((prev) => {
            const exists = prev.some((item) => item.id === tech.id);

            if (exists) {
                return prev.filter((item) => item.id !== tech.id);
            }

            return [...prev, tech];
        });
    };
    const removeFromStack = (id) => {
        setSelectedTech((prev) =>
            prev.filter((tech) => tech.id !== id)
        );
    };

    const isAdded = (tech) => { return selectedTech.some( (item) => item.id === tech.id ); };


    return (
        <div className="container mx-auto px-4 py-8">
            <div>
                <h2 className="text-3xl font-bold">
                    Explore the{" "}
                    <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>

                <p className="mt-2 text-gray-600">
                    Pick one technology from each category to build your ideal
                    development stack.
                </p>
            </div>

            {/* Main Layout */}
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-4">

                {/* Technology Cards - 3 columns */}
                <div className="order-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:order-1 lg:col-span-3 lg:grid-cols-3">
                    {Technicalcourse.map((tech) => (
                        <TechnicalCard
                            key={tech.id}
                            tech={tech}
                            HandleTechSelect={HandleTechSelect}
                            isAdded={isAdded}

                        />
                    ))}
                </div>

                {/* Sidebar - 1 column */}
                <aside className="order-1 lg:order-2 lg:col-span-1 lg:sticky lg:top-4 lg:self-start">
                    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">

                        {/* Header */}
                        <h3 className="font-semibold text-gray-800">
                            Your Stack
                        </h3>

                        {/* Stack count */}
                        <div className="mt-3 rounded-lg bg-blue-50 p-3 text-sm text-blue-600">
                            {selectedTech.length > 0
                                ? `${selectedTech.length} stack${selectedTech.length > 1 ? "s" : ""} added`
                                : "No stack added yet"}
                        </div>

                        {/* Selected technologies */}
                        {selectedTech.length > 0 ? (
                            <>
                                <ul className="mt-3 space-y-1 max-h-[400px] overflow-y-auto pr-1">
                                    {selectedTech.map((tech) => (
                                        <li
                                            key={tech.id}
                                            className="text-sm text-black-600 mb-1 flex items-center justify-between rounded-lg bg-gray-100 px-3 py-2"
                                        >    {/* Icon */}
                                            <div className="flex-shrink-0 mr-2">
                                                <img
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    className="w-7 h-7 object-contain"
                                                />
                                            </div>

                                            {/* Name + Category */}
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-semibold text-gray-800">
                                                    {tech.name}
                                                </p>

                                                <p className="text-[10px] text-gray-400">
                                                    {tech.category}
                                                </p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeFromStack(tech.id)}
                                                className="float-right text-red-900 text-2xl font-bold transition"
                                            >
                                                ×
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                {/* Remove All Button */}
                                <button
                                    onClick={() => setSelectedTech([])}
                                    className="mt-4 w-full rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100"
                                >
                                    Remove All
                                </button>
                            </>
                        ) : (
                            <p className="mt-3 text-sm text-gray-500">
                                No Stack selected yet.
                            </p>
                        )}

                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Technologies;