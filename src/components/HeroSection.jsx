import { ArrowRight, Play, CheckCircle } from "lucide-react";
import HomeVideo from "../assets/HomeVideo.mp4";
import Scene from "../assets/Scene.mp4";

const stats = [
  { number: "1000+", label: "Global Inspectors" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "50+", label: "Countries Covered" },
  { number: "24/7", label: "Platform Support" },
];

const features = [
  "Raise Inspection query",
  "Choose the best quote",
  "Better transparency and reporting of cargo",
  "Reach out to global inspectors",
  "AI based suggestions for quality of cargo",
  "Market analytics tool with AI based insights for your trade decisions",
];

export default function HeroSection() {
  return (
    <section className="bg-black text-white relative overflow-hidden" id="home">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover opacity-50"
          src={HomeVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Global <span className="text-white">Quality Inspections</span> for Global Trade
          </h1>
          <p className="text-gray-300 mb-6">
            Qualty.AI is a marketplace for global quality inspections bringing together global traders and inspectors worldwide.
          </p>

          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-200">
                <CheckCircle size={18} className="text-white" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 flex-wrap items-center">
            <button className="px-6 py-3 bg-white text-black font-semibold cursor-pointer rounded hover:bg-gray-200 transition shadow hover:shadow-lg flex items-center gap-2">
              Get Started Today <ArrowRight size={20} />
            </button>
            <button className="px-6 py-3 border cursor-pointer border-white text-white rounded hover:bg-white hover:text-black transition flex items-center gap-2">
              <Play size={20} />
              Watch Demo
            </button>
          </div>

          <div className="mt-6 text-sm text-gray-400 font-medium">
             Global Quality Inspections Marketplace
          </div>
        </div>

        <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
          <video
            className="w-full h-full object-cover"
            src={Scene}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-3xl font-bold text-white">{stat.number}</div>
            <div className="text-gray-300 text-sm mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
