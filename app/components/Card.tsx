import Image from "next/image";

interface CardProps {
    name: string;
    description: string;
    image: string;
}

export default function Card({ name, description, image }: CardProps) {
    return (
        <div className="bg-gray-800 text-white rounded-2xl overflow-hidden shadow-lg w-[320px] border border-gray-700
    hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] hover:scale-105 transition-all duration-300">
            <div className="relative w-full h-56 overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    unoptimized
                />
            </div>
            <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]">
                    {name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
            </div>
        </div>

    );
}
