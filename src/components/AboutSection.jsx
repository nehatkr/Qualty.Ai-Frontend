import {
  Award,
  Users,
  Target,
  TrendingUp,
  FilePlus,
  BadgeCheck,
  Eye,
  Globe2,
} from "lucide-react";
import Scene1 from "../assets/Scene1.mp4";
import Scene2 from "../assets/Scene2.mp4";
import CountUpOnView from "./CountUpOnView";

const achievements = [
  { icon: <Award size={32} />, number: 250, label: "Global Inspectors" },
  { icon: <Users size={32} />, number: 30, label: "Countries Covered" },
  {
    icon: <Target size={32} />,
    number: 69,
    label: "Productivity & Cost Saving (%)",
  },
  {
    icon: <TrendingUp size={32} />,
    number: 24,
    label: "Platform Support (hrs/day)",
  },
];

const values = [
  {
    title: "Raise Inspection Query",
    description:
      "Create your inspection requirements with budget and timeline specifications on our platform.",
    icon: <FilePlus size={28} className="text-white" />,
  },
  {
    title: "Choose the Best Quote",
    description:
      "Compare multiple quotes from verified global inspectors and select the best fit for your needs.",
    icon: <BadgeCheck size={28} className="text-white" />,
  },
  {
    title: "Better Transparency",
    description:
      "Track inspection progress with live updates and comprehensive reporting for complete visibility.",
    icon: <Eye size={28} className="text-white" />,
  },
  {
    title: "Global Inspector Network",
    description:
      "Access our vast network of certified inspectors across 50+ countries for worldwide coverage.",
    icon: <Globe2 size={28} className="text-white" />,
  },
];

export default function AboutSection() {
  return (
    <div>
      <section className="bg-black text-white py-20 px-6 sm:px-12 lg:px-20 text-sm sm:text-base">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* About Title Card */}
          <div className="bg-gradient-to-br from-black via-black to-gray-900 border border-gray-900 rounded-2xl p-8 shadow-[inset_0_0_0.5px_rgba(255,255,255,0.1)] backdrop-blur-md text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <span className="inline-block bg-white text-black text-base sm:text-xl font-semibold px-4 py-1 rounded-full mb-4 shadow-md">
              About
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Qualty.AI — Global Inspection Marketplace
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
              Qualty.AI is a revolutionary B2B marketplace connecting global traders with certified inspection firms and freelancers. We eliminate the hassle of traditional communication methods by providing a centralized platform where you can create inspection demands and receive multiple competitive quotes.
            </p>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our platform maps the entire inspection process, providing status updates and live tracking for complete transparency. Add stakeholders to make quality decisions with instant updates and comprehensive reporting. Quality Inspections simplified.
            </p>
          </div>

          {/* Video Section */}
          <div className="rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.03]">
            <video
              className="w-full rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
              src={Scene2}
            />
          </div>

          {/* Achievements Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-black via-black to-gray-900 border border-gray-900 rounded-2xl p-6 text-center shadow-[inset_0_0_0.5px_rgba(255,255,255,0.1)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
              >
                <div className="text-white mb-3 flex justify-center">{item.icon}</div>
                <CountUpOnView end={item.number} />
                <div className="text-gray-100 text-xs sm:text-sm font-medium mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Secondary Video */}
          <div className="rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.03]">
            <video
              className="w-full rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
              src={Scene1}
            />
          </div>

          {/* Value Proposition Card */}
          <div className="bg-gradient-to-br from-black via-black to-gray-900 border border-gray-900 rounded-2xl p-8 shadow-[inset_0_0_0.5px_rgba(255,255,255,0.1)] backdrop-blur-md text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <h3 className="text-xl sm:text-3xl font-bold mb-4">
              What You Get With Qualty.AI
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto text-xs sm:text-sm leading-relaxed">
              Our platform provides comprehensive solutions for all your quality inspection needs with AI-based insights and market analytics for better trade decisions.
            </p>
          </div>

          {/* Value Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-black via-black to-gray-900 border border-gray-900 rounded-2xl p-6 shadow-[inset_0_0_0.5px_rgba(255,255,255,0.1)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
              >
                <div className="mb-4 flex items-center justify-center">{value.icon}</div>
                <h4 className="text-base sm:text-lg font-semibold mb-2 text-white text-center">
                  {value.title}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
